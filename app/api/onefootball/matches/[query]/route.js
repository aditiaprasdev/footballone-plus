import { NextResponse, NextRequest } from "next/server";
import TimeZone from "@/app/animate/timezone";

export async function GET(request, { params }) {
  const res = await fetch(
    `https://www.fotmob.com/api/matches?date=${params.query}&timezone=Asia/Jakarta&ccode3=IDN`,
    {
      next: { revalidate: 1 },
    }
  ).then((r) => r.json());

  console.log(params.query);

  return NextResponse.json(res);
}
