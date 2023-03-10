import React from 'react';
import { Karla } from 'next/font/google';
import { Montserrat_Alternates } from 'next/font/google';
import Meta from '@/layout/Meta';

const karla = Karla({ subsets: ['latin'] });
const alternates = Montserrat_Alternates({ 
  weight: ['400', '500'], 
  subsets: ['latin', 'cyrillic'] 
});


const About = () => {
  return (
    <>
    <Meta title={'About Petya'} description={'Resume and cool facts about Petya'} />
    <div>

        <p>test the font</p>
        <p className={karla.className}>test the font</p>
        <p className={alternates.className}>test the font</p>
        <p className={alternates.className}>да тестваме</p>
        <p>да тестваме</p>
    </div>
    </>
  )
}

export default About