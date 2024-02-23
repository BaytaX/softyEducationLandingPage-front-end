import React from "react";
import LoginLeftSide from "./components/LoginLeftSide/LoginLeftSide";
import LoginRightSide from "./components/LoginRightSide/LoginRightSide";

export default function Page() {
  return (
    <div className="flex justify-between h-screen w-[150rem]]">
      <LoginLeftSide />
      <LoginRightSide />
    </div>
  );
}
