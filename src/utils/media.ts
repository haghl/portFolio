import { useMediaQuery } from 'react-responsive'

export const MediaMobile = () => {
  const mediaQuery = useMediaQuery({ query: '(max-width:465px)' })

  return mediaQuery
}
