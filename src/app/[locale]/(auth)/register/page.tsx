import React from "react";

import RegisterLeftSide from "./components/RegisterLeftSide/RegisterLeftSide";
import RegisterRightSide from "./components/RegisterRightSide/RegisterRightSide";

export default function Page() {
  return (
    <div className="flex justify-between h-screen w-[150rem]]">
      <RegisterLeftSide />
      <RegisterRightSide />
    </div>
  );
}
