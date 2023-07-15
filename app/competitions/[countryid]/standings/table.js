"use client";
import Image from "next/image";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function TableLeague({ params, seasons }) {
  const { data, error, isLoading } = useSWR(
    `https://www.thesportsdb.com/api/v1/json/3/lookuptable.php?l=${params}&s=${seasons}`,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  if (error)
    return (
      <div className="w-full">
        <p className="bg-blue-100 w-fit text-blue-600 px-3 rounded-full">
          No Records
        </p>
      </div>
    );
  if (isLoading)
    return (
      <div className="w-full h-8 rounded-xl bg-gray-300 animate-pulse"></div>
    );

  return (
    <>
      {data.table.map((res) => (
        <div className="flex w-full items-center border-b dark:border-zinc-600 py-3 text-zinc-500 hover:text-black hover:bg-gray-50 dark:hover:bg-zinc-900 transition ease-in-out dark:text-zinc-300">
          <p className="w-8 text-left">{res.intRank}</p>
          <div className="w-32 sm:w-52 lg:w-1/2 space-x-2 flex overflow-hidden items-center">
            <img src={res.strTeamBadge} width={25} height={25} alt="logo"></img>
            <p className="truncate">{res.strTeam}</p>
          </div>
          <div className="w-full lg:w-1/2 flex items-center justify-between ">
            <p className="w-1/6 flex justify-center ">{res.intPlayed}</p>
            <p className="w-1/6 flex justify-center ">{res.intWin}</p>
            <p className="w-1/6 flex justify-center ">{res.intDraw}</p>
            <p className="w-1/6 flex justify-center ">{res.intLoss}</p>
            <p className="w-1/6 flex justify-center ">
              {res.intGoalDifference}
            </p>
            <p className=" w-1/6 flex justify-center ">{res.intPoints}</p>
          </div>
        </div>
      ))}
    </>
  );
}
