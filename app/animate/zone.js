"use client";
import useSWR from "swr";
import Lists from "./lists";

const fetcher = (url) =>
  fetch(url, {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "a6494ece3emsh3c5a74823b39f7cp159cfajsna87626026a7a",
      "X-RapidAPI-Host":
        "find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com",
    },
  }).then((res) => res.json());

export default function Zone() {
  const { data, error, isLoading } = useSWR(
    `https://find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com/iplocation?apikey=873dbe322aea47f89dcf729dcc8f60e8`,
    fetcher
  );

  if (error) return <p>Error</p>;
  if (isLoading) return <p>Loading</p>;

  return (
    <>
      <Lists tz={data.timezone} code={data.countryISO3} />
    </>
  );
}
