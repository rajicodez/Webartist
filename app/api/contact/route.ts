import { NextRequest, NextResponse } from "next/server";
import { servicePages, type ServiceKey } from "../../../lib/services";

const GOOGLE_SCRIPT_URL =
  process.env.CONTACT_FORM_GOOGLE_SCRIPT_URL ??
  "https://script.google.com/macros/s/AKfycbwkpq5n2hNH8NmchzRnWszCwz0CL5qgGN7iwPS4qLiYf9ixV_7yt9hKxFMzEogBgiqI/exec";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  company?: unknown;
  service?: unknown;
  message?: unknown;
};

function textValue(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function errorResponse(message: string, status: number) {
  return NextResponse.json(
    { success: false, error: message },
    { status, headers: { "Cache-Control": "no-store" } },
  );
}

export async function POST(request: NextRequest) {
  const contentLength = Number(request.headers.get("content-length") ?? 0);
  if (contentLength > 20_000) {
    return errorResponse("The enquiry is too large.", 413);
  }

  let payload: ContactPayload;
  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return errorResponse("Invalid request body.", 400);
  }

  const name = textValue(payload.name);
  const email = textValue(payload.email).toLowerCase();
  const company = textValue(payload.company);
  const service = textValue(payload.service);
  const message = textValue(payload.message);

  if (name.length < 2 || name.length > 100) {
    return errorResponse("Please enter a valid name.", 400);
  }

  if (email.length > 254 || !EMAIL_PATTERN.test(email)) {
    return errorResponse("Please enter a valid email address.", 400);
  }

  if (company.length > 150) {
    return errorResponse("The company name is too long.", 400);
  }

  if (service && !(service in servicePages)) {
    return errorResponse("Please select a valid service.", 400);
  }

  if (message.length < 10 || message.length > 5_000) {
    return errorResponse("Please enter a message between 10 and 5,000 characters.", 400);
  }

  const formData = new FormData();
  formData.append("Name", name);
  formData.append("Email", email);
  formData.append("Company", company);
  formData.append(
    "Service",
    service ? servicePages[service as ServiceKey].navLabel : "Not selected",
  );
  formData.append("Message", message);

  try {
    const upstreamResponse = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      body: formData,
      cache: "no-store",
      redirect: "follow",
      signal: AbortSignal.timeout(12_000),
    });

    if (!upstreamResponse.ok) {
      console.error("Contact form upstream rejected the request", {
        status: upstreamResponse.status,
      });
      return errorResponse(
        "We could not deliver your message. Please use WhatsApp, phone, or email instead.",
        502,
      );
    }

    return NextResponse.json(
      { success: true },
      { status: 200, headers: { "Cache-Control": "no-store" } },
    );
  } catch (error) {
    console.error("Contact form delivery failed", {
      cause: error instanceof Error ? error.name : "UnknownError",
    });
    return errorResponse(
      "We could not deliver your message. Please use WhatsApp, phone, or email instead.",
      502,
    );
  }
}
