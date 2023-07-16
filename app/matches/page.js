import Times from "./time";
import Zone from "./zone";

export default function Animate() {
  return (
    <>
      <div className="p-5 md:p-0 md:py-5 lg:p-0 lg:py-5 w-full md:w-5/6 lg:w-[95%] xl:w-5/6 flex flex-col gap-5 mx-auto">
        <div className="flex flex-col gap-3">
          {/* <p className="font-semibold text-lg">Todays's Matches</p> */}
          {/* <Times /> */}
        </div>
        <Zone />
      </div>
    </>
  );
}
