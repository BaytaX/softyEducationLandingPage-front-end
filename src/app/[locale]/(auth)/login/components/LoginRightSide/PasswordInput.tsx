"use client";
import React, { useState } from "react";
import Input from "@/app/[locale]/(dashboard)/components/Input";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { useTranslations } from "next-intl";

export default function PasswordInput({
  label,
  inputClassName,
  children,
  iconClassName,
}: {
  label: string;
  inputClassName?: string;
  iconClassName?: string;
  children?: any;
}) {
  const t = useTranslations("Login");
  const [type, setType] = useState("password");
  function handleShow() {
    setType("text");
  }
  function handleHide() {
    setType("password");
  }
  return (
    <Input
      label={label}
      type={type}
      placeHolder={t("password")}
      inputClassName={inputClassName}
    >
      {type === "password" ? (
        <FaEye
          className={`absolute text-[2.2rem] fill-color-blue-7 cursor-pointer  ${iconClassName}  1/2xl:text-[3rem] lg:!text-[3.6rem]`}
          onClick={handleShow}
        />
      ) : (
        <FaEyeSlash
          className={`absolute text-[2.2rem] fill-color-blue-7 cursor-pointer ${iconClassName}  1/2xl:text-[3rem] lg:!text-[3.6rem]`}
          onClick={handleHide}
        />
      )}

      {children}
    </Input>
  );
}
