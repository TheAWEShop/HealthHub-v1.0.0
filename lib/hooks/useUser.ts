import { useState, useEffect } from 'react';
import { prisma } from '@/lib/prisma';

export const useUser = (userId: string | undefined) => {
  const [userData, setUserData] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      if (userId) {
        const user = await prisma.user.findUnique({
          where: { id: userId },
          include: {
            // Include necessary relations, e.g., leftDownline, rightDownline
          },
        });
        setUserData(user);
      }
    };

    fetchUser();
  }, [userId]);

  return { userData };
};
