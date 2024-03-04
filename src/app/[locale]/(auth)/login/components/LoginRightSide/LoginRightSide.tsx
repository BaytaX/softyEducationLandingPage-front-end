"use client";
import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

import Button from "@/app/[locale]/(dashboard)/components/Button";
import Input from "@/app/[locale]/(dashboard)/components/Input";
import PasswordInput from "./PasswordInput";

import logo from "@/../../public/imgs/logo.png";
import { FaFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import useArabic from "@/helpers/useArabic";

export default function LoginRightSide() {
  const t = useTranslations("Login");
  const isArabic = useArabic();
  return (
    <div className="w-[55%] mt-[14rem] flex justify-center xl:w-full lg:!mt-[20rem]">
      <div className="w-9/12 flex flex-col  gap-14 items-center lg:!gap-24">
        <Image
          src={logo}
          alt={"logo of softy education"}
          width={170}
          height={58}
        />
        <h2 className="text-[3.6rem] font-medium text-center xl:text-[4rem] 1/2xl:text-[4.4rem] lg:!text-[4.8rem]">
          {t("sign_in_to_your_account")}
        </h2>
        <Input
          label={t("email")}
          type="text"
          placeHolder={t("username_or_email_address")}
        />
        <PasswordInput
          label={t("password")}
          iconClassName={
            isArabic
              ? "left-10 top-[42%] lg:top-[44%]"
              : "right-10 top-[42%] lg:top-[44%]"
          }
        >
          <p className="self-end text-gray-500 text-[1.4rem] mt-2 mr-6 transition-all cursor-pointer hover:text-gray-400 xl:text-[1.8rem] 1/2xl:text-[2.2rem] lg:!text-[2.6rem]">
            {t("forgot_password")}
          </p>
        </PasswordInput>
        <div className="flex justify-between w-full flex-wrap gap-6">
          <div className="flex gap-4 items-center  ">
            <input
              type="checkbox"
              className="w-9 h-9 cursor-pointer rounded-2xl border-gray-200 border     accent-color-blue-1 lg:!w-12 lg:!h-12"
            />
            <p className=" text-gray-500 text-[1.5rem]  xl:text-[1.8rem] 1/2xl:text-[2.2rem] lg:!text-[2.6rem]">
              {t("remember_me")}
            </p>
          </div>
          <div className="lg:w-full flex justify-center items-center">
            <Button
              className={
                " py-2  px-20 bg-color-blue-1  text-white xl:text-[1.8rem] 1/2xl:text-[2.2rem] lg:!text-[3.2rem] lg:!py-4 lg:!w-11/12 "
              }
            >
              {t("login")}
            </Button>
          </div>
        </div>
        <div className="flex gap-4 items-center w-full justify-center min-w-max">
          <hr className="w-[30%] md:w-[24%]" />
          <p className="uppercase min-w-max text-[1.6rem] text-gray-500 xl:text-[1.8rem] 1/2xl:text-[2.2rem] lg:!text-[2.6rem]">
            {t("sign_in_with")}
          </p>
          <hr className="w-[30%] md:w-[24%]" />
        </div>
        <div className="flex justify-around w-full  gap-12 lg:flex-wrap">
          <Button className="py-[0.6rem] min-w-max w-[25rem] p-6 border border-gray-300  text-gray-1 flex gap-4 items-center xl:text-[1.8rem] 1/2xl:text-[2.2rem] lg:!text-[3.2rem] lg:!w-2/3 lg:!py-5 lg:!px-36">
            <FcGoogle className="text-[3rem] lg:!text-[4rem]" />
            {t("sign_in_with_google")}
          </Button>
          <Button className="py-[0.6rem] min-w-max w-[25rem]  p-6 border border-gray-300 text-gray-1 flex gap-4 items-center xl:text-[1.8rem] 1/2xl:text-[2.2rem] lg:!text-[3.2rem] lg:!w-2/3 lg:!py-5 lg:!px-32">
            <FaFacebook className="text-[2.8rem] fill-color-blue-2 lg:!text-[4rem]" />
            {t("sign_in_with_facebook")}
          </Button>
        </div>
      </div>
    </div>
  );
}
