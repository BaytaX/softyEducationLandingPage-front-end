import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/[locale]/components/Accordion";
import { useTranslations } from "next-intl";
import ArabicWrapper from "../ArabicWrapper";

type FrequentlyAskedQuestionsSectionPropsType = {
  boxClassName?: string;
};

export default function FrequentlyAskedQuestionsSection({
  boxClassName,
}: FrequentlyAskedQuestionsSectionPropsType) {
  const t = useTranslations("Home.FAQ");

  return (
    <ArabicWrapper>
      <div
        className={`mt-44 shadow-2xl rounded-[3rem] py-20 px-32 flex flex-col gap-12 w-full -ml-12 ${boxClassName}`}
      >
        <h2 className="text-[2.6rem] font-medium">{t("title")}</h2>

        <Accordion type="single" collapsible>
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
        </Accordion>
      </div>
    </ArabicWrapper>
  );
}
