import Link from 'next/link'
import { useRouter } from 'next/router'
import { BsFillGridFill } from 'react-icons/bs'
import type { SelectPropertyResponse } from '@/types/types'

interface IBlogCategory {
  category: SelectPropertyResponse[] | undefined
}

const Category = ({ category }: IBlogCategory) => {
  const { pathname } = useRouter()
  return (
    <aside>
      <ul className="dfcc gap-x-[8px]">
        <li className={`CategoryItem ${pathname === '/' ? 'Active' : ''} px-category py-md border border-solid rounded-full border-BLG300`}>
          <Link href="/blog" className="dfcc gap-x-[5px] fwb text-BLG500">
            <BsFillGridFill />
            전체 글
          </Link>
        </li>
        {category?.map((item) => (
          <li key={item.id} className={`CategoryItem ${pathname === item.name ? 'Active' : ''} px-category py-md dfcc border border-solid rounded-full fwb border-BLG300`}>
            <Link href={`/category/${item.name}`} className="text-BLG500">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default Category
