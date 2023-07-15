"use client";
import MCard from "./mcard";
import moment from "moment-timezone";
import useSWR from "swr";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import React, { useEffect, useState } from "react";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Lists() {
  const [times, setTimes] = useState(moment());

  useEffect(() => {
    setInterval(() => setTimes(moment()), 0);
  }, []);

  const timezone = "Asia/Jakarta";
  const ccode = "IDN";

  const query =
    `ccode3=${ccode}` +
    `&date=${times.format("YYYYMMDD")}` +
    `&timezone=${timezone}`;

  const {
    data: res,
    error: error1,
    isLoading: loading1,
  } = useSWR(`/api/onefootball/matches?${query}`, fetcher, {
    refreshInterval: 5000,
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
      {res.responses.leagues.map((match) => (
        <div className="py-5">
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
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
            <>
              {match.matches.map((res) => (
                <>
                  {res.status.finished == true ? (
                    <MCard
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
                </>
              ))}
            </>
          </div>
        </div>
      ))}
    </>
  );
}
