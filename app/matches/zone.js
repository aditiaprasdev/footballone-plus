"use client";
import useSWR from "swr";
import Lists from "./lists";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Zone() {
  const { data, error, isLoading } = useSWR(
    `https://api.ipgeolocation.io/ipgeo?apiKey=${process.env.NEXT_PUBLIC_API_KEY_LOCATION}`,
    fetcher,
    { revalidateOnFocus: false }
  );

  if (error) return <p>Error</p>;
  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      <Lists tz={data.time_zone.name} code={data.country_code3} />
    </>
  );
}
