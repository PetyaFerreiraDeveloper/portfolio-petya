import { Inter } from 'next/font/google'
import Meta from '@/layout/Meta'

const inter = Inter({ subsets: ['latin'] });

export default function Projects() {
  return (
    <>
      <Meta title={'Petya\'s Projects'} description={'Cool projects Petya Naydenova Ferreira has worked on'} />
      <main className=''>
        <p className={`${inter.className}`}>Projects</p>
      </main>
    </>
  )
}
