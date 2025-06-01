import { getTranslations } from "next-intl/server"
import Image from "next/image"
import Link from "next/link"

export default async function Home() {
  const t = await getTranslations()

  return (
    <>
      <div className="px-4 md:px-30 pt-8 md:pt-15 flex flex-col md:flex-row items-start gap-8 md:gap-1">
        <div>
          <h1 className="text-5xl md:text-6xl max-w-full md:max-w-md">
            {t.rich("home.title", {
              strong: (chunks) => <span className="text-[#3442b8]">{chunks}</span>
            })}
          </h1>

          <p
            className="text-2xl md:text-3xl max-w-sm md:max-w-lg pt-6 md:pt-10 text-[#9CA3AF]"
          >
            {t("home.desc.1")}
          </p>

          <Link
            href={process.env.INVITE!}
            target="_blank"
            className="flex items-center justify-center text-3xl md:text-4xl bg-[#3442b8] rounded-md gap-3 mt-5 w-fit px-6 py-2 transition duration-500 hover:scale-115"
          >
            <span>
              {t("home.add")}
            </span>

            <Image
              src="/redirect.png"
              width={35}
              height={50}
              alt="plus"
              className="invert"
            />
          </Link>

          <ul className="text-xl md:text-3xl pt-10 flex flex-col gap-y-4 text-[#9CA3AF] max-w-xs md:max-w-full">
            <li className="flex gap-4">
              <Image
                src="/calendar.png"
                width={30}
                height={50}
                alt="calendar"
                className="w-7 h-7 md:w-[30px] md:h-[35px]"
              />

              <span>{t("home.desc.2")}</span>
            </li>
            <li className="flex gap-4">
              <Image
                src="/target.png"
                width={30}
                height={50}
                alt="target"
                className="w-7 h-7 md:w-[30px] md:h-[35px]"
              />

              <span>{t("home.desc.3")}</span>
            </li>
            <li className="flex gap-4">
              <Image
                src="/light.png"
                width={30}
                height={50}
                alt="light"
                className="w-7 h-7 md:w-[30px] md:h-[35px]"
              />

              <span>{t("home.desc.4")}</span>
            </li>
            <li className="flex gap-4">
              <Image
                src="/medal.png"
                width={30}
                height={50}
                alt="medal"
                className="w-7 h-7 md:w-[30px] md:h-[35px]"
              />

              <span>{t("home.desc.5")}</span>
            </li>
          </ul>
        </div>

        <Image
          src="/crowd.png"
          width={579}
          height={369}
          alt="image"
          className="relative md:top-20 md:left-20 mx-auto mt-8 rounded-xl shadow-xl filter brightness-90 transition-transform duration-500 hover:scale-125 hover:brightness-110 hover:-translate-y-1"
        />
      </div>

      <div className="px-4 md:px-30 pt-8 md:pt-10 md:max-w-7xl pb-10">
        <ul className="flex flex-col gap-y-10">
          <li className="flex flex-col md:flex-row bg-[#2A2A2A] max-w-90 md:max-w-3xl rounded-md px-4 py-4 transition-transform duration-500 hover:scale-115 hover:brightness-110 hover:-translate-y-1">
            <Image
              src="/illustration-2.png"
              width={366}
              height={240}
              alt="a"
              className="rounded-md shadow-xl transition-transform duration-500 hover:scale-105 hover:brightness-110 hover:-translate-y-1"
            />

            <div className="flex flex-col">
              <h2 className="md:text-3xl font-bold text-center pt-1">
                {t("home.setup.title")}
              </h2>

              <p
                className="md:text-xl px-4 pt-5"
                style={
                  {
                    whiteSpace: "pre-line"
                  }
                }
              >
                {t.rich("home.setup.desc", {
                  strong: (chunks) => <span className="font-bold bg-[#1A1A1A] text-[#9CA3AF] rounded-md md:max-w-30">{chunks}</span>
                })}
              </p>
            </div>
          </li>

          <li className="flex flex-col md:flex-row bg-[#2A2A2A] max-w-90 md:max-w-3xl rounded-md px-4 py-4 transition-transform duration-500 hover:scale-115 hover:brightness-110 hover:-translate-y-1">
            <Image
              src="https://i.imgur.com/YoOt0PW.gif"
              width={366}
              height={533}
              alt="a"
              className="rounded-md shadow-xl transition-transform duration-500 hover:scale-105 hover:brightness-110 hover:-translate-y-1"
            />

            <div className="flex flex-col">
              <h2 className="md:text-3xl font-bold text-center pt-1">
                {t("home.use.title")}
              </h2>

              <p
                className="md:text-xl px-4 pt-5"
                style={
                  {
                    whiteSpace: "pre-line"
                  }
                }
              >
                {t.rich("home.use.desc", {
                  strong: (chunks) => <span className="font-bold bg-[#1A1A1A] text-[#9CA3AF] rounded-md md:max-w-30">{chunks}</span>
                })}
              </p>
            </div>
          </li>
        </ul>
      </div>
    </>
  )
}