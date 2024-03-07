import React from "react";
import { useTranslations } from "next-intl";

import { IoSearchOutline } from "react-icons/io5";

type SearchInputPropsType = {
  handleChange?: any;
  searchValue?: string;
  inputBoxClassName?: string;
};
export default function SearchInput({
  handleChange,
  searchValue,
  inputBoxClassName,
}: SearchInputPropsType) {
  const t = useTranslations("SearchInput");
  return (
    <div
      className={`w-[32%] h-[4.6rem] relative ml-4 _1/2xl:!w-[50%] _1/2xl:!h-[6rem] ${inputBoxClassName}`}
    >
      <IoSearchOutline className="absolute text-[2.6rem] top-1/2 left-6 -translate-y-1/2" />
      <input
        type="text"
        className="w-full pr-8 h-full border text-[1.8rem] _1/2xl:!text-[2.4rem] shadow-lg  border-gray-300 rounded-[1.8rem] placeholder:text-[1.8rem] _1/2xl:placeholder:!text-[2.4rem] pl-20 placeholder:text-gray-400 placeholder:font-light outline-2 transition-all duration-300 focus:outline-color-blue-1"
        placeholder={t("placeHolder")}
        onChange={(e) => handleChange(e.target.value)}
        value={searchValue}
      />
    </div>
  );
}
