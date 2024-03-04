"use client";
import React from "react";
import { v4 as uuidv4 } from "uuid";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination } from "swiper/modules";
import "swiper/css";
// import "swiper/css/pagination";

interface SwiperComponentPropsType {
  Component: any;
  data: any;
  additionalData?: any;
  spaceBetween?: number;
  className?: string;
  classNameSlide?: string;
  SwiperButtons?: any;
  isPaginated?: boolean;
  onChange?: () => void;
  handleClick?: any;
}

export default function SwiperComponent({
  data,
  additionalData,
  Component,
  spaceBetween,
  className,
  SwiperButtons,
  classNameSlide,
  isPaginated,
  onChange,
  handleClick,
}: SwiperComponentPropsType) {
  const pagination = {
    clickable: true,
    enabled: isPaginated ? isPaginated : false,
    dynamicBullets: true,

    renderBullet: function (index: number, className: string) {
      return (
        '<span class="!bg-color-blue-2 !w-[4rem] !h-[0.7rem] !rounded-[2rem]  ' +
        className +
        '">' +
        "</span>"
      );
    },
  };

  return (
    <Swiper
      className={className}
      spaceBetween={spaceBetween ? spaceBetween : 0}
      slidesPerView={"auto"}
      // pagination={pagination}
      // modules={[Pagination]}
      onSlideChange={onChange ? onChange : undefined}
    >
      {data?.map((ele: any) => (
        <SwiperSlide key={uuidv4()} className={`${classNameSlide}`}>
          {handleClick && additionalData ? (
            <Component
              data={ele}
              handleClick={handleClick}
              additionalData={additionalData}
            />
          ) : additionalData ? (
            <Component data={ele} additionalData={additionalData} />
          ) : (
            <Component data={ele} />
          )}
        </SwiperSlide>
      ))}
      <>{SwiperButtons ? <SwiperButtons /> : null}</>
    </Swiper>
  );
}
