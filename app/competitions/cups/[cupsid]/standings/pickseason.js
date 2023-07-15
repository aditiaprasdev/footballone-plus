"use client";
import useSWR from "swr";
import Cup from "./cup";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const fetcher = (url) =>
  fetch(url, {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": `${process.env.NEXT_PUBLIC_API_KEY_DEV}`,
      "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
    },
  }).then((res) => res.json());

export default function PickUCLSeason({ season, league }) {
  const { data, error, isLoading } = useSWR(
    `https://api-football-v1.p.rapidapi.com/v3/standings?season=${season}&league=${league}`,
    fetcher,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  if (error)
    return (
      <div className="mt-5 w-full flex flex-col mx-auto">failed to load</div>
    );
  if (isLoading)
    return (
      <div className="mt-5 w-full flex gap-5 mx-auto items-center">
        <AiOutlineLoading3Quarters className="animate-spin"></AiOutlineLoading3Quarters>
        <p>Loading...</p>
      </div>
    );

  return (
    <>
      {data.response == "" ? (
        <p className="mt-5 rounded-full px-2 bg-red-100 text-red-500 w-fit">
          No Records
        </p>
      ) : (
        ""
      )}
      <div className="grid 2xl:grid-cols-2 gap-10 mt-5 mb-5">
        {data.response.map((res) => (
          <>
            {res.league.standings.map((stand) => (
              <>
                <Cup props={stand} />
              </>
            ))}
          </>
        ))}
      </div>
    </>
  );
}
