import React from "react";
import Image from "next/image";

export default function MCard({
  hometeam,
  awayteam,
  homeid,
  awayid,
  homegoal,
  awaygoal,
  status,
  current,
}) {
  return (
    <>
      <div className="grid grid-cols-6 gap-3  w-full py-4 pl-4 hover:shadow-md hover:border-black border dark:bg-zinc-800 dark:border-zinc-800 dark:hover:border-zinc-500 rounded-md justify-between">
        <div className="col-span-4">
          <div className="grid gap-3">
            <div className="grid grid-cols-4 w-full items-center">
              <div className="col-span-3 gap-2 flex items-center">
                <img
                  src={`https://images.fotmob.com/image_resources/logo/teamlogo/${homeid}.png`}
                  width={30}
                  height={30}
                  alt=""
                ></img>
                <p className="truncate w-full">{hometeam}</p>
              </div>

              <p
                className={`${
                  current == "LIVE" || current == "FT"
                    ? "font-bold text-right"
                    : "hidden"
                }`}
              >
                {homegoal}
              </p>
            </div>
            <div className="grid grid-cols-4 w-full items-center">
              <div className="col-span-3 gap-2 flex items-center">
                <img
                  src={`https://images.fotmob.com/image_resources/logo/teamlogo/${awayid}.png`}
                  width={30}
                  height={30}
                  alt=""
                  quality={100}
                ></img>
                <p className="truncate w-fulls">{awayteam}</p>
              </div>

              <p
                className={`${
                  current == "LIVE" || current == "FT"
                    ? "font-bold text-right"
                    : "hidden"
                }`}
              >
                {awaygoal}
              </p>
            </div>
          </div>
        </div>

        <div className="grid col-span-2 text-center justify-center items-center text-sm border-l dark:border-zinc-700">
          {current == "LIVE" ? (
            <div className="grid gap-2">
              <div className="w-8">
                <div className="absolute w-8 h-[3px] bg-red-200 rounded-full"></div>
                <div className="w-2 h-[3px] bg-red-500 rounded-full move"></div>
              </div>
              <p className="italic text-sm text-red-500">Live</p>
            </div>
          ) : (
            ""
          )}
          <p
            className={`${
              current == "LIVE"
                ? "font-semibold text-red-500 animate-pulse text-sm"
                : current == "FT"
                ? "font-bold text-gray-400"
                : "font-semibold text-sm"
            }`}
          >
            {status}
          </p>
        </div>
      </div>
    </>
  );
}
