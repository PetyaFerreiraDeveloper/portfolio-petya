import React, {useState} from "react";
import SunIcon from "@/components/svgs/SunIcon";
import MoonIcon from "@/components/svgs/MoonIcon";

const DarkModeToggle = () => {
  return (
    <div className="flex items-center gap-4 bg-gray-500 rounded-xl relative">
      <div className="w-6 h-6 bg-red-500 rounded-full absolute"></div>
      <SunIcon width={"25"} height={"25"} fill={"white"} />
      <MoonIcon width={"25"} height={"25"} fill={"white"} />
    </div>
  );
};

export default DarkModeToggle;
