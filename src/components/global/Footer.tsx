import { getTranslations } from "next-intl/server"
import Link from "next/link"

export default async function Footer() {
  const t = await getTranslations()

  return (
    <>
      <footer className="flex md:gap-40 bg-[#0d763e] shadow-xl p-2 md:px-10 h-32 md:h-40">
        {/* 
          - adicione o bot
          - obter suporte
          - comandos
          - premium
        */}
        <ul className="flex flex-col gap-y-7 text-2xl px-2 md:px-20 pt-3 md:pt-7">
          <li>
            <Link
              href={process.env.INVITE!}
              target="_blank"
            >
              <span>
                {t("footer.add_bot")}
              </span>
            </Link>
          </li>

          <li>
            <Link
              href={process.env.SUPPORT!}
              target="_blank"
            >
              <span>
                {t("footer.get_support")}
              </span>
            </Link>
          </li>
        </ul>

        <ul className="flex flex-col gap-y-7 text-2xl px-10 md:px-20 pt-3 md:pt-7">
          <li>
            <Link
              href="/commands"
              target="_blank"
            >
              <span>
                {t("footer.commands")}
              </span>
            </Link>
          </li>

          <li>
            <Link
              href={process.env.SUPPORT!}
              target="_blank"
            >
              <span>
                {t("footer.get_premium")}
              </span>
            </Link>
          </li>
        </ul>
      </footer>
    </>
  )
}