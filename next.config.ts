import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.imgur.com'
      },
      {
        protocol: 'https',
        hostname: 'cdn.sabinebot.xyz'
      }
    ]
  }
}
const withNextIntl = createNextIntlPlugin()
export default withNextIntl(nextConfig)