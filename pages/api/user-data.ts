import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { userId } = req.query;

  const user = await prisma.user.findUnique({
    where: { id: String(userId) },
    include: { downlines: true },
  });

  res.status(200).json(user);
}
