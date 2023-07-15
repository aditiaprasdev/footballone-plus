import React from "react";
import Search from "./search";

export default function Page() {
  return (
    <div className="dark:bg-black">
      <div className="p-5 md:p-0 md:py-5 lg:py-5 w-full md:w-[90%] lg:w-[95%] 2xl:w-[85%] flex flex-col mx-auto">
        <Search />
      </div>
    </div>
  );
}
