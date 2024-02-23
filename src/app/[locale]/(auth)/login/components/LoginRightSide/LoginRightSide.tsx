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
    <div className="w-[55%] flex justify-center">
      <div className="w-9/12 flex flex-col mt-[14rem] gap-14 items-center ">
        <Image
          src={logo}
          alt={"logo of softy education"}
          width={170}
          height={58}
        />
        <h2 className="text-[3.6rem] font-medium ">
          {t("sign_in_to_your_account")}
        </h2>
        <Input
          label={t("email")}
          type="text"
          placeHolder={t("username_or_email_address")}
        />
        <PasswordInput
          label={t("password")}
          iconClassName={isArabic ? "left-10 top-[42%]" : "right-10 top-[42%]"}
        >
          <p className="self-end text-gray-500 text-[1.4rem] mt-2 mr-6 transition-all cursor-pointer hover:text-gray-400">
            {t("forgot_password")}
          </p>
        </PasswordInput>
        <div className="flex justify-between w-full">
          <div className="flex gap-4 items-center">
            <input
              type="checkbox"
              className="w-9 h-9 cursor-pointer rounded-2xl border-gray-200 border     accent-color-blue-1 "
            />
            <p className=" text-gray-500 text-[1.5rem]  ">{t("remember_me")}</p>
          </div>
          <Button className={" py-2  px-20 bg-color-blue-1  text-white"}>
            {t("login")}
          </Button>
        </div>
        <div className="flex gap-4 items-center w-full justify-center">
          <hr className="w-[30%]" />
          <p className="uppercase text-[1.6rem] text-gray-500">
            {t("sign_in_with")}
          </p>
          <hr className="w-[30%]" />
        </div>
        <div className="flex justify-around w-full flex-wrap gap-4">
          <Button className="py-[0.6rem] w-[26rem] justify-center p-10 border border-gray-300 text-gray-1 flex gap-4 items-center">
            <FcGoogle className="text-[3rem]" />
            {t("sign_in_with_google")}
          </Button>
          <Button className="py-[0.6rem] w-[26rem] justify-center  p-10 border border-gray-300 text-gray-1 flex gap-4 items-center">
            <FaFacebook className="text-[2.8rem] fill-color-blue-2" />
            {t("sign_in_with_facebook")}
          </Button>
        </div>
      </div>
    </div>
  );
}
