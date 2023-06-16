import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();

  const res = await fetch("https://portailc.jdlm.qc.ca/pednet/mobile/api/inscriptions", {
    method: "GET",
    mode: "cors",
    cache: "no-cache",
    headers: {
      authorization: request.headers.get("authorization"),
      "Content-Type": "application/x-www-form-urlencoded",
      body: new URLSearchParams(Object.entries(body)).toString(),
    },
  });
}
