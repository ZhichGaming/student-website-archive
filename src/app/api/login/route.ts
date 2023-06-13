import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const res = await fetch("https://portailc.jdlm.qc.ca/pednet/mobile/api/informations", {
    method: "GET",
    
    mode: "cors",
    cache: "no-cache",
    headers: {
      authorization: request.headers.get("authorization"),
    },
  });
  const data = await res.json();
  return NextResponse.json(data);
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
  return NextResponse.json(data["access_token"]);
}
