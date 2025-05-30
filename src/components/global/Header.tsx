import local from "next/font/local"
import Link from "next/link"
import Image from "next/image"

const lubrifont = local({
  src: "../../app/fonts/WDXLLubrifontTC-Regular.ttf",
  display: "swap"
})

export default function Header({ children }: { children?: React.ReactNode }) {
  return (
    <>
      <header className="bg-[#0d763e] shadow-xl">
        <nav className="p-4 flex items-center justify-between">
          <div className="transition duration-500 hover:scale-115">
            <Link href="/" className="flex flex-wrap items-center justify-between px-30">
              <Image
                src="/sabine.png"
                width={80}
                height={1024}
                alt="sabine"
                className="rounded-full"
              ></Image>

              <span className="text-5xl font-bold px-5">Sabine</span>
            </Link>
          </div>

          <ul className="flex flex-wrap items-center justify-between gap-5 text-3xl px-25">
            <li className="transition duration-500 hover:scale-115">
              <Link href="/" className="inline-block px-4 py-2 bg-[#0d763e] text-white rounded-md hover:bg-[#11924b] transition">Home</Link>
            </li>

            <li className="transition duration-500 hover:scale-115">
              <Link href="/commands" className="inline-block px-4 py-2 bg-[#0d763e] text-white rounded-md hover:bg-[#11924b] transition">Commands</Link>
            </li>

            <li className="transition duration-500 hover:scale-115">
              <div>
                <a
                  href="https://discord.com/invite/FaqYcpA84r"
                  target="_blank"
                  className="flex gap-2 items-center px-4 py-2 bg-[#0d763e] text-white rounded-md hover:bg-[#11924b] transition"
                >
                  <span>Support and community server</span>
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
              {/* change lang option here */}
            </li>
          </ul>
        </nav>
      </header>

      <html lang="en">
        <body className={lubrifont.className}>
          {children}
        </body>
      </html>
    </>
  )
}