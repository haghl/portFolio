import { IPosts } from '@/types/types'
import Image from 'next/image'

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
              <div className="w-full h-[100px] bg-secondary" />
            ) : (
              <div className="Img">
                <Image src={x.cover} alt={`${x.id}_cover`} width={100} height={100} />
              </div>
            )}

            <p>{x.title}</p>
            <p>{x.category?.name}</p>
          </li>
        )
      })}
    </ul>
  )
}

export default PostList
