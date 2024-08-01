import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { email } = req.query;

    try {
        const userData = await prisma.user.findUnique({
            where: { email: email as string },
            include: {
                plan: true,
                leftDownline: true,
                rightDownline: true,
            },
        });

        if (userData) {
            res.status(200).json(userData);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
}
