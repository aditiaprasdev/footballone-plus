import { NextResponse, NextRequest } from "next/server";
import moment from "moment-timezone";

export async function GET(request) {
  const url = new URL(request.url);

  const res = await fetch(`https://www.fotmob.com/api/matches?${url.search}`, {
    next: { revalidate: 1 },
  }).then((r) => r.json());

  return NextResponse.json({ query: url.search, responses: res });
}
