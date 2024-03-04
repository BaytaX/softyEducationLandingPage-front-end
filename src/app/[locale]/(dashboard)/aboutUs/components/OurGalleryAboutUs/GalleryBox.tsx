import React from "react";
import Image from "next/image";

import { BASE_URL } from "@/constants/backend";

export default function GalleryBox({ data }: any) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`${BASE_URL}${data?.attributes?.img?.data?.attributes?.url}`}
      alt={"a picture of the team office "}
      className="w-[32rem] h-[22rem] lg:!w-[60rem] lg:!h-[40rem]"
      draggable={false}
    />
  );
}
