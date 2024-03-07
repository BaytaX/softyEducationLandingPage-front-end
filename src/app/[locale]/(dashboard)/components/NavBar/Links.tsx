import React from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/navigation/navigation";

import LinkNavBar from "./LinkNavBar";
import Button from "../Button";
import MenuPopUp from "./MenuPopUp";

export default function Links() {
  const t = useTranslations("Navbar");
  return (
    <div className="flex items-center gap-[4.9rem] mr-8 ml-8">
      <div className="flex items-center gap-[4.9rem] _2xl:hidden">
        <LinkNavBar href={"/"}>{t("Home")}</LinkNavBar>
        <LinkNavBar href={"/courses"}>{t("Courses")}</LinkNavBar>
        <LinkNavBar href={"/bootcamps"}>{t("Bootcamps")}</LinkNavBar>
        <LinkNavBar href={"/blog"}>{t("Blog")}</LinkNavBar>
        {/* <LinkNavBar href={"/contact"}>{t("Contact")}</LinkNavBar> */}
        <LinkNavBar href={"/aboutUs"}>{t("AboutUs")}</LinkNavBar>
      </div>
      <Link href={"/login"} prefetch={false}>
        <Button
          className={
            " py-2  px-[6rem] bg-color-blue-1  text-white _xl:text-[2.4rem] _lg:!text-[3.2rem] w-max _xs:hidden"
          }
        >
          {t("Log In")}
        </Button>
      </Link>
      <MenuPopUp />
    </div>
  );
}
