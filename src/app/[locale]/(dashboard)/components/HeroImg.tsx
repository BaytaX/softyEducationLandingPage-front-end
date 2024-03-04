import React from "react";

import Image from "next/image";

import MainImg from "@/../../public/heroimg.png";
import PythonLogo from "@/../../public/imgs/python-original.png";
import HtmlLogo from "@/../../public/imgs/html5-original.png";
import JsLogo from "@/../../public/imgs/javascript-original.png";
import NodeLogo from "@/../../public/imgs/nodejs-original.png";
import CssLogo from "@/../../public/imgs/css3-original.png";

export default function HeroImg() {
  return (
    <div className=" relative flex justify-center items-center mr-20 w-[48%] h-[50rem] 6xl:w-[60%] 6xl:mr-10 6xl:h-full lg:!w-[70%]">
      <Image
        src={MainImg}
        alt={"picture of flying books"}
        width={500}
        height={450}
        draggable={false}
        className="rotate-[-20deg]"
      />
      <Image
        src={PythonLogo}
        alt={"Python Logo"}
        width={65}
        height={60}
        className="absolute top-4 left-[18%] w-[11%] "
        draggable={false}
      />
      <Image
        src={HtmlLogo}
        alt={"Html Logo"}
        width={40}
        height={40}
        className="absolute bottom-[44%] left-[14%] w-[8%]  "
        draggable={false}
      />
      <Image
        src={JsLogo}
        alt={"Js Logo"}
        width={70}
        height={50}
        className="absolute top-[8%] right-[8%] w-[12%]  "
        draggable={false}
      />
      <Image
        src={NodeLogo}
        alt={"Node Logo"}
        width={70}
        height={50}
        className="absolute  top-[41%] -right-10 w-[12%] "
        draggable={false}
      />
      <Image
        src={CssLogo}
        alt={"Css Logo"}
        width={70}
        height={50}
        className="absolute bottom-4 right-[21%] w-[12%] "
        draggable={false}
      />
    </div>
  );
}
