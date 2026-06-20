import { NextResponse } from "next/server";
import { Resend } from "resend";
import { site } from "@/lib/content";

const resend = new Resend(process.env.RESEND_API_KEY);

// Verify a domain in Resend, then set CONTACT_FROM_EMAIL to an address on it
// (e.g. "Integer8 Systems <hello@integer8systems.com>"). Until then, Resend's
// onboarding sender only delivers to your own account email.
const FROM = process.env.CONTACT_FROM_EMAIL || "Integer8 Systems <onboarding@resend.dev>";
const TO = process.env.CONTACT_TO_EMAIL || site.email;

const isEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

export async function POST(request: Request) {
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      { error: "Email service is not configured." },
      { status: 500 },
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const company = String(body.company ?? "").trim();
  const service = String(body.service ?? "").trim();
  const message = String(body.message ?? "").trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email and message are required." },
      { status: 400 },
    );
  }

  if (!isEmail(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    company && `Company: ${company}`,
    service && `Service: ${service}`,
    "",
    message,
  ]
    .filter(Boolean)
    .join("\n");

  try {
    const { error } = await resend.emails.send({
      from: FROM,
      to: TO,
      replyTo: email,
      subject: `New consultation request from ${name}`,
      text,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Could not send your message. Please try again." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { error: "Could not send your message. Please try again." },
      { status: 500 },
    );
  }
}
