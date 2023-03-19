import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import type { GetStaticProps } from 'next'

import PageHead from '@/components/common/PageHead'
import { getCachedDatabaseItems } from '@/notion/utils/getCachedDatabaseItems.tsx'
import { parseDatabaseItems } from '@/notion/utils/parseDatabaseItems'
import { initBlogInfo } from '@/notion/notion'
import { POSTS_PER_PAGE } from '@/notion/config'
import { IBlogInfo, IPosts } from '@/types/types'

interface IBlog {
  data: IPosts[]
  blogData: IBlogInfo
}

const Home = ({ data, blogData }: IBlog) => {
  const { query } = useRouter()
  const currentPage = query.page ? parseInt(query.page.toString(), 10) : 1
  const [postData, setPostData] = useState(data.slice(POSTS_PER_PAGE * (currentPage - 1), POSTS_PER_PAGE * currentPage))
  const [postCount] = useState(data.length)

  useEffect(() => {
    setPostData(data.slice(POSTS_PER_PAGE * (currentPage - 1), POSTS_PER_PAGE * currentPage))
  }, [currentPage, data])

  return (
    <>
      <PageHead />
      <div>
        {postData.map((x) => {
          return (
            <div key={x.id}>
              <p>{x.title}</p>
              <p>{x.category?.name}</p>
            </div>
          )
        })}
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps<IBlog> = async () => {
  const databaseId = process.env.NOTION_DATABASE_ID
  try {
    if (!databaseId) throw new Error('DATABASE_ID is not defined')
    const databaseItems = await getCachedDatabaseItems(databaseId)
    const parsedData = parseDatabaseItems(databaseItems)
    const blogData = await initBlogInfo(databaseId)
    return {
      props: {
        data: parsedData,
        blogData,
      },
      revalidate: 60,
    }
  } catch (e) {
    console.error(e)
    return {
      notFound: true,
    }
  }
}

export default Home
