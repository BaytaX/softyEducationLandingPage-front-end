"use client";
import React from "react";
import ExploreCourseBox from "./ExploreCourseBox";
import SwiperComponent from "../swiper/Swiper";
import ExploreCoursesRightBtn from "./ExploreCoursesRightBtn";
import ExploreCoursesLeftBtn from "./ExploreCoursesLeftBtn";

function ExploreSwiperBtns() {
  return (
    <>
      <ExploreCoursesLeftBtn />
      <ExploreCoursesRightBtn />
    </>
  );
}

export default function ExploreCoursesSwiper() {
  const data = [
    {
      title: "Web Design",
      mini_description: "Craft stunning websites with Web Design courses",
      img: "https://s3-alpha-sig.figma.com/img/c83f/0957/c8d81811e843b6070c5160b9521340d2?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NaxWzcAqb~s479V-WnziRmRU7KwIJ5aY--DUCBF28xVvbrE67FIRn1dg5RBrOyb8E44EBa8KA~84XLSmUf1OoUZkZdcDOW~NdgcXC~3200TL5U1jYEdmVBTvFqXN9LytIpyB~T1TWJgZnPNJxOttMPj~36I3Lh2jC3fIYlPDrGcdeMhXJkrYWQFa9p0TCXajrBXs-NT7hTaMSdETT3Ssa~ujErySWcTvwyge2hj26gceUymsfFZ1XfOYl8Y3YGU1zVv683hT6pteZGictCyZh9pdm08zuoBBQlvtoxMjtfOtueb60tsLLXWZ-rFDToxQNq2vrlVtliDlW7c15VeDyw__",
      link: "",
    },
    {
      title: "Web Design",
      mini_description: "Craft stunning websites with Web Design courses",
      img: "https://s3-alpha-sig.figma.com/img/c83f/0957/c8d81811e843b6070c5160b9521340d2?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NaxWzcAqb~s479V-WnziRmRU7KwIJ5aY--DUCBF28xVvbrE67FIRn1dg5RBrOyb8E44EBa8KA~84XLSmUf1OoUZkZdcDOW~NdgcXC~3200TL5U1jYEdmVBTvFqXN9LytIpyB~T1TWJgZnPNJxOttMPj~36I3Lh2jC3fIYlPDrGcdeMhXJkrYWQFa9p0TCXajrBXs-NT7hTaMSdETT3Ssa~ujErySWcTvwyge2hj26gceUymsfFZ1XfOYl8Y3YGU1zVv683hT6pteZGictCyZh9pdm08zuoBBQlvtoxMjtfOtueb60tsLLXWZ-rFDToxQNq2vrlVtliDlW7c15VeDyw__",
      link: "",
    },
    {
      title: "Web Design",
      mini_description: "Craft stunning websites with Web Design courses",
      img: "https://s3-alpha-sig.figma.com/img/c83f/0957/c8d81811e843b6070c5160b9521340d2?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NaxWzcAqb~s479V-WnziRmRU7KwIJ5aY--DUCBF28xVvbrE67FIRn1dg5RBrOyb8E44EBa8KA~84XLSmUf1OoUZkZdcDOW~NdgcXC~3200TL5U1jYEdmVBTvFqXN9LytIpyB~T1TWJgZnPNJxOttMPj~36I3Lh2jC3fIYlPDrGcdeMhXJkrYWQFa9p0TCXajrBXs-NT7hTaMSdETT3Ssa~ujErySWcTvwyge2hj26gceUymsfFZ1XfOYl8Y3YGU1zVv683hT6pteZGictCyZh9pdm08zuoBBQlvtoxMjtfOtueb60tsLLXWZ-rFDToxQNq2vrlVtliDlW7c15VeDyw__",
      link: "",
    },
    {
      title: "Web Design",
      mini_description: "Craft stunning websites with Web Design courses",
      img: "https://s3-alpha-sig.figma.com/img/c83f/0957/c8d81811e843b6070c5160b9521340d2?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NaxWzcAqb~s479V-WnziRmRU7KwIJ5aY--DUCBF28xVvbrE67FIRn1dg5RBrOyb8E44EBa8KA~84XLSmUf1OoUZkZdcDOW~NdgcXC~3200TL5U1jYEdmVBTvFqXN9LytIpyB~T1TWJgZnPNJxOttMPj~36I3Lh2jC3fIYlPDrGcdeMhXJkrYWQFa9p0TCXajrBXs-NT7hTaMSdETT3Ssa~ujErySWcTvwyge2hj26gceUymsfFZ1XfOYl8Y3YGU1zVv683hT6pteZGictCyZh9pdm08zuoBBQlvtoxMjtfOtueb60tsLLXWZ-rFDToxQNq2vrlVtliDlW7c15VeDyw__",
      link: "",
    },
    {
      title: "Web Design",
      mini_description: "Craft stunning websites with Web Design courses",
      img: "https://s3-alpha-sig.figma.com/img/c83f/0957/c8d81811e843b6070c5160b9521340d2?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NaxWzcAqb~s479V-WnziRmRU7KwIJ5aY--DUCBF28xVvbrE67FIRn1dg5RBrOyb8E44EBa8KA~84XLSmUf1OoUZkZdcDOW~NdgcXC~3200TL5U1jYEdmVBTvFqXN9LytIpyB~T1TWJgZnPNJxOttMPj~36I3Lh2jC3fIYlPDrGcdeMhXJkrYWQFa9p0TCXajrBXs-NT7hTaMSdETT3Ssa~ujErySWcTvwyge2hj26gceUymsfFZ1XfOYl8Y3YGU1zVv683hT6pteZGictCyZh9pdm08zuoBBQlvtoxMjtfOtueb60tsLLXWZ-rFDToxQNq2vrlVtliDlW7c15VeDyw__",
      link: "",
    },
  ];
  return (
    <SwiperComponent
      data={data}
      Component={ExploreCourseBox}
      SwiperButtons={ExploreSwiperBtns}
      className="relative rounded-[2rem] [direction:ltr]"
      classNameSlide="!w-[44rem]"
    />
  );
}
