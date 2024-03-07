import React from "react";
import Image from "next/image";

import { BASE_URL } from "@/constants/backend";

export default function ReviewBox({ data }: any) {
  const { title, description, rate, user_name, user_profession, user_avatar } =
    data?.attributes;
  const avatar_img = user_avatar?.data?.attributes?.url;
  let arr1 = Array.apply(null, Array(rate));
  let arr2 = Array.apply(null, Array(5 - rate));

  return (
    <div className="rounded-[3rem] shadow-lg  w-full h-fit flex flex-col gap-12 items-start p-20 pb-10 _2xl:gap-20  ">
      <div className="flex flex-col gap-6 _2xl:gap-12 ">
        <p className="text-[1.8rem] font-semibold _2xl:text-[2.4rem] _1/2xl:text-[3.2rem]">
          “{title}”
        </p>
        <div className="flex gap-2">
          {arr1?.map((ele, i) => (
            <Image
              src={"/imgs/Star.png"}
              alt=""
              key={i}
              width={21}
              height={21}
              className="_2xl:w-[2.8rem] _1/2xl:w-[3.2rem]"
            />
          ))}
          {arr2?.map((ele, i) => (
            <Image
              src={"/imgs/grayStar.png"}
              alt=""
              key={i}
              width={21}
              height={21}
              className="_2xl:w-[2.8rem] _1/2xl:w-[3.2rem]"
            />
          ))}
        </div>

        <p className="text-[1.6rem] font-extralight text-gray-2  _2xl:text-[2.2rem]  _1/2xl:text-[2.6rem] _lg:text-[2.8rem]">
          {`"${description}"`}
        </p>
      </div>
      <div className="flex gap-6">
        {
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={`${BASE_URL}${avatar_img}`}
            alt={"Avatar"}
            className="object-cover w-[5rem] h-[5rem] rounded-full _2xl:w-[8rem] _2xl:h-[8rem] _1/2xl:w-[10rem] _1/2xl:h-[10rem] "
            loading="lazy"
            draggable={false}
          />
        }
        <div>
          <p className="text-[1.5rem] font-semibold tracking-wide _2xl:text-[2.2rem] _1/2xl:text-[2.8rem]">
            {user_name}
          </p>
          <p className="font-extralight text-[1.5rem] tracking-wide _2xl:text-[2.2rem] _1/2xl:text-[2.8rem]">
            {user_profession}
          </p>
        </div>
      </div>
    </div>
  );
}
