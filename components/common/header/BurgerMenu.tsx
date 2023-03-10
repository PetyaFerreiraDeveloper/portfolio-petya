import CloseIcon from "@/components/svgs/CloseIcon";
import Link from "next/link";
import React from "react";
import SocialMedia from "../social-media/SocialMedia";

interface Props {
  className: string;
}

const BurgerMenu = ({ className }: Props) => {
  return (
    <div
      className={`${className} flex justify-between bg-gray-300 bg-opacity-20`}
    >
      <span></span>
      <nav className={`bg-white w-1/2 rounded-tl-3xl rounded-bl-3xl `}>
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
        <ul className="py-4 px-8 flex flex-col gap-4">
          <li>
            <Link href="/about">About me</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/future-projects">Future projects and ideas</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default BurgerMenu;
