import React from "react";

export default function Input({
  label,
  type,
  placeHolder,
  inputClassName,
  children,
}: {
  label: string;
  type: string;
  placeHolder: string;
  inputClassName?: string;
  children?: any;
}) {
  return (
    <div className="flex flex-col items-start gap-2 relative w-full">
      <label
        htmlFor="input"
        className="text-[1.8rem] text-gray-1 _xl:text-[2.2rem] _1/2xl:text-[2.6rem] _lg:!text-[3rem]"
      >
        {label}
      </label>
      <input
        id="input"
        type={type}
        className={`w-full  p-5 border font-light text-[1.4rem]   border-gray-200 rounded-full placeholder:text-[1.4rem] pl-8 placeholder:text-gray-500 placeholder:font-extralight outline-2 transition-all duration-300 focus:outline-color-blue-1 ${inputClassName}  _xl:text-[1.8rem] _1/2xl:text-[2.2rem] _lg:!text-[2.6rem] _xl:placeholder:text-[1.8rem] _1/2xl:placeholder:text-[2.2rem] _lg:placeholder:!text-[2.6rem] _lg:py-8`}
        placeholder={placeHolder}
      />
      {children}
    </div>
  );
}
