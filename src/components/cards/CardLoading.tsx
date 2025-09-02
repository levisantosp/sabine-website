"use client"

import Image from "next/image"
import { useState } from "react"

type Props = {
  src: string
  collection: string
  alt: string
}
export default function CardLoading({ src, collection, alt }: Props) {
  const [loaded, setLoaded] = useState(false)
  return (
    <>
      <div
        className="bg-[#2A2A2A] overflow-x-hidden p-5 text-xl font-bold rounded-3xl text-center transition hover:scale-110 duration-300 relative"
      >
        {!loaded && <div className="absolute inset-0 bg-gray-700 animate-pulse rounded-3xl"/>}
        <Image
          src={src}
          height={250}
          width={250}
          alt={alt}
          className={`rounded-3xl text-center ${loaded ? "opacity-100" : "opacity-0"}`}
          onLoad={() => setLoaded(true)}
        />
        <span>
          {collection}
        </span>
      </div>
    </>
  )
}