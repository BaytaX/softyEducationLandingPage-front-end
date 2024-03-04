import React from "react";
import Image from "next/image";

import RatingStars from "@/app/[locale]/(dashboard)/components/RatingStars/RatingStars";

import star from "@/../../public/imgs/star.png";
import emptyStar from "@/../../public/imgs/grayStar.png";

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
    <div className="py-20 px-16 w-full bg-white rounded-[2rem] flex flex-col gap-8 mt-24 2xl:mt-10 1/2xl:gap-16">
      <p className="text-[1.6rem] text-gray-1 2xl:text-[2rem] 1/2xl:text-[2.4rem] lg:!text-[3rem]">{`"${comment}"`}</p>
      <div className="flex gap-2">
        {arr1?.map((ele, i) => (
          <Image
            src={star}
            alt=""
            key={i}
            width={22}
            height={22}
            className="w-[7%] 2xl:w-[5%] lg:!w-[7%]  "
          />
        ))}
        {arr2?.map((ele, i) => (
          <Image
            src={emptyStar}
            alt=""
            key={i}
            width={22}
            height={22}
            className="w-[7%] 2xl:w-[5%] lg:!w-[7%]"
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
            className="object-cover w-[10rem] h-[10rem] rounded-xl lg:!w-[14rem] lg:!h-[14rem]"
            draggable={false}
          />
        }
        <div>
          <p className="text-[1.5rem] font-semibold tracking-wide 2xl:text-[1.8rem] 1/2xl:text-[2.2rem] lg:!text-[2.6rem]">
            {user_name}
          </p>
          <p className="font-extralight text-[1.5rem] tracking-wide 2xl:text-[1.8rem] 1/2xl:text-[2.2rem] lg:!text-[2.6rem]">
            {user_profession}
            <span> {`with ${job_experience} years experience `}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
