import { NextRequest, NextResponse } from "next/server";
import { getClassname } from "../_utils/getClassname";

export async function GET(req: NextRequest) {
  const params = new URLSearchParams();
  req.nextUrl.searchParams.forEach((value, key) => {
    params.append(key, value);
  });

  const res = await fetch("https://portailc.jdlm.qc.ca/pednet/mobile/api/agenda?" + params, {
    method: "GET",
    mode: "cors",
    cache: "no-cache",
    headers: {
      authorization: req.headers.get("authorization"),
    },
  });
  const data = await res.json();

  const ans = [];
  data.forEach((x: any, i: number) => {
    if (i == 0 || i == 4 || i == 7) return;

    ans.push({ name: getClassname(x.Cours.slice(0, -3)), time: parseInt(x.HeureFin) });
  });

  return NextResponse.json(ans);
}
