import React from "react";

type ButtonType = {
  className?: string;
  children: any;
  handleClick?: () => void;
};

export default function Button({
  className,
  children,
  handleClick,
}: ButtonType) {
  return (
    <button
      className={` text-[1.6rem] rounded-full font-light cursor-pointer hover:opacity-80 ${className}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}
