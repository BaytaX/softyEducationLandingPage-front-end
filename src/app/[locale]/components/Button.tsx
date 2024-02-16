import React from "react";

type ButtonType = {
  className?: string;
  children: string;
};

export default function Button({ className, children }: ButtonType) {
  return (
    <button
      className={` text-[1.6rem] rounded-full font-light cursor-pointer hover:opacity-80 ${className}`}
    >
      {children}
    </button>
  );
}
