import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/navigation/navigation";

import Button from "@/app/[locale]/(dashboard)/components/Button";

import loginImg from "@/../../public/auth_imgs/login_img.png";

export default function LoginLeftSide() {
  const t = useTranslations("Login");
  return (
    <div className="bg-bg-auth-pages h-full w-[44%] flex justify-between flex-col items-center _xl:hidden">
      <div className="flex flex-col gap-10 items-center mt-[24rem]">
        <h2 className="text-[2.5rem]">{t("dont_have_account")}</h2>
        <Link href={"/register"} prefetch={false}>
          <Button className={" py-2  px-16 bg-color-blue-1  text-white"}>
            {t("create_account")}
          </Button>
        </Link>
      </div>
      <Image
        src={loginImg}
        alt={"child is enjoying the moment with his laptop"}
        width={530}
        height={530}
        className="justify-end"
      />
    </div>
  );
}
