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
    <div className="w-[55%] mt-[4rem] flex justify-center xl:w-full xl:mt-[6rem] lg:!mt-[12rem]">
      <div className="w-9/12 flex flex-col  gap-6 items-center xl:gap-12 lg:!gap-20">
        <Image
          src={logo}
          alt={"logo of softy education"}
          width={170}
          height={58}
        />

        <h2 className="text-[3.6rem] font-medium text-center xl:text-[4rem] 1/2xl:text-[4.4rem] lg:!text-[4.8rem]">
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
        <div className="flex gap-10 w-full flex-wrap">
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
        <div className="flex justify-between w-full flex-wrap  gap-8">
          <div className="flex gap-4 items-center">
            <input
              type="checkbox"
              className="w-9 h-9 cursor-pointer rounded-2xl border-gray-200 border     accent-color-blue-1 lg:!w-12 lg:!h-12"
            />
            <p className=" text-gray-500 text-[1.4rem]  xl:text-[1.8rem] 1/2xl:text-[2.2rem] lg:!text-[2.6rem]">
              {t("i_agree_with_all_of_your")}

              <a href="#" className="text-color-blue-1 hover:opacity-80">
                {t("terms_&_conditions")}
              </a>
            </p>
          </div>
          <div className="lg:w-full flex justify-center items-center">
            <Button
              className={
                " py-2  px-12 bg-color-blue-1  text-white xl:text-[1.8rem] 1/2xl:text-[2.2rem] lg:!text-[3.2rem] lg:!py-4 lg:!w-11/12 "
              }
            >
              {t("create_account")}
            </Button>
          </div>
        </div>
        <div className="min-w-max flex items-center w-full gap-4 justify-center">
          <hr className="w-[20%]" />
          <p className="uppercase min-w-max text-[1.6rem] text-gray-500 xl:text-[1.8rem] 1/2xl:text-[2.2rem] lg:!text-[2.6rem]">
            {t("sign_up_with")}
          </p>
          <hr className="w-[20%]" />
        </div>
        <div className="flex justify-around w-full  gap-12 lg:flex-wrap">
          <Button className="py-[0.6rem] min-w-max w-[25rem] p-6 border border-gray-300  text-gray-1 flex gap-4 items-center xl:text-[1.8rem] 1/2xl:text-[2.2rem] lg:!text-[3.2rem] lg:!w-2/3 lg:!py-5 lg:!px-36">
            <FcGoogle className="text-[3rem] lg:!text-[4rem]" />
            {t("sign_up_with_google")}
          </Button>
          <Button className="py-[0.6rem] min-w-max w-[25rem]  p-6 border border-gray-300 text-gray-1 flex gap-4 items-center xl:text-[1.8rem] 1/2xl:text-[2.2rem] lg:!text-[3.2rem] lg:!w-2/3 lg:!py-5 lg:!px-32">
            <FaFacebook className="text-[2.8rem] fill-color-blue-2 lg:!text-[4rem]" />
            {t("sign_up_with_facebook")}
          </Button>
        </div>
      </div>
    </div>
  );
}
