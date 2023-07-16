"use client";
import MCard from "./mcard";
import moment from "moment-timezone";
import useSWR from "swr";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import React, { useEffect, useState } from "react";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Lists({ tz, code }) {
  const [times, setTimes] = useState(moment());
  const [today, setToday] = useState(times.format("YYYYMMDD"));
  const [display, setDisplay] = useState(times.format("YYYYMMDD"));

  useEffect(() => {
    setInterval(() => setTimes(moment()), 0);
  }, []);

  const timeZone = tz;
  const ccode = code;
  // const date = times.format("YYYYMMDD");
  const date = today;

  const query = `ccode3=${ccode}` + `&date=${date}` + `&timezone=${timeZone}`;

  const {
    data: res,
    error: error1,
    isLoading: loading1,
  } = useSWR(`/api/onefootball/matches?${query}`, fetcher, {
    refreshInterval: 10000,
  });

  if (error1) {
    return <p>Error</p>;
  }
  if (loading1) {
    return (
      <div className="flex gap-3 items-center">
        <AiOutlineLoading3Quarters className="animate-spin"></AiOutlineLoading3Quarters>
        <p>Loading...</p>
      </div>
    );
  }

  function changeTime(time) {
    var localTime = moment(time).format("HH:mm").toLocaleUpperCase();
    return localTime;
  }

  return (
    <>
      <p className="font-semibold text-lg">Today's Matches</p>
      <p>{times.format("LLLL")}</p>
      {/* <p>
        {display == "increase"
          ? times.add(1, "days").format("LLLL")
          : display == "decrease"
          ? times.add(-1, "days").format("LLLL")
          : display == "today"
          ? times.format("LLLL")s
          : times.format("LLLL")}
      </p> */}
      {/* <div className="flex gap-5">
        <button
          className="px-10 py-3 border w-fit hover:border-black rounded-md"
          onClick={() => {
            setToday(times.add(-1, "days").format("YYYYMMDD")),
              setDisplay("decrease");
          }}
        >
          Yesterday
        </button>
        <button
          className="px-10 py-3 border w-fit hover:border-black rounded-md"
          onClick={() => {
            setToday(times.format("YYYYMMDD")), setDisplay("today");
          }}
        >
          Today
        </button>
        <button
          className="px-10 py-3 border w-fit hover:border-black rounded-md"
          onClick={() => {
            setToday(times.add(1, "days").format("YYYYMMDD")),
              setDisplay("increase");
          }}
        >
          Tomorrow
        </button>
      </div> */}
      {res.responses.leagues.map((match) => (
        <div className="py-5" key={match.id}>
          <div className="mb-5 flex items-center gap-2">
            <img
              src={`https://images.fotmob.com/image_resources/logo/teamlogo/${match.ccode.toLowerCase()}.png`}
              width={30}
              height={30}
            ></img>
            <p className="font-bold">{match.ccode}</p>
            <p>-</p>
            <p className="">{match.name}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:gap-10 gap-5">
            {match.matches.map((res) => (
              <div key={res.id}>
                {res.status.finished == true ? (
                  <MCard
                    key={res.id}
                    homeid={res.home.id}
                    awayid={res.away.id}
                    hometeam={res.home.name}
                    awayteam={res.away.name}
                    homegoal={res.home.score}
                    awaygoal={res.away.score}
                    status={res.status.reason.short}
                    current={"FT"}
                  />
                ) : res.status.started == true &&
                  res.status.finished == false ? (
                  <MCard
                    key={res.id}
                    homeid={res.home.id}
                    awayid={res.away.id}
                    hometeam={res.home.name}
                    awayteam={res.away.name}
                    homegoal={res.home.score}
                    awaygoal={res.away.score}
                    status={res.status.liveTime.short}
                    current={"LIVE"}
                  />
                ) : (
                  <MCard
                    key={res.id}
                    homeid={res.home.id}
                    awayid={res.away.id}
                    hometeam={res.home.name}
                    awayteam={res.away.name}
                    homegoal={res.home.score}
                    awaygoal={res.away.score}
                    current={"NS"}
                    status={changeTime(res.status.utcTime)}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}
