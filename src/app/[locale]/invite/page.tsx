import { redirect } from "next/navigation"

export default function Invite() {
  redirect(process.env.INVITE)
}