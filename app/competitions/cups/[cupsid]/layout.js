import React from "react";
import CupNav from "./CupNav";

export default function Layout({ children, params }) {
  return (
    <div>
      <CupNav path={params.cupsid} />
      {children}
    </div>
  );
}
