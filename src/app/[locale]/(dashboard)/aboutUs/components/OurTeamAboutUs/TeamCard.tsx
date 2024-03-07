import React from "react";
import Image from "next/image";
import { LiaShareSquare } from "react-icons/lia";
import { BASE_URL } from "@/constants/backend";
import { useTranslations } from "next-intl";

type TeamCardPropsType = {
  member: {
    id: number;
    attributes: {
      name: string;
      job: string;
      description: string;
      link: string;
      picture: { data: { attributes: { url: string } } };
    };
  } | null;
};

export default function TeamCard({ member }: TeamCardPropsType) {
  const t = useTranslations("AboutUs.Team");

  if (!member) return;
  const { name, job, description, link, picture } = member?.attributes;
  const avatar = picture?.data?.attributes?.url;
  return (
    <div className="flex gap-10  _2xl:flex-col _2xl:items-center _2xl:-ml-[10rem] _1/2xl:ml-0">
      {
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={
            avatar
              ? `${BASE_URL}${avatar}`
              : "https://previews.123rf.com/images/kritchanut/kritchanut1406/kritchanut140600093/29213195-male-silhouette-avatar-profile-picture.jpg"
          }
          alt={"team member"}
          width={330}
          height={330}
          className="w-[33rem] h-[33rem] rounded-[2rem]  border-2 border-color-blue-border _2xl:w-[80%] _2xl:h-fit _1/2xl:w-full _2xl:!rounded-[6rem] "
          loading="lazy"
          draggable={false}
        />
      }
      <div>
        <div className="flex flex-col justify-around h-full _2xl:items-center _2xl:gap-8">
          <div className="flex flex-col _2xl:items-center">
            <h3 className="text-[4rem] tracking-wide font-semibold _1/2xl:text-[6.4rem] _2xl:text-center  _lg:!text-[8.2rem]">
              {name}
            </h3>
            <p className="text-[2.4rem] text-gray-1 _2xl:text-center  _1/2xl:text-[3.6rem] _lg:!text-[4.4rem]">
              {job}
            </p>
          </div>
          <p className="text-[1.5rem] text-gray-2 font-light _2xl:text-center _2xl:w-2/3 _2xl:text-[1.8rem] _1/2xl:text-[2.4rem] _1/2xl:w-full _lg:!text-[3.4rem]">
            {description}
          </p>
          <a
            href={link ? link : "#"}
            target="_blank"
            className="text-color-blue-1 text-[1.5rem] hover:opacity-80 flex items-center gap-2 _2xl:text-[1.8rem] _1/2xl:text-[2.4rem] _lg:!text-[3.2rem]"
          >
            {t("get_in_touch_with_me")} <LiaShareSquare />
          </a>
        </div>
      </div>
    </div>
  );
}
