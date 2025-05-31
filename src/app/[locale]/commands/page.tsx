import { getTranslations } from "next-intl/server"

type Props = {
  params: Promise<{
    locale: string
  }>
}

export default async function Commands({ params }: Props) {
  const t = await getTranslations()

  // const commands = await (await fetch("localhost:4000/commands", {
  //   headers: {
  //     authorization: process.env.AUTH!
  //   }
  // })).json()

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