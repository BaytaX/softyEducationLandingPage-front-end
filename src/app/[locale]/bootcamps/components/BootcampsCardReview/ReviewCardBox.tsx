import React from "react";
import RatingStars from "@/app/[locale]/components/RatingStars/RatingStars";
import avatar from "../../../../../../public/bootcamps_imgs/avatar.jpg";
import Image from "next/image";

type ReviewCardBoxPropsType = {
  data: {
    comment: string;
    rate: number;
    userName: string;
    user_profession: string;
    job_experience: number;
    user_pic_url: string;
  };
};

export default function ReviewCardBox({ data }: ReviewCardBoxPropsType) {
  const {
    comment,
    rate,
    userName,
    user_profession,
    job_experience,
    user_pic_url,
  } = data;
  return (
    <div className="py-10 px-16 w-full bg-white rounded-[2rem] flex flex-col gap-8 mt-24">
      <p className="text-[1.6rem] text-gray-1">{`"${comment}"`}</p>
      <RatingStars value={rate} />
      <div className="flex gap-6 items-center">
        <Image
          src={avatar}
          alt={"Avatar"}
          className="object-cover w-[10rem] h-[10rem]"
        />
        <div>
          <p className="text-[1.5rem] font-semibold tracking-wide">
            {userName}
          </p>
          <p className="font-extralight text-[1.5rem] tracking-wide">
            {user_profession}
            <span> {`with ${job_experience} years experience `}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
