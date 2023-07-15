"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import useSWR from "swr";
import { BsTrophyFill } from "react-icons/bs";
import { BiChevronRight } from "react-icons/bi";

const fetcher = (url) =>
  fetch(url, {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": `${process.env.NEXT_PUBLIC_API_KEY_DEV}`,
      "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
    },
  }).then((res) => res.json());

export default function CupNav({ path }) {
  const pathname = usePathname();
  const { data, error, isLoading } = useSWR(
    `https://api-football-v1.p.rapidapi.com/v3/leagues?id=${path}`,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );
  if (error) {
    return <p>Error</p>;
  }
  if (isLoading) {
    return (
      <section className="w-full dark:bg-black">
        <div className="p-5 md:p-0 md:py-5 lg:p-0 lg:py-5 w-full md:w-3/4 lg:w-3/4 flex flex-col mx-auto gap-5">
          <div className="h-7 w-full rounded-full bg-zinc-300 dark:bg-zinc-600 animate-pulse"></div>
          <div className="py-3 w-full">
            <div className="flex gap-5 items-center">
              <div className="w-16 h-16 rounded-full bg-zinc-300 dark:bg-zinc-600 animate-pulse"></div>
              <div className="w-[60%] h-10 rounded-full bg-zinc-300 dark:bg-zinc-600 animate-pulse"></div>
            </div>
          </div>
          <div className="h-7 w-full rounded-full bg-zinc-300 dark:bg-zinc-600 animate-pulse"></div>
        </div>
      </section>
    );
  }

  return (
    <>
      <div className="w-full dark:bg-black">
        <section className="p-5 md:p-0 md:py-5 lg:p-0 lg:py-5 w-full md:w-3/4 lg:w-3/4 flex flex-col mx-auto">
          <div className="mb-10 flex gap-1 items-center text-sm sm:text-base">
            <Link
              href={`/competitions`}
              className="flex items-center gap-2 text-zinc-400 hover:text-black dark:text-zinc-500 dark:hover:text-zinc-300"
            >
              <BsTrophyFill></BsTrophyFill>
              <p>Competitions</p>
            </Link>
            <BiChevronRight></BiChevronRight>
            <p>{data.response.map((res) => res.league.name)}</p>
          </div>

          <div className="w-full flex gap-5 items-center">
            <div className="w-[100px] h-[100px] bg-white rounded-full flex items-center justify-center">
              <img
                src={data.response.map((logo) => logo.league.logo)}
                alt="logo"
                width={58}
                height={58}
              ></img>
            </div>

            <p className="text-2xl md:text-4xl font-bold">
              {data.response.map((logo) => logo.league.name)}
            </p>
          </div>

          <nav className="mt-5 flex gap-5 border-b pb-3 dark:border-zinc-600">
            <Link
              href={`/competitions/cups/${path}`}
              className={`${
                pathname == `/competitions/cups/${path}`
                  ? "font-semibold text-black underline decoration-2 underline-offset-[17px] dark:text-white"
                  : " text-zinc-400 hover:text-black hover:underline hover:decoration-2 hover:underline-offset-[17px] dark:hover:text-white"
              }`}
            >
              Fixtures
            </Link>
            <Link
              href={`/competitions/cups/${path}/results`}
              className={`${
                pathname == `/competitions/cups/${path}/results`
                  ? "font-semibold text-black underline decoration-2 underline-offset-[17px] dark:text-white"
                  : " text-zinc-400 hover:text-black hover:underline hover:decoration-2 hover:underline-offset-[17px] dark:hover:text-white"
              }`}
            >
              Results
            </Link>
            <Link
              href={`/competitions/cups/${path}/standings`}
              className={`${
                pathname == `/competitions/cups/${path}/standings`
                  ? "font-semibold text-black underline decoration-2 underline-offset-[17px] dark:text-white"
                  : " text-zinc-400 hover:text-black hover:underline hover:decoration-2 hover:underline-offset-[17px] dark:hover:text-white"
              }`}
            >
              Standings
            </Link>
          </nav>
        </section>
      </div>
    </>
  );
}
