"use client";
import React from "react";
import Image from "next/image";

export default function Cup({ props }) {
  return (
    <>
      <div className="flex flex-col">
        <div className="px-3">
          <p className="font-bold text-lg">{props[0].group}</p>
        </div>
        <div className="w-full bg-white dark:bg-black rounded-xl pt-5 flex items-center space-x-5 text-zinc-300 font-semibold">
          <div className="flex w-full items-center">
            <div className="w-8 text-center">#</div>
            <div className="w-32 sm:w-52 lg:w-1/2">Clubs</div>
            <div className="w-full lg:w-1/2 flex items-center justify-between ">
              <div className=" w-1/6 flex justify-center">MP</div>
              <div className=" w-1/6 flex justify-center">W</div>
              <div className=" w-1/6 flex justify-center">D</div>
              <div className=" w-1/6 flex justify-center">L</div>
              <div className=" w-1/6 flex justify-center">GD</div>
              <div className=" w-1/6 flex justify-center">Pts</div>
            </div>
          </div>
        </div>
        <div className="w-full bg-white dark:bg-black flex flex-col mt-5 items-center text-sm sm:text-sm md:text-base">
          {props.map((table) => (
            <div className="flex w-full items-center border-b dark:border-zinc-600 py-3 text-zinc-500 hover:text-black hover:bg-gray-50 dark:hover:bg-zinc-900 transition ease-in-out dark:text-zinc-300">
              <p className="w-8 text-center">{table.rank}</p>
              <div className="w-32 sm:w-52 lg:w-1/2 gap-2 flex overflow-hidden items-center">
                <img
                  src={table.team.logo}
                  width={30}
                  height={30}
                  alt="logo"
                  quality={100}
                ></img>
                <p className="truncate ">{table.team.name}</p>
              </div>
              <div className="w-full lg:w-1/2 flex items-center justify-between ">
                <p className=" w-1/6 flex justify-center ">
                  {table.all.played}
                </p>
                <p className=" w-1/6 flex justify-center ">{table.all.win}</p>
                <p className=" w-1/6 flex justify-center ">{table.all.draw}</p>
                <p className=" w-1/6 flex justify-center ">{table.all.lose}</p>
                <p className=" w-1/6 flex justify-center ">{table.goalsDiff}</p>
                <p className=" w-1/6 flex justify-center ">{table.points}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
