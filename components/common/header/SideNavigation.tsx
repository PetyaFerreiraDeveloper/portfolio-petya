import React from "react";
import BurgerMenu from "./BurgerMenu";

interface Props {
  openMenu: boolean;
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const SideNavigation = ({ openMenu, setOpenMenu }: Props) => {
  const showMenu =
    "flex flex-col fixed right-0 top-0 h-screen w-1/2 overflow-y-auto bg-white transition ease-in-out delay-150 rounded-tl-3xl rounded-bl-3xl -mx-1 z-10";
  return (
    <nav className="md:hidden" onClick={() => setOpenMenu(!openMenu)}>
      {openMenu ? (
        <BurgerMenu className={`${showMenu} translate-x-full`} />
      ) : (
        <BurgerMenu className={`${showMenu} translate-x-0`} />
      )}
    </nav>
  );
};

export default SideNavigation;
