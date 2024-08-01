import UserProfile from '@/components/UserProfile';
import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

type Props = {}

const Dashboard = async (props: Props) => {
    const authUser = await currentUser()
    if (!authUser) return redirect('dashboard/sign-in')

        const userEmail = authUser.emailAddresses[0].emailAddress

    return (
        <div>
            dashboard page
            <UserProfile userEmail={userEmail}  />
        </div>
    )
}

export default Dashboard