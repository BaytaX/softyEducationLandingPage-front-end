"use client";

import React, { useState, useEffect, useRef } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { IoIosArrowDown, IoMdArrowDropdown } from "react-icons/io";
import { useTranslations } from "next-intl";

const SortSelect = ({
  onSelect,
  options,
}: {
  onSelect: (val: string) => void;
  options: { label: string; value: string }[];
}) => {
  const t = useTranslations("Bootcamps");
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedLabel, setSelectedLabel] = useState("");

  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

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
    setSelectedOption(option.label);
    setSelectedLabel(option.label);
    setDropdownOpen(false);
    onSelect(option.value);
  };

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="relative inline-block">
      <div
        onClick={handleDropdownToggle}
        className={` flex w-[24rem] shadow-md cursor-pointer items-center  py-4 rounded-full justify-between  border border-gray-200 bg-white px-8 
        _1/2xl:w-[30rem] _lg:!w-[40rem]
      `}
      >
        <span className="text-[1.6rem] font-light text-gray-1 _1/2xl:text-[2rem] _lg:!text-[2.8rem]">
          {selectedLabel ? selectedLabel : t("selectOption")}
        </span>
        <IoIosArrowDown className="text-gray-1 text-[2rem] _lg:text-[3rem]" />
      </div>
      {isDropdownOpen && (
        <div className=" rounded-lg absolute z-40 mt-[0.2rem]  w-[24rem] origin-top-right  bg-white shadow-lg ring-1 ring-black ring-opacity-5 _1/2xl:w-[30rem] _lg:!w-[40rem]">
          <div
            ref={dropdownRef}
            className="p-6 "
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {options.map(
              (
                option: {
                  value: string;
                  label:
                    | string
                    | number
                    | boolean
                    | React.ReactElement<
                        any,
                        string | React.JSXElementConstructor<any>
                      >
                    | Iterable<React.ReactNode>
                    | React.ReactPortal
                    | React.PromiseLikeOfReactNode
                    | null
                    | undefined;
                },
                index: React.Key | null | undefined
              ) => (
                <div
                  key={index}
                  onClick={() => handleOptionClick(option)}
                  className={` block cursor-pointer px-4 py-3 _xl:py-5 rounded-md text-[1.4rem] _1/2xl:text-[2rem] text-gray-1 transition-all duration-150 hover:bg-color-blue-1 hover:text-white _lg:!text-[2.8rem]`}
                  role="menuitem"
                >
                  {option.label}
                </div>
              )
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SortSelect;
