import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
  return NextResponse.json({ get: "got" });
}

export async function POST(request: NextRequest) {
  const b = await request.json();
  const body = { grant_type: "password", ...b };

  const res = await fetch("https://portailc.jdlm.qc.ca/pednet/mobile/token", {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams(Object.entries(body)).toString(),
  });
  const data = await res.json();
  return NextResponse.json(data);
}
