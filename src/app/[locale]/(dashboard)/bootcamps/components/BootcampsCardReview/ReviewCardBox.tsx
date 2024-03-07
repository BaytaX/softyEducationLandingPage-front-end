import React from "react";
import Image from "next/image";

import star from "../../../../../../../public/imgs/star.png";
import emptyStar from "../../../../../../../public/imgs/grayStar.png";

import { BASE_URL } from "@/constants/backend";

type ReviewCardBoxPropsType = {
  data: {
    id: number;
    attributes: {
      comment: string;
      rate: number;
      user_name: string;
      user_profession: string;
      job_experience: number;
      user_avatar: {
        data: {
          attributes: {
            url: string;
          };
        };
      };
    };
  };
};

export default function ReviewCardBox({ data }: ReviewCardBoxPropsType) {
  const {
    comment,
    rate,
    user_name,
    user_profession,
    job_experience,
    user_avatar,
  } = data?.attributes;
  const avatar_img = user_avatar?.data?.attributes?.url;

  let arr1 = Array.apply(null, Array(rate));
  let arr2 = Array.apply(null, Array(5 - rate));

  return (
    <div className="py-20 px-16 w-full bg-white rounded-[2rem] flex flex-col gap-8 mt-24 _2xl:mt-10 _1/2xl:gap-16">
      <p className="text-[1.6rem] text-gray-1 _2xl:text-[2rem] _1/2xl:text-[2.4rem] _lg:!text-[3rem]">{`"${comment}"`}</p>
      <div className="flex gap-2">
        {arr1?.map((ele, i) => (
          <Image
            src={"/imgs/Star.png"}
            alt=""
            key={i}
            width={22}
            height={22}
            className="w-[7%] _2xl:w-[5%] _lg:!w-[7%]  "
          />
        ))}
        {arr2?.map((ele, i) => (
          <Image
            src={"/imgs/grayStar.png"}
            alt=""
            key={i}
            width={22}
            height={22}
            className="w-[7%] _2xl:w-[5%] _lg:!w-[7%]"
          />
        ))}
      </div>
      {/* <RatingStars value={rate} /> */}
      <div className="flex gap-6 items-center">
        {
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={`${BASE_URL}${avatar_img}`}
            alt={"Avatar"}
            className="object-cover w-[10rem] h-[10rem] rounded-xl _lg:!w-[14rem] _lg:!h-[14rem]"
            loading="lazy"
            draggable={false}
          />
        }
        <div>
          <p className="text-[1.5rem] font-semibold tracking-wide _2xl:text-[1.8rem] _1/2xl:text-[2.2rem] _lg:!text-[2.6rem]">
            {user_name}
          </p>
          <p className="font-extralight text-[1.5rem] tracking-wide _2xl:text-[1.8rem] _1/2xl:text-[2.2rem] _lg:!text-[2.6rem]">
            {user_profession}
            <span> {`with ${job_experience} years experience `}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
