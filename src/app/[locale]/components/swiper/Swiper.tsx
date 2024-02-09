"use client";
import React from "react";
import { v4 as uuidv4 } from "uuid";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

interface SwiperComponentPropsType {
  Component: any;
  data: any;
  spaceBetween?: number;
  className?: string;
  width: string;
  SwiperButtons?: any;
}

export default function SwiperComponent({
  data,
  Component,
  spaceBetween,
  className,
  SwiperButtons,
  width,
}: SwiperComponentPropsType) {
  return (
    <Swiper
      className={className}
      spaceBetween={spaceBetween ? spaceBetween : 0}
      slidesPerView={"auto"}
    >
      {data?.map((ele: any) => (
        <SwiperSlide key={uuidv4()} className={`${width}`}>
          <Component data={ele} />
        </SwiperSlide>
      ))}
      <>{SwiperButtons ? <SwiperButtons /> : null}</>
    </Swiper>
  );
}
