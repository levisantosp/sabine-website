import type { Metadata } from "next"
import Header from "@/components/global/Header"
import "./globals.css"

export const metadata: Metadata = {
  title: "Sabine | Your e-sports bot",
  description: "More than just a bot, I'm your source of first-hand information and entertainment for your Discord server!\n\n🏆 Schedule matches from various leagues\n🎯 Stay up to date with results and statistics\n💡 Make predictions\n🥇 Compete against the best players",
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Header/>
      {children}
    </>
  )
}