"use client";
import TableCup from "./tablecup";

export default function CupStandings({ params }) {
  return (
    <>
      <TableCup leagueid={params.cupsid} />
    </>
  );
}
