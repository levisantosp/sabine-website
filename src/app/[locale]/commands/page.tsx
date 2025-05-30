import { getMessages } from "next-intl/server"
import { Props } from "../layout"
import { createTranslator } from "next-intl"

export default async function Commands({ locale }: Props) {
  const messages = await getMessages()
  const t = createTranslator({ locale, messages })

  // const commands = await (await fetch("localhost:4000/commands", {
  //   headers: {
  //     authorization: process.env.AUTH!
  //   }
  // })).json()

  const commands = [
    {
      name: "help",
      description: "Mostra os comandos do bot"
    }
  ]

  return (
    <>
      <div>
        <h1 className="flex flex-col text-7xl items-center pt-15">
          {t("commands.title")}
        </h1>
      </div>
    </>
  )
}