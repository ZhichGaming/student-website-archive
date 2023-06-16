import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const params = new URLSearchParams();
  req.nextUrl.searchParams.forEach((value, key) => {
    params.append(key, value);
  });
  console.log(params);

  // const res = await fetch("https://portailc.jdlm.qc.ca/pednet/mobile/api/agenda?", {
  //   method: "GET",
  //   mode: "cors",
  //   cache: "no-cache",
  //   headers: {
  //     authorization: req.headers.get("authorization"),
  //   },
  // });
  // const data = await res.json();

  return NextResponse.json({});
}

