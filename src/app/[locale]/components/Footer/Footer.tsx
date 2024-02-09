import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { TfiWorld } from "react-icons/tfi";

import getFullYear from "@/helpers/getFullYear";

import Logo from "../Logo";

import footerLine from "../../../../../public/imgs/footerline.png";
import facebookLogo from "../../../../../public/imgs/facebookbtn.png";
import youtubeLogo from "../../../../../public/imgs/youtubebtn.png";
import ballLogo from "../../../../../public/imgs/ballbtn.png";
import figmaLogo from "../../../../../public/imgs/figmabtn.png";
import whatsupLogo from "../../../../../public/imgs/whatsupbtn.png";
import telIcon from "../../../../../public/imgs/telbtn.png";
import emailIcon from "../../../../../public/imgs/emailbtn.png";
import SelectLang from "./SelectLang";

export default function Footer() {
  const t = useTranslations("Home.Footer");

  return (
    <div className="mt-44 relative flex flex-col items-center ">
      <Image
        src={footerLine}
        alt={"a line for decoration"}
        className="absolute min-w-[144rem] -z-10"
      />
      <div className="mt-28 flex flex-col items-center  gap-10 ">
        <div className="-ml-24">
          <Logo width={140} height={10} />
        </div>
        <p className="text-[1.5rem] text-gray-400 font-thin text-center w-7/12 ">
          {t("description")}
        </p>
        <div className="flex items-center gap-4">
          <Image
            src={facebookLogo}
            alt={"facebook Logo"}
            width={48}
            height={48}
            className="hover:opacity-80 transition-all cursor-pointer"
          />
          <Image
            src={youtubeLogo}
            alt={"Youtube Logo"}
            width={48}
            height={48}
            className="hover:opacity-80 transition-all cursor-pointer"
          />
          <Image
            src={ballLogo}
            alt={"ball Logo"}
            width={48}
            height={48}
            className="hover:opacity-80 transition-all cursor-pointer"
          />
          <Image
            src={figmaLogo}
            alt={"figma Logo"}
            width={48}
            height={48}
            className="hover:opacity-80 transition-all cursor-pointer"
          />
          <Image
            src={whatsupLogo}
            alt={"whats up Logo"}
            width={48}
            height={48}
            className="hover:opacity-80 transition-all cursor-pointer"
          />
        </div>
        <div className="flex items-center gap-24 mt-20">
          <a
            href="#"
            className="text-[1.5rem] text-gray-400 hover:opacity-80 transition-all font-extralight"
          >
            {t("AboutUs")}
          </a>
          <a
            href="#"
            className="text-[1.5rem] text-gray-400 hover:opacity-80 transition-all font-extralight"
          >
            {t("Bootcamps")}
          </a>
          <a
            href="#"
            className="text-[1.5rem] text-gray-400 hover:opacity-80 transition-all font-extralight"
          >
            {t("Courses")}
          </a>
          <a
            href="#"
            className="text-[1.5rem] text-gray-400 hover:opacity-80 transition-all font-extralight"
          >
            {t("Events")}
          </a>
          <a
            href="#"
            className="text-[1.5rem] text-gray-400 hover:opacity-80 transition-all font-extralight"
          >
            {t("Blog")}
          </a>
          <a
            href="#"
            className="text-[1.5rem] text-gray-400 hover:opacity-80 transition-all font-extralight"
          >
            {t("Contact")}
          </a>
          <a
            href="#"
            className="text-[1.5rem] text-gray-400 hover:opacity-80 transition-all font-extralight"
          >
            {t("FAQ")}
          </a>
          <a
            href="#"
            className="text-[1.5rem] text-gray-400 hover:opacity-80 transition-all font-extralight"
          >
            {t("Sitemap")}
          </a>
          <a
            href="#"
            className="text-[1.5rem] text-gray-400 hover:opacity-80 transition-all font-extralight"
          >
            {t("PrivacyPolicy")}
          </a>
          <a
            href="#"
            className="text-[1.5rem] text-gray-400 hover:opacity-80 transition-all font-extralight"
          >
            {t("TermsOfUse")}
          </a>
        </div>
        <div className="flex justify-between items-center w-11/12 mt-6">
          <div className="flex items-center gap-20">
            <div className="flex items-center gap-4">
              <Image src={telIcon} alt={"phone icon"} width={48} height={48} />
              <div>
                <p className="text-[1.3rem] text-gray-400 font-extralight">
                  {t("HaveaQuestion")}
                </p>
                <p className="text-[1.7rem] text-color-blue-4 font-medium ">
                  +216 55 999 888
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Image
                src={emailIcon}
                alt={"email icon"}
                width={48}
                height={48}
              />
              <div>
                <p className="text-[1.3rem] text-gray-400 font-extralight">
                  {t("ContactUsAt")}
                </p>
                <p className="text-[1.7rem] text-color-blue-4 font-medium ">
                  SoftyEdu@outlook.com
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-12">
            <div className="flex items-center gap-2">
              <TfiWorld className="fill-gray-1  text-[2rem]" />
              <SelectLang />
            </div>

            <p className="text-gray-400 font-extralight text-[1.4rem]">
              &#169; {getFullYear()} , {t("allRightsReserved")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
