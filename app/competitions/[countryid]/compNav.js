"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import useSWR from "swr";
import Image from "next/image";
import { BsTrophyFill } from "react-icons/bs";
import { BiChevronRight } from "react-icons/bi";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function CompNav({ path }) {
  const pathname = usePathname();
  const { data, error, isLoading } = useSWR(
    `https://www.thesportsdb.com/api/v1/json/${process.env.NEXT_PUBLIC_API_KEY_DB}/lookupleague.php?id=${path}`,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );
  if (error)
    return (
      <div className="mx-auto flex w-full flex-col p-5 md:w-3/4 md:p-0 md:py-5 lg:w-2/3 lg:p-0 lg:py-5">
        Failed to load...
      </div>
    );
  if (isLoading)
    return (
      <section className="mx-auto flex w-full flex-col gap-5 p-5 md:w-3/4 md:p-0 md:py-5 lg:w-3/4 lg:p-0 lg:py-5">
        <div className="h-7 w-full animate-pulse rounded-full bg-zinc-300 dark:bg-zinc-700"></div>
        <div className="w-full py-3">
          <div className="flex items-center gap-5">
            <div className="h-16 w-16 animate-pulse rounded-full bg-zinc-300 dark:bg-zinc-700"></div>
            <div className="h-10 w-[60%] animate-pulse rounded-full bg-zinc-300 dark:bg-zinc-700"></div>
          </div>
        </div>
        <div className="h-7 w-full animate-pulse rounded-full bg-zinc-300 dark:bg-zinc-700"></div>
      </section>
    );

  return (
    <>
      <div className="w-full dark:bg-black">
        <section className="mx-auto flex w-full flex-col p-5 md:w-3/4 md:p-0 md:py-5 lg:w-2/3 lg:p-0 lg:py-5">
          <div className="mb-10 flex items-center gap-1 text-sm sm:text-base">
            <Link
              href={`/competitions`}
              className="flex items-center gap-2 text-zinc-400 hover:text-black dark:text-zinc-500 dark:hover:text-zinc-300"
            >
              <BsTrophyFill></BsTrophyFill>
              <p>Competitions</p>
            </Link>
            <BiChevronRight></BiChevronRight>
            <p>{data.leagues.map((league) => league.strLeague)}</p>
          </div>

          <div className="flex w-full items-center gap-5">
            <img
              src={data.leagues.map((logo) => logo.strBadge)}
              alt="logo"
              width={80}
              height={80}
            ></img>

            <p className="text-2xl md:text-4xl font-bold">
              {data.leagues.map((league) => league.strLeague)}
            </p>
          </div>

          <nav className="mt-5 flex gap-5 border-b pb-3 dark:border-zinc-600">
            <Link
              href={`/competitions/${path}`}
              className={`${
                pathname == `/competitions/${path}`
                  ? "font-semibold text-black underline decoration-2 underline-offset-[17px] dark:text-white"
                  : " text-zinc-400 hover:text-black hover:underline hover:decoration-2 hover:underline-offset-[17px] dark:hover:text-white"
              }`}
            >
              Fixtures
            </Link>
            <Link
              href={`/competitions/${path}/results`}
              className={`${
                pathname == `/competitions/${path}/results`
                  ? "font-semibold text-black underline decoration-2 underline-offset-[17px] dark:text-white"
                  : " text-zinc-400 hover:text-black hover:underline hover:decoration-2 hover:underline-offset-[17px] dark:hover:text-white"
              }`}
            >
              Results
            </Link>
            <Link
              href={`/competitions/${path}/standings`}
              className={`${
                pathname == `/competitions/${path}/standings`
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
