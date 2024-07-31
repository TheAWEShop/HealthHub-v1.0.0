import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { SignUp, useClerk } from '@clerk/nextjs';
import { PrismaClient, User } from '@prisma/client';

const prisma = new PrismaClient();

const SignUpPage = () => {
  const router = useRouter();

  const handleClerkSignup = async (user: any) => {
    try {
      const createdUser = await prisma.user.create({
        data: {
          clerkId: user.id,
          email: user.emailAddresses[0].emailAddress,
          // Add other default fields
        },
      });
      router.push('/additional-details');
    } catch (error) {
      console.error(error);
      // Handle error
    }
  };

  return (
    <div>
      <SignUp routing="path"   />
    </div>
  );
};

export default SignUpPage;
