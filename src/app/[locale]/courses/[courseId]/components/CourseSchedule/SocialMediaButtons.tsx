import React from "react";
import { FaFacebookF, FaTwitter, FaWhatsapp } from "react-icons/fa6";
import { IoCopy } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";

export default function SocialMediaButtons() {
  return (
    <div className="flex gap-3 items-center pb-6">
      <button className="flex gap-6 py-5 px-8 items-center rounded-[1.8rem] w-fit cursor-pointer hover:opacity-80 bg-color-blue-10">
        <IoCopy className="text-[2.4rem] text-gray-1" />
        <p className="text-[1.6rem] font-light text-gray-1">Copy Link</p>
      </button>
      <button className="  py-5 px-6 items-center rounded-[1.8rem] w-fit cursor-pointer hover:opacity-80 bg-color-blue-10">
        <FaFacebookF className="text-[2.4rem] text-gray-1" />
      </button>
      <button className="  py-5 px-6 items-center rounded-[1.8rem] w-fit cursor-pointer hover:opacity-80 bg-color-blue-10">
        <FaTwitter className="text-[2.4rem] text-gray-1" />
      </button>
      <button className="  py-5 px-6 items-center rounded-[1.8rem] w-fit cursor-pointer hover:opacity-80 bg-color-blue-10">
        <TfiEmail className="text-[2.4rem] text-gray-1" />
      </button>
      <button className="  py-5 px-6 items-center rounded-[1.8rem] w-fit cursor-pointer hover:opacity-80 bg-color-blue-10">
        <FaWhatsapp className="text-[2.4rem] text-gray-1" />
      </button>
    </div>
  );
}
