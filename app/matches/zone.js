"use client";
import useSWR from "swr";
import Lists from "./lists";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Zone({ clientIp }) {
  const { data, error, isLoading } = useSWR(
    `/api/onefootball/mylocation?ip=${clientIp}`,
    fetcher,
    {
      revalidateOnFocus: false,
      revalidateIfStale: false,
      revalidateOnReconnect: false,
    }
  );

  if (error) return <p>Error</p>;
  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      <Lists
        tz={data.time_zone.name}
        code={data.country_code3}
        country={data.country_name}
        flag={data.country_flag}
      />
    </>
  );
}
