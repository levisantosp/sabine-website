import { getTranslations } from "next-intl/server"

type Command = {
  name: string
  description: string
}
export default async function Commands() {
  const t = await getTranslations()
  const commands: Command[] = await (await fetch(process.env.API_URL + "/commands", {
    headers: {
      authorization: process.env.AUTH
    }
  })).json()
  return (
    <>
      <div>
        <h1 className="flex flex-col font-bold text-4xl md:text-5xl items-center pt-15">
          {t("commands.title")}
        </h1>
      </div>
      <div
        className="flex flex-col items-center justify-center pt-10"
      >
        {
          commands
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((cmd, index) => (
              <div
                key={index}
                className="bg-[#2A2A2A] p-5 rounded-2xl max-w-xs md:max-w-2xl mb-6 w-[700] transition duration-500 hover:scale-105"
              >
                <h2
                  className="text-2xl font-bold"
                >
                  /{cmd.name}
                </h2>
                <p
                  className="mt-2 text-lg"
                >
                  {t(`commands.${cmd.name}.description`)}
                </p>
              </div>
            ))
        }
      </div>
    </>
  )
}