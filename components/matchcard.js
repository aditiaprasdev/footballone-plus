import React from "react";
import Image from "next/image";

export default function MatchCard({
  hometeam,
  awayteam,
  homelogo,
  awaylogo,
  venue,
  city,
  times,
  goalhome,
  goalaway,
  leaguename,
  leaguelogo,
}) {
  return (
    <div className="flex flex-col space-y-3 items-center dark:border-zinc-600 border rounded-lg p-3 hover:shadow-md">
      <div className="flex w-full justify-between items-start text-xs text-gray-500">
        <div className="flex flex-col gap-2 h-fit justify-between w-full items-start">
          <img
            src={leaguelogo}
            width={20}
            height={20}
            alt="logo"
            style={{ width: "auto", height: "auto" }}
          ></img>
          <p className="font-bold">{leaguename}</p>
        </div>

        <div className="w-fit flex flex-col items-end gap-2 justify-between">
          <p className="text-green-600 w-fit rounded-full animate-pulse bg-green-200 px-2">
            {times}
          </p>
        </div>
      </div>

      <div className="w-full flex flex-col justify-between gap-3 p-3 rounded-lg bg-gray-50 dark:bg-zinc-800">
        <div className="w-full flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <div className="w-[30px] h-[30px]">
              <img
                src={homelogo}
                width={30}
                height={30}
                alt="logo"
                style={{ width: "auto", height: "auto" }}
              ></img>
            </div>
            <p className="font-semibold">{hometeam}</p>
          </div>
          <p className="font-bold">{goalhome}</p>
        </div>
        <div className="w-full flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <div className="w-[30px] h-[30px]">
              <img
                src={awaylogo}
                width={30}
                height={30}
                alt="logo"
                style={{ width: "auto", height: "auto" }}
              ></img>
            </div>
            <p className="font-semibold">{awayteam}</p>
          </div>
          <p className="font-bold">{goalaway}</p>
        </div>
      </div>
      <p className="text-xs text-gray-400 w-full">
        {venue} <span className="font-bold">{city}</span>
      </p>
    </div>
  );
}
