import { MultiSelectPropertyItemObjectResponse, SelectPropertyItemObjectResponse } from '@notionhq/client/build/src/api-endpoints'

type StringRequest = string
export type SelectPropertyResponse = {
  id: StringRequest
  name: StringRequest
}

export type IIcon =
  | {
      type: 'emoji'
      emoji: string
    }
  | {
      type: 'url'
      url: string
      proxyUrl: string
    }
  | null

export interface IPosts {
  id: string
  cover: string
  title: string
  category: SelectPropertyItemObjectResponse['select'] | null
  published: string
  tags: MultiSelectPropertyItemObjectResponse['multi_select']
}

export interface ITag {
  id?: string
  name: string
}

export interface IBlogInfo {
  title: string
  description: string
  coverURL: string
  icon: string
  tags: {
    options: SelectPropertyResponse[]
  } | null
  category: {
    options: SelectPropertyResponse[]
  } | null
}
