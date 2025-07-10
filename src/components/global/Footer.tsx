import { getTranslations } from 'next-intl/server'
import Link from 'next/link'
import { Copyright } from 'lucide-react'

export default async function Footer() {
  const t = await getTranslations()
  return (
    <>
      <footer className='flex flex-wrap gap-2 md:gap-40 bg-[#0d763e] shadow-xl p-2 md:px-10 h-32 md:h-40'>
        <ul className='flex flex-col gap-y-7 text-xs md:text-xl px-2 md:px-20 pt-1 md:pt-7'>
          <li>
            <Link
              href={process.env.INVITE!}
              target='_blank'
            >
              <span>
                {t('footer.add_bot')}
              </span>
            </Link>
          </li>
          <li>
            <Link
              href={process.env.SUPPORT!}
              target='_blank'
            >
              <span>
                {t('footer.get_support')}
              </span>
            </Link>
          </li>
        </ul>
        <ul className='flex flex-col gap-y-7 text-xs md:text-xl md:px-20 pt-1 md:pt-7'>
          <li>
            <Link
              href='/commands'
              target='_blank'
            >
              <span>
                {t('footer.commands')}
              </span>
            </Link>
          </li>
          <li>
            <Link
              href={process.env.SUPPORT!}
              target='_blank'
            >
              <span>
                {t('footer.get_premium')}
              </span>
            </Link>
          </li>
        </ul>
        <div className='flex gap-2 justify-center items-center text-xs md:text-lg w-full mt-5 md:w-auto md:mt-0'>
          <Copyright className='block md:hidden' size={15}/>
          <Copyright className='hidden md:block'/>
          <span>
            Sabine. All rights reserved.
          </span>
        </div>
      </footer>
    </>
  )
}