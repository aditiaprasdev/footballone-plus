import React from "react";
import Link from "next/link";

export default function CupsDetail({ params }) {
  return (
    <>
      <section className="w-full dark:bg-black">
        <div className="p-5 md:p-0 md:py-5 lg:p-0 lg:py-5 w-full md:w-3/4 lg:w-3/4 flex flex-col gap-5 mx-auto">
          <Link href={`/competitions`}>back</Link>
          <div>{params.cupsid}</div>
        </div>
      </section>
    </>
  );
}
