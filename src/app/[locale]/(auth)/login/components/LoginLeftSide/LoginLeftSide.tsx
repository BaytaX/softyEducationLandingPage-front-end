import React from "react";
import Image from "next/image";
import { Link } from "@/navigation/navigation";

import Button from "@/app/[locale]/(dashboard)/components/Button";

import loginImg from "@/../../public/auth_imgs/login_img.png";

export default function LoginLeftSide() {
  return (
    <div className="bg-bg-auth-pages h-full w-[44%] flex justify-between flex-col items-center">
      <div className="flex flex-col gap-10 items-center mt-[28rem]">
        <h2 className="text-[2.5rem]">Don’t have an account yet?</h2>
        <Link href={"/register"}>
          <Button className={" py-2  px-16 bg-color-blue-1  text-white"}>
            Create an account
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
