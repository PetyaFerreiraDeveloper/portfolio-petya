import CloseIcon from "@/components/svgs/CloseIcon";
import React from "react";
import SocialMedia from "../social-media/SocialMedia";
import Menu from "./Menu";

interface Props {
  className: string;
}

const BurgerMenu = ({ className }: Props) => {
  return (
    <div
      className={`${className} flex justify-between bg-gray-300 bg-opacity-20`}
    >
      <span></span>
      <nav className={`bg-white w-2/3 rounded-tl-3xl rounded-bl-3xl `}>
        <div className="flex justify-between gap-4 py-4 px-8">
          <h3>Get in touch with me</h3>
          <CloseIcon
            width={"25"}
            height={"25"}
            fill={"black"}
            className="cursor-pointer"
          />
        </div>
        <SocialMedia
          width={"25"}
          height={"25"}
          className="flex justify-between py-4 px-8"
        />
        <Menu className={"py-4 px-8 flex flex-col gap-4"} />
      </nav>
    </div>
  );
};

export default BurgerMenu;
