"use client"

import { Transition } from "@headlessui/react"
import { Menu } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import LanguageMenu from "./LanguageMenu"

type Props = {
  add_me: string
  home: string
  commands: string
  support: string
}

export default function MobileMenu({ add_me, home, commands, support }: Props) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div
        className="lg:hidden flex items-center justify-between"
        onClick={() => isOpen ? setIsOpen(false) : setIsOpen(true)}
      >
        <Link
          href="/"
          className="flex items-center gap-2"
        >
          <Image
            src="/header/sabine.png"
            width={50}
            height={50}
            alt="sabine"
            className="rounded-full"
          />
          <span
            className="text-3xl font-bold"
          >
            Sabine
          </span>
        </Link>

        <Menu />

        <Transition
          show={isOpen}
        >
          <div
            className="absolute top-12 right-0 bg-[#2A2A2A] rounded-md shadow-md"
          >
            <ul className="flex flex-col justify-center items-center">
              <li>
                <Link
                  href="https://discord.com/oauth2/authorize?client_id=1235576817683922954&scope=bot&permissions=388096"
                  className="inline-block py-1 px-2 bg-[#3442b8] rounded-md mt-2"
                  target="_blank"
                >
                  {add_me}
                </Link>
              </li>

              <li>
                <Link
                  href="/"
                  className="inline-block py-1 px-2"
                >
                  {home}
                </Link>
              </li>

              <li>
                <Link
                  href="/commands"
                  className="inline-block py-1 px-2"
                >
                  {commands}
                </Link>
              </li>

              <li>
                <a
                  href={process.env.SUPPORT!}
                  target="_blank"
                  className="flex items-center gap-2 py-1 px-2"
                >
                  <span>{support}</span>
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
        </Transition>
      </div>
    </>
  )
}