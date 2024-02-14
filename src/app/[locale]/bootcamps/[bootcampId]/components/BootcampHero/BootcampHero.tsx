import React from "react";
import Image from "next/image";
import Button from "@/app/[locale]/components/Button";
import BootcampHeroTitleBox from "./BootcampHeroTitleBox";
import HeroBg from "../../../../../../../public/imgs/herobg.webp";

import HeroImg from "../../../../../../../public/bootcamps_imgs/bootcampheroimg.jpg";

import clockIcon from "../../../../../../../public/bootcamps_imgs/clockIcon.png";
import mapIcon from "../../../../../../../public/bootcamps_imgs/mapIcon.png";
import calendarIcon from "../../../../../../../public/bootcamps_imgs/calendarIcon.png";
import certifiedIcon from "../../../../../../../public/bootcamps_imgs/certifiedIcon.png";

export default function BootcampHero() {
  return (
    <div className="mt-72 w-[96%] ">
      <Image
        src={HeroBg}
        alt={"BackGround of the Hero Section"}
        className="absolute top-0 right-0 w-full -ml-52 -z-10 "
        priority
      />
      <BootcampHeroTitleBox />
      <div className="flex gap-12 items-center mt-10">
        <div className="rounded-[2rem] bg-white w-1/2 p-14 flex flex-col gap-16 shadow-lg">
          <h2 className="text-[3rem] font-medium">Advanced HTML/CSS</h2>
          <p className="text-[1.6rem] font-light text-gray-1 w-11/12">
            Vitae congue eu consequat ac felis placerat vestibulum lectus mauris
            ultrices. Cursus sit amet dictum sit amet justo donec enim diam
            porttitor lacus luctus accumsan Cursus sit amet dictum sit amet
            justo donec enim diam porttitor lacus luctus accumsan tortor
            posuere.Vitae congue eu consequat ac felis placerat vestibulum
            lectus mauris ultrices.
          </p>
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
              <div className="flex items-center gap-2">
                <Image src={mapIcon} alt={"map Icon"} width={25} height={25} />
                <p className="text-gray-1  text-[1.6rem] font-medium">
                  {"On site"}
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-12">
            <Button className=" w-[18rem] px-6 bg-color-yellow-2 text-white font-normal border-[0.3rem] border-transparent py-2 ">
              Enrol Now!
            </Button>
            <div className=" flex gap-6 rounded-full px-6 bg-bg-color-bootcamps font-medium border-[0.3rem] border-transparent py-3 text-[1.6rem]   ">
              <p>
                Next Session : <span>Nov 11</span> &#8212; <span>Dec 18</span>
              </p>
              <div className="w-[2.4rem] bg-white rounded-full p-[0.2rem] border border-gray-300  ">
                <div className=" bg-color-green-1 rounded-full  h-full w-full "></div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <Image
            src={HeroImg}
            alt={"a lapton on the desk"}
            height={600}
            width={900}
            className="h-[46rem] rounded-[3rem] w-full"
          />
        </div>
      </div>
    </div>
  );
}
