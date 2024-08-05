import LeftSidebar from '@/components/LeftSidebar';
import UserProfile from '@/components/UserProfile';
import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

type Props = {}


const Dashboard = async (props: Props) => {


    const authUser = await currentUser()
    if (!authUser) return redirect('/sign-in')
    const userEmail = authUser.emailAddresses[0].emailAddress

    return (
        <div className='w-full'>
            <div className='p-3 font-bold text-2xl text-white bg-gray-300'>
            Client Dashboard
            </div>
            <UserProfile userEmail={userEmail} />
        </div>
    )
}

export default Dashboard