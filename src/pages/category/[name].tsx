import { useEffect, useState } from 'react'
import type { GetStaticProps, GetStaticPaths } from 'next'
import { useRouter } from 'next/router'
import { POSTS_PER_PAGE } from '@/notion/config'
import { getCachedDatabaseItems } from '@/notion/utils/getCachedDatabaseItems'
import { parseDatabaseItems } from '@/notion/utils/parseDatabaseItems'
import { initBlogInfo } from '@/notion/notion'
import PageHead from '@/components/common/PageHead'
import PostList from '@/components/views/PostList'
import Category from '@/components/views/Category'
import type { IBlogInfo, IPosts } from '@/types/types'
import { checkKorean } from '@/utils/checkKorean'
import Banner from '@/components/views/Banner'

interface ICateory {
  data: IPosts[]
  blogData: IBlogInfo
}

const CategoryPage = ({ data, blogData }: ICateory) => {
  const { query } = useRouter()
  const currentPage = query.page ? parseInt(query.page.toString(), 10) : 1
  const [postData, setPostData] = useState(data.slice(POSTS_PER_PAGE * (currentPage - 1), POSTS_PER_PAGE * currentPage))

  // 게시글 목록 데이터 초기화
  useEffect(() => {
    setPostData(data.slice(POSTS_PER_PAGE * (currentPage - 1), POSTS_PER_PAGE * currentPage))
  }, [currentPage, data])

  return (
    <>
      <PageHead />
      <Banner />
      <div className="max-w-lg mt-[50px] mx-auto">
        <Category category={blogData.category?.options} />
        <PostList data={postData} />
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps<ICateory> = async ({ params }) => {
  const queryId = params?.name?.toString()
  if (!queryId || queryId === '') return { redirect: { destination: '/', permanent: false } }

  const isKorean = checkKorean(queryId)
  const name = isKorean ? queryId : queryId.replace(/\b[a-z]/g, (char) => char.toUpperCase())

  try {
    const databaseId = process.env.NOTION_DATABASE_ID
    if (!databaseId) throw new Error('DATABASE_ID is not defined')
    const databaseItems = await getCachedDatabaseItems(databaseId, {
      categoryName: name,
    })

    const blogData = await initBlogInfo(databaseId)
    const parsedData = parseDatabaseItems(databaseItems)

    const cateArr = blogData.category?.options.map((cate) => cate.name) || []
    const currentName = cateArr.find((cate) => cate === queryId)

    // 카테고리가 없을 때 404 페이지로 이동
    if (currentName === undefined) {
      return {
        redirect: {
          destination: '/404',
          permanent: false,
        },
      }
    }

    return {
      props: {
        data: parsedData,
        blogData,
      },
      revalidate: 60 * 5,
    }
  } catch (e) {
    console.error(e)
    return { notFound: true }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const databaseId = process.env.NOTION_DATABASE_ID
  if (!databaseId) throw new Error('DATABASE_ID is not defined')

  try {
    const { category } = await initBlogInfo(databaseId)

    const paths = category?.options.map(({ name: cateName }) => ({
      params: { name: cateName },
    }))

    if (!paths || paths.length === 0) throw new Error('No Categories')
    return {
      paths,
      fallback: 'blocking',
    }
  } catch (e) {
    console.error(e)
    return { paths: [], fallback: false }
  }
}

export default CategoryPage
