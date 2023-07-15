import Image from "next/image";
import React from "react";

export default function List() {
  return (
    <div className="flex text-sm text-zinc-500 dark:text-zinc-300 w-full">
      <div className="w-[125px] sm:w-[200px] md:w-[300px] lg:w-[500px] flex space-x-1 items-center overflow-hidden">
        <p className="">1</p>
        <img
          src={"https://crests.football-data.org/18.svg"}
          width={20}
          height={20}
        ></img>
        <p className="truncate">Borussia Mönchengladbach</p>
      </div>

      <div className="w-full flex justify-around">
        <p>38</p>
        <p>30</p>
        <p>5</p>
        <p>3</p>
        <p>+20</p>
        <p>89</p>
      </div>
      <div className="w-1/3 hidden lg:block">
        <div className="flex gap-3 text-xs">
          <p className="bg-emerald-500 flex items-center justify-center h-5 w-5 rounded-md text-white">
            W
          </p>
          <p className="bg-red-500 flex items-center justify-center h-5 w-5 rounded-md text-white">
            L
          </p>
          <p className="bg-gray-400 flex items-center justify-center h-5 w-5 rounded-md text-white">
            D
          </p>
          <p className="bg-emerald-500 flex items-center justify-center h-5 w-5 rounded-md text-white">
            W
          </p>
          <p className="bg-emerald-500 flex items-center justify-center h-5 w-5 rounded-md text-white">
            W
          </p>
        </div>
      </div>
    </div>
  );
}
