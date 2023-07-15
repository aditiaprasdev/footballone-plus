import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const res = await fetch(
    `https://www.thesportsdb.com/api/v1/json/${process.env.NEXT_PUBLIC_API_KEY_DB}/lookupleague.php?id=${params.leagueid}`
  ).then((r) => r.json());

  return NextResponse.json(res);
}
