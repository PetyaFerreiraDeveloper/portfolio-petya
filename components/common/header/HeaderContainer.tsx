import React, { useState } from "react";

import Link from "next/link";
import SocialMedia from "../social-media/SocialMedia";
import BurgerIcon from "@/components/svgs/BurgerIcon";
import SideNavigation from "./SideNavigation";

const HeaderContainer = () => {
  const [openMenu, setOpenMenu] = useState(true);

  return (
    <header className="bg-slate-800 w-full px-8 lg:px-24 2xl:px-32 3xl:w-9/12 mx-auto max-w-5xl">
      <nav className='text-white flex justify-between items-center w-full'>
        <Link href={'/'} className="py-4" >
        {'Petya Ferreira'}
        </Link>
        <Link href={'mailto:petianaidenova@gmail.com'} className="hidden md:flex" >
        {'Get in touch'}
        </Link>
        <button 
            onClick={() => setOpenMenu(!openMenu)}
            className="md:hidden py-4"
            aria-label="burger-menu"
        >
            <BurgerIcon width={'25'} height={'25'} fill={'white'} />
        </button>
        <SocialMedia width={"25"} height={"25"} fill={'white'} className='hidden md:flex gap-x-4' />
      </nav>
      <SideNavigation openMenu={openMenu} setOpenMenu={setOpenMenu}/>
    </header>
  );
};

export default HeaderContainer;
