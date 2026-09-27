// Run manually: node scripts/check-kira.mjs. Creates one short-lived session.
// Prints status only, never credentials, prompt contents, or session tokens.
import { readFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { createRequire } from "node:module";
import vm from "node:vm";
import ts from "typescript";
const require = createRequire(import.meta.url);
require("@next/env").loadEnvConfig(process.cwd());
function load(file) {
  const filename = resolve(file);
  const compiled = ts.transpileModule(readFileSync(filename, "utf8"), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
  });
  const compiledModule = { exports: {} };
  vm.runInNewContext(compiled.outputText, {
    module: compiledModule, exports: compiledModule.exports, process, AbortSignal, Date,
    require: (name) => name.startsWith(".") ? load(resolve(dirname(filename), `${name}.ts`)) : require(name),
    fetch: async (...args) => {
      const response = await fetch(...args);
      console.log("Napster HTTP:", response.status);
      if (!response.ok) {
        const error = await response.clone().json().catch(() => ({}));
        console.log("Provider error code:", error.code ?? error.numericType ?? "not supplied");
        const description = typeof error.description === "string" ? error.description : "";
        console.log("Provider description:", description.replaceAll(process.env.NAPSTER_API_KEY || "not-set", "[REDACTED]").slice(0, 500));
        console.log("Validation:", JSON.stringify({ title: error.title, errors: error.errors }).replaceAll(process.env.NAPSTER_API_KEY || "not-set", "[REDACTED]").slice(0, 1500));
        console.log("Error details:", JSON.stringify(error, (key, value) => /token|key|authorization|instructions/i.test(key) ? "[REDACTED]" : value).replaceAll(process.env.NAPSTER_API_KEY || "not-set", "[REDACTED]").slice(0, 2000));
      }
      return response;
    },
  });
  return compiledModule.exports;
}
const { NextRequest } = require("next/server");
const response = await load("app/api/kira/connection/route.ts").POST(new NextRequest("http://localhost:3000/api/kira/connection", {
  method: "POST", headers: { origin: "http://localhost:3000" },
}));
const result = await response.json();
console.log("Kira HTTP:", response.status);
console.log("Valid token received:", typeof result.token === "string" && result.token.length > 0);
if (!response.ok) process.exitCode = 1;
