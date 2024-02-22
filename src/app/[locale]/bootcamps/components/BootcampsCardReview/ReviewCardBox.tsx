import React from "react";
import Image from "next/image";
import star from "../../../../../../public/imgs/star.png";
import emptyStar from "../../../../../../public/imgs/grayStar.png";
import RatingStars from "@/app/[locale]/components/RatingStars/RatingStars";
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
    <div className="py-20 px-16 w-full bg-white rounded-[2rem] flex flex-col gap-8 mt-24">
      <p className="text-[1.6rem] text-gray-1">{`"${comment}"`}</p>
      <div className="flex gap-2">
        {arr1?.map((ele, i) => (
          <Image src={star} alt="" key={i} width={22} height={22} />
        ))}
        {arr2?.map((ele, i) => (
          <Image src={emptyStar} alt="" key={i} width={22} height={22} />
        ))}
      </div>
      {/* <RatingStars value={rate} /> */}
      <div className="flex gap-6 items-center">
        {
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={`${BASE_URL}${avatar_img}`}
            alt={"Avatar"}
            className="object-cover w-[10rem] h-[10rem]"
            draggable={false}
          />
        }
        <div>
          <p className="text-[1.5rem] font-semibold tracking-wide">
            {user_name}
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
