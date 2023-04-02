import Image from 'next/image'
import { IPosts } from '@/types/types'
import { spawn } from 'child_process'

interface IPostList {
  data: IPosts[]
}

const PostList = ({ data }: IPostList) => {
  return (
    <ul className="mt-[20px] flex flex-wrap gap-[15px]">
      {data.map((x) => {
        return (
          <li key={x.id} className="PostListItem">
            {x.cover === 'none' ? (
              <div className="w-full h-[200px] bg-secondary" />
            ) : (
              <div className="Img border-b border-b-BLG300">
                {/* <img src={x.cover} alt={`${x.id}_cover`} /> */}
                <Image src={x.cover} alt={`${x.id}_cover`} width={200} height={200} sizes="(max-width: 768px) 50vw, (max-width: 1024px) 100vw" />
              </div>
            )}
            <div className="p-lg pb-category">
              <p className="mt-lg text-BLG400">{x.category?.name}</p>
              <p className="mt-sm fweb text-head_sm truncate">{x.title}</p>
              <p className="mt-sm text-sm text-BLG400">{x.published}</p>
              <p className="mt-md flex gap-x-[5px] truncate">
                {x.tags.map((x) => (
                  <span key={x.id} className="text-sm text-BLG400">
                    #{x.name}
                  </span>
                ))}
              </p>
            </div>
          </li>
        )
      })}
    </ul>
  )
}

export default PostList
