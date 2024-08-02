'use client';
import React, { useEffect, useState } from 'react';
import { useUser } from '@clerk/nextjs';
import axios from 'axios';
import { currentUser } from '@clerk/nextjs/server';
import { User } from '@prisma/client';
import { GlowingStarsBackgroundCard, GlowingStarsDescription, GlowingStarsTitle } from './ui/glowing-stars';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

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

interface Props {
    userEmail: string
}

const UserProfile = (userEmail: Props) => {
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
        <div className="w-full p-4 bg-gray-100 text-white flex flex-col justify-between pr-10 ">
            <div className="userDetails pb-7 md:flex justify-between w-full">
                {userData ? (
                    <>
                        <Card className='mb-5'>
                            <CardHeader>
                                <CardTitle className='font-bold text-lg'>Profile</CardTitle>
                                <CardDescription>Your Details</CardDescription>
                            </CardHeader>
                            <CardContent>

                                <p>Name: {userData.name}</p>
                                <p>Email: {userData.email}</p>

                            </CardContent>
                            <CardFooter>
                                <p>Join Date: {userData.join_date}</p>
                            </CardFooter>
                        </Card>

                    </>
                ) : (
                    <p>Loading user data...</p>
                )}

                <div>
                    <GlowingStarsBackgroundCard>
                        <GlowingStarsTitle className='capitalize'>
                            {userData?.name}

                        </GlowingStarsTitle>
                        <div className="flex justify-between items-end">
                            <GlowingStarsDescription>
                                Wallet Balance: ₹{userData?.wallet} <br />
                                Plan: {userData?.planId}

                            </GlowingStarsDescription>
                        </div>
                    </GlowingStarsBackgroundCard>
                </div>

            </div>




            <div>
                <Card>
                    <CardHeader>
                        <CardTitle className='font-bold text-lg'>Downline</CardTitle>
                        <CardDescription>Downline details</CardDescription>
                    </CardHeader>
                    <CardContent>
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
                    </CardContent>
                    <CardFooter>
                    </CardFooter>
                </Card>
            </div>


        </div>
    );
};

export default UserProfile;
