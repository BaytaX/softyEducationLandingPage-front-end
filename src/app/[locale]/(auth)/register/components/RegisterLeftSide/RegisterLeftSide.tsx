import React from "react";
import Image from "next/image";
import { Link } from "@/navigation/navigation";

import Button from "@/app/[locale]/(dashboard)/components/Button";

import registerImg from "@/../../public/auth_imgs/signup_img.png";

export default function RegisterLeftSide() {
  return (
    <div className="bg-bg-auth-pages h-full w-[44%] flex flex-col items-center">
      <div className="flex flex-col gap-10 items-center mt-[26rem]">
        <h2 className="text-[2.5rem]">Already have an account?</h2>
        <Link href={"/login"}>
          <Button className={" py-2  px-20 bg-color-blue-1  text-white"}>
            Log in
          </Button>
        </Link>
      </div>
      <Image
        src={registerImg}
        alt={"cartoon girl is flying"}
        width={600}
        height={600}
        className="justify-end"
      />
    </div>
  );
}
