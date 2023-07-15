import { get, groupBy } from "lodash";
import React from "react";
import ResCard from "./rescard";

async function getData(id) {
  const res = await fetch(
    `https://www.thesportsdb.com/api/v1/json/${process.env.NEXT_PUBLIC_API_KEY_DB}/eventspastleague.php?id=${id}`,
    { cache: "no-store" }
  ).then((r) => r.json());
  return res;
}

export default async function Results({ params }) {
  const data = await getData(params.countryid);
  return (
    <>
      {/* <p className="max-w-7xl p-10">{JSON.stringify(data)}</p> */}
      <div className="p-5 md:p-0 md:py-5 lg:p-0 lg:py-5 w-full md:w-3/4 lg:w-2/3 flex flex-col mx-auto items-center">
        {/* <div className="p-0 md:p-5">
          <p className="text-3xl font-semibold">Apparently no match result.</p>

        </div> */}
        <div className="w-full grid grid-cols-3 gap-5">
          {data.events.map((team) => (
            <ResCard
              id={params.countryid}
              hometeam={team.strHomeTeam}
              homescore={team.intHomeScore}
              awayteam={team.strAwayTeam}
              awayscore={team.intAwayScore}
              homeid={team.idHomeTeam}
              awayid={team.idAwayTeam}
              week={team.intRound}
              date={team.dateEventLocal}
            />
          ))}
        </div>
      </div>
    </>
  );
}
