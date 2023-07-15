"use client";
import React from "react";
import Image from "next/image";
import useSWR from "swr";
import Link from "next/link";
import LeagueLogos from "./leaguelogo";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function LeagueList() {
  const { data, error, isLoading } = useSWR(
    `https://www.thesportsdb.com/api/v1/json/${process.env.NEXT_PUBLIC_API_KEY_DB}/all_leagues.php`,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  if (error)
    return <div>Failed to load data, please try again in few seconds.</div>;

  if (isLoading)
    return (
      <div className="mt-5 flex items-center gap-5">
        <AiOutlineLoading3Quarters className="animate-spin"></AiOutlineLoading3Quarters>
        <p>Loading...</p>
      </div>
    );

  const leagueFilters = data.leagues.filter(
    (result) =>
      result.idLeague == "4328" ||
      result.idLeague == "4331" ||
      result.idLeague == "4332" ||
      result.idLeague == "4334" ||
      result.idLeague == "4335" ||
      result.idLeague == "4337" ||
      result.idLeague == "4331" ||
      result.idLeague == "4344" ||
      result.idLeague == "4339" ||
      result.idLeague == "4406" ||
      result.idLeague == "4351" ||
      result.idLeague == "4355" ||
      result.idLeague == "4633" ||
      result.idLeague == "4359" ||
      result.idLeague == "4330" ||
      result.idLeague == "4643" ||
      result.idLeague == "4422" ||
      result.idLeague == "4675" ||
      result.idLeague == "4336" ||
      result.idLeague == "4689" ||
      result.idLeague == "4743" ||
      result.idLeague == "4790" ||
      result.idLeague == "4789" ||
      result.idLeague == "4795" ||
      result.idLeague == "4346" ||
      result.idLeague == "4350" ||
      result.idLeague == "4803" ||
      result.idLeague == "4356" ||
      result.idLeague == "4621"
  );
  return (
    <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4">
      {leagueFilters.map((res) => (
        <Link
          href={`/competitions/${res.idLeague}`}
          className="flex w-full items-center justify-between gap-2 rounded-lg border p-3 text-gray-400 hover:border-black hover:text-black hover:shadow-md hover:transition hover:ease-in-out dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300 dark:hover:border-zinc-500 dark:hover:shadow-none"
        >
          <LeagueLogos id={res.idLeague} />
          <p className="truncate">{res.strLeague}</p>
        </Link>
      ))}
    </div>
  );
}
