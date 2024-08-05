import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { IconCash, IconCurrencyRupee, IconUserFilled, IconUserScan, IconUsersGroup } from '@tabler/icons-react'
import React from 'react'

type Props = {}

const CardsData = [
    {
        title: 'MY Self PV',
        text: '1303',
        icon: (<IconUsersGroup size={63} color='white' />),
        iconBg: 'red-500'
    },
    {
        title: 'MY Status',
        text: 'Active',
        icon: (<IconUserFilled size={63} color='white' />),
        iconBg: 'blue-500'
    },
    {
        title: 'KYC Status',
        text: 'Verified',
        icon: (<IconUserScan size={63} color='white' />),
        iconBg: 'green-500'
    },
    {
        title: 'My Left Team',
        text: '3',
        icon: 'Icon2',
        iconBg: 'yellow-500'
    },
    {
        title: 'My Right Team',
        text: '0',
        icon: 'Icon2',
        iconBg: 'pink-500'
    },
    {
        title: 'Total Earning',
        text: '0',
        icon: (<IconCash size={63} color='white' />),
        iconBg: 'blue-400'
    },
]



const Dashboard = (props: Props) => {
    return (
        <div className='w-full p-5'>

            <div className="headingDashboard font-semibold text-3xl mb-16">
                Dashboard <span className='font-light text-base px-1 opacity-45'>Control panel</span>
            </div>

            <div className='mt-7 md:grid md:grid-cols-4 gap-5 '>
                {CardsData.map(card => (
                    <div key={card.title} className='relative mb-10 shadow-[0_3px_10px_rgb(0,0,0,0.2)] '>

                        <Card >
                            <CardHeader >
                                <CardDescription className='justify-end flex mr-2 text-base opacity-45' >{card.title}</CardDescription>
                            </CardHeader>
                            <CardContent className='justify-end flex mr-2 text-xl '>
                                <p>{card.text}</p>
                            </CardContent>
                        </Card>

                        <div className={`w-[90px] h-[90px] bg-${card.iconBg} absolute -top-5 left-5 rounded-md shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] flex items-center justify-center`}>
                            {card.icon}
                        </div>

                    </div>

                ))}
            </div>

            <div className='flex flex-col md:flex-row items-center justify-center'>
                <Card className='max-w-[445px] mb-10'>
                    <CardHeader className='relative bg-green-500 w-full rounded-t-lg max-w-[445px]'>
                        <CardTitle className='text-white text-2xl font-light'>admin</CardTitle>
                        <CardDescription className='font-bold text-sm text-white'>Associate</CardDescription>
                        <CardTitle className='absolute right-[20%] top-3 text-white text-3xl font-bold'>3</CardTitle>
                        <CardDescription className='absolute right-[10%] bottom-3 font-bold text-sm text-white'>Direct Sponser
                        </CardDescription>

                    </CardHeader>

                    <CardContent className='relative max-w-[445px] min-h-[180px]'>
                        <img src="https://softwaredemo.in/ecommerce-mlm/account/dist/img/avatar5.png" alt="" className='rounded-full border-2 h-[108px] relative left-[150px] -top-10' />
                        <div className='absolute left-10 flex flex-col items-center'>
                            <div className='font-bold '>
                                SF1000
                            </div>
                            <span className=''>
                                USERID
                            </span>
                        </div>
                        <div className='absolute right-10 flex flex-col items-center'>
                            <div className='font-bold '>
                                28/04/2023 01:00:00
                            </div>
                            <span className=''>
                                JOINING DATE
                            </span>
                        </div>


                    </CardContent>

                    <CardFooter>
                        <div className='font-bold text-green-500 w-full'>
                            Your Sponser - <span className='font-normal text-red-500'> https://jhkhjkhkjn.com </span>
                        </div>
                        <div className='font-bold text-green-500'>
                            Refer Link - <span className='font-normal text-red-500 w-full'>http://www.ssflfood.com/signup?SF1000</span>
                        </div>
                    </CardFooter>
                </Card>
                <div className='w-full md:flex md:flex-wrap mx-5 gap-10'>

                    <Card className='md:w-[45%] h-[30%] mb-5 flex '>

                        <CardHeader className='bg-purple-900 rounded-l-lg w-1/4 flex items-center justify-center'>
                            <IconCurrencyRupee size={90} />
                        </CardHeader>

                        <CardContent className='p-3'>

                            <div className='uppercase opacity-45 text-sm'>Total Earnings</div>
                            <div className='font-bold pt-2'>999</div>

                        </CardContent>

                    </Card>

                    <Card className='md:w-[45%] h-[30%] mb-5 flex'>

                        <CardHeader className='bg-green-700 rounded-l-lg w-1/4 flex items-center justify-center'>
                            <IconCurrencyRupee size={90} />
                        </CardHeader>

                        <CardContent className='p-3'>

                            <div className='uppercase opacity-45 text-sm'>Total debit</div>
                            <div className='font-bold pt-2'>0</div>

                        </CardContent>

                    </Card>

                    <Card className='md:w-[45%] h-[30%] mb-5 flex'>

                        <CardHeader className='bg-red-700 rounded-l-lg w-1/4 flex items-center justify-center'>
                            <IconCurrencyRupee size={90} />
                        </CardHeader>

                        <CardContent className='p-3'>

                            <div className='uppercase opacity-45 text-sm'>Total balance</div>
                            <div className='font-bold pt-2'>772</div>

                        </CardContent>

                    </Card>

                </div>
            </div>

            <div className="footer border-t-2 font-bold text-sm flex items-center justify-center p-1">
Copyright © 2024 HealthHub Pvt Ltd. <span className='font-normal opacity-45'>All rights reserved.</span> 
            </div>

        </div>
    )
}

export default Dashboard