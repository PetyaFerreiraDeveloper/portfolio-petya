import { Inter } from 'next/font/google'
import Meta from '@/layout/Meta'

const inter = Inter({ subsets: ['latin'] });

export default function FutureProjects() {
  return (
    <>
      <Meta title={'Petya\'s pipeline of projects'} description={'Projects pipeline for Petya Naydenova Ferreira'} />
      <main className='bg-white dark:bg-gray-800'>
        <p className={`${inter.className} text-red-500 dark:text-blue-500`}>future projects</p>
        <p className="text-blue-800 dark:text-white">test dark mode</p>
      </main>
    </>
  )
}
