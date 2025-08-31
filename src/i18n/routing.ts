import { defineRouting } from "next-intl/routing"
import { locales } from "../../config"

export const routing = defineRouting({
  locales,
  defaultLocale: "us"
})