import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient, PlanType } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const {
            name,
            email,
            password,
            wallet,
            plan, // Assuming plan is a string representing the PlanType
            referral_code,
        } = req.body;

        try {
            const existingUser = await prisma.user.findUnique({
                where: { email }, // Find user by email for uniqueness
            });

            if (existingUser) {
                // Update existing user
                await prisma.user.update({
                    where: { id: existingUser.id },
                    data: {
                        name,
                        email,
                        password, // Consider hashing password for security
                        wallet,
                        planId: plan as PlanType, // Cast plan to PlanType enum
                    },
                });
            } else {
                // Create new user
                await prisma.user.create({
                    data: {
                        name,
                        email,
                        password, // Consider hashing password for security
                        wallet,
                        planId: plan as PlanType, // Cast plan to PlanType enum
                        referral_code,
                    },
                });
            }

            res.status(200).json({ message: 'User updated/created successfully' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
