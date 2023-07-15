"use client";
import React from "react";
import useSWR from "swr";
import { useTheme } from "next-themes";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function AllLeagues() {
  const { data, error, isLoading } = useSWR(
    `/api/onefootball/allLeagues`,
    fetcher
  );

  if (error) {
    return <p>Error</p>;
  }
  if (isLoading) {
    return <p>Loading...</p>;
  }
  const { theme } = useTheme();
  return (
    <>
      <div className="grid gap-5">
        <p className="font-semibold text-xl">Popular Leagues</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {data.popular.map((list) => (
            <Link
              href={`/fotmob/${list.id}/matches`}
              className="flex flex-col items-center gap-3 hover:shadow-md border rounded-md py-3 dark:bg-zinc-800 dark:border-zinc-800 dark:hover:border-zinc-400 hover:transition hover:duration-300 hover:ease-in-out hover:border-black"
            >
              <img
                src={`${
                  theme == "light"
                    ? `https://images.fotmob.com/image_resources/logo/leaguelogo/${list.id}.png`
                    : `https://images.fotmob.com/image_resources/logo/leaguelogo/dark/${list.id}.png`
                }`}
                alt=""
                height={30}
                width={30}
                className=""
              />
              <p>{list.name}</p>
            </Link>
          ))}
        </div>
        <p className="font-semibold text-xl">All Leagues</p>
        <Accordion type="single" collapsible className="w-full">
          {data.international.map((int) => (
            <AccordionItem value="item-1" className="dark:border-b-zinc-800">
              <AccordionTrigger>
                <div className="flex gap-3 items-center">
                  <img
                    src={`https://images.fotmob.com/image_resources/logo/teamlogo/${int.ccode.toLowerCase()}.png`}
                    width={30}
                    height={30}
                  ></img>
                  <p>{int.name}</p>
                </div>
              </AccordionTrigger>

              {int.leagues.map((league) => (
                <AccordionContent className="group">
                  <Link
                    href={`/fotmob/${league.id}/matches`}
                    className="flex gap-2 items-center w-full group-hover:bg-zinc-100 dark:group-hover:bg-zinc-900 px-3 py-2 rounded-md"
                  >
                    <img
                      src={`${
                        theme == "light"
                          ? `https://images.fotmob.com/image_resources/logo/leaguelogo/${league.id}.png`
                          : `https://images.fotmob.com/image_resources/logo/leaguelogo/dark/${league.id}.png`
                      }`}
                      alt=""
                      height={30}
                      width={30}
                      className=""
                    />
                    <p>{league.name}</p>
                  </Link>
                </AccordionContent>
              ))}
            </AccordionItem>
          ))}
          {data.countries.map((country, index) => (
            <AccordionItem
              value={`item-${+index + 2}`}
              key={index}
              className="dark:border-b-zinc-800"
            >
              <AccordionTrigger>
                <div className="flex gap-3 items-center">
                  <img
                    src={`https://images.fotmob.com/image_resources/logo/teamlogo/${country.ccode.toLowerCase()}.png`}
                    width={30}
                    height={30}
                  ></img>
                  <p>{country.name}</p>
                </div>
              </AccordionTrigger>
              <>
                {country.leagues.map((league) => (
                  <AccordionContent key={league.id} className="group">
                    <Link
                      href={`/fotmob/${league.id}/matches`}
                      className="flex gap-2 items-center w-full group-hover:bg-zinc-100 dark:group-hover:bg-zinc-900 px-3 py-2 rounded-md"
                    >
                      <img
                        src={`${
                          theme == "light"
                            ? `https://images.fotmob.com/image_resources/logo/leaguelogo/${league.id}.png`
                            : `https://images.fotmob.com/image_resources/logo/leaguelogo/dark/${league.id}.png`
                        }`}
                        alt=""
                        height={30}
                        width={30}
                        className=""
                      />
                      <p>{league.name}</p>
                    </Link>
                  </AccordionContent>
                ))}
              </>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </>
  );
}
