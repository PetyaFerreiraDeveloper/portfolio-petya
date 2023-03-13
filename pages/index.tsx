import { Karla } from 'next/font/google'
import { Inter } from 'next/font/google'
import Meta from '@/layout/Meta'
import Hero from '@/components/common/hero/Hero';

const karla = Karla({ subsets: ['latin'] });
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Meta title={'Petya\'s Resume'} description={'This is Petya Naydenova Ferreira resume and current projects'} />
      <main className=''>
        <Hero />
      </main>
    </>
  )
}
