import type { GetStaticPaths, GetStaticProps } from 'next'
// import type { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import type { ExtendedRecordMap } from 'notion-types'
import { getPageTitle } from 'notion-utils'
import PageHead from '@/components/common/PageHead'
import NotionRender from '@/components/common/NotionRender'
import NotionSkeleton from '@/components/views/NotionSkeleton'
import { getCachedDatabaseItems } from '@/notion/utils/getCachedDatabaseItems'
import { getPageContent } from '@/notion/notion'

interface IDetailsPage {
  recordMap: ExtendedRecordMap
}

const DetailsPage = ({ recordMap }: IDetailsPage) => {
  const { isFallback } = useRouter()
  const pageTitle = recordMap ? getPageTitle(recordMap) : ''

  if (isFallback) return <NotionSkeleton />

  console.log(recordMap)

  return (
    <>
      <PageHead subTitle={pageTitle} />
      <NotionRender recordMap={recordMap} />
    </>
  )
}

export const getStaticProps: GetStaticProps<IDetailsPage> = async ({ params }) => {
  // export const getServerSideProps: GetServerSideProps<IDetailsPage> = async ({ params }) => {
  const id = params?.id
  console.log('idid', id?.toString())

  try {
    if (!id) throw Error('id is not defined')
    const recordMap = await getPageContent(id.toString())
    return {
      props: { recordMap },
      revalidate: 1,
    }
  } catch (e) {
    console.error(e)
    return { notFound: true }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const databaseId = process.env.NOTION_DATABASE_ID

  if (!databaseId) throw new Error('DATABASE_ID is not defined')
  const databaseItems = await getCachedDatabaseItems(databaseId)
  const paths = databaseItems.map(({ id }) => ({
    params: { id },
  }))

  console.log('params', paths)

  return {
    paths,
    fallback: true,
  }
}

export default DetailsPage
