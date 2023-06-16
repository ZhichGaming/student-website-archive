import { NextRequest, NextResponse } from "next/server";

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

    ans.push([getClassname(x.Cours.slice(0, -3)), parseInt(x.HeureFin)]);
  });

  return NextResponse.json(ans);
}

function getClassname(id: string): string {
  let classes: { [key: string]: string } = {
    FRA: "French",
    ESL: "English",
    EESL: "English",
    ELA: "English",
    ESP: "Spanish",
    EPS: "Edu",
    MAT: "Math",
    FIN: "Finance",
    MON: "Monde",
    DRA: "Drama",
    ECR: "ECR",
    CHI: "Chemestry",
    PHY: "Physics",
    SCT: "Science",
    HQC: "History",
  };

  return classes[id];
}
