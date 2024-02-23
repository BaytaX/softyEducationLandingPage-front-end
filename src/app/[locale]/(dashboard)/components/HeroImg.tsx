import React from "react";

import Image from "next/image";

import MainImg from "@/../../public/imgs/heroImage.png";
import PythonLogo from "@/../../public/imgs/python-original.png";
import HtmlLogo from "@/../../public/imgs/html5-original.png";
import JsLogo from "@/../../public/imgs/javascript-original.png";
import NodeLogo from "@/../../public/imgs/nodejs-original.png";
import CssLogo from "@/../../public/imgs/css3-original.png";

export default function HeroImg() {
  return (
    <div className="relative mr-36 w-[130rem] h-[70rem] ">
      <Image
        src={MainImg}
        alt={"picture of flying books"}
        width={1050}
        height={450}
        draggable={false}
      />
      <Image
        src={PythonLogo}
        alt={"picture of flying books"}
        width={65}
        height={60}
        className="absolute top-[19.5%] left-[23%] "
        draggable={false}
      />
      <Image
        src={HtmlLogo}
        alt={"picture of flying books"}
        width={40}
        height={40}
        className="absolute bottom-[37%] left-[25%]"
        draggable={false}
      />
      <Image
        src={JsLogo}
        alt={"picture of flying books"}
        width={70}
        height={50}
        className="absolute top-[13.5%] right-[14%]"
        draggable={false}
      />
      <Image
        src={NodeLogo}
        alt={"picture of flying books"}
        width={70}
        height={50}
        className="absolute  top-[41%] right-[1%]"
        draggable={false}
      />
      <Image
        src={CssLogo}
        alt={"picture of flying books"}
        width={70}
        height={50}
        className="absolute bottom-[14%] right-[21%]"
        draggable={false}
      />
    </div>
  );
}
