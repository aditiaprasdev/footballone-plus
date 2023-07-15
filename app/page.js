import Image from "next/image";
import { BsFillCameraVideoOffFill } from "react-icons/bs";
import { FcSportsMode, FcNumericalSorting12 } from "react-icons/fc";
import hero from "../public/fionn-grosse-G5uasfXjZdc-unsplash.jpg";
import List from "@/components/list";
import Link from "next/link";
import MatchCard from "@/components/matchcard";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-gray-100 dark:bg-black">
      <section className="p-5 md:p-0 md:py-5 lg:p-0 lg:py-5 w-full md:w-3/4 lg:w-2/3 flex flex-col space-y-1 mx-auto">
        <div className="w-full bg-white h-[200px] md:h-[350px] flex items-center rounded-xl overflow-hidden">
          <img
            src={hero}
            alt="images"
            width={1274}
            height={701}
            placeholder="blur"
            sizes="(max-width: 1500px) 100vw, (max-width: 1000px) 50vw, 33vw"
            className="-translate-y-0 sm:-translate-y-20 md:-translate-y-0 lg:-translate-y-10 xl:-translate-y-20 2xl:-translate-y-32"
          ></img>
        </div>
        <p className="text-xs text-gray-400">
          Photo by{" "}
          <a
            className="text-gray-700 dark:text-zinc-500"
            href="https://unsplash.com/@fionngrosse?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
            target="blank"
          >
            Fionn Große
          </a>{" "}
          on{" "}
          <a
            className="text-gray-700 dark:text-zinc-500"
            href="https://unsplash.com/photos/G5uasfXjZdc?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
            target="blank"
          >
            Unsplash
          </a>
        </p>
      </section>

      <section className="p-5 md:p-0 md:py-5 lg:p-0 lg:py-5 w-full md:w-3/4 lg:w-2/3 flex flex-col space-y-1 mx-auto">
        <div className="w-full bg-white dark:bg-zinc-900 rounded-xl space-y-10 py-[32px] px-[24px]">
          {/* matches */}
          <div className="flex flex-col space-y-5 dark:border-zinc-600 border-b-2 pb-5">
            <div className="text-[16px] flex items-center space-x-1">
              <p className="font-bold">Matches</p>
              <FcSportsMode></FcSportsMode>
            </div>
            <div className="w-full flex flex-col space-y-3">
              <div className="w-full grid lg:grid-cols-3 gap-5">
                <MatchCard />
                <MatchCard />
                <MatchCard />
                <MatchCard />
                <MatchCard />
                <MatchCard />
              </div>
              <div className="py-10 px-3 w-full rounded-lg bg-gray-100 dark:bg-zinc-800 flex flex-col space-y-1 items-center justify-center">
                <p>Currently no matches available</p>
                <BsFillCameraVideoOffFill className="text-5xl"></BsFillCameraVideoOffFill>
              </div>
            </div>
            <p className="text-gray-400 text-sm hover:text-indigo-500 hover:underline w-fit">
              View All {">"}
            </p>
          </div>

          {/* standings */}
          <div className="max-h-[400px] flex flex-col space-y-5 dark:border-zinc-600 border-b-2 pb-5 mt-5">
            {/* title */}

            <div className="text-[16px] flex items-center space-x-1">
              <p className="font-bold">Standings</p>
              <FcNumericalSorting12></FcNumericalSorting12>
            </div>

            {/* competitions */}
            <div className="flex justify-between">
              <div className="flex items-center space-x-3">
                <img
                  src={"https://crests.football-data.org/BL1.png"}
                  width={30}
                  height={30}
                  alt="logo"
                ></img>
                <p className="font-semibold">Bundesliga</p>
              </div>
              <p className="text-gray-400 text-sm hover:text-indigo-500 hover:underline w-fit">
                View All {">"}
              </p>
            </div>
            {/* tables head */}
            <div className="flex text-sm text-gray-500 px-3">
              <div className="w-[125px] sm:w-[200px] md:w-[300px] lg:w-[500px] flex space-x-2 items-center">
                Clubs
              </div>
              <div className="w-full flex justify-around">
                <p>MP</p>
                <p>W</p>
                <p>D</p>
                <p>L</p>
                <p>GD</p>
                <p>Pts</p>
              </div>
              <div className="w-1/3 hidden lg:block">
                <p> Last 5 Matches</p>
              </div>
            </div>
            {/* tables */}
            <div className="py-4 px-3 w-full rounded-lg bg-gray-50 dark:bg-zinc-800 flex flex-col space-y-5 items-center justify-center overflow-y-auto scrollbar scrollbar-w-[5px] scrollbar-thumb-rounded-full scrollbar-thumb-indigo-300 dark:scrollbar-thumb-zinc-500 scrollbar-track-gray-50 dark:scrollbar-track-zinc-800 text-sm">
              <List />
              <List />
              <List />
              <List />
              <List />
              <List />
              <List />
              <List />
              <List />
              <List />
              <List />
              <List />
              <List />
              <List />
              <List />
              <List />
            </div>
            {/* more */}
          </div>
        </div>
      </section>
    </main>
  );
}
