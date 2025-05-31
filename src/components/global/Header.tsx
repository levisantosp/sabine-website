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
      <header className="bg-[#0d763e] shadow-xl">
        <nav className="p-1 flex items-center justify-between">
          <div className="transition duration-500 hover:scale-115">
            <Link href="/" className="flex flex-wrap items-center justify-between px-30 py-1">
              <Image
                src="/sabine.png"
                width={60}
                height={1024}
                alt="sabine"
                className="rounded-full"
              ></Image>

              <span className="text-5xl font-bold px-5">Sabine</span>
            </Link>
          </div>

          <ul className="flex flex-wrap items-center justify-between gap-5 text-3xl px-25">
            <li className="transition duration-500 hover:scale-115">
              <Link href="/" className="inline-block px-4 py-2 bg-[#0d763e] text-white rounded-md hover:bg-[#11924b] transition">{t("header.home")}</Link>
            </li>

            <li className="transition duration-500 hover:scale-115">
              <Link href="/commands" className="inline-block px-4 py-2 bg-[#0d763e] text-white rounded-md hover:bg-[#11924b] transition">{t("header.commands")}</Link>
            </li>

            <li className="transition duration-500 hover:scale-115">
              <div>
                <a
                  href="https://discord.com/invite/FaqYcpA84r"
                  target="_blank"
                  className="flex gap-2 items-center px-4 py-2 bg-[#0d763e] text-white rounded-md hover:bg-[#11924b] transition"
                >
                  <span>{t("header.support")}</span>
                  <Image
                    src="/redirect.png"
                    width={30}
                    height={50}
                    alt="redirect"
                    className="invert"
                  />
                </a>
              </div>
            </li>

            <li>
              <LanguageMenu/>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}