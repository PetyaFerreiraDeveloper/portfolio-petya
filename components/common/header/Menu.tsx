import Link from "next/link";
import React from "react";

interface Props {
  className: string;
}

const Menu = ({className}: Props) => {
  return (
    <ul className={className}>
      <li>
        <Link href="/about" className="py-4">
          About me
        </Link>
      </li>
      <li>
        <Link href="/projects" className="py-4">
          Projects
        </Link>
      </li>
      <li>
        <Link href="/ideas" className="py-4">
          Ideas
        </Link>
      </li>
    </ul>
  );
};

export default Menu;
