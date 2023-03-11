import React, { useState } from "react";
import SunIcon from "@/components/svgs/SunIcon";
import MoonIcon from "@/components/svgs/MoonIcon";

const DarkModeToggle = () => {
  let [night, setNight] = useState(false);

  let toggleMode;

  if (night) {
    toggleMode = "-translate-x-[40px]";
  } else {
    toggleMode = "translate-x-0";
  }
  console.log(night);

  return (
    <div className="flex items-center gap-4 bg-gray-500 rounded-xl relative">
      <div
        className={`w-6 h-6 bg-orange-500 opacity-75 rounded-full absolute transition duration-1000 ease-in-out transform right-0 ${toggleMode} `}
      ></div>

      <button onClick={() => setNight(true)} className="0" aria-label="">
        <MoonIcon width={"25"} height={"25"} fill={"white"} />
      </button>

      <button onClick={() => setNight(false)} className="" aria-label="">
        <SunIcon width={"25"} height={"25"} fill={"white"} />
      </button>
    </div>
  );
};

export default DarkModeToggle;
