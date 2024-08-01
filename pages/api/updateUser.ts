import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient, PlanType } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const {
      name,
      email,
      password, // Consider hashing before storing
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
            email, // Ensure email is not changed
            password, // Consider hashing password for security
            wallet,
            plan: plan as PlanType, // Cast plan to PlanType enum
            referral_code,
            // Other fields
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
            plan: plan as PlanType, // Cast plan to PlanType enum
            referral_code,
            // Other fields
          },
        });
      }

      res.status(201).json({ message: 'User created or updated successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
