'use client'

import { Menu } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import MobileLanguageMenu from './MobileLanguageMenu'

type Props = {
  add_me: string
  home: string
  commands: string
  support: string
  changelog: string
}
export default function MobileMenu({ add_me, home, commands, support, changelog }: Props) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div className='flex items-center justify-between relative'>
        <button onClick={() => setIsOpen(prev => !prev)}>
          <Menu />
        </button>
        {isOpen && (
          <div className='absolute top-11 right-1 bg-[#2A2A2A] rounded-sm shadow-md z-50'>
            <ul className='flex flex-col gap-2 justify-center items-center p-2'>
              <li>
                <Link
                  href='/invite'
                  className='inline-block py-1 px-4 bg-[#3442b8] rounded-sm mt-2'
                  target='_blank'
                >
                  {add_me}
                </Link>
              </li>
              <li>
                <Link href='/' className='inline-block py-1 px-4'>
                  {home}
                </Link>
              </li>
              <li>
                <Link href='/changelog' className='inline-block py-1 px-4'>
                  {changelog}
                </Link>
              </li>
              <li>
                <Link href='/commands' className='inline-block py-1 px-4'>
                  {commands}
                </Link>
              </li>
              <li>
                <a
                  href='/wiki'
                  target='_blank'
                  className='flex items-center gap-2 py-1 px-4'
                >
                  <span>Wiki</span>
                </a>
              </li>
              <li>
                <a
                  href={process.env.SUPPORT}
                  target='_blank'
                  className='flex items-center gap-2 py-1 px-4'
                >
                  <span>{support}</span>
                  <Image
                    src='/redirect.png'
                    width={30}
                    height={30}
                    alt='redirect'
                    className='invert w-4 sm:w-5 md:w-6'
                  />
                </a>
              </li>
              <li>
                <MobileLanguageMenu />
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  )
}
