"use client";
import useSWR from "swr";
import Lists from "./lists";

const fetcher = (url) =>
  fetch(url, {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": `${process.env.NEXT_PUBLIC_API_KEY_LOC}`,
      "X-RapidAPI-Host":
        "find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com",
    },
  }).then((res) => res.json());

export default function Zone() {
  const { data, error, isLoading } = useSWR(
    `https://find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com/iplocation?apikey=${process.env.NEXT_PUBLIC_API_KEY_LOCPARAMS}`,
    fetcher,
    { revalidateOnFocus: false }
  );

  if (error) return <p>Error</p>;
  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      <Lists tz={data.timezone} code={data.countryISO3} />
    </>
  );
}
