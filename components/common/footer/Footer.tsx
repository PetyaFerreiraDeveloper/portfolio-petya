import React from 'react'
import SocialMedia from '../social-media/SocialMedia'

const Footer = () => {
  return (
    <footer className="flex flex-col gap-4 justify-center items-center bg-slate-800 text-white w-full bottom-0 min-h-[100px]">
        <SocialMedia width={'25'} height={'25'} fill={'white'} className="flex justify-center gap-x-10" />
        <p>&copy; Copyright Petya Ferreira 2023</p>
    </footer>
  )
}

export default Footer