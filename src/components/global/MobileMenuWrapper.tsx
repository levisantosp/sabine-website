import { getTranslations } from "next-intl/server"
import MobileMenu from "./MobileMenu"

export default async function MobileMenuWrapper() {
  const t = await getTranslations()
  
  return (
    <>
      <MobileMenu
        add_me={t("home.add")}
        home={t("header.home")}
        commands={t("header.commands")}
        support={t("header.support")}
      />
    </>
  )
}