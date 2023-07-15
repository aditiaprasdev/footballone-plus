"use client";
import Image from "next/image";
import Link from "next/link";
import useSWR from "swr";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const fetcher = (url) =>
  fetch(url, {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": `${process.env.NEXT_PUBLIC_API_KEY_DEV}`,
      "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
    },
  }).then((res) => res.json());

export default function CupList() {
  const { data, error, isLoading } = useSWR(
    `https://api-football-v1.p.rapidapi.com/v3/leagues?type=cup`,
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

  const datas = data.response.filter(
    (cup) =>
      cup.league.id == "2" ||
      cup.league.id == "3" ||
      cup.league.id == "11" ||
      cup.league.id == "13" ||
      cup.league.id == "17" ||
      cup.league.id == "18" ||
      cup.league.id == "848"
  );

  return (
    <>
      <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4">
        {datas.map((res) => (
          <Link
            href={`/competitions/cups/${res.league.id}`}
            className="flex w-full items-center justify-between gap-2 rounded-lg border p-3 text-gray-400 hover:border-black hover:text-black hover:shadow-md hover:transition hover:ease-in-out dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300 dark:hover:border-zinc-500 dark:hover:shadow-none"
          >
            <div className="h-[30px] w-[30px] overflow-y-clip">
              <img
                src={res.league.logo}
                width={30}
                height={30}
                alt="logo"
                style={{ objectFit: "cover" }}
              ></img>
            </div>
            <p className="truncate">{res.league.name}</p>
          </Link>
        ))}
      </div>
    </>
  );
}
