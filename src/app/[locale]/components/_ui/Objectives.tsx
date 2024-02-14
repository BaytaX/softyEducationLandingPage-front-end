import React from "react";
import Image from "next/image";

import PythonLogo from "../../../../../public/imgs/python-original.png";
import JsLogo from "../../../../../public/imgs/javascript-original.png";
import NodeLogo from "../../../../../public/imgs/nodejs-original.png";
import CssLogo from "../../../../../public/imgs/css3-original.png";
import CheckSentenceBox from "../../courses/components/HeroSectionCourses/CheckSentenceBox";

type ObjectivesPropsType = {
  title: string;
};

export default function Objectives({ title }: ObjectivesPropsType) {
  return (
    <div className="mt-44 flex flex-col gap-16">
      <h2 className="text-[3.2rem] font-medium">Objectives and Outcomes</h2>
      <div className=" bg-bg-color-bootcamps-2 shadow-lg rounded-[2rem] relative w-[98%]  px-16 pb-12">
        <div className="flex flex-col gap-9 py-16 ">
          <h4 className="text-[2rem] font-medium">About {title}</h4>
          <p className="text-[1.6rem] text-gray-500 font-light w-[65%]">
            Vitae congue eu consequat ac felis placerat vestibulum lectus mauris
            ultrices. Cursus sit amet dictum sit amet justo donec enim diam
            porttitor lacus luctus accumsan tortor posuere.Vitae congue eu
            consequat ac felis placerat
          </p>
          <h4 className="text-[2rem] font-medium">
            What you will learn in this {title}
          </h4>
          <div className="flex flex-col gap-12 w-[65%]">
            <div className="flex gap-8">
              <CheckSentenceBox
                title={
                  "Master HTML and CSS to create visually appealing web pages from scratch, setting..."
                }
              />
              <CheckSentenceBox
                title={
                  "Master HTML and CSS to create visually appealing web pages from scratch, setting..."
                }
              />{" "}
            </div>
            <div className="flex gap-8">
              <CheckSentenceBox
                title={
                  "Master HTML and CSS to create visually appealing web pages from scratch, setting..."
                }
              />
              <CheckSentenceBox
                title={
                  "Master HTML and CSS to create visually appealing web pages from scratch, setting..."
                }
              />{" "}
            </div>
          </div>
        </div>
        <Image
          src={PythonLogo}
          alt={"Python Logo"}
          width={60}
          height={60}
          className="rotate-[20deg] opacity-50 absolute top-12 right-56 "
        />
        <Image
          src={JsLogo}
          alt={"Javascript Logo"}
          width={75}
          height={75}
          className="rotate-[-80deg] opacity-50 absolute top-10 right-12 "
        />
        <Image
          src={NodeLogo}
          alt={"Node Js Logo"}
          width={60}
          height={60}
          className="opacity-50 absolute top-48 right-28"
        />
        <Image
          src={CssLogo}
          alt={"CSS Logo"}
          width={40}
          height={40}
          className="rotate-[-50deg] opacity-50 absolute top-48 right-72 "
        />
      </div>
    </div>
  );
}
