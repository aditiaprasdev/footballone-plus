import Link from "next/link";
import React from "react";

export default function Cups() {
  return (
    <section className="w-full dark:bg-black">
      <div className="p-5 md:p-0 md:py-5 lg:py-5 w-full md:w-3/4 lg:w-3/4 flex flex-col gap-5 mx-auto dark:bg-black">
        <Link href={`/competitions`}>back</Link>
        Cups
      </div>
    </section>
  );
}
