"use client";
import React from "react";

import { usePathname, useRouter } from "@/navigation/navigation";

import { ChangeEvent, ReactNode, useTransition } from "react";
import { useParams } from "next/navigation";

export default function SelectLang() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();
  function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value;
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  }

  return (
    <>
      <label htmlFor="lang" className="opacity-0 w-0">
        Language:
      </label>
      <select
        className="text-gray-500 font-extralight  text-[1.6rem]"
        name="lang"
        id="lang"
        value={params.locale}
        disabled={isPending}
        onChange={onSelectChange}
      >
        <option value="en">English</option>
        <option value="fr">Frencais</option>
        <option value="ar">العربية</option>
      </select>
    </>
  );
}
