import { NextResponse } from "next/server.js"

export const GET = async() => {
  const res = await fetch(process.env.API_URL + "/commands")
  const data = await res.json()
  return NextResponse.json(data)
}