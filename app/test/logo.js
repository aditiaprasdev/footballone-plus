"use client";
import React from "react";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function MatchLogo({ id }) {
  const { data, error, isLoading } = useSWR(
    `https://www.thesportsdb.com/api/v1/json/${process.env.NEXT_PUBLIC_API_KEY_DB}/lookupleague.php?id=${id}`,
    fetcher,
    { refreshInterval: 60000 }
  );

  if (error) return <div>Failed to load data, try again in one minute.</div>;
  if (isLoading)
    return (
      <div className="w-[25px] h-[25px] rounded-full bg-gray-300 animate-pulse"></div>
    );
  return (
    <div className="w-[25px] h-[25px] rounded-full flex items-center justify-center">
      <img
        src={data.leagues.map((logo) => logo.strBadge)}
        key={id}
        height={20}
        width={20}
        alt="logo"
      ></img>
    </div>
  );
}
