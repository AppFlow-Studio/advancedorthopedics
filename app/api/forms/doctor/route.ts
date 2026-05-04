import { NextResponse } from "next/server";
import { geolocation } from "@vercel/functions";
import {
  sendContactEmail,
  sendUserEmail,
} from "@/components/email/sendcontactemail";

const MAX_UPLOAD_SIZE = 4 * 1024 * 1024;

function getString(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value : "";
}

function getUpload(formData: FormData, key: string) {
  const value = formData.get(key);
  return value instanceof File && value.size > 0 ? value : undefined;
}

function validateUpload(file?: File) {
  return !file || file.size <= MAX_UPLOAD_SIZE;
}

function validateTotalUploads(...files: Array<File | undefined>) {
  return files.reduce((total, file) => total + (file?.size || 0), 0) <= MAX_UPLOAD_SIZE;
}

export async function GET() {
  return NextResponse.json(
    { ok: false, message: "Method not allowed" },
    { status: 405, headers: { Allow: "POST" } },
  );
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
    const formData = await request.formData();
    const insuranceCardFront = getUpload(formData, "insuranceCardFront");
    const insuranceCardBack = getUpload(formData, "insuranceCardBack");

    if (
      !validateUpload(insuranceCardFront) ||
      !validateUpload(insuranceCardBack) ||
      !validateTotalUploads(insuranceCardFront, insuranceCardBack)
    ) {
      return NextResponse.json(
        { ok: false, message: "Uploaded file is too large." },
        { status: 413 },
      );
    }

    const firstName = getString(formData, "firstName");
    const lastName = getString(formData, "lastName");
    const email = getString(formData, "email");
    const phone = getString(formData, "phone");
    const reason = getString(formData, "reason");
    const bestTime = getString(formData, "bestTime");
    const state = getString(formData, "state");
    const fullName = `${firstName} ${lastName}`.trim();

    await sendContactEmail({
      name: fullName,
      email,
      phone,
      reason,
      bestTime,
      state,
      insuranceCardFront,
      insuranceCardBack,
      gclid: getString(formData, "gclid"),
      utm_source: getString(formData, "utm_source"),
      utm_medium: getString(formData, "utm_medium"),
      utm_campaign: getString(formData, "utm_campaign"),
      utm_term: getString(formData, "utm_term"),
      utm_content: getString(formData, "utm_content"),
    });

    await sendUserEmail({
      name: fullName,
      email,
      phone,
      state,
      reason,
      bestTime,
      form_source: "doctor-contact",
      gclid: getString(formData, "gclid"),
      utm_source: getString(formData, "utm_source"),
      utm_medium: getString(formData, "utm_medium"),
      utm_campaign: getString(formData, "utm_campaign"),
      utm_term: getString(formData, "utm_term"),
      utm_content: getString(formData, "utm_content"),
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[DoctorContact] Submission failed", error);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
