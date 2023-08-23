import { NextRequest, NextResponse } from "next/server";
import type { Quote } from "../../types";

export async function GET(request: NextRequest) {
    const res = await fetch("https://zenquotes.io/api/today", {
      method: "GET",
      mode: "cors",
      cache: "no-cache",
    });
    const data = await res.json();
  
    const quote: Quote = {
        "quote": data[0]["q"]
    };
    console.log(quote);
  
    return NextResponse.json(quote);
  }