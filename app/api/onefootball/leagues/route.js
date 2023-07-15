import { NextResponse } from "next/server";

export async function GET(request) {
  const res = await fetch(`https://www.fotmob.com/api/leagues`, {
    next: { revalidate: 5 },
  }).then((r) => r.json());
  return NextResponse.json(res);
}
