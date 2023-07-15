"use client";
import useSWR from "swr";
import Image from "next/image";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function LeagueLogos({ id }) {
  const { data, error, isLoading } = useSWR(
    `https://www.thesportsdb.com/api/v1/json/${process.env.NEXT_PUBLIC_API_KEY_DB}/lookupleague.php?id=${id}`,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  if (error)
    return (
      <div className="w-8 h-8 rounded-full bg-gray-300 animate-pulse"></div>
    );

  if (isLoading)
    return (
      <div className="w-8 h-8 rounded-full bg-gray-300 animate-pulse"></div>
    );

  return (
    <>
      <img
        src={data.leagues.map((logo) => logo.strBadge)}
        width={30}
        height={30}
        alt="logo"
      ></img>
    </>
  );
}
