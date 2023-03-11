import { Inter } from 'next/font/google'
import Meta from '@/layout/Meta'

const inter = Inter({ subsets: ['latin'] });

export default function FutureProjects() {
  return (
    <>
      <Meta title={'Petya\'s pipeline of projects'} description={'Projects pipeline for Petya Naydenova Ferreira'} />
      <main className=''>
        <p className={`${inter.className}`}>future projects</p>
      </main>
    </>
  )
}
