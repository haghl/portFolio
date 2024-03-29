import dynamic from 'next/dynamic'
import Link from 'next/link'
import Image from 'next/image'
import { ExtendedRecordMap } from 'notion-types'
import { NotionRenderer } from 'react-notion-x'

// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-return
const Code = dynamic(() => import('react-notion-x/build/third-party/code').then((m) => m.Code), { ssr: false })
const Collection = dynamic(() => import('react-notion-x/build/third-party/collection').then((m) => m.Collection))
const Equation = dynamic(() => import('react-notion-x/build/third-party/equation').then((m) => m.Equation))

interface NotionPageRendererProps {
  recordMap: ExtendedRecordMap
}

const NotionRender = ({ recordMap }: NotionPageRendererProps) => {
  return (
    <NotionRenderer
      recordMap={recordMap}
      fullPage
      disableHeader
      minTableOfContentsItems={1}
      pageCover={<></>}
      showTableOfContents
      previewImages={!!recordMap?.preview_images}
      // mapImageUrl={(url, block) => defaultMapImageUrl(url, block) ?? url}
      components={{
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-return
        propertyDateValue: (dateProperty) => dateProperty.data[0][1][0][1].start_date,
        nextImage: Image,
        nextLink: Link,
        Code,
        Collection,
        Equation,
      }}
    />
  )
}

export default NotionRender
