import React from "react";
import Navigation from "./nav";

export default function Layout({ children, params }) {
  return (
    <div>
      <Navigation pageid={params.leaguesid} />
      {children}
    </div>
  );
}
