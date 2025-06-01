import Link from "next/link"
import Image from "next/image"
import { getTranslations } from "next-intl/server"
import LanguageMenu from "./LanguageMenu"

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
        <div className="flex flex-wrap items-center justify-between">
          <Link href="/" className="flex items-center gap-3 sm:gap-4 transition duration-300 hover:scale-105">
            <Image
              src="/sabine.png"
              width={50}
              height={50}
              alt="sabine"
              className="rounded-full w-10 h-10 sm:w-[50px] sm:h-[50px] md:w-[60px] md:h-[60px]"
            />
            <span className="text-xl sm:text-3xl md:text-5xl font-bold text-white">Sabine</span>
          </Link>

          <ul className="flex flex-wrap items-center justify-end gap-4 sm:gap-6 md:gap-10 text-sm sm:text-xl md:text-3xl mt-2 sm:mt-0">
            <li className="transition duration-300 hover:scale-105">
              <Link
                href="/"
                className="inline-block py-1 sm:py-2 px-2 sm:px-4 bg-[#0d763e] text-white rounded-md hover:bg-[#11924b] transition"
              >
                {t("header.home")}
              </Link>
            </li>

            <li className="transition duration-300 hover:scale-105">
              <Link
                href="/commands"
                className="inline-block py-1 sm:py-2 px-2 sm:px-4 bg-[#0d763e] text-white rounded-md hover:bg-[#11924b] transition"
              >
                {t("header.commands")}
              </Link>
            </li>

            <li className="transition duration-300 hover:scale-105">
              <a
                href="https://discord.com/invite/FaqYcpA84r"
                target="_blank"
                className="flex items-center gap-2 py-1 sm:py-2 px-2 sm:px-4 bg-[#0d763e] text-white rounded-md hover:bg-[#11924b] transition"
              >
                <span>{t("header.support")}</span>
                <Image
                  src="/redirect.png"
                  width={30}
                  height={30}
                  alt="redirect"
                  className="invert w-4 sm:w-5 md:w-6"
                />
              </a>
            </li>

            <li>
              <LanguageMenu />
            </li>
          </ul>
        </div>
      </header>
    </>
  )
}