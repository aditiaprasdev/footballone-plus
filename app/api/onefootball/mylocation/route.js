import { NextResponse } from "next/server";

export async function GET(request) {
  // const res = await fetch(`https://www.fotmob.com/api/mylocation`, {
  //   next: { revalidate: 1 },
  // }).then((r) => r.json());
  const res = await fetch(
    `https://api.ipgeolocation.io/ipgeo?apiKey=${process.env.NEXT_PUBLIC_DEF_LOCATION}`
  ).then((r) => r.json());

  return NextResponse.json(res);
}
