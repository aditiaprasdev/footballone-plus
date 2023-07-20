"use client";
import useSWR from "swr";
import Lists from "./lists";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Zone() {
  const { data, error, isLoading } = useSWR(
    `/api/onefootball/mylocation`,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  if (error) return <p>Error</p>;
  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      <p>{data.country_code3}</p>
      <p>{data.time_zone.name}</p>
      <Lists tz={data.time_zone.name} code={data.country_code3} />
    </>
  );
}
