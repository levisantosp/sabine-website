"use client"

import { useState } from "react"
import Image from "next/image"
import { Transition } from "@headlessui/react"
import { usePathname, useRouter } from "next/navigation"
import { locales } from "../../../config"

export default function LanguageMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  const changeLanguage = (lang: string) => {
    const reg = new RegExp(`^/(${locales.join("|")})`)
    router.push(`/${lang}${pathname.replace(reg, "")}`)
  }

  return (
    <>
      <div
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        className="relative inline-block"
      >
        <Image
          src="/header/language.png"
          width={50}
          height={50}
          alt="language"
          className="invert cursor-pointer w-6 h-6 md:w-10 md:h-10"
        />

        <Transition
          show={isOpen}
          enter="transition-opacity duration-500 ease-out"
          enterFrom="opacity-0 translate-y-2"
          enterTo="opacity-100 translate-y-0"
          leave="transition-opacity duration-250 ease-in"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-2"
        >
          <div
            className="absolute top-12 right-0 bg-[#3442b8] rounded-md shadow-md w-50 z-20"
          >
            <ul>
              <li
                className="flex items-center px-4 py-2 cursor-pointer gap-4 hover:bg-[#4f5cdb] transition"
                onClick={() => changeLanguage("br")}
              >
                <Image
                  src="/br.png"
                  width={40}
                  height={72}
                  alt="br"
                />
                <span>Português</span>
              </li>

              <li
                className="flex items-center px-4 py-2 cursor-pointer gap-4 hover:bg-[#4f5cdb] transition"
                onClick={() => changeLanguage("us")}
              >
                <Image
                  src="/us.png"
                  width={40}
                  height={72}
                  alt="us"
                />
                <span>English</span>
              </li>
            </ul>
          </div>
        </Transition>
      </div>
    </>
  )
}