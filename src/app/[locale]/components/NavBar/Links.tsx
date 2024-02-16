import React from "react";
import { useTranslations } from "next-intl";

import Button from "../Button";
import LinkNavBar from "./LinkNavBar";

export default function Links() {
  const t = useTranslations("Navbar");
  return (
    <div className="flex items-center gap-[4.9rem] mr-8 ">
      <LinkNavBar href={"/"}>{t("Home")}</LinkNavBar>
      <LinkNavBar href={"/courses"}>{t("Courses")}</LinkNavBar>
      <LinkNavBar href={"/bootcamps"}>{t("Bootcamps")}</LinkNavBar>
      <LinkNavBar href={"/blog"}>{t("Blog")}</LinkNavBar>
      {/* <LinkNavBar href={"/contact"}>{t("Contact")}</LinkNavBar> */}
      <LinkNavBar href={"/aboutUs"}>{t("AboutUs")}</LinkNavBar>

      <Button className={" py-2  px-[6rem] bg-color-blue-1  text-white"}>
        {t("Log In")}
      </Button>
    </div>
  );
}
