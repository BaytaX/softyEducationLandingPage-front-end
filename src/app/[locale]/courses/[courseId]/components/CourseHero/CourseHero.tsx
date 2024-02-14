import React from "react";
import Image from "next/image";
import Button from "@/app/[locale]/components/Button";
import HeroBg from "../../../../../../../public/courses_imgs/herocoursesbg.webp";

import avatar from "../../../../../../../public/aboutUs-Imgs/team-1.jpeg";

import clockIcon from "../../../../../../../public/bootcamps_imgs/clockIcon.png";
import mapIcon from "../../../../../../../public/bootcamps_imgs/mapIcon.png";
import calendarIcon from "../../../../../../../public/bootcamps_imgs/calendarIcon.png";
import certifiedIcon from "../../../../../../../public/bootcamps_imgs/certifiedIcon.png";
import calendarMark from "../../../../../../../public/courses_imgs/calendarMark.png";
import tagPrice from "../../../../../../../public/courses_imgs/tagPrice.png";

import CourseHeroVideoPlayer from "./CourseHeroVideoPlayer";

export default function CourseHero() {
  return (
    <div className="mt-72 w-[98%]">
      <Image
        src={HeroBg}
        alt={"BackGround of the Hero Section"}
        className="absolute top-48 right-0 w-full -ml-52 -z-10 opacity-25"
        priority
      />
      <div className="flex gap-20 items-center mt-32">
        <CourseHeroVideoPlayer />
        <div className="rounded-[2rem] bg-white w-[48%] px-12 pb-12 pt-6  flex flex-col gap-10 shadow-lg">
          <div className="flex flex-col gap-4">
            <h2 className="text-[2.6rem] font-semibold">
              Get started with Angular fundamentals
            </h2>
            <p className="text-[1.6rem] font-light text-gray-1 w-11/12">
              Vitae congue eu consequat ac felis placerat vestibulum lectus
              mauris ultrices. Cursus sit amet dictum sit amet justo donec enim
              diam porttitor lacus luctus accumsan tortor posuere.Vitae congue
              eu consequat ac felis placerat vestibulum lectus mauris ultrices.
            </p>
          </div>
          <div>
            <h4 className="text-[1.8rem] font-medium">Requirements</h4>
            <p className="text-[1.6rem] font-light text-gray-1 w-11/12">
              Web Development fundamentals, Back-End fundamentals{" "}
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-16">
              <div className="flex items-center gap-2">
                <Image
                  src={clockIcon}
                  alt={"clock Icon"}
                  width={25}
                  height={25}
                />
                <p className="text-gray-1  text-[1.6rem] font-medium">
                  {"8 Weeks"}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src={calendarIcon}
                  alt={"calendar Icon"}
                  width={25}
                  height={25}
                />

                <p className="text-gray-1  text-[1.6rem] font-medium">
                  {"4 Days per week"}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-16">
              <div className="flex items-center gap-2">
                <Image src={mapIcon} alt={"map Icon"} width={25} height={25} />
                <p className="text-gray-1  text-[1.6rem] font-medium">
                  {"On site"}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src={certifiedIcon}
                  alt={" certified Icon"}
                  width={25}
                  height={25}
                />
                <p className="text-gray-1  text-[1.6rem] font-medium">
                  {"Certified Course"}
                </p>
                <a
                  href="#"
                  className="text-gray-400  text-[1.2rem] hover:underline font-extralight"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <div className="flex gap-6 items-center">
            <Image
              src={avatar}
              alt={"avatar"}
              width={60}
              height={60}
              className="rounded-full w-[7rem] h-[7rem]"
            />
            <div className="flex flex-col gap-1">
              <p className="text-[1.6rem] font-light text-gray-1">
                Instructor:
              </p>
              <p className="text-[1.8rem] font-medium">Edward Kaneway</p>
              <p className="text-[1.2rem] font-extralight text-gray-1">
                Full Stack Web Developer
              </p>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <Image
                src={calendarMark}
                alt={"calendar Icon"}
                width={25}
                height={25}
              />
              <p className="  text-[1.6rem] font-medium">
                New session starts on:{" "}
                <span className=" font-light text-gray-1 ml-2">
                  {"Monday 30 Oct, 2023 "}
                </span>
              </p>
            </div>
            <div className="flex justify-between items-end">
              <Button className=" w-[34rem]  px-6 bg-color-blue-2 text-white font-normal border-[0.3rem] border-transparent py-3 ">
                Enroll Now!
              </Button>

              <div className="flex flex-col items-end pr-8">
                <p className="text-[1.8rem] tracking-wide text-color-green-1 line-through font-semibold">{`280 TND`}</p>
                <div className="flex items-center gap-2">
                  <Image
                    src={tagPrice}
                    alt={"tag price Icon"}
                    width={35}
                    height={35}
                  />
                  <p className=" text-[3.2rem] tracking-wide font-semibold">{`160 TND`}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
