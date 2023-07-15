import React from "react";
import Image from "next/image";
export default function Match({
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
    <>
      <div className="py-3 px-3 w-full rounded-lg bg-gray-100 flex flex-col space-y-3 items-center justify-center">
        {/* title */}
        <div className="flex w-full justify-between items-start text-xs text-gray-400">
          <div className="w-1/3">
            <p>
              {venue}
              <span className="font-bold"> {city}</span>
            </p>
          </div>
          <div className="flex flex-col space-y-1 justify-center items-center">
            <img src={leaguelogo} width={20} height={20} alt="logo"></img>
            <p>{leaguename}</p>
          </div>
          <div className="w-1/3 flex justify-end">
            <p className="text-green-600 w-fit rounded-full animate-pulse bg-green-200 px-2">
              {times}
            </p>
          </div>
        </div>
        {/* team */}
        <div className="flex space-x-3 items-center justify-center w-full">
          <div className="flex items-center justify-center w-full gap-3">
            <div className="flex gap-3 w-full md:w-1/3 justify-end items-center">
              <img src={homelogo} width={20} height={20} alt="logo"></img>
              <p>{hometeam}</p>
              <p>{goalhome}</p>
            </div>
            <p>-</p>
            <div className="flex gap-3 w-full md:w-1/3 items-center">
              <p>{goalaway}</p>
              <p>{awayteam}</p>
              <img src={awaylogo} width={20} height={20} alt="logo"></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
