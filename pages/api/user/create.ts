import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res:NextApiResponse) {
    if (req.method === 'POST') {
    const { name, email, password, referral_code, clerk_id, primaryPhoneNumber, username, imageUrl } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }

    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return res.status(409).json({ message: 'Email already exists' });
    }


    // Create user
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password,
        referral_code,
        clerk_id,
        primaryPhoneNumber,
        username,
        imageUrl
      },
    });

    res.status(201).json(user);
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
