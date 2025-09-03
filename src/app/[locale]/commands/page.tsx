import { getTranslations } from "next-intl/server"
import CommandLoading from "../../../components/commands/CommandLoading"

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
      <CommandLoading/>
    </>
  )
}