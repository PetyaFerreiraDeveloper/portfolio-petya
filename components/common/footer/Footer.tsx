import React from 'react'
import SocialMedia from '../social-media/SocialMedia'

const Footer = () => {
  return (
    <footer className="flex flex-col gap-4 justify-center items-center bg-slate-800 text-white w-full bottom-0 min-h-[100px] px-8 lg:px-20 xl:px-28 3xl:w-9/12 3xl:m-auto max-w-5xl mx-auto">
        <SocialMedia width={'25'} height={'25'} fill={'white'} className="flex justify-center gap-x-10" />
        <p>&copy; Copyright Petya Ferreira 2023</p>
    </footer>
  )
}

export default Footer