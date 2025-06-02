import Link from "next/link"
import Image from "next/image"
import { getTranslations } from "next-intl/server"
import LanguageMenu from "./LanguageMenu"
import {
  LogIn,
  House,
  Bot,
  CircleHelp
} from "lucide-react"
import MobileMenuWrapper from "./MobileMenuWrapper"

type Props = {
  params: Promise<{
    locale: string
  }>
}

export default async function Header({ params }: Props) {
  const t = await getTranslations()

  return (
    <>
      <header className="bg-[#0d763e] shadow-xl p-2 md:px-10">
        <div className="hidden md:flex items-center justify-between">
          <Link href="/" className="flex items-center md:px-20 gap-3 sm:gap-4 transition duration-300 hover:scale-105">
            <Image
              src="/header/sabine.png"
              width={50}
              height={50}
              alt="sabine"
              className="rounded-full w-10 h-10 sm:w-[50px] sm:h-[50px] md:w-[60px] md:h-[60px]"
            />
            <span className="text-xl sm:text-3xl md:text-5xl font-bold text-white">Sabine</span>
          </Link>

          <ul className="flex flex-wrap items-center justify-end gap-4 text-xl/6 mt-2 sm:mt-0">
            <li className="transition duration-300 hover:scale-105">
              <Link
                href={process.env.INVITE!}
                className="inline-block py-1 sm:py-2 px-2 sm:px-4 bg-[#3442b8] rounded-md"
                target="_blank"
              >
                <div className="flex gap-2">
                  <LogIn />
                  {t("home.add")}
                </div>
              </Link>
            </li>

            <li className="transition duration-300 hover:scale-105">
              <Link
                href="/"
                className="inline-block py-1 sm:py-2 px-2 sm:px-4 bg-[#0d763e] rounded-md hover:bg-[#11924b] transition"
              >
                <div className="flex gap-2">
                  <House />
                  {t("header.home")}
                </div>
              </Link>
            </li>

            <li className="transition duration-300 hover:scale-105">
              <Link
                href="/commands"
                className="flex ga-p2 inline-block py-1 sm:py-2 px-2 sm:px-4 bg-[#0d763e] text-white rounded-md hover:bg-[#11924b] transition"
              >
                <div className="flex gap-2">
                  <Bot />
                  {t("header.commands")}
                </div>
              </Link>
            </li>

            <li className="transition duration-300 hover:scale-105">
              <a
                href={process.env.SUPPORT!}
                target="_blank"
                className="flex items-center gap-2 py-1 sm:py-2 px-2 sm:px-4 bg-[#0d763e] text-white rounded-md hover:bg-[#11924b] transition"
              >
                <CircleHelp />
                <span>{t("header.support")}</span>
              </a>
            </li>

            <li>
              <LanguageMenu />
            </li>
          </ul>
        </div>
        
        <MobileMenuWrapper />
      </header>
    </>
  )
}