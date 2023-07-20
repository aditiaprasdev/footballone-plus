import { NextResponse, NextRequest } from "next/server";

export async function GET(request) {
  const res = await fetch(`https://www.fotmob.com/api/mylocation`, {
    next: { revalidate: 1 },
  }).then((r) => r.json());

  return NextResponse.json(res);
}
