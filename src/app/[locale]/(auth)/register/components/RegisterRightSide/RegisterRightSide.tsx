"use client";
import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

import Button from "@/app/[locale]/(dashboard)/components/Button";
import Input from "@/app/[locale]/(dashboard)/components/Input";
import PasswordInput from "../../../login/components/LoginRightSide/PasswordInput";

import logo from "@/../../public/imgs/logo.png";
import { FaFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

import useArabic from "@/helpers/useArabic";

export default function RegisterRightSide() {
  const t = useTranslations("Register");
  const isArabic = useArabic();

  return (
    <div className="w-[55%] flex justify-center">
      <div className="w-9/12 flex flex-col mt-[8rem]  gap-10 items-center ">
        <Image
          src={logo}
          alt={"logo of softy education"}
          width={170}
          height={58}
        />

        <h2 className="text-[3.6rem] font-medium ">
          {t("create_your_account")}
        </h2>
        <Input
          label={t("full_name")}
          type="text"
          placeHolder={t("your_full_name_here")}
        />
        <Input
          label={t("email")}
          type="text"
          placeHolder={t("username_or_email_address")}
        />
        <Input
          label={t("phone_number")}
          type="text"
          placeHolder={t("your_phone_number")}
        />
        <div className="flex gap-10 w-full">
          <PasswordInput
            label={t("password")}
            iconClassName={
              isArabic ? " top-[56%] left-6" : " top-[56%] right-6"
            }
          />
          <PasswordInput
            label={t("confirm_password")}
            iconClassName={
              isArabic ? " top-[56%] left-6" : " top-[56%] right-6"
            }
          />
        </div>
        <div className="flex justify-between w-full">
          <div className="flex gap-4 items-center">
            <input
              type="checkbox"
              className="w-9 h-9 cursor-pointer rounded-2xl border-gray-200 border     accent-color-blue-1 "
            />
            <p className=" text-gray-500 text-[1.4rem]  ">
              {t("i_agree_with_all_of_your")}

              <a href="#" className="text-color-blue-1 hover:opacity-80">
                {t("terms_&_conditions")}
              </a>
            </p>
          </div>
          <Button className={" py-2  px-12 bg-color-blue-1  text-white"}>
            {t("create_account")}
          </Button>
        </div>
        <div className="flex items-center w-full gap-4 justify-center">
          <hr className="w-[20%]" />
          <p className="uppercase text-[1.6rem] text-gray-500">
            {t("sign_up_with")}
          </p>
          <hr className="w-[20%]" />
        </div>
        <div className="flex justify-around w-full flex-wrap gap-8">
          <Button className="py-[0.6rem] w-[25rem] p-6 border border-gray-300 justify-center text-gray-1 flex gap-4 items-center">
            <FcGoogle className="text-[3rem]" />
            {t("sign_up_with_google")}
          </Button>
          <Button className="py-[0.6rem] w-[25rem] justify-center p-6 border border-gray-300 text-gray-1 flex gap-4 items-center">
            <FaFacebook className="text-[2.8rem] fill-color-blue-2" />
            {t("sign_up_with_facebook")}
          </Button>
        </div>
      </div>
    </div>
  );
}
