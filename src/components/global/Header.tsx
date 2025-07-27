import Link from 'next/link'
import Image from 'next/image'
import { getTranslations } from 'next-intl/server'
import LanguageMenu from './LanguageMenu'
import {
  LogIn,
  House,
  Bot,
  CircleHelp,
  BookCheck,
  NotebookText
} from 'lucide-react'
import MobileMenuWrapper from './MobileMenuWrapper'

type Props = {
  params: Promise<{
    locale: string
  }>
}
export default async function Header({ }: Props) {
  const t = await getTranslations()
  return (
    <header className='flex justify-between bg-[#0d763e] shadow-xl p-2 md:px-10'>
      <div className='flex items-center md:px-20 gap-3 sm:gap-4 transition duration-300 hover:scale-105'>
        <Link href='/' className='flex items-center gap-3'>
          <Image
            src='/header/sabine.png'
            width={60}
            height={60}
            alt='sabine'
            className='rounded-full w-10 h-10 sm:w-[50px] sm:h-[50px] md:w-[60px] md:h-[60px]'
          />
          <span className='text-xl sm:text-3xl md:text-5xl font-bold text-white'>Sabine</span>
        </Link>
      </div>
      <ul className='hidden md:flex flex-wrap items-center justify-end gap-4 text-base/6 mt-2 sm:mt-0'>
        <li className='transition duration-300 hover:scale-105'>
          <Link
            href='/invite'
            className='flex py-1 sm:py-2 px-2 sm:px-4 bg-[#3442b8] text-white rounded-md'
            target='_blank'
          >
            <div className='flex gap-2'>
              <LogIn />
              {t('home.add')}
            </div>
          </Link>
        </li>
        <li className='transition duration-300 hover:scale-105'>
          <Link
            href='/'
            className='flex py-1 sm:py-2 px-2 sm:px-4 bg-[#0d763e] text-white rounded-md hover:bg-[#11924b] transition'
          >
            <div className='flex gap-2'>
              <House />
              {t('header.home')}
            </div>
          </Link>
        </li>
        <li className='transition duration-300 hover:scale-105'>
          <Link
            href='/changelog'
            className='flex py-1 sm:py-2 px-2 sm:px-4 bg-[#0d763e] text-white rounded-md hover:bg-[#11924b] transition'
          >
            <div className='flex gap-2'>
              <NotebookText />
              {t('header.changelog')}
            </div>
          </Link>
        </li>
        <li className='transition duration-300 hover:scale-105'>
          <Link
            href='/commands'
            className='gap-2 flex py-1 sm:py-2 px-2 sm:px-4 bg-[#0d763e] text-white rounded-md hover:bg-[#11924b] transition'
          >
            <div className='flex gap-2'>
              <Bot />
              {t('header.commands')}
            </div>
          </Link>
        </li>
        <li className='transition duration-300 hover:scale-105'>
          <Link
            href='/wiki'
            className='flex items-center gap-2 py-1 sm:py-2 px-2 sm:px-4 bg-[#0d763e] text-white rounded-md hover:bg-[#11924b] transition'
          >
            <BookCheck />
            <span>Wiki</span>
          </Link>
        </li>
        <li className='transition duration-300 hover:scale-105'>
          <a
            href={process.env.SUPPORT!}
            target='_blank'
            className='flex items-center gap-2 py-1 sm:py-2 px-2 sm:px-4 bg-[#0d763e] text-white rounded-md hover:bg-[#11924b] transition'
          >
            <CircleHelp />
            <span>{t('header.support')}</span>
          </a>
        </li>
        <li>
          <LanguageMenu />
        </li>
      </ul>
      <div className='flex md:hidden'>
        <MobileMenuWrapper />
      </div>
    </header>
  )
}