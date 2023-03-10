import React from "react";
import BurgerMenu from "./BurgerMenu";

interface Props {
  openMenu: boolean;
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const SideNavigation = ({ openMenu, setOpenMenu }: Props) => {
  
  const showMenu =
    "fixed right-0 top-0 h-screen overflow-y-auto bg-white transition ease-in-out delay-150 z-10";
  return (
    <nav className="md:hidden" onClick={() => setOpenMenu(!openMenu)}>
      {openMenu ? (
        <BurgerMenu className={`${showMenu} translate-x-full w-full`} />
      ) : (
        <BurgerMenu className={`${showMenu} translate-x-0 w-full`} />
      )}
    </nav>
  );
};

export default SideNavigation;
