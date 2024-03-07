import React from "react";
import { Link } from "@/navigation/navigation";

type LinkNavBar = {
  href:
    | "/"
    | "/blog"
    | "/bootcamps"
    | "/contact"
    | "/courses"
    | "/logIn"
    | "/aboutUs";

  children: string;
};

export default function LinkNavBar({ href, children }: LinkNavBar) {
  return (
    <Link
      href={href}
      className="text-[1.8rem] font-normal hover:opacity-80  _1/2xl:!text-[2.6rem] "
      prefetch={false}
    >
      {children}
    </Link>
  );
}
