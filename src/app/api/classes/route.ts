import { NextRequest, NextResponse } from "next/server";
import { getClassname } from "../_utils/getClassname";

export async function GET(req: NextRequest) {
  const params = new URLSearchParams();
  req.nextUrl.searchParams.forEach((value, key) => {
    params.append(key, value);
  });

  const res = await fetch("https://portailc.jdlm.qc.ca/pednet/mobile/api/inscriptions?" + params, {
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
    if (x.Competences.length < 1) return;

    ans.push({ name: getClassname(x.Cours.slice(0, -3)), id: x.CleClasse, nbCompetencies: x.Competences.length, competenciesNames: x.Competences.map((e) => e.Titre) });
  });

  return NextResponse.json(ans);
}
