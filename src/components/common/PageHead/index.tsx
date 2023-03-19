import Head from 'next/head'
import { useRouter } from 'next/router'

interface IPageHead {
  subTitle?: string
}

const DEFAULT_TITLE = '원동규의 어쩌다 하는 개발자 블로그'
const DEFAULT_SITE_URL = process.env.SITE_URL || 'https://haghl.dev'
const DEFAULT_DESCRIPTION = '어쩌다 보니 해야할 것 같아서 하는 블로그입니다.'

const PageHead = ({ subTitle }: IPageHead) => {
  const { asPath } = useRouter()
  const fullTitle = `${subTitle ? `${subTitle} | ${DEFAULT_TITLE}` : DEFAULT_TITLE}`
  const fullUrl = DEFAULT_SITE_URL + asPath

  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      {/* HTML Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={DEFAULT_DESCRIPTION} />
      <link rel="canonical" href={fullUrl} />
    </Head>
  )
}
export default PageHead
