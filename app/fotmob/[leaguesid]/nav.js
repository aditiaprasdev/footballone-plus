"use client";
import Link from "next/link";
import useSWR from "swr";
import { useTheme } from "next-themes";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FiChevronRight } from "react-icons/fi";
import { BsTrophyFill } from "react-icons/bs";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Navigation({ pageid }) {
  const { data, error, isLoading } = useSWR(
    `/api/onefootball/${pageid}`,
    fetcher
  );

  if (error) {
    return <p>Error</p>;
  }
  if (isLoading) {
    return (
      <div className="p-5 md:p-0 md:py-5 lg:py-5 w-full md:w-[90%] lg:w-[95%] 2xl:w-[85%] flex flex-col mx-auto">
        <div className="flex flex-col gap-5">
          <div className="w-60 h-7 rounded-full bg-zinc-300 dark:bg-zinc-700 animate-pulse"></div>
          <div className="flex gap-5">
            <div className="w-10 h-10 bg-zinc-300 dark:bg-zinc-700 rounded-full animate-pulse"></div>
            <div className="w-60 h-10 rounded-full bg-zinc-300 dark:bg-zinc-700 animate-pulse"></div>
          </div>
          <div className="w-full h-7 rounded-full bg-zinc-300 dark:bg-zinc-700 animate-pulse"></div>
        </div>
      </div>
    );
  }
  const { theme } = useTheme();
  const pathname = usePathname();

  return (
    <>
      <div className="p-5 md:p-0 md:py-5 lg:py-5 w-full md:w-[90%] lg:w-[95%] 2xl:w-[85%] flex flex-col mx-auto gap-5">
        <div className="flex gap-2 items-center">
          <div className="flex gap-2 items-center text-zinc-400 hover:text-black dark:hover:text-white">
            <BsTrophyFill></BsTrophyFill>
            <Link href={`/fotmob`} className="">
              <p>Competitions</p>
            </Link>
          </div>
          <FiChevronRight></FiChevronRight>
          <p>{data.details.country}</p>
          <FiChevronRight></FiChevronRight>
          <p className="font-semibold">{data.details.name}</p>
        </div>
        <div className="flex gap-5 items-center">
          <img
            src={`${
              theme == "dark"
                ? `https://images.fotmob.com/image_resources/logo/leaguelogo/dark/${pageid}.png`
                : `https://images.fotmob.com/image_resources/logo/leaguelogo/${pageid}.png`
            }`}
            alt=""
            height={40}
            width={40}
          />
          <p className="text-2xl font-semibold">{data.details.name}</p>
        </div>
        <div className="border-b dark:border-b-zinc-600 flex gap-5">
          <Link
            href={`/fotmob/${pageid}/matches`}
            // className="hover:underline hover:underline-offset-[5px] hover:decoration-2"
            className={`${
              pathname == `/fotmob/${pageid}/matches`
                ? "underline underline-offset-[5px] decoration-2"
                : "hover:underline hover:underline-offset-[5px] hover:decoration-2 hover:decoration-black dark:decoration-white hover:text-black dark:hover:text-white text-zinc-400"
            }`}
          >
            Matches
          </Link>
          <Link
            href={`/fotmob/${pageid}/results`}
            className={`${
              pathname == `/fotmob/${pageid}/results`
                ? "underline underline-offset-[5px] decoration-2"
                : "hover:underline hover:underline-offset-[5px] hover:decoration-2 hover:decoration-black dark:decoration-white hover:text-black dark:hover:text-white text-zinc-400"
            }`}
          >
            Results
          </Link>
          <Link
            href={`/fotmob/${pageid}/tables`}
            className={`${
              pathname == `/fotmob/${pageid}/tables`
                ? "underline underline-offset-[5px] decoration-2"
                : "hover:underline hover:underline-offset-[5px] hover:decoration-2 hover:decoration-black dark:decoration-white hover:text-black dark:hover:text-white text-zinc-400"
            }`}
          >
            Tables
          </Link>
        </div>
      </div>
    </>
  );
}
