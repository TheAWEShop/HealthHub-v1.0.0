import React, { useEffect, useState } from 'react'
import { Sidebar, SidebarBody } from './ui/sidebar'
import Image from 'next/image'
import { currentUser, User } from '@clerk/nextjs/server'
import { ModeToggle } from './ui/ModeToggle'

type Props = {}


const LeftSidebar = async (props: Props) => {
    const authUser = await currentUser()

    return (
        <div className='h-screen'>
            <Sidebar animate={false}>
                <SidebarBody className="justify-between gap-10">
                    <Image className='relative -top-10 w-full mix-blend-multiply	' src="/logo.jpg" alt="Health Hub" width={270} height={270} />
                    <ModeToggle/>
                    this is the sidebar
                    <div className='flex font-bold text-base items-center uppercase gap-3'>

                        <img src={authUser?.imageUrl} className='rounded-full w-10' alt="avatar" />
                        {authUser?.username}
                    </div>
                </SidebarBody>
            </Sidebar>
        </div>
    )
}

export default LeftSidebar

