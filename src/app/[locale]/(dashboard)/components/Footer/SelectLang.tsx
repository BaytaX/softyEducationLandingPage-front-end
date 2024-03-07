"use client";

import React, {
  useState,
  useEffect,
  useRef,
  useTransition,
  ChangeEvent,
} from "react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";

import { usePathname, useRouter } from "@/navigation/navigation";

import usaFlag from "@../../../public/imgs/usa.png";
import frFlag from "@../../../public/imgs/fr.png";
import tnFlag from "@../../../public/imgs/tn.png";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const SelectLang = ({}: {}) => {
  const t = useTranslations("Bootcamps");
  const options = [{ value: "en" }, { value: "fr" }, { value: "ar" }];

  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const locale = useLocale();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleOptionClick = (option: any) => {
    setDropdownOpen(false);
    startTransition(() => {
      router.replace(pathname, { locale: option.value });
    });
  };

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  function labelLang(value: string) {
    if (value === "en")
      return (
        <div className="flex gap-6 items-center ">
          <Image
            src={usaFlag}
            alt={"flag of USA"}
            className="w-[2.4rem] h-[2.4rem] rounded-full _2xl:w-[3.2rem] _2xl:h-[3.2rem] _1/2xl:w-[4.2rem] _1/2xl:h-[4.2rem] _lg:!w-[4.8rem] _lg:!h-[4.8rem] "
          />
          <p className="text-[2rem] font-light text-gray-1 _2xl:text-[2.4rem] _1/2xl:text-[3.2rem] _lg:!text-[4.4rem] ">
            Eng
          </p>
        </div>
      );
    if (value === "fr")
      return (
        <div className="flex gap-6 items-center">
          <Image
            src={frFlag}
            alt={"flag of France"}
            className="w-[2.4rem] h-[2.4rem] rounded-full _2xl:w-[3.2rem] _2xl:h-[3.2rem] _1/2xl:w-[4.2rem] _1/2xl:h-[4.2rem] _lg:!w-[4.8rem] _lg:!h-[4.8rem] "
          />
          <p className="text-[2rem] font-light text-gray-1 _2xl:text-[2.4rem] _1/2xl:text-[3.2rem] _lg:!text-[4.4rem] ">
            Fr
          </p>
        </div>
      );
    if (value === "ar")
      return (
        <div className="flex gap-6 items-center">
          <Image
            src={tnFlag}
            alt={"flag of Tunisia"}
            className="w-[2.4rem] h-[2.4rem] rounded-full _2xl:w-[3.2rem] _2xl:h-[3.2rem] _1/2xl:w-[4.2rem] _1/2xl:h-[4.2rem] _lg:!w-[4.8rem] _lg:!h-[4.8rem] "
          />
          <p className="text-[2rem] font-light text-gray-1 _2xl:text-[2.4rem] _1/2xl:text-[3.2rem] _lg:!text-[4.4rem] ">
            العربية
          </p>
        </div>
      );
  }

  return (
    <div className="relative inline-block">
      <div
        onClick={handleDropdownToggle}
        className={` flex cursor-pointer items-center  py-4  gap-4  bg-white px-8 
        
      `}
      >
        {labelLang(locale)}
        {isDropdownOpen ? (
          <IoIosArrowUp className="text-gray-1 text-[2rem] _2xl:text-[2.6rem] _1/2xl:text-[3.6rem] _lg:!text-[4.4rem] " />
        ) : (
          <IoIosArrowDown className="text-gray-1 text-[2rem] _2xl:text-[2.6rem] _1/2xl:text-[3.6rem] _lg:!text-[4.4rem] " />
        )}
      </div>
      {isDropdownOpen && (
        <div className=" rounded-2xl absolute z-40 mt-[0.2rem] px-6 py-2 left-[1rem] bottom-[100%] bg-white shadow-lg  _lg:!py-4 _lg:!px-10">
          <div ref={dropdownRef}>
            {options.map(
              (
                option: {
                  value: string;
                },
                index: React.Key | null | undefined
              ) => (
                <div
                  key={index}
                  onClick={() => handleOptionClick(option)}
                  className={` block cursor-pointer min-w-full w-max px-6 py-4  rounded-[1.6rem] text-[2.4rem]  text-gray-1 transition-all duration-300 hover:bg-color-blue-7 [&>div>p]:hover:text-white _lg:!py-6 _lg:!px-8 ${
                    option.value === locale ? "bg-color-blue-8" : ""
                  }`}
                  role="menuitem"
                >
                  {labelLang(option.value)}
                </div>
              )
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SelectLang;
