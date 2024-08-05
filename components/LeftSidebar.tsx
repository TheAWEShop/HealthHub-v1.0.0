import React, { useEffect, useState } from 'react'
import { Sidebar, SidebarBody, SidebarLink, SubSidebarLink } from './ui/sidebar'
import Image from 'next/image'
import { currentUser, User } from '@clerk/nextjs/server'
import { ModeToggle } from './ui/ModeToggle'
import { SignedIn, UserButton } from '@clerk/nextjs'
import { DashboardIcon, HomeIcon } from '@radix-ui/react-icons'
import { cn } from '@/lib/utils'
import { IconSettings, IconUser, IconWifi } from '@tabler/icons-react'

type Props = {}

const links = [
    {
        label: "Dashboard",
        href: "/account/dashboard",
        icon: (
            <DashboardIcon className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
        ),
    },
    {
        label: "Profile",
        href: "/account/profile",
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
    {
        label: "Direct Sponser",
        href: "/account/my-direct-sponser",
        icon: (
            <IconWifi className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
        ),
    },
];


const LeftSidebar = async (props: Props) => {
    const authUser = await currentUser()

    return (
        <div
            className=
            " rounded-md flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 w-full flex-1 max-w-[320px] mx-auto border border-neutral-200 dark:border-neutral-700  h-screen"
        >
            <Sidebar animate={true}>
                <SidebarBody className="justify-between gap-10">



                    <Image className='relative -top-10 w-full mix-blend-multiply' src="/logo.jpg" alt="Health Hub" width={270} height={270} />


                    <div className="mt-8 flex flex-col gap-2">
                        {links.map((link, idx) => (
                            <SidebarLink key={idx} link={link} />
                        ))}
                    </div>


                    <ModeToggle />



                    <div className='font-bold text-base uppercase gap-3 px-2 relative bottom-0'>
                        {/* {authUser?.username} */}
                        <SidebarLink
                            link={{
                                label: '${authUser?.username}',
                                href: "#",
                                icon: (
                                    <UserButton />
                                ),
                            }}
                        />

                    </div>




                </SidebarBody>
            </Sidebar>
        </div >
    )
}

export default LeftSidebar

