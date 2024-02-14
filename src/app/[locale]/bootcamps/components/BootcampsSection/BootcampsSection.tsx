import React from "react";
import SearchInput from "@/app/[locale]/components/SearchInput";
import SortSelect from "@/app/[locale]/components/SortSelect";
import BootcampsPagination from "../BootcampsPagination";

export default function BootcampsSection() {
  const items = [
    {
      id: 1,
      img: "/imgs/discover_1.png",
      title: "The front-end development Bootcamp",
      description:
        "Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus",
      field: "front-end",
      status: "online",
      duration: "28 weeks",
      learningProgram:
        " Learn the Skills Needed to be a Java Programmer. Quickly master the Java programming language and the packages that constitute its rich set of core libraries.",
      price: 1699,
      link: "",
      skills: ["Front-end  programming ", "Concetipon", " HTML / CSS / JS "],
      level: "Beginner",
    },
    {
      id: 2,
      img: "/imgs/discover_1.png",

      title: "The front-end development Bootcamp",
      description:
        "Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus",
      field: "front-end",
      status: "online",
      duration: "28 weeks",
      learningProgram:
        " Learn the Skills Needed to be a Java Programmer. Quickly master the Java programming language and the packages that constitute its rich set of core libraries.",
      price: 1699,
      link: "",
      skills: ["Front-end  programming ", "Concetipon", " HTML / CSS / JS "],
      level: "Beginner",
    },
    {
      id: 3,
      img: "/imgs/discover_1.png",

      title: "The front-end development Bootcamp",
      description:
        "Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus",
      field: "front-end",
      status: "online",
      duration: "28 weeks",
      learningProgram:
        " Learn the Skills Needed to be a Java Programmer. Quickly master the Java programming language and the packages that constitute its rich set of core libraries.",
      price: 1699,
      link: "",
      skills: ["Front-end  programming ", "Concetipon", " HTML / CSS / JS "],
      level: "Beginner",
    },
    {
      id: 4,
      img: "/imgs/discover_1.png",

      title: "The front-end development Bootcamp",
      description:
        "Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus",
      field: "front-end",
      status: "online",
      duration: "28 weeks",
      learningProgram:
        " Learn the Skills Needed to be a Java Programmer. Quickly master the Java programming language and the packages that constitute its rich set of core libraries.",
      price: 1699,
      link: "",
      skills: ["Front-end  programming ", "Concetipon", " HTML / CSS / JS "],
      level: "Beginner",
    },
    {
      id: 5,
      img: "/imgs/discover_1.png",

      title: "The front-end development Bootcamp",
      description:
        "Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus",
      field: "front-end",
      status: "online",
      duration: "28 weeks",
      learningProgram:
        " Learn the Skills Needed to be a Java Programmer. Quickly master the Java programming language and the packages that constitute its rich set of core libraries.",
      price: 1699,
      link: "",
      skills: ["Front-end  programming ", "Concetipon", " HTML / CSS / JS "],
      level: "Beginner",
    },
    {
      id: 6,
      img: "/imgs/discover_1.png",

      title: "The front-end development Bootcamp",
      description:
        "Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus",
      field: "front-end",
      status: "online",
      duration: "28 weeks",
      learningProgram:
        " Learn the Skills Needed to be a Java Programmer. Quickly master the Java programming language and the packages that constitute its rich set of core libraries.",
      price: 1699,
      link: "",
      skills: ["Front-end  programming ", "Concetipon", " HTML / CSS / JS "],
      level: "Beginner",
    },
    {
      id: 7,
      img: "/imgs/discover_1.png",

      title: "The front-end development Bootcamp",
      description:
        "Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus",
      field: "front-end",
      status: "online",
      duration: "28 weeks",
      learningProgram:
        " Learn the Skills Needed to be a Java Programmer. Quickly master the Java programming language and the packages that constitute its rich set of core libraries.",
      price: 1699,
      link: "",
      skills: ["Front-end  programming ", "Concetipon", " HTML / CSS / JS "],
      level: "Beginner",
    },
    {
      id: 8,
      img: "/imgs/discover_1.png",

      title: "The front-end development Bootcamp",
      description:
        "Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus",
      field: "front-end",
      status: "online",
      duration: "28 weeks",
      learningProgram:
        " Learn the Skills Needed to be a Java Programmer. Quickly master the Java programming language and the packages that constitute its rich set of core libraries.",
      price: 1699,
      link: "",
      skills: ["Front-end  programming ", "Concetipon", " HTML / CSS / JS "],
      level: "Beginner",
    },
  ];
  return (
    <div className="mt-36 ">
      <div className="w-full flex justify-between items-center -ml-12">
        <SearchInput />
        <div className="flex gap-8 items-center">
          <label
            htmlFor="select"
            className="text-[1.6rem] font-light text-gray-1"
          >
            Sort By :
          </label>
          <SortSelect
            options={[
              { value: "trend", label: "Trending" },
              { value: "name-asc", label: "Name: A - Z" },
              { value: "name-desc", label: "Name: Z - A" },
              { value: "created_at-desc", label: "Date : Recent First" },
              { value: "created_at-asc", label: "Date : Oldest First" },
              { value: "price-desc", label: "Decreasing Price" },
              { value: "price-asc", label: "Increasing Price" },
            ]}
          />
        </div>
      </div>
      <div className="relative w-full h-fit mt-28">
        <BootcampsPagination numItems={7} items={items} />
      </div>
    </div>
  );
}
