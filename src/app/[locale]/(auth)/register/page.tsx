import React from "react";
import { Metadata } from "next";

import RegisterLeftSide from "./components/RegisterLeftSide/RegisterLeftSide";
import RegisterRightSide from "./components/RegisterRightSide/RegisterRightSide";
import ArabicWrapper from "../../(dashboard)/components/ArabicWrapper";

export const metadata: Metadata = {
  title: "Register - Join Softy Education for Free",
  description:
    "Create your free account at Softy Education. Unlock a world of online learning resources, enroll in courses, and take the first step towards advancing your skills.",
};

export default function Page() {
  return (
    <ArabicWrapper>
      <div className="flex justify-between h-screen ">
        <RegisterLeftSide />
        <RegisterRightSide />
      </div>
    </ArabicWrapper>
  );
}
