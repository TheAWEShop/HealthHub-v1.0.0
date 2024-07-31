import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { userId, downlineEmail } = req.body;

    const downline = await prisma.user.create({
      data: {
        email: downlineEmail,
        referredById: userId,
      },
    });

    const user = await prisma.user.update({
      where: { id: userId },
      data: {
        wallet: {
          increment: downline.wallet * 0.1,
        },
      },
    });

    res.status(200).json(user);
  } else {
    res.status(405).end();
  }
}
