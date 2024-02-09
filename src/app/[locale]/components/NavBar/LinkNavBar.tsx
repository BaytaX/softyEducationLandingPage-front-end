import React from "react";
import { Link } from "@/navigation/navigation";

type LinkNavBar = {
  href: "/" | "/blog" | "/bootcamps" | "/contact" | "/courses" | "/logIn";
  children: string;
};

export default function LinkNavBar({ href, children }: LinkNavBar) {
  return (
    <Link href={href} className="text-[1.6rem] font-normal">
      {children}
    </Link>
  );
}
