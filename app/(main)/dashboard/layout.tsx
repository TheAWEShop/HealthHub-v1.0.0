import LeftSidebar from '@/components/LeftSidebar';
import React from 'react'

type Props = {}

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
                <div className='flex'>
                    <LeftSidebar />
                    {children}
                </div>
    );
}
