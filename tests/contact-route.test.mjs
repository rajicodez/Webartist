import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { createRequire } from "node:module";
import vm from "node:vm";
import test from "node:test";
import ts from "typescript";

const require = createRequire(import.meta.url);
const { NextRequest } = require("next/server");
const payload = { name: "Test User", email: "test@example.com", company: "Test", service: "ai-development", message: "An isolated automated test enquiry." };

// Execute the actual route and service data with a mocked upstream. No live writes.
function compile(relativePath, context) {
  const source = readFileSync(new URL(relativePath, import.meta.url), "utf8");
  const { outputText } = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
  });
  const compiledModule = { exports: {} };
  vm.runInNewContext(outputText, { ...context, exports: compiledModule.exports, module: compiledModule });
  return compiledModule.exports;
}

function route(fetchMock) {
  const services = compile("../lib/services.ts", {});
  return compile("../app/api/contact/route.ts", {
    require: (name) => name === "../../../lib/services" ? services : require(name),
    process: { env: {} }, FormData, AbortSignal, fetch: fetchMock,
    console: { error() {} },
  }).POST;
}

function request(body = payload) {
  return new NextRequest("https://www.kindforth.com/api/contact", {
    method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body),
  });
}

test("acknowledges a saved enquiry and forwards the expected fields", async () => {
  let calls = 0;
  const post = route(async (_url, options) => {
    calls++;
    assert.equal(options.method, "POST");
    assert.equal(options.body.get("Email"), "test@example.com");
    assert.equal(options.body.get("Service"), "AI Development");
    assert.equal(options.body.get("Message"), payload.message);
    return Response.json({ result: "success", row: 2 });
  });
  const response = await post(request());
  assert.equal(response.status, 200);
  assert.deepEqual(await response.json(), { success: true });
  assert.equal(calls, 1);
});

for (const [name, receipt] of [
  ["script-level error", { result: "error", error: "private failure detail" }],
  ["missing save receipt", {}],
  ["missing row", { result: "success" }],
  ["header row", { result: "success", row: 1 }],
  ["string row", { result: "success", row: "2" }],
  ["null response", null],
]) {
  test(`rejects HTTP 200 with ${name}`, async () => {
    const response = await route(async () => Response.json(receipt))(request());
    assert.equal(response.status, 502);
    const result = await response.json();
    assert.equal(result.success, false);
    assert.equal(JSON.stringify(result).includes("private failure detail"), false);
  });
}

test("rejects authorization HTML even with HTTP 200", async () => {
  const response = await route(async () => new Response("<html>Sign in</html>"))(request());
  assert.equal(response.status, 502);
});

test("rejects upstream HTTP errors", async () => {
  const response = await route(async () => new Response("Forbidden", { status: 403 }))(request());
  assert.equal(response.status, 502);
});

test("handles upstream connection failure", async () => {
  const response = await route(async () => { throw new Error("network failure"); })(request());
  assert.equal(response.status, 502);
});

for (const body of [null, [], "invalid", { ...payload, service: "constructor" }, { ...payload, service: "toString" }, { ...payload, message: "short" }]) {
  test(`rejects invalid request ${JSON.stringify(body)} before sending it`, async () => {
    const response = await route(async () => { assert.fail("Must not contact upstream"); })(request(body));
    assert.equal(response.status, 400);
  });
}
