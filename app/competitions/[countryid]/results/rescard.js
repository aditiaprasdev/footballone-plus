import Image from "next/image";

async function getData(id) {
  const res = await fetch(
    `https://www.thesportsdb.com/api/v1/json/${process.env.NEXT_PUBLIC_API_KEY_DB}/lookup_all_teams.php?id=${id}`,
    { cache: "no-store" }
  ).then((r) => r.json());
  return res;
}

export default async function ResCard({
  id,
  hometeam,
  awayteam,
  homescore,
  awayscore,
  homeid,
  awayid,
  week,
  date,
}) {
  const data = await getData(id);

  return (
    <>
      <div className="flex flex-col gap-1 group">
        <div className="flex justify-between items-center">
          <p className="text-sm text-zinc-500 group-hover:text-black dark:group-hover:text-zinc-300 font-semibold">
            Matchday {week}
          </p>
          <p className="text-xs text-zinc-500 group-hover:text-black dark:group-hover:text-zinc-300 font-semibold">
            {date}
          </p>
        </div>
        <div className="flex border p-5 gap-5 group-hover:border-black dark:border-zinc-800 dark:group-hover:border-zinc-500 dark:bg-zinc-800 items-center rounded-md">
          <div className="flex truncate flex-col gap-5 w-full">
            <div className="flex gap-3">
              <img
                src={data.teams
                  .filter((res) => res.idTeam == homeid)
                  .map((logo) => logo.strTeamBadge)}
                width={30}
                height={30}
                alt=""
              ></img>
              <p className="truncate">{hometeam}</p>
            </div>
            <div className="flex gap-3">
              <img
                src={data.teams
                  .filter((res) => res.idTeam == awayid)
                  .map((logo) => logo.strTeamBadge)}
                width={30}
                height={30}
                alt=""
              ></img>
              <p className="truncate">{awayteam}</p>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <p className="font-semibold text-center">{homescore}</p>
            <p className="font-semibold text-center">{awayscore}</p>
          </div>
        </div>
      </div>
    </>
  );
}
