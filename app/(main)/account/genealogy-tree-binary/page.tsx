import GenealogyTree from '@/components/GenealogyTree'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import React from 'react'

type Props = {}

const GENEAOLOGYTREE = (props: Props) => {
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


                <GenealogyTree/>


                </CardContent>
            </Card>

            <div className="footer border-t-2 font-bold text-sm flex items-center justify-center p-1">
                Copyright © 2024 HealthHub Pvt Ltd. <span className='font-normal opacity-45'>All rights reserved.</span>
            </div>

        </div>
    )
}

export default GENEAOLOGYTREE