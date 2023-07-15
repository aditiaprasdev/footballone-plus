"use client";
import moment from "moment-timezone";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function TeamCard({
  home,
  away,
  date,
  time,
  idleague,
  homeid,
  awayid,
}) {
  const { data, error, isLoading } = useSWR(
    `https://www.thesportsdb.com/api/v1/json/${process.env.NEXT_PUBLIC_API_KEY_DB}/lookup_all_teams.php?id=${idleague}`,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  if (error)
    return (
      <div className="p-5 md:p-0 md:py-5 lg:p-0 lg:py-5 w-full md:w-[90%] lg:w-2/3 flex flex-col mx-auto">
        Failed to load
      </div>
    );
  if (isLoading)
    return (
      <div className="border dark:border-zinc-600 p-3 w-full text-sm md:text-base flex flex-col justify-between items-center gap-5 rounded-lg">
        <div className="flex gap-3 w-full">
          <div className="h-7 w-7 bg-zinc-300 dark:bg-zinc-700 rounded-full animate-pulse"></div>
          <div className="h-7 w-[80%] bg-zinc-300 dark:bg-zinc-700 rounded-full animate-pulse"></div>
        </div>
        <div className="flex gap-3 w-full">
          <div className="h-7 w-7 bg-zinc-300 dark:bg-zinc-700 rounded-full animate-pulse"></div>
          <div className="h-7 w-[80%] bg-zinc-300 dark:bg-zinc-700 rounded-full animate-pulse"></div>
        </div>
      </div>
    );

  function changeTime(time) {
    var localTime = moment(time).local().format("HH:mm");
    return localTime;
  }

  return (
    <>
      <div className="border p-3 w-full text-sm md:text-base flex justify-between items-center gap-16 md:gap-10 lg:gap-10 xl:gap-10 2xl:gap-20 rounded-md hover:shadow-md hover:border-zinc-700 dark:border-zinc-800 dark:bg-zinc-800 dark:hover:border-zinc-300 dark:shadow-none">
        <div className="flex flex-col w-fit gap-5 truncate">
          <div className="flex gap-3 items-center">
            <img
              src={data.teams
                .filter((res) => res.idTeam == homeid)
                .map((logo) => logo.strTeamBadge)}
              width={30}
              height={30}
            ></img>
            <p className="truncate">{home}</p>
          </div>
          <div className="flex gap-3 items-center">
            <img
              src={data.teams
                .filter((res) => res.idTeam == awayid)
                .map((logo) => logo.strTeamBadge)}
              width={30}
              height={30}
            ></img>
            <p className="truncate">{away}</p>
          </div>
        </div>
        <div className="flex flex-col text-xs md:text-xs text-center text-zinc-600 dark:text-zinc-300">
          <p className="truncate">{date}</p>
          <p className="font-bold truncate">{changeTime(time)}</p>
        </div>
      </div>
    </>
  );
}
