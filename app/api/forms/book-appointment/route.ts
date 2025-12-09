import { NextResponse } from "next/server";
import { geolocation } from "@vercel/functions";
import { Buffer } from "buffer";
import {
  sendContactEmail,
  sendUserEmail,
} from "@/components/email/sendcontactemail";

type FilePayload = {
  name: string;
  type?: string;
  base64: string;
} | null;

type BookAppointmentPayload = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  reason: string;
  bestTime: string;
  postalCode?: string;
  country?: string;
  insuranceCardFront?: FilePayload;
  insuranceCardBack?: FilePayload;
};

type FileLike = {
  name: string;
  arrayBuffer: () => Promise<ArrayBuffer>;
};

function toFileLike(file?: FilePayload): FileLike | undefined {
  if (!file) {
    return undefined;
  }

  const buffer = Buffer.from(file.base64, "base64");
  const arrayBuffer = buffer.buffer.slice(
    buffer.byteOffset,
    buffer.byteOffset + buffer.byteLength,
  );

  return {
    name: file.name,
    arrayBuffer: async () => arrayBuffer,
  };
}

export async function POST(request: Request) {
  const { country } = geolocation(request) || {};
  const requestCountry =
    country || request.headers.get("x-vercel-ip-country") || "US";

  if (requestCountry !== "US") {
    console.warn("[GeoBlock] Blocked non-US submission:", requestCountry);
    return NextResponse.redirect(new URL("/unavailable", request.url));
  }

  try {
    const body: BookAppointmentPayload = await request.json();

    const fullName = `${body.firstName} ${body.lastName}`.trim();

    await sendContactEmail({
      name: fullName,
      email: body.email,
      phone: body.phone,
      reason: body.reason,
      bestTime: body.bestTime,
      insuranceCardFront: toFileLike(body.insuranceCardFront) as any,
      insuranceCardBack: toFileLike(body.insuranceCardBack) as any,
    });

    await sendUserEmail({
      name: fullName,
      email: body.email,
      phone: body.phone,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[BookAppointment] Submission failed", error);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}


