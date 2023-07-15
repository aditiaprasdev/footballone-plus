"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Init({ params }) {
  const { data, error, isLoading } = useSWR(
    `http://localhost:3000/api/thesportsdb/${params.pageid}`,
    fetcher
  );

  if (error) {
    return <p>Error in {params.pageid}</p>;
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className="flex flex-col gap-5 p-10">
        <Link href={`/dinamis`}>back</Link>

        <div className="flex gap-5 items-center">
          <img
            src={data.leagues.map((logo) => logo.strBadge)}
            width={50}
            height={50}
          ></img>
          <p className="text-2xl font-semibold">
            {data.leagues.map((logo) => logo.strLeague)}
          </p>
        </div>
      </div>
    </>
  );
}
