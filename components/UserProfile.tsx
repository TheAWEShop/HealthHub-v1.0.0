'use client';
import React, { useEffect, useState } from 'react';
import { useUser } from '@clerk/nextjs';
import axios from 'axios';
import { currentUser } from '@clerk/nextjs/server';
import { User } from '@prisma/client';

interface UserProfileData {
    name: string;
    email: string;
    wallet: number;
    planId: string;
    leftDownline: {
        name: string;
    } | null;
    rightDownline: {
        name: string;
    } | null;
}

interface mail {
    userEmail: string
}

const UserProfile = (userEmail: mail) => {
    const { user } = useUser();
    const [userData, setUserData] = useState<UserProfileData | null>(null);

    useEffect(() => {
        console.log(userEmail.userEmail)

    })
    useEffect(() => {
        const fetchUser = async () => {

            try {
                const response = await axios.get(`/api/user/${userEmail.userEmail}`);
                setUserData(response.data);
            } catch (error) {
                console.error('Failed to fetch user data:', error);

            }
        };

        fetchUser();
    }, [userEmail]);

    return (
        <div className="container mx-auto p-4 bg-slate-500 text-white">
            {userData ? (
                <>
                    <h2 className="text-2xl font-bold mb-4">Profile</h2>
                    <p>Name: {userData.name}</p>
                    <p>Email: {userData.email}</p>
                    <p>Wallet Balance: ${userData.wallet.toFixed(2)}</p>
                    <p>Plan: {userData.planId}</p>

                    <h3 className="text-xl font-semibold mt-4">Downline</h3>
                    <ul>
                        {userData.leftDownline ? (
                            <li>Left Downline: {userData.leftDownline.name}</li>
                        ) : (
                            <li>No Left Downline</li>
                        )}
                        {userData.rightDownline ? (
                            <li>Right Downline: {userData.rightDownline.name}</li>
                        ) : (
                            <li>No Right Downline</li>
                        )}
                    </ul>
                </>
            ) : (
                <p>Loading user data...</p>
            )}
            This is User Dashboard
        </div>
    );
};

export default UserProfile;
