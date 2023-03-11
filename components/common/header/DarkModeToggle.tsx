import React, { useEffect, useState, useContext } from "react";
import { MyThemeContext } from "@/context/myThemeContext";
import SunIcon from "@/components/svgs/SunIcon";
import MoonIcon from "@/components/svgs/MoonIcon";

const DarkModeToggle = () => {
  const themeCtx: { isDarkTheme?: boolean; toggleThemeHandler: () => void } =
    useContext(MyThemeContext);

  // let [isDarkTheme, setIsDarkTheme] = useState(false);
  // useEffect(() => initialThemeHandler());

  // function isLocalStorageEmpty(): boolean {
  //   return !localStorage.getItem("isDarkTheme");
  // }

  // function initialThemeHandler(): void {
  //   if (isLocalStorageEmpty()) {
  //     localStorage.setItem("isDarkTheme", `true`);
  //     document!.querySelector("body")!.classList.add("dark");
  //     setIsDarkTheme(true);
  //   } else {
  //     const isDarkTheme: boolean = JSON.parse(
  //       localStorage.getItem("isDarkTheme")!
  //     );
  //     isDarkTheme && document!.querySelector("body")!.classList.add("dark");
  //     setIsDarkTheme(() => {
  //       return isDarkTheme;
  //     });
  //   }
  // }

  // function toggleThemeHandler(): void {
  //   const isDarkTheme: boolean = JSON.parse(
  //     localStorage.getItem("isDarkTheme")!
  //   );
  //   setIsDarkTheme(!isDarkTheme);
  //   toggleDarkClassToBody();
  //   setValueToLocalStorage();
  // }

  // function toggleDarkClassToBody(): void {
  //   document!.querySelector("body")!.classList.toggle("dark");
  // }
  // function setValueToLocalStorage(): void {
  //   localStorage.setItem("isDarkTheme", `${!isDarkTheme}`);
  // }

  let toggleMode;

  if (themeCtx.isDarkTheme) {
    toggleMode = "-translate-x-[40px]";
  } else {
    toggleMode = "translate-x-0";
  }

  return (
    <div className="flex items-center gap-4 bg-gray-500 rounded-xl relative">
      <div
        className={`w-6 h-6 bg-orange-500 opacity-75 rounded-full absolute transition duration-1000 ease-in-out transform right-0 ${toggleMode} `}
      ></div>

      <button onClick={themeCtx.toggleThemeHandler} className="0" aria-label="">
        <MoonIcon width={"25"} height={"25"} fill={"white"} />
      </button>

      <button onClick={themeCtx.toggleThemeHandler} className="" aria-label="">
        <SunIcon width={"25"} height={"25"} fill={"white"} />
      </button>
    </div>
  );
};

export default DarkModeToggle;
