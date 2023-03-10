import { Karla } from 'next/font/google'
import { Inter } from 'next/font/google'
import Meta from '@/layout/Meta'

const karla = Karla({ subsets: ['latin'] });
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Meta title={'Petya\'s Resume'} description={'This is Petya Naydenova Ferreira resume and current projects'} />
      <main className=''>
        <p className={`${inter.className} text-red-700`}>hello world</p>
      </main>
    </>
  )
}
