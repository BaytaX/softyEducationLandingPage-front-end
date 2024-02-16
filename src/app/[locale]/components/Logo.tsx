import React from "react";
import Image from "next/image";
import LogoImg from "../../../../public/imgs/softylogo.png";

type LogoPropsType = {
  width: number;
  height: number;
};

export default function Logo({ width, height }: LogoPropsType) {
  return (
    <div className="mt-2  ml-28">
      <Image
        src={LogoImg}
        alt="Softy Education Logo"
        width={width}
        height={height}
      />
    </div>
  );
}
