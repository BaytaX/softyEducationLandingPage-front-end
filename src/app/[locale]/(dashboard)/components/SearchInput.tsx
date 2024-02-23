import { useTranslations } from "next-intl";
import React from "react";
import { IoSearchOutline } from "react-icons/io5";

type SearchInputPropsType = {
  handleChange?: any;
  searchValue?: string;
};
export default function SearchInput({
  handleChange,
  searchValue,
}: SearchInputPropsType) {
  const t = useTranslations("SearchInput");
  return (
    <div className="w-[45rem] h-[4.6rem] relative">
      <IoSearchOutline className="absolute text-[2.6rem] top-1/2 left-6 -translate-y-1/2" />
      <input
        type="text"
        className="w-full pr-8 h-full border text-[1.8rem] shadow-lg  border-gray-300 rounded-[1.8rem] placeholder:text-[1.8rem] pl-20 placeholder:text-gray-400 placeholder:font-light outline-2 transition-all duration-300 focus:outline-color-blue-1"
        placeholder={t("placeHolder")}
        onChange={(e) => handleChange(e.target.value)}
        value={searchValue}
      />
    </div>
  );
}
