import Image from "next/image"

export default function Home() {
  return (
    <>
      <div className="px-30 pt-15 flex items-start gap-10">
        <div>
          <h1 className="text-7xl max-w-md">
            Your <span className="text-[#3442b8]">e-sports</span> Discord bot
          </h1>

          <p
            className="text-3xl max-w-lg pt-10 text-[#9CA3AF]"
          >
            More than just a bot, I&apos;m your source of first-hand information and entertainment for your Discord server!
          </p>

          <ul className="text-3xl pt-10 flex flex-col gap-y-4 text-[#9CA3AF]">
            <li className="flex gap-4">
              <Image
                src="/calendar.png"
                width={30}
                height={50}
                alt="calendar"
              />

              <span>Schedule matches from various leagues</span>
            </li>
            <li className="flex gap-4">
              <Image
                src="/target.png"
                width={30}
                height={50}
                alt="target"
              />

              <span>Stay up to date with results and statistics</span>
            </li>
            <li className="flex gap-4">
              <Image
                src="/light.png"
                width={30}
                height={50}
                alt="light"
              />

              <span>Make predictions</span>
            </li>
            <li className="flex gap-4">
              <Image
                src="/medal.png"
                width={30}
                height={50}
                alt="medal"
              />

              <span>Compete against the best players</span>
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