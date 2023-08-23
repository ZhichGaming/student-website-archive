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

    ans.push({
      name: getClassname(x.Cours.slice(0, -3)),
      id: x.CleClasse,
      nbCompetencies: x.Competences.length,
      competencies: x.Competences.map((e) => {
        let current = e.Titre.split(" ");
        return { name: current[1], ponderation: Number(current[0].match(/[0-9]+/g)[0]) };
      }),
    });
  });

  return NextResponse.json(ans);
}
