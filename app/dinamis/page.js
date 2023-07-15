"use client";
import Image from "next/image";
import Link from "next/link";
import useSWR from "swr";
import { groupBy } from "lodash";

const fetcher = (url) => fetch(url).then((res) => res.json());
const fetcher2 = (url2) => fetch(url2).then((res) => res.json());

var _ = require("lodash");

export default function Dinamis({ params }) {
  const {
    data: leagues,
    error: error1,
    isLoading: isLoading1,
  } = useSWR(`/api/thesportsdb/`, fetcher);

  const {
    data: country,
    error: error2,
    isLoading: isLoading2,
  } = useSWR(`/api/thesportsdb/country`, fetcher2);

  if (error1) {
    return <p>Error</p>;
  }
  if (isLoading1) {
    return (
      <>
        <div className="mx-auto flex w-full flex-col gap-5 p-5 md:w-3/4 md:p-0 md:py-10 lg:w-3/4 lg:p-0 lg:py-10">
          <div className="grid grid-cols-4 gap-5">
            <div className="flex gap-2">
              <div className="w-8 h-8 rounded-full bg-zinc-500 animate-pulse"></div>
              <div className="h-8 w-[90%] rounded-md bg-zinc-500 animate-pulse"></div>
            </div>
          </div>
        </div>
      </>
    );
  }

  if (error2) {
    return <p>Error</p>;
  }
  if (isLoading2) {
    return (
      <>
        <div className="mx-auto flex w-full flex-col gap-5 p-5 md:w-3/4 md:p-0 md:py-10 lg:w-3/4 lg:p-0 lg:py-10">
          <div className="grid grid-cols-4 gap-5">
            <div className="flex gap-2">
              <div className="w-8 h-8 rounded-full bg-zinc-500 animate-pulse"></div>
              <div className="h-8 w-[90%] rounded-md bg-zinc-500 animate-pulse"></div>
            </div>
          </div>
        </div>
      </>
    );
  }

  var sort = _.sortBy(leagues.countries, "strCountry");
  // var nation = _.sortBy(country.countries, "name_en");
  // var remove = _.uniq(leagues.countries.map((fil) => fil.strCountry));
  return (
    <>
      <section className="mx-auto flex w-full flex-col gap-5 p-5 md:w-3/4 md:p-0 md:py-10 lg:w-3/4 lg:p-0 lg:py-10">
        <div className="grid grid-cols-3 gap-5">
          {leagues.countries.map((league) => (
            <Link
              key={league.idLeague}
              href={`/dinamis/${league.idLeague}`}
              className="flex gap-2 hover:border-black dark:hover:border-zinc-300 dark:border-zinc-900 dark:bg-zinc-900 justify-between items-center rounded-md p-3 border"
            >
              <img src={league.strBadge} width={30} height={30} alt="o"></img>
              <p className="truncate">{league.strLeague}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
