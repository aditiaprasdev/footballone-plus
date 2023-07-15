import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const leagueId = params.compid;
  const res = await fetch(`https://www.fotmob.com/api/leagues?id=${leagueId}`, {
    next: { revalidate: 5 },
  }).then((r) => r.json());
  return NextResponse.json(res);
}
