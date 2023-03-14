import { ReactNode } from 'react'

const Main = ({ children }: { children: ReactNode }) => {
  return (
    <div className="pt-header">
      <div className="h-[300px] bg-primary">배너</div>
      <div className="max-w-screen-lg mt-[50px]">{children}</div>
    </div>
  )
}

export default Main
