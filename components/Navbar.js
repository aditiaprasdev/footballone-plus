"use client";
import {
  BsGithub,
  BsPlusSquareDotted,
  BsTable,
  BsShieldShaded,
  BsTrophyFill,
} from "react-icons/bs";
import { HiMenu } from "react-icons/hi";
import { FaRunning } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import DarkMode from "./darkmode";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="absolute sticky top-0 z-10  flex h-16 w-full items-center bg-white/80 shadow-sm backdrop-blur-sm dark:bg-black/80 dark:shadow-sm dark:shadow-zinc-600">
        <nav className="mx-auto flex w-full items-center justify-between px-5 md:w-3/4 md:px-0 lg:w-3/4">
          <div className="flex items-center space-x-10 lg:w-1/4">
            <Link
              href="/"
              className="flex items-center space-x-2 text-2xl hover:text-indigo-500 dark:hover:text-lime-400"
            >
              <p className="font-extrabold italic">
                One<span className="font-normal italic">Football</span>
              </p>
              <span className="font-bold">
                <BsPlusSquareDotted></BsPlusSquareDotted>
              </span>
            </Link>
          </div>

          <div className="hidden w-full lg:block 2xl:w-2/3">
            <div className="flex w-full justify-evenly">
              <Link
                href="/matches"
                className={`${
                  pathname == "/matches"
                    ? "text-indigo-500 dark:text-lime-400 underline decoration-2 underline-offset-[25px]"
                    : "hover:text-indigo-500 dark:hover:text-lime-400 hover:underline hover:decoration-2 hover:underline-offset-[25px]"
                }`}
              >
                Matches
              </Link>
              <Link
                href="/competitions"
                className={`${
                  pathname == "/competitions"
                    ? "text-indigo-500 dark:text-lime-400 underline decoration-2 underline-offset-[25px]"
                    : "hover:text-indigo-500 dark:hover:text-lime-400 hover:underline hover:decoration-2 hover:underline-offset-[25px]"
                }`}
              >
                Competitions
              </Link>
              <Link
                href="/teams"
                className={`${
                  pathname == "/teams"
                    ? "text-indigo-500 dark:text-lime-400 underline decoration-2 underline-offset-[25px]"
                    : "hover:text-indigo-500 dark:hover:text-lime-400 hover:underline hover:decoration-2 hover:underline-offset-[25px]"
                }`}
              >
                Teams
              </Link>
            </div>
          </div>

          <div className="flex items-center justify-end space-x-3 lg:w-1/4">
            <BsGithub className="text-2xl hover:text-indigo-500 dark:hover:text-lime-400"></BsGithub>
            <DarkMode />
            <button
              className="block lg:hidden"
              onClick={() => {
                setOpen(!open);
              }}
            >
              <HiMenu className="text-2xl hover:text-indigo-500 dark:hover:text-lime-400"></HiMenu>
            </button>
          </div>
        </nav>
      </header>

      {/* menu from smaller screen */}
      <div
        className={`${
          open
            ? "absolute sticky top-16 z-10 block flex h-[200px] w-full flex-col items-center justify-center space-y-3 border-t dark:border-b dark:border-b-zinc-700 dark:border-t-zinc-700 bg-white/80 dark:bg-black/80 px-5 shadow-sm backdrop-blur-sm md:px-[13%]"
            : "absolute sticky top-16 z-10 flex hidden h-[200px] w-full flex-col items-center justify-center space-y-3 border-t dark:border-b dark:border-b-zinc-700 dark:border-t-zinc-700 bg-white/80 dark:bg-black/80 px-10 shadow-sm backdrop-blur-sm"
        }`}
      >
        <Link
          href="/matches"
          onClick={() => {
            setOpen(false);
          }}
          className="flex w-full items-center justify-between hover:text-indigo-500 dark:hover:text-lime-400"
        >
          <p>Matches</p>
          <FaRunning></FaRunning>
        </Link>

        <Link
          href="/competitions"
          onClick={() => {
            setOpen(false);
          }}
          className="flex w-full items-center justify-between hover:text-indigo-500 dark:hover:text-lime-400"
        >
          <p>Competitions</p>
          <BsTrophyFill></BsTrophyFill>
        </Link>

        <Link
          href="/teams"
          onClick={() => {
            setOpen(false);
          }}
          className="flex w-full items-center justify-between hover:text-indigo-500 dark:hover:text-lime-400"
        >
          <p>Teams</p>
          <BsShieldShaded></BsShieldShaded>
        </Link>
      </div>
    </>
  );
}
