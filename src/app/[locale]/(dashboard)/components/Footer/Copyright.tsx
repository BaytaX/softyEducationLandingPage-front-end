"usse client";
import React, { useState } from "react";
import { getCurrentYear } from "@/helpers/getFullYear";
import { useTranslations } from "next-intl";

export default function Copyright() {
  const t = useTranslations("Home.Footer");
  let currentYear = getCurrentYear();
  const [thisYear, setThisYear] = useState(currentYear);

  function updateYearEveryMinute() {
    const updateInterval = 60000; // 1 minute in milliseconds
    setInterval(() => {
      let currentYear = getCurrentYear();
      if (currentYear !== thisYear) setThisYear(currentYear);
    }, updateInterval);
  }
  updateYearEveryMinute();

  return (
    <p className="text-gray-400 font-extralight text-[1.4rem] [direction:ltr] _xl:text-[1.6rem] _1/2xl:!text-[2.8rem]">
      &#169; {thisYear} , {t("allRightsReserved")}
    </p>
  );
}
