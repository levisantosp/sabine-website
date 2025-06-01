import type { Metadata, Viewport } from "next"
import Header from "@/components/global/Header"
import "../globals.css"
import localFont from "next/font/local"
import { NextIntlClientProvider } from "next-intl"
import { getMessages } from "next-intl/server"

export const metadata: Metadata = {
  title: "Sabine | Your e-sports bot",
  description: "More than just a bot, I'm your source of first-hand information and entertainment for your Discord server!\n\n🏆 Schedule matches from various leagues\n🎯 Stay up to date with results and statistics\n💡 Make predictions\n🥇 Compete against the best players"
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
      </body>
    </html>
  )
}