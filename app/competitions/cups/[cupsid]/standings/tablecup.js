"use client";
import { useState } from "react";
import PickUCLSeason from "./pickseason";

export default function TableCup({ leagueid }) {
  const [season, setSeason] = useState("2022");
  return (
    <>
      <section className="w-full dark:bg-black">
        <div className="p-5 md:p-0 md:py-3 lg:py-5 w-full md:w-3/4 lg:w-3/4 flex flex-col mx-auto">
          <p className="font-bold">Standings</p>
          <div className="flex gap-3 items-center mt-5 text-sm">
            <p className="font-normal">Seasons:</p>
            <select
              name=""
              id=""
              className="border-none outline-none bg-transparent"
              onChange={(e) => {
                setSeason(e.target.value);
              }}
            >
              <option value="2023">2023</option>
              <option selected value="2022">
                2022
              </option>
              <option value="2021">2021</option>
              <option value="2020">2020</option>
              <option value="2019">2019</option>
            </select>
          </div>

          <PickUCLSeason season={season} league={leagueid} />
        </div>
      </section>
    </>
  );
}
