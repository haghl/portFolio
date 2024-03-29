import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import type { GetStaticProps } from 'next'

import PageHead from '@/components/common/PageHead'
import { getCachedDatabaseItems } from '@/notion/utils/getCachedDatabaseItems'
import { parseDatabaseItems } from '@/notion/utils/parseDatabaseItems'
import { initBlogInfo } from '@/notion/notion'
import { POSTS_PER_PAGE } from '@/notion/config'
import { IBlogInfo, IPosts } from '@/types/types'
import Category from '@/components/views/Category'
import PostList from '@/components/views/PostList'
import Banner from '@/components/views/Banner'

interface IBlog {
  data: IPosts[]
  blogData: IBlogInfo
}

const Home = ({ data, blogData }: IBlog) => {
  const { query } = useRouter()
  const currentPage = query.page ? parseInt(query.page.toString(), 10) : 1
  const [postData, setPostData] = useState(data.slice(POSTS_PER_PAGE * (currentPage - 1), POSTS_PER_PAGE * currentPage))

  useEffect(() => {
    setPostData(data.slice(POSTS_PER_PAGE * (currentPage - 1), POSTS_PER_PAGE * currentPage))
  }, [currentPage, data])

  // 데이터 테스트
  useEffect(() => {
    console.log(postData)
  }, [])

  return (
    <>
      <PageHead />
      <Banner />
      <div className="max-w-lg mt-[50px] mx-auto mobile:px-lg">
        <Category category={blogData.category?.options} />
        <PostList data={postData} />
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
