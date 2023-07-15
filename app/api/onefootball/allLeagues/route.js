import { NextResponse } from "next/server";

export async function GET(request) {
  const res = await fetch(`https://www.fotmob.com/api/allLeagues`).then((r) =>
    r.json()
  );

  return NextResponse.json(res);
}
