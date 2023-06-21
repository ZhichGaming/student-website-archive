import { NextRequest, NextResponse } from "next/server";
import type { Info } from "../../types";

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

  const info: Info = {
    id: data.CleUnique,
    time: data.PeriodeEtudesCarteIdentite,
    semester: data.EtapeCourante,
    info: {
      name: data.Prenom + " " + data.Nom,
      permcode: data.CodePermanent,
      group: data.Foyer,
      enriched: data.CleFlexible,
      locker: data.Casier,
    },
    img: {
      portrait: data.Photographie,
      barcode: data.CodeBarre,
    },
  };

  return NextResponse.json(info);
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

  if (res.status == 400) {
    return NextResponse.json({ error: "authorization" });
  }

  const data = await res.json();
  return NextResponse.json(data["access_token"]);
}
