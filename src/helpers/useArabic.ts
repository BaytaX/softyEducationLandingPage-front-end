"use client";
import { useParams } from "next/navigation";

function useArabic() {
  const params = useParams();
  const { locale } = params;
  const isArabic = locale === "ar";
  return isArabic;
}

export default useArabic;
