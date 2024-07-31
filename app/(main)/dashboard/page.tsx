import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

type Props = {}

const Dashboard = async (props: Props) => {
    const authUser = await currentUser()
    if (!authUser) return redirect('dashboard/sign-in')



    return (
        <div>
dashboard page
        </div>
    )
}

export default Dashboard