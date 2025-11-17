import { NextResponse } from "next/server";
import { geolocation } from "@vercel/functions";
import {
  sendContactEmail,
  sendUserEmail,
} from "@/components/email/sendcontactemail";

type PatientAdvocatePayload = {
  name: string;
  email: string;
  phone: string;
  reason: string;
  bestTime: string;
};

export async function POST(request: Request) {
  const { country } = geolocation(request) || {};
  const requestCountry =
    country || request.headers.get("x-vercel-ip-country") || "US";

  if (requestCountry !== "US") {
    console.warn("[GeoBlock] Blocked non-US submission:", requestCountry);
    return NextResponse.redirect(new URL("/unavailable", request.url));
  }

  try {
    const body: PatientAdvocatePayload = await request.json();

    await sendContactEmail(body);
    await sendUserEmail({
      name: body.name,
      email: body.email,
      phone: body.phone,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[PatientAdvocate] Submission failed", error);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}


