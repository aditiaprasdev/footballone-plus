"use client";

import useSWR from "swr";
import Zone from "./zone";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Loca() {
  const { data, error, isLoading } = useSWR(
    `https://api.ipify.org/?format=json`,
    fetcher,
    { revalidateOnFocus: false }
  );

  if (error) return <p>Error</p>;
  if (isLoading) return <p>Loading...</p>;

  return <Zone clientIp={data.ip} />;
}
