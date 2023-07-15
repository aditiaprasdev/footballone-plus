import Lists from "./lists";
import Times from "./time";
import TimeZone from "./timezone";

export default function Animate() {
  const timezone = new Intl.DateTimeFormat().resolvedOptions().timeZone;
  return (
    <>
      <div className="p-5 md:p-0 md:py-5 lg:p-0 lg:py-5 w-full md:w-5/6 lg:w-5/6 flex flex-col gap-5 mx-auto">
        <div className="flex flex-col gap-3">
          <p className="font-semibold text-lg">Todays's Matches</p>
          <Times />
          <p>{timezone}</p>
        </div>
        <Lists />
      </div>
    </>
  );
}
