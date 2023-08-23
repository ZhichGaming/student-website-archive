import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const params = new URLSearchParams();
  req.nextUrl.searchParams.forEach((value, key) => {
    params.append(key, value);
  });

  const res = await fetch("https://portailc.jdlm.qc.ca/pednet/mobile/api/inscription/evaluations?" + params, {
    method: "GET",
    mode: "cors",
    cache: "no-cache",
    headers: {
      authorization: req.headers.get("authorization"),
    },
  });
  const data = await res.json();
  const grades = [];
  data.Categories[0].Devoirs.forEach((grade) => {
    grades.push({
      name: grade.Description,
      points: grade.Note,
      average: grade.Moyenne,
      max: grade.NoteSur,
      ponderation: grade.MaxPointsNoteFinale,
    });
  });

  return NextResponse.json(grades);
}
