import { Karla } from 'next/font/google'
import { Inter } from 'next/font/google'
import Meta from '@/layout/Meta'

const karla = Karla({ subsets: ['latin'] });
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Meta title={'Petya\'s Projects'} description={'Profile and Projects by Petya Naydenova Ferreira'} />
      <main className=''>
        <p className={`${inter.className} text-red-700`}>hello world</p>
      </main>
    </>
  )
}
