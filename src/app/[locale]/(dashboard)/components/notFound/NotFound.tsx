"use client";
import React from "react";
import Image from "next/image";
import { Link } from "@/navigation/navigation";

export default function NotFoundPage() {
  return (
    <div className="permission_denied mt-64 pb-[40rem] lg:!pb-[60rem]">
      <div className="denied__wrapper">
        <h1>404</h1>
        <h3>
          LOST IN <span>SPACE</span> Hmm, looks like that page doesnt exist.
        </h3>
        <Image
          id="astronaut"
          src={"/astronaut.png"}
          alt="Astronaut"
          width={400}
          height={200}
          draggable={false}
        />
        <Image
          id="planet"
          src="/planet.png"
          alt="Planet"
          width={400}
          height={200}
          draggable={false}
        />
        <Link href="/">
          <button className="denied__link !px-24 min-w-max ">Go Home</button>
        </Link>
      </div>
    </div>
  );
}
