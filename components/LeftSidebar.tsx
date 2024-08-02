import React, { useEffect, useState } from 'react'
import { Sidebar, SidebarBody, SidebarLink } from './ui/sidebar'
import Image from 'next/image'
import { currentUser, User } from '@clerk/nextjs/server'
import { ModeToggle } from './ui/ModeToggle'
import { SignedIn, UserButton } from '@clerk/nextjs'
import { DashboardIcon, HomeIcon } from '@radix-ui/react-icons'
import { cn } from '@/lib/utils'
import { IconSettings, IconUser } from '@tabler/icons-react'

type Props = {}

const links = [
    {
        label: "Dashboard",
        href: "/dashboard",
        icon: (
            <DashboardIcon className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
        ),
    },
    {
        label: "Profile",
        href: "#",
        icon: (
            <IconUser className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
        ),
    },
    {
        label: "Settings",
        href: "/additional-details",
        icon: (
            <IconSettings className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
        ),
    },
];


const LeftSidebar = async (props: Props) => {
    const authUser = await currentUser()

    return (
        <div
            className=
            "rounded-md flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 w-full flex-1 max-w-7xl mx-auto border border-neutral-200 dark:border-neutral-700  h-screen"
        >
            <Sidebar animate={false}>
                <SidebarBody className="justify-between gap-10">



                    <Image className='relative -top-10 w-full mix-blend-multiply' src="/logo.jpg" alt="Health Hub" width={270} height={270} />


                    <div className="mt-8 flex flex-col gap-2">
                        {links.map((link, idx) => (
                            <SidebarLink key={idx} link={link} />
                        ))}
                    </div>


                    <ModeToggle />



                    <div className='flex font-bold text-base items-center uppercase gap-3 px-2 relative bottom-0'>
                        <SignedIn>
                            <UserButton />
                        </SignedIn>
                        {/* <img src={authUser?.imageUrl} className='rounded-full w-10' alt="avatar" /> */}
                        {authUser?.username}
                    </div>




                </SidebarBody>
            </Sidebar>
        </div >
    )
}

export default LeftSidebar

