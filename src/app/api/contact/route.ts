import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const ContactSchema = z.object({
  name: z.string().trim().min(1, "Full name is required").max(200),
  email: z
    .string()
    .trim()
    .min(1, "Work email is required")
    .email("Enter a valid email address"),
  company: z.string().trim().min(1, "Company is required").max(200),
  size: z.string().trim().min(1, "Team size is required").max(100),
  message: z
    .string()
    .trim()
    .min(1, "Let us know what you'd like to explore")
    .max(5000),
  // Honeypot: real visitors never see or fill this field.
  company_website: z.string().optional(),
});

const TO_EMAIL = "arisemastersacademy@gmail.com";
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || "Arise Masters Website <onboarding@resend.dev>";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function buildEmailHtml(data: {
  name: string;
  email: string;
  company: string;
  size: string;
  message: string;
}) {
  const row = (label: string, value: string) => `
    <tr>
      <td style="padding:12px 0;border-bottom:1px solid #eee;font-family:Arial,Helvetica,sans-serif;font-size:13px;color:#8a7d78;text-transform:uppercase;letter-spacing:.05em;width:160px;vertical-align:top;">${label}</td>
      <td style="padding:12px 0;border-bottom:1px solid #eee;font-family:Arial,Helvetica,sans-serif;font-size:15px;color:#1a1412;vertical-align:top;">${escapeHtml(value)}</td>
    </tr>`;

  return `
  <div style="background:#f5f1ee;padding:32px 16px;font-family:Arial,Helvetica,sans-serif;">
    <table role="presentation" width="100%" style="max-width:600px;margin:0 auto;background:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #eee;">
      <tr>
        <td style="background:#e1261c;padding:24px 32px;">
          <span style="font-family:Georgia,serif;font-size:20px;color:#ffffff;">Arise Masters</span>
          <div style="font-family:Arial,Helvetica,sans-serif;font-size:12px;color:#ffffff;opacity:.85;margin-top:2px;">New website enquiry</div>
        </td>
      </tr>
      <tr>
        <td style="padding:32px;">
          <table role="presentation" width="100%" style="border-collapse:collapse;">
            ${row("Name", data.name)}
            ${row("Email", data.email)}
            ${row("Company", data.company)}
            ${row("Team Size", data.size)}
          </table>
          <div style="margin-top:20px;">
            <div style="font-family:Arial,Helvetica,sans-serif;font-size:13px;color:#8a7d78;text-transform:uppercase;letter-spacing:.05em;margin-bottom:8px;">Training Requirement</div>
            <div style="font-family:Arial,Helvetica,sans-serif;font-size:15px;color:#1a1412;line-height:1.6;white-space:pre-wrap;">${escapeHtml(data.message)}</div>
          </div>
        </td>
      </tr>
      <tr>
        <td style="padding:20px 32px;background:#f5f1ee;">
          <span style="font-family:Arial,Helvetica,sans-serif;font-size:12px;color:#8a7d78;">Sent from the Arise Masters website contact form.</span>
        </td>
      </tr>
    </table>
  </div>`;
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid request." },
      { status: 400 }
    );
  }

  const parsed = ContactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { success: false, error: parsed.error.issues[0]?.message || "Invalid submission." },
      { status: 400 }
    );
  }

  const { name, email, company, size, message, company_website } = parsed.data;

  // Honeypot tripped — silently drop without sending an email or tipping off the bot.
  if (company_website) {
    return NextResponse.json({ success: true });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not configured.");
    return NextResponse.json(
      { success: false, error: "We couldn't send your message right now. Please try again shortly." },
      { status: 500 }
    );
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject: "New Website Enquiry — Arise Masters",
      html: buildEmailHtml({ name, email, company, size, message }),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { success: false, error: "We couldn't send your message right now. Please try again shortly." },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form send failed:", err);
    return NextResponse.json(
      { success: false, error: "We couldn't send your message right now. Please try again shortly." },
      { status: 500 }
    );
  }
}
