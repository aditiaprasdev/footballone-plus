import React from "react";
import CompNav from "./compNav";

export default function Layout({ children, params }) {
  return (
    <div>
      <CompNav path={params.countryid} />
      {children}
    </div>
  );
}
