"use client";
import React from "react";
import useSWR from "swr";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Matches({ params }) {
  const { data, error, isLoading } = useSWR(
    `/api/onefootball/${params.leaguesid}`,
    fetcher
  );

  if (error) {
    return <p>Error</p>;
  }
  if (isLoading) {
    return (
      <div className="p-5 md:p-0 md:py-5 lg:py-5 w-full md:w-[90%] lg:w-[95%] 2xl:w-[85%] flex gap-2 items-center mx-auto">
        <AiOutlineLoading3Quarters className="animate-spin"></AiOutlineLoading3Quarters>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="p-5 md:p-0 md:py-5 lg:py-5 w-full md:w-[90%] lg:w-[95%] 2xl:w-[85%] flex flex-col mx-auto">
      {JSON.stringify(data)}
      {/* {data.details.name} */}
      {/* {params.leaguesid} */}
    </div>
  );
}
