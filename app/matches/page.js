import React from "react";
import Image from "next/image";
import hero from "/public/fionn-grosse-G5uasfXjZdc-unsplash.jpg";
import { FcSportsMode } from "react-icons/fc";
import Match from "@/components/Match/matches";
import MatchCard from "@/components/matchcard";

async function getData(payload) {
  const res = await fetch(
    `https://v3.football.api-sports.io/fixtures?${payload}`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
        "x-rapidapi-key": process.env.NEXT_PUBLIC_API_KEY_LIVE,
      },
      next: { revalidate: 60 },
    }
  );
  return res.json();
}

export default async function Matches() {
  const payloads = "live=all";
  const res = await getData(payloads);

  return (
    <>
      <section className="p-5 md:p-0 md:py-5 lg:p-0 lg:py-5 w-full md:w-3/4 lg:w-2/3 flex flex-col space-y-1 mx-auto">
        <div className="w-full bg-white h-[200px] md:h-[350px] flex items-center rounded-xl overflow-hidden">
          <img
            src={hero}
            alt="images"
            width={1274}
            height={701}
            placeholder="blur"
            sizes="(max-width: 1500px) 100vw, (max-width: 1000px) 50vw, 33vw"
            className="-translate-y-0 sm:-translate-y-20 md:-translate-y-0 lg:-translate-y-10 xl:-translate-y-20 2xl:-translate-y-32"
          ></img>
        </div>
        <p className="text-xs text-gray-400">
          Photo by{" "}
          <a
            className="text-gray-700"
            href="https://unsplash.com/@fionngrosse?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
            target="blank"
          >
            Fionn Große
          </a>{" "}
          on{" "}
          <a
            className="text-gray-700"
            href="https://unsplash.com/photos/G5uasfXjZdc?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
            target="blank"
          >
            Unsplash
          </a>
        </p>
      </section>
      <section className="p-5 md:p-0 md:py-5 lg:p-0 lg:py-5 w-full md:w-3/4 lg:w-2/3 flex flex-col space-y-1 mx-auto">
        <div className="w-full bg-white rounded-xl space-y-10">
          {/* matches */}
          <div className="flex flex-col space-y-5 border-b-2-5">
            <div className="text-[16px] flex items-center space-x-1">
              <p className="font-bold">
                Live <span className="font-normal">Matches</span>
              </p>
              <FcSportsMode></FcSportsMode>
            </div>

            {res.results == 0 ? (
              <p className="bg-blue-200 rounded-full px-3 py-1 text-blue-600 w-fit text-sm">
                No Live Matches Available
              </p>
            ) : (
              <p className="bg-emerald-200 rounded-full px-3 py-1 text-emerald-600 w-fit text-sm">
                Today's Matches,{" "}
                <span className="font-bold">{res.results} Matches.</span>
              </p>
            )}
          </div>
          <div className="w-full grid  lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 gap-5">
            {res.response.map((respond) => (
              <MatchCard
                hometeam={respond.teams.home.name}
                awayteam={respond.teams.away.name}
                homelogo={respond.teams.home.logo}
                awaylogo={respond.teams.away.logo}
                venue={respond.fixture.venue.name}
                city={respond.fixture.venue.city}
                times={respond.fixture.status.elapsed}
                goalhome={respond.goals.home}
                goalaway={respond.goals.away}
                leaguename={respond.league.name}
                leaguelogo={respond.league.logo}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
