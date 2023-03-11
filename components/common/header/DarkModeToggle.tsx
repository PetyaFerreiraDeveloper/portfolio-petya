import React, { useState } from "react";
import SunIcon from "@/components/svgs/SunIcon";
import MoonIcon from "@/components/svgs/MoonIcon";

const DarkModeToggle = () => {
  let [day, setDay] = useState(false);

  let mode;

  // if (day) {
  //   mode = `animation-goRight`;
  // } else {
  //   mode = `animation-goLeft`;
  // }

  if (day) {
    mode = `right-0`;
  } else {
    mode = `left-0`;
  }

  return (
    <div className="flex items-center gap-4 bg-gray-500 rounded-xl relative">
      <div
        className={`w-6 h-6 bg-red-500 rounded-full absolute ${mode} `} //absolute transition ease-in-out delay-150 
      ></div>
      <button onClick={() => setDay(false)} className="" aria-label="">
        <SunIcon width={"25"} height={"25"} fill={"white"} />
      </button>
      <button onClick={() => setDay(true)} className="0" aria-label="">
        <MoonIcon width={"25"} height={"25"} fill={"white"} />
      </button>
    </div>
  );
};

export default DarkModeToggle;
