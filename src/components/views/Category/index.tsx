import Link from 'next/link'
import { useRouter } from 'next/router'
import { BsFillGridFill } from 'react-icons/bs'
import type { SelectPropertyResponse } from '@/types/types'

interface IBlogCategory {
  category: SelectPropertyResponse[] | undefined
}

const Category = ({ category }: IBlogCategory) => {
  const { pathname, query } = useRouter()

  return (
    <aside>
      <ul className="dfcc gap-x-[8px]">
        <li className={`CategoryItem ${pathname === '/' ? 'Active' : ''}`}>
          <Link href="/" className="dfcc px-category py-md border border-solid rounded-full border-BLG300 gap-x-[5px] fwb text-BLG500">
            <BsFillGridFill />
            전체 글
          </Link>
        </li>
        {category?.map((item) => (
          <li key={item.id} className={`CategoryItem ${query.name === item.name ? 'Active' : ''}`}>
            <Link href={`/category/${item.name}`} className="px-category py-md dfcc border border-solid rounded-full fwb border-BLG300 text-BLG500">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default Category
