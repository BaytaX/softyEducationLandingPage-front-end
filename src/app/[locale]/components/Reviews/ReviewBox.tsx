import Image from "next/image";
import React from "react";
import stars from "../../../../../public/imgs/stars.png";
import avatar from "../../../../../public/imgs/avatar.png";
import RatingStars from "../RatingStars/RatingStars";

export default function ReviewBox({ data }: any) {
  const { title, description, rate, userName, user_profession, user_pic_url } =
    data;
  return (
    <div className="rounded-[3rem] shadow-lg w-[36rem] h-[32rem] flex flex-col justify-between items-start p-20 pb-10">
      <div className="flex flex-col gap-4">
        <p className="text-[1.6rem] font-semibold">“{title}”</p>
        <RatingStars value={rate} />
        <p className="text-[1.4rem] font-extralight text-gray-2 leading-9">
          {`"${description}"`}
        </p>
      </div>

      <div className="flex gap-6">
        <Image
          src={avatar}
          alt={"Avatar"}
          className="object-cover w-[5rem] h-[5rem]"
        />
        <div>
          <p className="text-[1.5rem] font-semibold tracking-wide">
            {userName}
          </p>
          <p className="font-extralight text-[1.5rem] tracking-wide">
            {user_profession}
          </p>
        </div>
      </div>
    </div>
  );
}
