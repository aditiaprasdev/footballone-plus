import { NextResponse, NextRequest } from "next/server";

export async function GET(request) {
  const url = new URL(request.url);

  const res = await fetch(
    `https://api.ipgeolocation.io/ipgeo${url.search}&apiKey=${process.env.NEXT_PUBLIC_DEF_LOCATION}`
  ).then((r) => r.json());

  if (res.status == 404) {
    return NextResponse.json({ error: "Error, query parameter required!" });
  }

  return NextResponse.json(res);
}
