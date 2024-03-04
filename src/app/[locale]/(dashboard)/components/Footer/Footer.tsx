"use client";
import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/navigation/navigation";

import Logo from "../Logo";
import Copyright from "./Copyright";
import SelectLang from "./SelectLang";
import ArabicWrapper from "../ArabicWrapper";

import footerLine from "@/../../public/imgs/footerline.png";
import facebookLogo from "@/../../public/imgs/facebookbtn.png";
import youtubeLogo from "@/../../public/imgs/youtubebtn.png";
import ballLogo from "@/../../public/imgs/ballbtn.png";
import figmaLogo from "@/../../public/imgs/figmabtn.png";
import whatsupLogo from "@/../../public/imgs/whatsupbtn.png";
import telIcon from "@/../../public/imgs/telbtn.png";
import emailIcon from "@/../../public/imgs/emailbtn.png";

import { TfiWorld } from "react-icons/tfi";

import { EMAIL, PHONE_NUMBER } from "@/constants/contactInfo";

export default function Footer() {
  const t = useTranslations("Home.Footer");

  return (
    <ArabicWrapper>
      <div className="mt-44 relative flex flex-col items-center pb-36">
        <Image
          src={footerLine}
          alt={"a line for decoration"}
          className="absolute w-full -z-10 "
          draggable={false}
        />
        <div className="mt-28 flex flex-col items-center  gap-10 xl:gap-32">
          <div className="-ml-24">
            <Logo width={140} height={10} />
          </div>
          <p className="text-[1.8rem]  text-gray-400 font-thin text-center w-7/12 xl:w-10/12 xl:text-[2.4rem] lg:!text-[3.2rem] ">
            {t("description")}
          </p>
          <div className="flex items-center gap-4 sm:flex-wrap sm:justify-center 1/2xl:!gap-12">
            <Image
              src={facebookLogo}
              alt={"facebook Logo"}
              width={48}
              height={48}
              className="hover:opacity-80 transition-all cursor-pointer  w-[5rem] h-[5rem] 1/2xl:!w-[8rem] 1/2xl:!h-[8rem]"
              draggable={false}
            />
            <Image
              src={youtubeLogo}
              alt={"Youtube Logo"}
              width={48}
              height={48}
              className="hover:opacity-80 transition-all cursor-pointer  w-[5rem] h-[5rem] 1/2xl:!w-[8rem] 1/2xl:!h-[8rem]"
              draggable={false}
            />
            <Image
              src={ballLogo}
              alt={"ball Logo"}
              width={48}
              height={48}
              className="hover:opacity-80 transition-all cursor-pointer  w-[5rem] h-[5rem] 1/2xl:!w-[8rem] 1/2xl:!h-[8rem]"
              draggable={false}
            />
            <Image
              src={figmaLogo}
              alt={"figma Logo"}
              width={48}
              height={48}
              className="hover:opacity-80 transition-all cursor-pointer  w-[5rem] h-[5rem] 1/2xl:!w-[8rem] 1/2xl:!h-[8rem]"
              draggable={false}
            />
            <Image
              src={whatsupLogo}
              alt={"whats up Logo"}
              width={48}
              height={48}
              className="hover:opacity-80 transition-all cursor-pointer  w-[5rem] h-[5rem] 1/2xl:!w-[8rem] 1/2xl:!h-[8rem]"
              draggable={false}
            />
          </div>
          <div className="flex items-center justify-center w-11/12 gap-24 mt-20 flex-wrap">
            <Link
              href={"/aboutUs"}
              className="text-[1.6rem]  text-gray-400 hover:opacity-80 transition-all font-extralight 2xl:text-[2rem] 1/2xl:!text-[2.6rem] "
            
            >
              {t("AboutUs")}
            </Link>
            <Link
              href={"/bootcamps"}
              className="text-[1.5rem]  text-gray-400 hover:opacity-80 transition-all font-extralight 1/2xl:!text-[2.6rem] 2xl:text-[2rem]"
            >
              {t("Bootcamps")}
            </Link>
            <Link
              href={"/courses"}
              className="text-[1.5rem]  text-gray-400 hover:opacity-80 transition-all font-extralight 1/2xl:!text-[2.6rem] 2xl:text-[2rem]"
            >
              {t("Courses")}
            </Link>
            <a
              href="#"
              className="text-[1.5rem]  text-gray-400 hover:opacity-80 transition-all font-extralight 1/2xl:!text-[2.6rem] 2xl:text-[2rem]"
            >
              {t("Events")}
            </a>
            <Link
              href={"/blog"}
              className="text-[1.5rem]  text-gray-400 hover:opacity-80 transition-all font-extralight 1/2xl:!text-[2.6rem] 2xl:text-[2rem]"
            >
              {t("Blog")}
            </Link>
            <a
              href="#"
              className="text-[1.5rem]  text-gray-400 hover:opacity-80 transition-all font-extralight 1/2xl:!text-[2.6rem] 2xl:text-[2rem]"
            >
              {t("Contact")}
            </a>
            <a
              href="#"
              className="text-[1.5rem]  text-gray-400 hover:opacity-80 transition-all font-extralight 1/2xl:!text-[2.6rem] 2xl:text-[2rem]"
            >
              {t("FAQ")}
            </a>
            <a
              href="#"
              className="text-[1.5rem]  text-gray-400 hover:opacity-80 transition-all font-extralight 1/2xl:!text-[2.6rem] 2xl:text-[2rem]"
            >
              {t("Sitemap")}
            </a>
            <a
              href="#"
              className="text-[1.5rem]  text-gray-400 hover:opacity-80 transition-all font-extralight 1/2xl:!text-[2.6rem] 2xl:text-[2rem]"
            >
              {t("PrivacyPolicy")}
            </a>
            <a
              href="#"
              className="text-[1.5rem]  text-gray-400 hover:opacity-80 transition-all font-extralight 1/2xl:!text-[2.6rem] 2xl:text-[2rem]"
            >
              {t("TermsOfUse")}
            </a>
          </div>
          <div className="flex justify-between items-center w-11/12 mt-6 flex-wrap 2xl:gap-20 xl:!gap-44">
            <div className="flex items-center gap-20 flex-wrap xl:justify-center xl:w-full xl-gap-10  1/2xl:!justify-start 1/2xl:ml-28 sm:!ml-10">
              <div className="flex items-start gap-4 1/2xl:gap-10">
                <Image
                  src={telIcon}
                  alt={"phone icon"}
                  width={48}
                  height={48}
                  draggable={false}
                  className="w-[5rem] h-[5rem] 1/2xl:!w-[8rem] 1/2xl:!h-[8rem]"
                />
                <div>
                  <p className="text-[1.3rem] xl:text-[1.6rem] text-gray-400 font-extralight 1/2xl:!text-[2.8rem]">
                    {t("HaveaQuestion")}
                  </p>
                  <p className="text-[1.7rem] text-color-blue-4 font-medium 1/2xl:!text-[2.8rem]">
                    {PHONE_NUMBER}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 1/2xl:gap-10">
                <Image
                  src={emailIcon}
                  alt={"email icon"}
                  width={48}
                  height={48}
                  draggable={false}
                  className="w-[5rem] h-[5rem] 1/2xl:!w-[8rem] 1/2xl:!h-[8rem]"
                />
                <div>
                  <p className="text-[1.3rem] xl:text-[1.6rem] text-gray-400 font-extralight 1/2xl:!text-[2.8rem]">
                    {t("ContactUsAt")}
                  </p>
                  <p className="text-[1.7rem] text-color-blue-4 font-medium 1/2xl:!text-[2.8rem]">
                    {EMAIL}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-12 flex-wrap xl:justify-around xl:w-full 1/2xl:flex-col 1/2xl:gap-20 ">
              {/* <TfiWorld className="fill-gray-1  text-[2rem] 1/2xl:!text-[5rem]" /> */}
              <SelectLang />
              <Copyright />
            </div>
          </div>
        </div>
      </div>
    </ArabicWrapper>
  );
}
