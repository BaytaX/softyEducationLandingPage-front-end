"use client";
import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/navigation/navigation";
import { TfiWorld } from "react-icons/tfi";

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
import { EMAIL, PHONE_NUMBER } from "@/constants/contactInfo";
import ArabicWrapper from "../ArabicWrapper";
import Copyright from "./Copyright";

export default function Footer() {
  const t = useTranslations("Home.Footer");

  return (
    <ArabicWrapper>
      <div className="mt-44 relative flex flex-col items-center ">
        <Image
          src={footerLine}
          alt={"a line for decoration"}
          className="absolute w-full -z-10"
          draggable={false}
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
              draggable={false}
            />
            <Image
              src={youtubeLogo}
              alt={"Youtube Logo"}
              width={48}
              height={48}
              className="hover:opacity-80 transition-all cursor-pointer"
              draggable={false}
            />
            <Image
              src={ballLogo}
              alt={"ball Logo"}
              width={48}
              height={48}
              className="hover:opacity-80 transition-all cursor-pointer"
              draggable={false}
            />
            <Image
              src={figmaLogo}
              alt={"figma Logo"}
              width={48}
              height={48}
              className="hover:opacity-80 transition-all cursor-pointer"
              draggable={false}
            />
            <Image
              src={whatsupLogo}
              alt={"whats up Logo"}
              width={48}
              height={48}
              className="hover:opacity-80 transition-all cursor-pointer"
              draggable={false}
            />
          </div>
          <div className="flex items-center gap-24 mt-20">
            <Link
              href={"/aboutUs"}
              className="text-[1.5rem] text-gray-400 hover:opacity-80 transition-all font-extralight"
            >
              {t("AboutUs")}
            </Link>
            <Link
              href={"/bootcamps"}
              className="text-[1.5rem] text-gray-400 hover:opacity-80 transition-all font-extralight"
            >
              {t("Bootcamps")}
            </Link>
            <Link
              href={"/courses"}
              className="text-[1.5rem] text-gray-400 hover:opacity-80 transition-all font-extralight"
            >
              {t("Courses")}
            </Link>
            <a
              href="#"
              className="text-[1.5rem] text-gray-400 hover:opacity-80 transition-all font-extralight"
            >
              {t("Events")}
            </a>
            <Link
              href={"/blog"}
              className="text-[1.5rem] text-gray-400 hover:opacity-80 transition-all font-extralight"
            >
              {t("Blog")}
            </Link>
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
                <Image
                  src={telIcon}
                  alt={"phone icon"}
                  width={48}
                  height={48}
                  draggable={false}
                />
                <div>
                  <p className="text-[1.3rem] text-gray-400 font-extralight">
                    {t("HaveaQuestion")}
                  </p>
                  <p className="text-[1.7rem] text-color-blue-4 font-medium ">
                    {PHONE_NUMBER}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Image
                  src={emailIcon}
                  alt={"email icon"}
                  width={48}
                  height={48}
                  draggable={false}
                />
                <div>
                  <p className="text-[1.3rem] text-gray-400 font-extralight">
                    {t("ContactUsAt")}
                  </p>
                  <p className="text-[1.7rem] text-color-blue-4 font-medium ">
                    {EMAIL}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-12">
              <div className="flex items-center gap-2">
                <TfiWorld className="fill-gray-1  text-[2rem]" />
                <SelectLang />
              </div>
              <Copyright />
            </div>
          </div>
        </div>
      </div>
    </ArabicWrapper>
  );
}
