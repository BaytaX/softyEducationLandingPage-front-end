"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { subscribe } from "@/api/newsLetter/subscribe";

import Button from "../Button";
import ArabicWrapper from "../ArabicWrapper";

import subscribeImg from "@/../../public/imgs/subscribe.png";
import Error from "../Error";

type SubscribeSectionPropsType = {
  classNameSubscribe?: string;
};

export default function SubscribeSection({
  classNameSubscribe,
}: SubscribeSectionPropsType) {
  const t = useTranslations("Home.Subscribe");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { mutateAsync: postNewsLetter } = useMutation({
    mutationFn: async (client: any) => {
      const error = await subscribe(client);
      if (error) {
        toast.error("Error, Please try again");
      } else {
        toast.success("Success");
      }
    },
  });

  function onSubmit(data: any) {
    postNewsLetter({ data });
    reset();
  }

  return (
    <ArabicWrapper className="mr-10">
      <div
        className={`shadow-2xl flex justify-between mt-52 rounded-[3rem] h-fit  -ml-12 w-full ${classNameSubscribe} `}
      >
        <div className="p-20 flex flex-col gap-20 w-7/12 2xl:w-full 2xl:rounded-[3rem]  2xl:bg-cover bg-subscribe ">
          <p className="text-[2.4rem] tracking-wider  font-medium 2xl:text-white 2xl:text-[3rem] 1/2xl:text-[4rem]">
            {t("title")}
          </p>
          <p className="text-[1.8rem] font-extralight text-gray-500 w-9/12 2xl:text-white 2xl:text-[2.2rem] 2xl:w-11/12 1/2xl:text-[2.8rem] 1/2xl:!w-full">
            {t("description")}
          </p>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-20"
          >
            <div className="flex flex-col gap-10">
              <div>
                <input
                  type="text"
                  placeholder={t("placeHolderName")}
                  className="w-[84%] 2xl:bg-color-semi-transparent 2xl:border 2xl:border-white 2xl:placeholder:font-normal 2xl:text-[2rem] 2xl:placeholder:text-[2rem] 2xl:text-white 2xl:placeholder:text-white  pr-10 py-3 rounded-full text-[1.6rem] placeholder:text-[1.6rem] 1/2xl:!text-[2.6rem] 1/2xl:placeholder:!text-[2.8rem] placeholder:text-gray-400 lg:w-full placeholder:tracking-wide placeholder:font-thin border border-gray-400 pl-14"
                  {...register("full_name", {
                    required: "This field is required",
                  })}
                />
                {errors.full_name && <Error>{errors.full_name.message}</Error>}
              </div>
              <div>
                <input
                  type="text"
                  placeholder={t("placeHolderEmail")}
                  className="w-[84%] 2xl:bg-color-semi-transparent 2xl:border 2xl:border-white 2xl:placeholder:font-normal 2xl:text-[2rem] 2xl:placeholder:text-[2rem]  2xl:text-white  2xl:placeholder:text-white  pr-10  py-3 rounded-full text-[1.6rem] placeholder:text-[1.6rem] 1/2xl:!text-[2.6rem] 1/2xl:placeholder:!text-[2.8rem] placeholder:text-gray-400 lg:w-full placeholder:tracking-wide placeholder:font-thin border border-gray-400 pl-14"
                  {...register("email", {
                    required: "This field is required",
                    validate: (value) =>
                      (value.includes("@") && value.includes(".")) ||
                      "Email should be like smth@example.com",
                  })}
                />
                {errors.email && <Error>{errors.email.message}</Error>}
              </div>
              <div>
                <input
                  type="text"
                  placeholder={t("placeHolderPhone")}
                  className="w-[84%] 2xl:bg-color-semi-transparent 2xl:border 2xl:border-white 2xl:placeholder:font-normal 2xl:text-[2rem] 2xl:placeholder:text-[2rem]  2xl:text-white  2xl:placeholder:text-white  pr-10  py-3 rounded-full text-[1.6rem] placeholder:text-[1.6rem] 1/2xl:!text-[2.6rem] 1/2xl:placeholder:!text-[2.8rem] placeholder:text-gray-400 lg:w-full placeholder:tracking-wide placeholder:font-thin border border-gray-400 pl-14"
                  {...register("phone_number", {
                    required: "This field is required",
                    validate: (value) =>
                      (value.includes("+") &&
                        !isNaN(value.slice(1)) &&
                        value.length > 7) ||
                      "Phone Number must include country code (+216) and contains only numbers",
                  })}
                />
                {errors.phone_number && (
                  <Error>{errors.phone_number.message}</Error>
                )}
              </div>
            </div>
            <Button className="bg-color-blue-2 py-4 2xl:text-[2rem]  text-[1.6rem] font-normal tracking-wide text-white w-[50%] 1/2xl:text-[2.8rem]  md:!w-full ">
              {t("subscribeNow")}
            </Button>
          </form>
          {/* <div className="h-[6.4rem] xl:h-[7.2rem] lg:!h-[8.4rem] w-[70%] 2xl:w-[50%]  py-4  font-normal tracking-wide text-white   md:!w-full">
            <button
              className="btn xs:w-full [&>span]:2xl:text-[2rem]  [&>span]:text-[1.6rem]
[&>span]:1/2xl:text-[2.8rem]"
            >
              <span>{t("subscribeNow")}</span>
              <img
                className="testimg"
                src="https://i.cloudup.com/2ZAX3hVsBE-3000x3000.png"
                height="62"
                width="62"
              />
            </button>{" "}
          </div> */}
        </div>
        <div className="2xl:hidden w-1/2">
          <Image
            src={subscribeImg}
            alt={"picture of tech products"}
            className="h-full w-full "
            draggable={false}
          />
        </div>
      </div>
    </ArabicWrapper>
  );
}
