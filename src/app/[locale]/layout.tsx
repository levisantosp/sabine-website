import Header from "@/components/global/Header"
import "../globals.css"
import localFont from "next/font/local"
import { NextIntlClientProvider } from "next-intl"
import { getMessages, getTranslations } from "next-intl/server"
import Footer from "@/components/global/Footer"

export const generateMetadata = async({ params }: Props) => {
  const { locale } = await params
  const t = await getTranslations({ locale })

  return {
    title: t("metadata.title"),
    description: t("metadata.desc"),
    icons: "https://cdn.discordapp.com/avatars/1235576817683922954/5acde2d51b24f843dc1619260e80c583.png?size=2048"
  }
}

type Props = {
  children?: React.ReactNode,
  params: Promise<{
    locale: string
  }>
}

const lubrifont = localFont({
  src: "../../app/[locale]/fonts/WDXLLubrifontTC-Regular.ttf",
  display: "swap"
})

export default async function RootLayout({
  children,
  params
}: Props) {
  const messages = await getMessages()
  const { locale } = await params

  return (
    <html lang={locale}>
      <body className={lubrifont.className}>
        <Header params={params} />

        <NextIntlClientProvider
          messages={messages}
          locale={locale}
        >
          {children}
        </NextIntlClientProvider>

        <Footer/>
      </body>
    </html>
  )
}