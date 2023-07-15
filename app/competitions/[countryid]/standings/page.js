"use client";
import TableCup from "../../cups/[cupsid]/standings/tablecup";
import Table from "./table";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Standings({ params }) {
  const { data, error, isLoading } = useSWR(
    `https://www.thesportsdb.com/api/v1/json/${process.env.NEXT_PUBLIC_API_KEY_DB}/lookupleague.php?id=${params.countryid}`,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );
  if (error)
    return (
      <div className="p-5 md:p-0 md:py-3 lg:p-0 lg:py-5 w-full md:w-3/4 lg:w-2/3 flex flex-col mx-auto -mt-5">
        Failed to load
      </div>
    );
  if (isLoading)
    return (
      <div className="p-5 md:p-0 md:py-3 lg:p-0 lg:py-5 w-full md:w-3/4 lg:w-3/4 flex flex-col mx-auto -mt-5">
        <div className="h-7 w-full animate-pulse rounded-full bg-zinc-300 dark:bg-zinc-700"></div>
      </div>
    );

  return (
    <>
      <section className="w-full dark:bg-black">
        <div className="px-5 sm:py-5 md:py-5 md:px-0 lg:px-0 lg:py-5 w-full md:w-3/4 lg:w-2/3 flex flex-col mx-auto">
          <p className="font-bold">Standings</p>
          <div className="flex gap-3 items-center mt-5 text-sm">
            <p className="font-normal">Seasons:</p>
            {data.leagues.map((season) => (
              <p className="font-semibold">{season.strCurrentSeason}</p>
            ))}
          </div>

          <div className="w-full bg-white dark:bg-black rounded-xl pt-5 flex items-center space-x-5 overflow-auto text-zinc-500 font-semibold">
            <div className="flex w-full items-center">
              <div className="w-8 text-center">#</div>
              <div className="w-32 sm:w-52 lg:w-1/2">Clubs</div>
              <div className="w-full lg:w-1/2 flex items-center justify-between ">
                <div className="w-1/6 flex justify-center">MP</div>
                <div className="w-1/6 flex justify-center">W</div>
                <div className="w-1/6 flex justify-center">D</div>
                <div className="w-1/6 flex justify-center">L</div>
                <div className="w-1/6 flex justify-center">GD</div>
                <div className="w-1/6 flex justify-center">Pts</div>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col mt-5 items-center overflow-auto text-sm sm:text-sm md:text-base">
            <Table
              params={params.countryid}
              seasons={data.leagues.map((seasons) => seasons.strCurrentSeason)}
            />
          </div>
        </div>
      </section>
      {/* <TableCup /> */}
    </>
  );
}
