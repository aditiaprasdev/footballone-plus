"use client";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Zone() {
  const { data } = useSWR(`https://www.fotmob.com/api/mylocation`, fetcher);

  return <p>{JSON.stringify(data)}</p>;
}
