"use client";
import useSWR from "swr";
import Image from "next/image";
import MatchCard from "@/components/matchcard";
import MatchLogo from "./logo";

const fetcher = (url) => fetch(url).then((res) => res.json());
var _ = require("lodash");

export default function Search() {
  const { data, error, isLoading } = useSWR(
    `https://www.thesportsdb.com/api/v2/json/${process.env.NEXT_PUBLIC_API_KEY_DB}/livescore.php?s=Soccer`,
    fetcher,
    { refreshInterval: 10000 }
  );
  if (error)
    return (
      <div className="rounded-full px-3 bg-red-100 text-red-500 w-fit">
        No Data Found!
      </div>
    );
  if (isLoading)
    return (
      <div className="flex flex-col justify-around p-3 w-full h-40 border dark:border-zinc-800 rounded-lg">
        <div className="w-10 h-5 rounded-full bg-zinc-200 dark:bg-zinc-700 animate-pulse"></div>
        <div className="w-full h-5 rounded-full bg-zinc-200 dark:bg-zinc-700 animate-pulse"></div>
        <div className="w-full h-5 rounded-full bg-zinc-200 dark:bg-zinc-700 animate-pulse"></div>
        <div className="w-full h-5 rounded-full bg-zinc-200 dark:bg-zinc-700 animate-pulse"></div>
      </div>
    );

  var asc = _.sortBy(data.events, "strLeague");
  console.log(asc);

  return (
    <>
      {/* <p>{JSON.stringify(asc)}</p> */}
      {asc == null ? (
        <div className=" w-full flex flex-col gap-5">
          <div className="rounded-full px-3 bg-blue-100 text-blue-500 w-fit">
            Information
          </div>
          <p className="font-semibold text-3xl">
            Apparently no live matches at this time.
          </p>
        </div>
      ) : (
        <div className="grid md:grid-cols2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-5">
          {asc.map((match) => (
            <div
              key={match.idEvent}
              className="flex flex-col space-y-3 items-center border rounded-lg p-3 hover:shadow-md bg-white dark:bg-zinc-950 dark:border-zinc-800 dark:hover:border-zinc-600"
            >
              <div className="flex w-full justify-between items-start text-xs text-gray-500">
                <div className="flex flex-col gap-2 h-fit justify-between w-full items-start">
                  <MatchLogo id={match.idLeague} />
                  <p className="font-bold">{match.strLeague}</p>
                </div>

                <div className="w-fit flex flex-col items-center gap-2 justify-between">
                  <div className="w-[32px] h-[3px]">
                    <div className="absolute w-[32px] h-[2px] bg-green-200 rounded-full"></div>
                    <div className="relative w-[7px] h-[2px] bg-green-600 rounded-full move"></div>
                  </div>
                  <p className="text-green-600 w-fit font-bold rounded-full animate-pulse px-2">
                    {match.strStatus == "HT"
                      ? match.strStatus
                      : match.strProgress + "'"}
                  </p>
                </div>
              </div>

              <div className="w-full flex flex-col justify-between gap-3 p-3 rounded-lg bg-gray-50 dark:bg-zinc-900">
                <div className="w-full flex justify-between items-center">
                  <div className="flex gap-2 items-center">
                    <div className="w-[30px] h-[30px]">
                      <img
                        src={match.strHomeTeamBadge}
                        width={30}
                        height={30}
                        alt="logo"
                      ></img>
                    </div>
                    <p className="font-semibold">{match.strHomeTeam}</p>
                  </div>
                  <p className="font-bold">{match.intHomeScore}</p>
                </div>
                <div className="w-full flex justify-between items-center">
                  <div className="flex gap-2 items-center">
                    <div className="w-[30px] h-[30px]">
                      <img
                        src={match.strAwayTeamBadge}
                        width={30}
                        height={30}
                        alt="logo"
                      ></img>
                    </div>
                    <p className="font-semibold">{match.strAwayTeam}</p>
                  </div>
                  <p className="font-bold">{match.intAwayScore}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
