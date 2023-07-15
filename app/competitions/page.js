import LeagueList from "./leaguelist";
import CupList from "./cupslist";

export default function Leagues({ params }) {
  return (
    <>
      <div className="min-h-screen w-full dark:bg-black">
        <div className="mx-auto flex w-full flex-col gap-5 p-5 md:w-3/4 md:p-0 md:py-10 lg:w-3/4 lg:p-0 lg:py-10">
          <p className="text-3xl font-bold md:text-5xl">
            Home of{" "}
            <span className="bg-emerald-500 px-2 text-white">football</span> is
            here
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et
            quia cum consequatur, perferendis ex nemo sit repellat illum
            delectus distinctio possimus voluptas inventore ipsam illo quod eos
            expedita. Error quaerat tenetur harum provident enim expedita
            necessitatibus nam suscipit delectus.
          </p>

          <p className="mt-5 text-lg font-bold md:text-2xl">Leagues</p>
          <LeagueList />
          <p className="mt-5 text-lg font-bold md:text-2xl">Championship</p>
          <CupList />
        </div>
      </div>
    </>
  );
}
