'use client';
import React, { useEffect, useState } from 'react';
import { useUser } from '@clerk/nextjs';
import axios from 'axios';
import { currentUser } from '@clerk/nextjs/server';
import { User } from '@prisma/client';
import { GlowingStarsBackgroundCard, GlowingStarsDescription, GlowingStarsTitle } from './ui/glowing-stars';

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
    join_date: string
}

interface mail {
    userEmail: string
}

const UserProfile = (userEmail: mail) => {
    const { user } = useUser();
    const [userData, setUserData] = useState<UserProfileData | null>(null);


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
        <div className="w-full p-4 bg-gray-500 text-white flex flex-col md:flex-row justify-between pr-10 ">
            <div className="userDetails pb-7">
                {userData ? (
                    <>
                        <h2 className="text-2xl font-bold mb-4">Profile</h2>
                        <p>Name: {userData.name}</p>
                        <p>Email: {userData.email}</p>
                        <p>Join Date: {userData.join_date}</p>
                    </>
                ) : (
                    <p>Loading user data...</p>
                )}
            </div>
            <div>
                <GlowingStarsBackgroundCard>
                    <GlowingStarsTitle className='capitalize'>
                        {userData?.name}

                    </GlowingStarsTitle>
                    <div className="flex justify-between items-end">
                        <GlowingStarsDescription>
                            Wallet Balance: ₹{userData?.wallet} <br/>
                            Plan: {userData?.planId}

                        </GlowingStarsDescription>
                    </div>
                </GlowingStarsBackgroundCard>

                <div>
                    <h3 className="text-xl font-semibold mt-4">Downline</h3>
                    <ul>
                        {userData?.leftDownline ? (
                            <li>Left Downline: {userData.leftDownline.name}</li>
                        ) : (
                            <li>No Left Downline</li>
                        )}
                        {userData?.rightDownline ? (
                            <li>Right Downline: {userData.rightDownline.name}</li>
                        ) : (
                            <li>No Right Downline</li>
                        )}
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default UserProfile;
