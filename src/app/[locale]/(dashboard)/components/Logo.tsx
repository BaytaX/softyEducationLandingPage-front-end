import React from "react";
import Image from "next/image";
import { Link } from "@/navigation/navigation";

import LogoImg from "@/../../public/imgs/softylogo.png";

type LogoPropsType = {
  width: number;
  height: number;
};

export default function Logo({ width, height }: LogoPropsType) {
  return (
    <Link href={"/"}>
      <div className="mt-2  ml-28">
        <Image
          src={LogoImg}
          alt="Softy Education Logo"
          width={width}
          height={height}
          draggable={false}
        />
      </div>
    </Link>
  );
}
