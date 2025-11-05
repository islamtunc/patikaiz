// Bismillahirrahmanirrahim
// Elhamdulillahirabbulalemin
// Ve salatu ve selamu ala resulina Muhammedin ve alihi ve sahbihi ecmain
// Allah U Ekber, Allah U Ekber, Allah U Ekber, La ilahe illallah
// Subhanallah, Elhamdulillah, Allahu Ekber
// Estağfirullah El-Azim
// La ilahe illallah
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const DATA_DIR = path.join(process.cwd(), "data");
const DATA_FILE = path.join(DATA_DIR, "messages.json");

function readMessages() {
  try {
    if (!fs.existsSync(DATA_FILE)) return [];
    return JSON.parse(fs.readFileSync(DATA_FILE, "utf8"));
  } catch {
    return [];
  }
}

function writeMessages(list: any[]) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
  fs.writeFileSync(DATA_FILE, JSON.stringify(list, null, 2));
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    if (!body?.name || !body?.email || !body?.message) {
      return NextResponse.json({ ok: false, error: "Missing fields" }, { status: 400 });
    }

    const list = readMessages();
    const item = {
      id: "msg-" + Date.now(),
      name: String(body.name).slice(0, 200),
      email: String(body.email).slice(0, 200),
      message: String(body.message).slice(0, 5000),
      createdAt: new Date().toISOString(),
    };

    list.unshift(item);
    writeMessages(list);

    return NextResponse.json({ ok: true, item }, { status: 201 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}

export async function GET() {
  try {
    const list = readMessages();
    return NextResponse.json({ ok: true, list }, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ ok: false, error: "Read error" }, { status: 500 });
  }
}