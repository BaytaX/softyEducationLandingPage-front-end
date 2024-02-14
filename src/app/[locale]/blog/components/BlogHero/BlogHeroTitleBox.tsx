import React from "react";
import Image from "next/image";

import softyBlogLogo from "../../../../../../public/blog_imgs/softyBlogLogo.png";

export default function BlogHeroTitleBox() {
  return (
    <div className="flex items-center flex-col justify-center gap-6">
      <Image
        src={softyBlogLogo}
        alt={"logo of softy blog"}
        width={170}
        height={50}
      />
      <h1 className="text-[4rem] ">Check our blogs</h1>
      <p className="text-gray-500 text-[1.5rem] w-8/12 text-center">
        Explore E-learning as an experience, creating the ultimate platform
        tailored to your needs Explore E-learning as an experience, not a
        business Creating the ultimate platform tailored to your needs
      </p>
    </div>
  );
}
