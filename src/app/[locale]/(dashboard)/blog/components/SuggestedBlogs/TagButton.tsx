import React from "react";

export default function TagButton({
  data,
  handleClick,
  additionalData: tagPressedId,
}: any) {
  return (
    <button
      className={`text-[1.6rem] w-max hover:opacity-80 cursor-pointer px-6 py-4 rounded-2xl  _xl:text-[2rem] _1/2xl:text-[2.4rem] _lg:!text-[3rem] ${
        tagPressedId === data?.id
          ? "bg-color-blue-1 text-white"
          : "text-color-blue-1"
      }`}
      onClick={() => handleClick(data?.id)}
    >
      {data?.attributes?.title}
    </button>
  );
}
