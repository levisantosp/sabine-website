import { createTranslator } from "next-intl"
import { getMessages } from "next-intl/server"
import Image from "next/image"
import { Props } from "./layout"

export default async function Home({ locale }: Props) {
  const messages = await getMessages()
  const t = createTranslator({ locale, messages })

  return (
    <>
      <div className="px-30 pt-15 flex items-start gap-15">
        <div>
          <h1 className="text-6xl max-w-md">
            {t.rich("home.title", {
              strong: (chunks) => <span className="text-[#3442b8]">{chunks}</span>
            })}
          </h1>

          <p
            className="text-3xl max-w-lg pt-10 text-[#9CA3AF]"
          >
            {t("home.desc.1")}
          </p>

          <ul className="text-3xl pt-10 flex flex-col gap-y-4 text-[#9CA3AF]">
            <li className="flex gap-4">
              <Image
                src="/calendar.png"
                width={30}
                height={50}
                alt="calendar"
              />

              <span>{t("home.desc.2")}</span>
            </li>
            <li className="flex gap-4">
              <Image
                src="/target.png"
                width={30}
                height={50}
                alt="target"
              />

              <span>{t("home.desc.3")}</span>
            </li>
            <li className="flex gap-4">
              <Image
                src="/light.png"
                width={30}
                height={50}
                alt="light"
              />

              <span>{t("home.desc.4")}</span>
            </li>
            <li className="flex gap-4">
              <Image
                src="/medal.png"
                width={30}
                height={50}
                alt="medal"
              />

              <span>{t("home.desc.5")}</span>
            </li>
          </ul>
        </div>

        <Image
          src="/image.png"
          width={579}
          height={369}
          alt="image"
          className="relative top-20 left-40 rounded-xl shadow-xl filter brightness-90 transition-transform duration-500 hover:scale-125 hover:brightness-110 hover:-translate-y-1"
        />
      </div>
    </>
  )
}