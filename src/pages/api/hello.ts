// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

const handler = (req: NextApiRequest, res: NextApiResponse<{ data: boolean }>) => {
  res.status(200).json({ data: true })
}
export default handler
