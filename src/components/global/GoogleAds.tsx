import { useEffect } from 'react'

declare global {
  interface Window {
    adsbygoogle: unknown[]
  }
}
export default function GoogleAds() {
  useEffect(() => {
    (window.adsbygoogle = window.adsbygoogle || []).push({})
  })
  return (
    <ins
      className='adsbygoogle'
      style={{ display: 'block' }}
      data-ad-client='ca-pub-3346744916189692'
      data-ad-format='auto'
      data-full-width-response='true'
    />
  )
}