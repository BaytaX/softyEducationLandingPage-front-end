"use client";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/[locale]/(dashboard)/components/Accordion";
import { useLocale, useTranslations } from "next-intl";
import { useQuery } from "@tanstack/react-query";

import ArabicWrapper from "../ArabicWrapper";
import { getFAQ } from "@/api/FAQ/getFAQ";
import MiniLoader from "../MiniLoader";

type FrequentlyAskedQuestionsSectionPropsType = {
  boxClassName?: string;
};

export default function FrequentlyAskedQuestionsSection({
  boxClassName,
}: FrequentlyAskedQuestionsSectionPropsType) {
  const t = useTranslations("Home.FAQ");
  const locale = useLocale();
  const {
    isLoading,
    data: allFAQ,
    error,
  } = useQuery({
    queryKey: ["faqs", locale],
    queryFn: async () => await getFAQ({ locale }),
  });
  return (
    <ArabicWrapper className="mr-16">
      <div
        className={`mt-44 shadow-2xl rounded-[3rem] py-20 px-32 flex flex-col gap-12 w-full  -ml-12 lg:pl-20 lg:pr-4  ${boxClassName}`}
      >
        <h2 className="text-[2.6rem] font-medium 2xl:text-[3.2rem] lg:!text-[4.4rem]">
          {t("title")}
        </h2>
        {isLoading ? (
          <div className="w-fulll flex justify-center items-center">
            <MiniLoader />
          </div>
        ) : (
          allFAQ?.map((ele: any, i: number) => (
            <Accordion type="single" collapsible key={i}>
              <AccordionItem value={`item-${i + 1}`}>
                <AccordionTrigger>{ele?.attributes?.question}</AccordionTrigger>
                <AccordionContent>{ele?.attributes?.response}</AccordionContent>
              </AccordionItem>
            </Accordion>
          ))
        )}

        {/* <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>{t("item_1.ques")}</AccordionTrigger>
            <AccordionContent>{t("item_1.res")}</AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>{t("item_2.ques")}</AccordionTrigger>
            <AccordionContent>{t("item_2.res")}</AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>{t("item_3.ques")}</AccordionTrigger>
            <AccordionContent>{t("item_3.res")}</AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>{t("item_4.ques")}</AccordionTrigger>
            <AccordionContent>{t("item_4.res")}</AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>{t("item_5.ques")}</AccordionTrigger>
            <AccordionContent>{t("item_5.res")}</AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>{t("item_6.ques")}</AccordionTrigger>
            <AccordionContent>{t("item_6.res")}</AccordionContent>
          </AccordionItem>
        </Accordion> */}
      </div>
    </ArabicWrapper>
  );
}
