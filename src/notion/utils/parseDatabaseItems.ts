import moment from 'moment'
import { getDatabaseItems } from '@/notion/notion'
import { IPosts } from '@/types/types'

// 노션 API로 받은 데이터 가공
export const parseDatabaseItems = (databaseItems: Awaited<ReturnType<typeof getDatabaseItems>>) =>
  databaseItems.reduce<IPosts[]>((acc, item) => {
    if (!('properties' in item)) return acc

    const { id } = item
    const { 카테고리, 작성일, 이름, 태그 } = item.properties

    console.log(item.properties)

    // 블로그 목록 데이터 가공
    const cover = item.cover?.type === 'external' ? item.cover.external.url : item.cover?.file ? item.cover.file.url : `none`
    const title = 이름?.type === 'title' ? 이름.title[0].plain_text : ''
    const published = 작성일?.type === 'created_time' ? moment(작성일.created_time).format('YYYY.MM.DD') : ''
    const category = 카테고리?.type === 'select' ? 카테고리?.select : null
    const tags = 태그?.type === 'multi_select' ? 태그.multi_select : []

    acc.push({
      id,
      cover,
      title,
      published,
      category,
      tags,
    })
    return acc
  }, [])
