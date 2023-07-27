"use client";

import useSWR from "swr";
import Zone from "./zone";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Loca() {
  const { data, error, isLoading } = useSWR(
    `https://api64.ipify.org?format=json`,
    fetcher,
    {
      revalidateOnFocus: false,
      revalidateIfStale: false,
      revalidateOnReconnect: false,
    }
  );

  if (error) return <p>Error</p>;
  if (isLoading) return <p>Loading...</p>;

  return <Zone clientIp={data.ip} />;
}
