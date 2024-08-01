import React from 'react'
import {
    ClerkProvider,
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton
} from '@clerk/nextjs'

type Props = {}

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ClerkProvider>
            <html lang="en">
                <body>
                    {/* <span className='p-2 border rounded-lg bg-blue-400 m-2'>
                    <SignedOut>
                        <SignInButton />
                    </SignedOut>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                    </span> */}
                    {children}
                </body>
            </html>
        </ClerkProvider>
    );
}
