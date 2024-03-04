import React from "react";

export default function Error({ children }: any) {
  return (
    <p className="text-[1.6rem] ml-10 mt-2 text-error-color 1/2xl:text-[2rem] lg:!text-[2.8rem]">
      {children}
    </p>
  );
}
