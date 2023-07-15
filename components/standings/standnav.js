"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function StandNav({ id, league }) {
  const pathname = usePathname();
  return (
    <Link
      href={`/standings/${id}`}
      key={id}
      className={`${
        pathname == `/standings/${id}`
          ? "text-blue-700 transition ease-in-out px-3 py-1 rounded-lg bg-blue-100 2xl:underline-offset-[27px] 2xl:underline 2xl:decoration-2 w-fit"
          : "hover:text-gray-700 transition ease-in-out px-3 py-1 rounded-lg hover:bg-gray-200 2xl:hover:underline-offset-[27px] 2xl:hover:underline 2xl:hover:decoration-2 w-fit"
      }`}
    >
      {league}
    </Link>
  );
}
