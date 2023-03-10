import CloseIcon from "@/components/svgs/CloseIcon";
import React from "react";
import SocialMedia from "../social-media/SocialMedia";

interface Props {
  className: string;
}

const BurgerMenu = ({ className }: Props) => {
  return (
    <nav className={className}>
      <div className="flex justify-between gap-4 py-4 px-8">
        <h3>Get in touch</h3>
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
      <ul className="py-4 px-8 flex flex-col gap-4">
        <li>About me</li>
        <li>Projects</li>
        <li>Future projects and ideas</li>
      </ul>
    </nav>
  );
};

export default BurgerMenu;
