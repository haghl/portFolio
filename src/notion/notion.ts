import { Client } from '@notionhq/client'
import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints'
import { NotionAPI } from 'notion-client'

export const propertyTable = {
  Date: '작성일',
  Published: '상태',
  Tags: '태그',
  Category: '카테고리',
}

// Initializing a client
export const notion = new Client({
  auth: process.env.NOTION_TOKEN,
})

export interface DatabaseQueryOption {
  tagName?: string
}

export const getDatabaseItems = async (databaseId: string, option?: DatabaseQueryOption) => {
  const databaseItems = await notion.databases.query({
    database_id: databaseId,
    filter: {
      and: [
        {
          property: propertyTable.Published,
          status: {
            // 공개인 포스팅만 가져오기
            equals: '공개',
          },
        },
        {
          property: propertyTable.Category,
          select: {
            equals: option?.tagName ?? '',
          },
        },
      ],
    },
    sorts: [
      {
        // 작성일 기준 정렬
        property: propertyTable.Date,
        direction: 'descending',
      },
    ],
  })
  return databaseItems.results
}

export const getPageItem = async (pageId: string) => {
  const pageItem = await notion.pages.retrieve({
    page_id: pageId,
  })

  return pageItem
}

export const getSearchItems = async (query: string) => {
  const searchItems = await notion.search({
    query,
    sort: {
      direction: 'descending',
      timestamp: 'last_edited_time',
    },
    filter: {
      property: 'object',
      value: 'page',
    },
    page_size: 12,
  })

  return searchItems.results as PageObjectResponse[]
}

export const reactNotionApi = new NotionAPI()

export const getPageContent = async (pageId: string) => {
  const recordMap = await reactNotionApi.getPage(pageId)

  return recordMap
}
