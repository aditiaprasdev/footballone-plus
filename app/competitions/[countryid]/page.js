"use client";
import TeamCard from "./teamcard";
import useSWR from "swr";
const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Country({ params }) {
  const { data, error, isLoading } = useSWR(
    `https://www.thesportsdb.com/api/v1/json/${process.env.NEXT_PUBLIC_API_KEY_DB}/eventsnextleague.php?id=${params.countryid}`,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );
  if (error) {
    return (
      <div className="mx-auto flex w-full flex-col p-5 md:w-3/4 md:p-0 md:py-5 lg:w-2/3 lg:p-0 lg:py-5">
        Failed to load data. Please try again in few seconds.
      </div>
    );
  }
  if (isLoading) {
    return <div className="mx-auto flex w-full md:p-0 md:py-5 lg:py-5"></div>;
  }

  return (
    <>
      <section className="mx-auto flex w-full flex-col p-5 md:w-3/4 md:p-0 md:py-5 lg:w-2/3 lg:py-5">
        {data.events == null ? (
          <p>No Fixture</p>
        ) : (
          <div className="grid w-full justify-items-center gap-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3">
            {data.events.map((event) => (
              <>
                <TeamCard
                  home={event.strHomeTeam}
                  away={event.strAwayTeam}
                  date={event.dateEvent}
                  time={event.strTimestamp}
                  idleague={event.idLeague}
                  homeid={event.idHomeTeam}
                  awayid={event.idAwayTeam}
                  key={event.idLeague}
                />
              </>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
