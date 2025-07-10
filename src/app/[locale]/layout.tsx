import Header from '@/components/global/Header'
import '../globals.css'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, getTranslations } from 'next-intl/server'
import { Inter } from 'next/font/google'
import { Metadata } from 'next'
import Footer from '../../components/global/Footer'

export const generateMetadata = async({ params }: Props): Promise<Metadata> => {
  const { locale } = await params
  const t = await getTranslations({ locale })
  return {
    title: t('metadata.title'),
    description: t('metadata.desc'),
    twitter: {
      card: 'summary',
      images: ['/sabine.png']
    },
    metadataBase: new URL('https://sabinebot.xyz/')
  }
}
type Props = {
  children?: React.ReactNode,
  params: Promise<{
    locale: string
  }>
}
const inter = Inter({
  subsets: ['latin']
})
export default async function RootLayout({
  children,
  params
}: Props) {
  const messages = await getMessages()
  const { locale } = await params
  return (
    <html lang={locale}>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Header params={params} />
        <NextIntlClientProvider
          messages={messages}
          locale={locale}
        >
          <main className='flex-grow'>
            {children}
          </main>
        </NextIntlClientProvider>
        <Footer/>
      </body>
    </html>
  )
}