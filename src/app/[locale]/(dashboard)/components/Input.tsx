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
      <label htmlFor="input" className="text-[1.8rem] text-gray-1">
        {label}
      </label>
      <input
        id="input"
        type={type}
        className={`w-full  p-5 border font-light text-[1.4rem]   border-gray-200 rounded-full placeholder:text-[1.4rem] pl-8 placeholder:text-gray-500 placeholder:font-extralight outline-2 transition-all duration-300 focus:outline-color-blue-1 ${inputClassName}`}
        placeholder={placeHolder}
      />
      {children}
    </div>
  );
}
