import { getTranslations } from 'next-intl/server'
import Image from 'next/image'
import Link from 'next/link'

export default async function Home() {
  let players = []
  const t = await getTranslations()
  try {
    const res = await fetch(process.env.API_URL + '/players')
    if(!res.ok) throw new Error('Failed to fetch players')
    players = await res.json()
  }
  catch(e) {
    console.error(e)
  }
  return (
    <>
      <div className='px-4 md:px-30 pt-8 md:pt-3 flex flex-col md:flex-row items-start gap-8 md:gap-0'>
        <div>
          <h1 className='md:pt-12 text-3xl font-bold md:text-4xl max-w-full md:max-w-md'>
            {t.rich('home.title', {
              strong: (chunks) => <span className='text-[#3442b8]'>{chunks}</span>
            })}
          </h1>
          <p
            className='text-lg md:text-xl max-w-sm md:max-w-lg pt-3 md:pt-5 text-[#9CA3AF]'
          >
            {t('home.desc.1')}
          </p>
          <Link
            href='/invite'
            target='_blank'
            className='flex items-center justify-center text-lg md:text-xl bg-[#3442b8] rounded-md gap-3 mt-5 w-fit px-6 py-2 transition duration-500 hover:scale-105'
          >
            <span>
              {t('home.add')}
            </span>
            <Image
              src='/redirect.png'
              width={25}
              height={50}
              alt='plus'
              className='invert'
            />
          </Link>
        </div>
        <Image
          src={`${process.env.CDN_URL}/cards/389.png`}
          width={257}
          height={360}
          alt='image'
          className='hidden lg:block relative md:top-1 md:left-20 mx-auto mt-8 filter brightness-90 transition-transform duration-500 hover:scale-105 hover:brightness-110 hover:-translate-y-1'
        />
        <Image
          src={`${process.env.CDN_URL}/cards/388.png`}
          width={257}
          height={360}
          alt='image'
          className='hidden lg:block relative md:top-1 md:left-20 mx-auto mt-8 filter brightness-90 transition-transform duration-500 hover:scale-105 hover:brightness-110 hover:-translate-y-1'
        />
        <Image
          src={`${process.env.CDN_URL}/cards/392.png`}
          width={257}
          height={360}
          alt='image'
          className='hidden lg:block relative md:top-1 md:left-20 mx-auto mt-8 filter brightness-90 transition-transform duration-500 hover:scale-105 hover:brightness-110 hover:-translate-y-1'
        />
      </div>
      <div className='flex gap-10 px-4 md:px-30 pt-8 md:pt-10 md:max-w-7xl pb-10'>
        <ul className='flex flex-col gap-y-10'>
          <li className='flex flex-col md:flex-row bg-[#2A2A2A] md:max-w-2xl rounded-md px-4 py-4 transition-transform duration-500 hover:scale-105 hover:brightness-110 hover:-translate-y-1'>
            <Image
              src='/home/illustration-1.png'
              width={248}
              height={335}
              alt='a'
              className='rounded-md shadow-xl transition-transform duration-500 hover:scale-105 hover:brightness-110 hover:-translate-y-1'
            />
            <div className='flex flex-col'>
              <h2 className='text-2xl font-bold text-center pt-1'>
                {t('home.build.title')}
              </h2>
              <p
                className='text-lg px-4 pt-5'
                style={
                  {
                    whiteSpace: 'pre-line'
                  }
                }
              >
                {t.rich('home.build.desc', {
                  strong: (chunks) => <span className='font-bold bg-[#1A1A1A] text-[#9CA3AF] rounded-md md:max-w-30'>{chunks}</span>,
                  a: (chunks) => (
                    <a
                      className='font-bold text-blue-400 underline'
                      href={process.env.SUPPORT}
                      target='_blank'
                    >
                      {chunks}
                    </a>
                  )
                })}
              </p>
            </div>
          </li>
          <li className='flex flex-col md:flex-row bg-[#2A2A2A] max-w-90 md:max-w-2xl rounded-md px-4 py-4 transition-transform duration-500 hover:scale-105 hover:brightness-110 hover:-translate-y-1'>
            <Image
              src='/home/sign.png'
              width={251}
              height={337}
              alt='a'
              className='rounded-md shadow-xl transition-transform duration-500 hover:scale-105 hover:brightness-110 hover:-translate-y-1'
            />
            <div className='flex flex-col'>
              <h2 className='md:text-2xl text-xl font-bold text-center pt-1'>
                {t('home.sign.title')}
              </h2>
              <p
                className='md:text-lg px-4 pt-5'
                style={
                  {
                    whiteSpace: 'pre-line'
                  }
                }
              >
                {t.rich('home.sign.desc', {
                  strong: (chunks) => <span className='font-bold bg-[#1A1A1A] text-[#9CA3AF] rounded-md md:max-w-30'>{chunks}</span>,
                  a: (chunks) => (
                    <a
                      className='font-bold text-blue-400 underline'
                      href={process.env.SUPPORT}
                      target='_blank'
                    >
                      {chunks}
                    </a>
                  )
                })}
              </p>
            </div>
          </li>
          <li className='flex flex-col md:flex-row bg-[#2A2A2A] max-w-90 md:max-w-2xl rounded-md px-4 py-4 transition-transform duration-500 hover:scale-105 hover:brightness-110 hover:-translate-y-1'>
            <Image
              src={`${process.env.CDN_URL}/cards/389.png`}
              width={257}
              height={360}
              alt='a'
              className='transition-transform duration-500 hover:scale-105 hover:brightness-110 hover:-translate-y-1'
            />
            <div className='flex flex-col'>
              <h2 className='md:text-2xl text-xl font-bold text-center pt-1'>
                {t('home.cards.title')}
              </h2>
              <p
                className='md:text-lg px-4 pt-5'
                style={
                  {
                    whiteSpace: 'pre-line'
                  }
                }
              >
                {t.rich('home.cards.desc', {
                  strong: (chunks) => <span className='font-bold bg-[#1A1A1A] text-[#9CA3AF] rounded-md md:max-w-30'>{chunks}</span>,
                  a: (chunks) => (
                    <a
                      className='font-bold text-blue-400 underline'
                      href={process.env.SUPPORT}
                      target='_blank'
                    >
                      {chunks}
                    </a>
                  ),
                  size: players.length || 'NaN'
                })}
              </p>
            </div>
          </li>
        </ul>
      </div>
    </>
  )
}