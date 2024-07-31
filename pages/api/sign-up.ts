import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { email, referredById, plan } = req.body;

        let leftDownlineId = null;
        let rightDownlineId = null;

        if (referredById) {
            const referrer = await Prisma.user.findUnique({
                where: { id: referredById },
            });

            if (referrer.leftDownlineId) {
                rightDownlineId = referrer.id;
            } else {
                leftDownlineId = referrer.id;
            }
        }

        const user = await prisma.user.create({
            data: {
                email,
                wallet: 0,
                referredById,
                plan,
                leftDownlineId,
                rightDownlineId,
            },
        });

        res.status(200).json(user);
    } else {
        res.status(405).end();
    }
}
