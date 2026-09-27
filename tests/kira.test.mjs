import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { createRequire } from "node:module";
import { resolve, dirname } from "node:path";
import vm from "node:vm";
import test from "node:test";
import ts from "typescript";

const require = createRequire(import.meta.url);
const { NextRequest } = require("next/server");
function load(file, overrides = {}) {
  const filename = resolve(file);
  const { outputText } = ts.transpileModule(readFileSync(filename, "utf8"), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
  });
  const compiledModule = { exports: {} };
  vm.runInNewContext(outputText, { module: compiledModule, exports: compiledModule.exports, process: { env: {
    NAPSTER_API_KEY: "private-test-key", NAPSTER_COMPANION_ID: "test-companion",
  } }, AbortSignal, Date, ...overrides,
    require: (name) => name.startsWith(".") ? load(resolve(dirname(filename), `${name}.ts`), overrides) : require(name),
  });
  return compiledModule.exports;
}
const request = (origin = "https://www.kindforth.com", body) => new NextRequest("https://www.kindforth.com/api/kira/connection", {
  method: "POST", headers: origin ? { origin } : {}, ...(body ? { body } : {}),
});

test("creates only a session with fixed companion, prompt and project label; returns only token", async () => {
  let count = 0;
  const route = load("app/api/kira/connection/route.ts", { fetch: async (url, options) => {
    count++;
    assert.equal(url, "https://companion-api.napster.com/public/connections");
    const payload = JSON.parse(options.body);
    assert.equal(payload.companionId, "test-companion");
    assert.equal(payload.tags.project, "SLT Workmate");
    assert.equal(payload.providerConfig.voiceId, "marin");
    assert.equal(payload.language, "en");
    assert.equal(payload.functions.length, 0);
    assert.equal(payload.useWebSearch, false);
    assert.match(payload.initialSpeech, /Hi, I’m Kira/);
    assert.match(payload.providerConfig.settings.instructions, /Kindforth/);
    assert.equal(options.headers["X-Api-Key"], "private-test-key");
    return Response.json({ token: "temporary", secret: "private-test-key" });
  } });
  const result = await route.POST(request());
  assert.equal(result.status, 200);
  assert.equal(result.headers.get("cache-control"), "no-store");
  assert.deepEqual(await result.json(), { token: "temporary" });
  assert.equal((await route.POST(request())).status, 429);
  assert.equal(count, 1);
});

test("rejects cross-origin, missing-origin, and client-supplied configuration before provider access", async () => {
  const route = load("app/api/kira/connection/route.ts", { fetch: () => assert.fail("Unexpected upstream request") });
  assert.equal((await route.POST(request("https://other.example"))).status, 403);
  assert.equal((await route.POST(request(""))).status, 403);
  assert.equal((await route.POST(request(undefined, '{"companionId":"other"}'))).status, 400);
});

test("missing credentials do not contact provider", async () => {
  const route = load("app/api/kira/connection/route.ts", { process: { env: {} }, fetch: () => assert.fail("Unexpected request") });
  assert.equal((await route.POST(request())).status, 503);
});

test("accepts an empty POST stream from the Next HTTP adapter", async () => {
  const route = load("app/api/kira/connection/route.ts", { fetch: () => Response.json({ token: "temporary" }) });
  const emptyStreamRequest = new NextRequest("https://www.kindforth.com/api/kira/connection", {
    method: "POST", headers: { origin: "https://www.kindforth.com" }, body: "",
  });
  assert.equal((await route.POST(emptyStreamRequest)).status, 200);
});

for (const [name, upstream, status] of [
  ["access denied", () => Response.json({ secret: "sensitive" }, { status: 403 }), 502],
  ["provider quota", () => Response.json({}, { status: 429 }), 429],
  ["invalid token", () => Response.json({ token: 12 }), 502],
  ["invalid JSON", () => new Response("sensitive"), 502],
  ["timeout", () => { throw new Error("sensitive"); }, 502],
]) test(`sanitizes ${name}`, async () => {
  const route = load("app/api/kira/connection/route.ts", { fetch: upstream });
  const response = await route.POST(request());
  assert.equal(response.status, status);
  assert.doesNotMatch(await response.text(), /sensitive|private-test-key/);
});

test("knowledge covers published content and excludes draft case studies", () => {
  const { buildKiraInstructions } = load("lib/kira-knowledge.ts");
  const { caseStudies } = load("lib/editorial.ts");
  const prompt = buildKiraInstructions();
  assert.match(prompt, /Rajindra Ratnayake/);
  assert.match(prompt, /Nipun Nirmal/);
  assert.match(prompt, /Pricing depends on/);
  for (const study of caseStudies) assert.equal(prompt.includes(study.title), study.status === "published");
});

test("transcripts reconcile chunks, completions, typed echoes and repeated final events", () => {
  const { updateTranscript } = load("lib/kira-transcript.ts");
  const event = (message) => ({ event: "message_received", data: { message } });
  let items = [];
  items = updateTranscript(items, event({ type: "session" }));
  assert.equal(items.length, 0);
  for (const content of ["Hello", " there"]) items = updateTranscript(items, event({ role: "assistant", item_id: "1", action: "delta", content }));
  assert.equal(items[0].text, "Hello there");
  for (let i = 0; i < 2; i++) items = updateTranscript(items, event({ role: "assistant", item_id: "1", action: "completed", content: "Hello there!" }));
  assert.equal(items.length, 1);
  assert.equal(items[0].text, "Hello there!");
  items.push({ id: "local-2", role: "user", text: "Hi" });
  items = updateTranscript(items, event({ role: "user", item_id: "2", action: "completed", content: "Hi" }));
  assert.equal(items.length, 2);
  assert.equal(items[1].id, "2");
});
