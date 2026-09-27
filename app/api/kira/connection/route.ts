import { NextRequest, NextResponse } from "next/server";
import { buildKiraInstructions, kiraGreeting } from "../../../../lib/kira-knowledge";

export const runtime = "nodejs";
export const maxDuration = 30;

// A conservative process-wide cap also prevents spoofed IP headers bypassing
// the provider's connection cooldown. Add an edge limit for multi-instance hosts.
let nextConnectionAt = 0;
let windowStarted = 0;
let attempts = 0;

function reply(status: number, error: string, retryAfter?: number) {
  return NextResponse.json({ error }, { status, headers: {
    "Cache-Control": "no-store",
    ...(retryAfter ? { "Retry-After": String(retryAfter) } : {}),
  } });
}

export async function POST(request: NextRequest) {
  if (request.headers.get("origin") !== request.nextUrl.origin ||
      request.headers.get("sec-fetch-site") === "cross-site") {
    return reply(403, "Please start Kira from this website.");
  }
  // This endpoint has no client configuration surface, including query parameters.
  // Next's HTTP adapter can expose a stream even for an empty POST. Inspect
  // the first bytes rather than rejecting every request with a stream object.
  const reader = request.body?.getReader();
  let hasBody = false;
  if (reader) {
    try {
      const chunk = await reader.read();
      hasBody = Boolean(chunk.value?.byteLength);
    } finally {
      await reader.cancel();
    }
  }
  if (request.nextUrl.search || hasBody) {
    return reply(400, "Connection settings must be configured on the server.");
  }
  const apiKey = process.env.NAPSTER_API_KEY?.trim();
  const companionId = process.env.NAPSTER_COMPANION_ID?.trim();
  if (!apiKey || !companionId || !/^[a-zA-Z0-9-]{1,200}$/.test(companionId) || /[^\x21-\x7e]/.test(apiKey)) {
    return reply(503, "Kira is not configured yet. Please contact our team.");
  }
  const now = Date.now();
  if (now < nextConnectionAt) return reply(429, "Please wait a few seconds before reconnecting.", Math.ceil((nextConnectionAt - now) / 1000));
  if (now - windowStarted >= 60_000) { windowStarted = now; attempts = 0; }
  if (attempts >= 6) return reply(429, "Kira is busy. Please try again shortly.", 60);
  attempts++;
  nextConnectionAt = now + 5_000;

  try {
    const response = await fetch("https://companion-api.napster.com/public/connections", {
      method: "POST",
      headers: { "X-Api-Key": apiKey, "Content-Type": "application/json" },
      cache: "no-store",
      redirect: "error",
      signal: AbortSignal.timeout(20_000),
      body: JSON.stringify({
        companionId,
        language: "en",
        functions: [],
        useWebSearch: false,
        initialSpeech: `Say exactly this once: ${kiraGreeting}`,
        tags: { project: "SLT Workmate" },
        providerConfig: {
          voiceId: "marin",
          settings: {
            instructions: buildKiraInstructions(),
            turnDetection: { threshold: 0.65, prefix_padding_ms: 400, silence_duration_ms: 800 },
            noiseReduction: { type: "nearField" },
          },
        },
      }),
    });
    if (!response.ok) return reply(response.status === 429 ? 429 : 502,
      response.status === 429 ? "Kira is busy. Please try again shortly." : "Kira could not connect. Please try again or contact our team.", response.status === 429 ? 10 : undefined);
    const data = await response.json();
    if (typeof data?.token !== "string" || !data.token.trim()) return reply(502, "Kira could not connect. Please try again.");
    return NextResponse.json({ token: data.token }, { headers: { "Cache-Control": "no-store" } });
  } catch {
    return reply(502, "Kira could not connect. Please check your connection and try again.");
  }
}
