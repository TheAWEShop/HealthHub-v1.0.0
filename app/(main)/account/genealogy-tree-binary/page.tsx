'use client'
import GenealogyTree from '@/components/GenealogyTree'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import { useUser } from '@clerk/nextjs'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

type Props = {}

const GENEAOLOGYTREE = (props: Props) => {
    const { user } = useUser();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                if (user) {
                    const response = await axios.get(`/api/user/${user.primaryEmailAddress?.emailAddress}`);
                    const data = response.data;
                    setData(data);
                }
            } catch (error) {
                console.error('Error fetching user data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, [user]);


    return (
        <div className='w-full p-5'>
            <div className="headingDashboard font-semibold text-3xl mb-16">
                GENEAOLOGY <span className='font-light text-base px-1 opacity-45'>Matching</span>
            </div>

            <Card className='rounded-lg overflow-hidden'>
                <CardHeader className='bg-green-500 text-white font-bold'>
                    GENEAOLOGY TREE
                </CardHeader>
                <CardContent>

                    {loading ? <>
                        <Skeleton className='w-20 h-4 rounded-md m-3' />
                        <Skeleton className='w-20 h-4 rounded-md m-3' />
                        <Skeleton className='w-52 h-4 rounded-md m-3' />
                        <Skeleton className='w-36 h-8 rounded-md m-3' />
                        <Skeleton className='w-72 h-6 rounded-md m-3' />
                    </>
                        : <GenealogyTree user={data} />
                    }



                </CardContent>
            </Card>

            <div className="footer border-t-2 font-bold text-sm flex items-center justify-center p-1">
                Copyright © 2024 HealthHub Pvt Ltd. <span className='font-normal opacity-45'>All rights reserved.</span>
            </div>

        </div>
    )
}

export default GENEAOLOGYTREE