declare global {
  namespace NodeJS {
    interface ProcessEnv {
      AUTH: string
      API_URL: string
      PORT: number
      INVITE: string
      SUPPORT: string
    }
  }
}
export {}