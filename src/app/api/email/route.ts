import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const b = await req.json();
  const body = { action: "User.Login", merge: "webaccx", ...b };

  const res = await fetch("https://courrier.jdlm.qc.ca/gw/webacc", {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams(Object.entries(body)).toString(),
  });

  const data = (await res.text()).split("User.context=").at(-1).split("&").at(0);

  return NextResponse.json({ emailContext: data });
}
