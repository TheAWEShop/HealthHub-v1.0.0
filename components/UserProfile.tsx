import React, { useEffect, useState } from 'react';
import { useClerk } from '@clerk/nextjs';
import { Plan, PrismaClient, User } from '@prisma/client';

interface UserWithRelations {
    id: string;
    name?: string;
    email: string;
    password?: string | null;
    wallet: Number;
    planId?: string;
    leftDownlineId?: string;
    rightDownlineId?: string;
    createdAt: Date;
    updatedAt: Date;
    plan?: Plan;
    leftDownline?: User;
    rightDownline?: User;
}

const prisma = new PrismaClient();

const UserProfile = () => {
    const { user } = useClerk();
    const [userData, setUserData] = useState<UserWithRelations | null>(null);

    useEffect(() => {
        const fetchUser = async () => {
            if (user?.id) {
                const userData = await prisma.user.findUnique({
                    where: { id: user.id },
                    include: {
                        plan: true,
                        leftDownline: true,
                        rightDownline: true,
                    },
                });
                setUserData(userData);
            }
        };

        fetchUser();
    }, [user]);

    return (
        <div className="user-profile">
            {userData ? (
                <>
                    <h2>Profile</h2>
                    <p>Name: {userData.name}</p>
                    <p>Email: {userData.email}</p>
                    <p>Wallet Balance: {userData.wallet}</p>
                    <p>Plan: {userData.plan?.name}</p>

                    <h3>Downline</h3>
                    <ul>
                        {userData.leftDownline && (
                            <li>Left Downline: {userData.leftDownline.name}</li>
                        )}
                        {userData?.rightDownline && (
                            <li>Right Downline: {userData.rightDownline.name}</li>
                        )}
                    </ul>
                </>
            ) : (
                <p>Loading user data...</p>
            )}
        </div>
    );
};

export default UserProfile;
