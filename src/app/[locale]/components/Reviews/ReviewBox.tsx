import Image from "next/image";
import React from "react";
import star from "../../../../../public/imgs/star.png";
import emptyStar from "../../../../../public/imgs/grayStar.png";

import RatingStars from "../RatingStars/RatingStars";
import { BASE_URL } from "@/constants/backend";

export default function ReviewBox({ data }: any) {
  const { title, description, rate, user_name, user_profession, user_avatar } =
    data?.attributes;
  const avatar_img = user_avatar?.data?.attributes?.url;
  let arr1 = Array.apply(null, Array(rate));
  let arr2 = Array.apply(null, Array(5 - rate));

  return (
    <div className="rounded-[3rem] shadow-lg w-[35rem] h-[32rem] flex flex-col justify-between items-start p-20 pb-10">
      <div className="flex flex-col gap-6">
        <p className="text-[1.6rem] font-semibold">“{title}”</p>
        <div className="flex gap-2">
          {arr1?.map((ele, i) => (
            <Image src={star} alt="" key={i} width={21} height={21} />
          ))}
          {arr2?.map((ele, i) => (
            <Image src={emptyStar} alt="" key={i} width={21} height={21} />
          ))}
        </div>

        {/* <RatingStars value={rate} /> */}
        <p className="text-[1.4rem] font-extralight text-gray-2 leading-9">
          {`"${description}"`}
        </p>
      </div>

      <div className="flex gap-6">
        {
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={`${BASE_URL}${avatar_img}`}
            alt={"Avatar"}
            className="object-cover w-[5rem] h-[5rem] rounded-full"
            draggable={false}
          />
        }
        <div>
          <p className="text-[1.5rem] font-semibold tracking-wide">
            {user_name}
          </p>
          <p className="font-extralight text-[1.5rem] tracking-wide">
            {user_profession}
          </p>
        </div>
      </div>
    </div>
  );
}
