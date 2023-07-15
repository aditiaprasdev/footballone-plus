import { NextResponse } from "next/server";

export async function GET(request) {
  const res = await fetch(
    `https://www.thesportsdb.com/api/v1/json/${process.env.NEXT_PUBLIC_API_KEY_DB}/search_all_leagues.php?s=Soccer`
  ).then((r) => r.json());

  return NextResponse.json(res);
}
