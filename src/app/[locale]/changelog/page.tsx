import { getTranslations } from 'next-intl/server'
import Link from 'next/link'

type Content = {
  lang: string
  text: string
}
type Update = {
  id: string
  published_at: number
  content: Content[]
}
type Props = {
  params: Promise<{
    locale: string
  }>
}
export default async function ChangeLog({ params }: Props) {
  const t = await getTranslations()
  const { locale } = await params
  const updates: Update[] = await (await fetch(process.env.API_URL + '/updates')).json()
  return (
    <>
      <div>
        <h1 className='flex flex-col font-bold text-4xl md:text-5xl items-center pt-15'>
          {t('changelog.title')}
        </h1>
      </div>
      <div
        className='flex flex-col items-center justify-center pt-10'
      >
        {
          updates.sort((a, b) => b.published_at - a.published_at)
            .map(async(update, i) => (
              <Link
                key={i}
                className='bg-[#2A2A2A] p-5 rounded-md max-w-xs md:max-w-2xl mb-6 w-[700] transition duration-500 hover:scale-105'
                href={`/${locale}/changelog/v${update.id}`}
              >
                <h2
                  className='text-2xl font-bold'
                >
                  v{update.id}
                </h2>
              </Link>
            ))
        }
      </div>
    </>
  )
}