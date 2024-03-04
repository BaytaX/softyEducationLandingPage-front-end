import React from "react";

import Logo from "../Logo";
import Links from "./Links";

import ArabicWrapper from "../ArabicWrapper";

export default function NavBar() {
  return (
    <ArabicWrapper className="[&>div]:!px-20 2xl:[&>div]:!pl-0 2xl:[&>div]:!pr-16    ">
      <div className="flex shadow-lg items-center justify-between -ml-16  py-6 px-2  fixed top-14  left-[8.5rem]  w-[94%]  bg-white z-50 rounded-[3rem] xl:w-[90%] ">
        <Logo width={103} height={35} />
        <Links />
      </div>
    </ArabicWrapper>
  );
}
