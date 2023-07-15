"use client";
import useSWR from "swr";

const fetcher = (url) =>
  fetch(url, {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "a6494ece3emsh3c5a74823b39f7cp159cfajsna87626026a7a",
      "X-RapidAPI-Host":
        "find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com",
    },
  }).then((res) => res.json());

export default function TimeZone() {
  const { data } = useSWR(
    `https://find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com/iplocation?apikey=873dbe322aea47f89dcf729dcc8f60e8`,
    fetcher
  );

  return JSON.stringify(data);
}
