import Link from 'next/link'
import Image from 'next/image'
import { IPosts } from '@/types/types'
import { MediaMobile } from '@/utils/media'

interface IPostList {
  data: IPosts[]
}

const PostList = ({ data }: IPostList) => {
  return (
    <ul className="mt-[20px] flex flex-wrap gap-[15px] mobile:gap-[8px]">
      {data.map((x) => {
        return (
          <li key={x.id} className="PostListItem">
            <Link href={`/blog/${x.id}`} className="mobile:flex">
              {x.cover === 'none' ? (
                <div className="w-full h-[200px] bg-secondary mobile:h-[100px]" />
              ) : (
                <div className="Img border-b border-b-BLG300">
                  {/* <img src={x.cover} alt={`${x.id}_cover`} /> */}
                  <Image src={x.cover} alt={`${x.id}_cover`} width={!MediaMobile ? 200 : 100} height={!MediaMobile ? 200 : 100} />
                </div>
              )}
              <div className="p-lg pb-category mobile:p-md">
                <p className="mt-lg text-BLG400 mobile:mt-[0px]">{x.category?.name}</p>
                <p className="mt-sm fweb text-head_sm truncate mobile:text-body">{x.title}</p>
                <p className="mt-sm text-sm text-BLG400 mobile:text-[12px]">{x.published}</p>
                <p className="mt-md flex gap-x-[5px] truncate mobile:mt-sm">
                  {x.tags.map((el) => (
                    <span key={el.id} className="text-sm text-BLG400 mobile:text-[12px]">
                      #{el.name}
                    </span>
                  ))}
                </p>
              </div>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default PostList
