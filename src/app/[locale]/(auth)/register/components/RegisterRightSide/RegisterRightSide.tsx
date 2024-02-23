import React from "react";
import Image from "next/image";

import Button from "@/app/[locale]/(dashboard)/components/Button";
import Input from "@/app/[locale]/(dashboard)/components/Input";
import PasswordInput from "../../../login/components/LoginRightSide/PasswordInput";

import logo from "@/../../public/imgs/logo.png";
import { FaFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

export default function RegisterRightSide() {
  return (
    <div className="w-[55%] flex justify-center">
      <div className="w-9/12 flex flex-col mt-[8rem]  gap-10 items-center ">
        <Image
          src={logo}
          alt={"logo of softy education"}
          width={170}
          height={58}
        />
        <h2 className="text-[3.6rem] font-medium ">Create your account</h2>
        <Input
          label={"Full Name"}
          type="text"
          placeHolder={"Your full name here"}
        />
        <Input
          label={"Email"}
          type="text"
          placeHolder={"Username or email address..."}
        />
        <Input
          label={"Phone Number"}
          type="tel"
          placeHolder={"Your Phone number: +216"}
        />
        <div className="flex gap-10 w-full">
          <PasswordInput label={"Password"} iconClassName="top-[56%] right-6" />
          <PasswordInput
            label={"Confirm Password"}
            iconClassName="top-[56%] right-6"
          />
        </div>
        <div className="flex justify-between w-full">
          <div className="flex gap-4 items-center">
            <input
              type="checkbox"
              className="w-9 h-9 cursor-pointer rounded-2xl border-gray-200 border     accent-color-blue-1 "
            />
            <p className=" text-gray-500 text-[1.4rem]  ">
              I Agree with all of your{" "}
              <a href="#" className="text-color-blue-1 hover:opacity-80">
                Terms & Conditions
              </a>
            </p>
          </div>
          <Button className={" py-2  px-12 bg-color-blue-1  text-white"}>
            Create account
          </Button>
        </div>
        <div className="flex items-center w-full">
          <hr className="w-[40%]" />
          <p className="uppercase text-[1.6rem] text-gray-500">Sign up with</p>
          <hr className="w-[40%]" />
        </div>
        <div className="flex justify-around w-full flex-wrap gap-8">
          <Button className="py-[0.6rem] w-[25rem] pl-12 border border-gray-300 text-gray-1 flex gap-4 items-center">
            <FcGoogle className="text-[3rem]" />
            Sign up with Google
          </Button>
          <Button className="py-[0.6rem] w-[25rem] pl-12 border border-gray-300 text-gray-1 flex gap-4 items-center">
            <FaFacebook className="text-[2.8rem] fill-color-blue-2" />
            Sign up with Facebook
          </Button>
        </div>
      </div>
    </div>
  );
}
