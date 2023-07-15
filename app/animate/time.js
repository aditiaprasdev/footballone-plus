"use client";
import moment from "moment-timezone";
import React, { useEffect, useState } from "react";

export default function Times() {
  const [time, setTime] = useState(moment());

  useEffect(() => {
    setInterval(() => setTime(moment()), 0);
  }, []);

  return (
    <>
      <p>{time.local().format("LLLL")}</p>
    </>
  );
}
