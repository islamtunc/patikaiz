// Bismillahirrahmanirrahim
// Elhamdulillahirabbulalemin
// Essalatu vesselamu ala rasulina Muhammedin ve ala alihi ve sahbihi ecmain
// Allahu Ekber velilahi'lhamd
// La ilahe illallah, Allahu Ekber Allahu Ekber, ve lillahi'lhamd

// 2FA SMS code sender endpoint (POST)
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import twilio from "twilio";

// Twilio ile gerçek SMS gönderimi
async function sendSms(phone: string, code: string) {
  const accountSid = process.env.TWILIO_ACCOUNT_SID!;
  const authToken = process.env.TWILIO_AUTH_TOKEN!;
  const from = process.env.TWILIO_PHONE_NUMBER!;
  const client = twilio(accountSid, authToken);
  await client.messages.create({
    body: `Doğrulama kodunuz: ${code}`,
    from,
    to: phone,
  });
}

export async function POST(req: NextRequest) {
  const { userId, phone } = await req.json();
  if (!userId || !phone) {
    return NextResponse.json({ error: "Missing userId or phone" }, { status: 400 });
  }
  // Generate 6-digit code
  const code = Math.floor(100000 + Math.random() * 900000).toString();
  // Store code and expiry in DB (or cache)
  await prisma.user.update({
    where: { id: userId },
    data: {
      twoFactorCode: code,
      twoFactorCodeExpires: new Date(Date.now() + 5 * 60 * 1000), // 5 min
      contact: phone,
    },
  });
  await sendSms(phone, code);
  return NextResponse.json({ ok: true });
}
