"use client";
import useArabic from "@/helpers/useArabic";
import { useParams } from "next/navigation";
import React from "react";

export default function ArabicWrapper({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const isArabic = useArabic();
  return (
    <>
      {isArabic ? (
        <div className={isArabic ? `[direction:rtl] ${className}` : ""}>
          {children}
        </div>
      ) : (
        <>{children}</>
      )}
    </>
  );
}
