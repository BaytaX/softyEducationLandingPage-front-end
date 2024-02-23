import React from "react";
import { Metadata } from "next";

import LoginLeftSide from "./components/LoginLeftSide/LoginLeftSide";
import LoginRightSide from "./components/LoginRightSide/LoginRightSide";
import ArabicWrapper from "../../(dashboard)/components/ArabicWrapper";

export const metadata: Metadata = {
  title: "Login - Access Your Softy Education Account",
  description:
    "Sign in to your Softy Education account. Continue your learning journey, track your progress, and access exclusive content.",
};

export default function Page() {
  return (
    <ArabicWrapper>
      <div className="flex justify-between h-screen w-[150rem]]">
        <LoginLeftSide />
        <LoginRightSide />
      </div>
    </ArabicWrapper>
  );
}
