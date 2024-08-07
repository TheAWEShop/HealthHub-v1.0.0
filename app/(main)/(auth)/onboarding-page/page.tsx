'use client';

import { useEffect, useState } from 'react';
import { useClerk, useUser } from '@clerk/nextjs';
import { FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { LabelInputContainer } from '@/components/example/signup-form-demo';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Span } from 'next/dist/trace';
import Link from 'next/link';
import { Progress } from '@/components/ui/progress';

const AdditionalDetailsPage = () => {
  const { user } = useClerk();
  const router = useRouter();
  const [isExistingUser, setIsExistingUser] = useState(false);

  console.log(user)

  const [formData, setFormData] = useState({
    name: user?.fullName,
    email: user?.primaryEmailAddress?.emailAddress,
    password: '',
    referral_code: '',
    clerk_id: user?.id,
    primaryPhoneNumber: user?.primaryPhoneNumber,
    username: user?.username,
    imageUrl: '',
  });

  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(13)

  useEffect(() => {

    if (user) {
      setFormData({
        name: user.fullName,
        email: user.primaryEmailAddress?.emailAddress,
        password: '',
        referral_code: '',
        clerk_id: user.id,
        primaryPhoneNumber: user.primaryPhoneNumber,
        username: user.username,
        imageUrl: user.imageUrl,
      });

      const fetchUserData = async () => {
        try {
          const response = await axios.get(`/api/user/${user?.primaryEmailAddress?.emailAddress}`);
          if (response.status === 200) {
            setIsExistingUser(true);
          }
        } catch (error) {
          console.error('Error fetching user data:', error);
        } finally {
          setLoading(false);
        }
      };

      fetchUserData();
    }
  }, [user]);

  if (loading)
    return <div className='h-screen w-screen relative'>
      <Progress value={progress} className='max-w-sm absolute top-1/2 left-1/2' />
    </div>

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    try {
      const response = await fetch('/api/user/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: user?.id,
          ...formData,
        }),
      });

      if (response.ok) {
        router.push('/account/dashboard'); // Redirect to the dashboard on success
      } else {
        console.error('Failed to update/create user');
      }
    } catch (error) {
      console.error('An error occurred', error);
    }
  };

  if (isExistingUser) {
    return (<span>You are not authorized on this page, please
      <Link href={'/account/dashboard'}>  click here </Link>
      to go to your dashboard</span>)
  }

  return (
    <div className="container mx-auto p-4 ">


      <Card className='rounded-xl overflow-hidden text-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] mb-16'>
        <CardHeader className='bg-green-500'>
          <div className='font-bold text-lg'>
            {isExistingUser ? 'Profile Settings' : 'Creating New User'}
          </div>
          <div className=''>Complete your profile</div>
        </CardHeader>
        <CardContent>

          <form className="my-8" onSubmit={handleSubmit}>

            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">

              {loading ? (
                <>
                  <Skeleton className='h-4 w-[250px] rounded-lg mt-10' />
                  <Skeleton className='h-9 w-[350px] rounded-lg my-2' />
                </>
              ) : (
                <LabelInputContainer>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    placeholder='Full Name'
                    disabled
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </LabelInputContainer>
              )}

              {loading ? (
                <>
                  <Skeleton className='h-4 w-[250px] rounded-lg mt-10' />
                  <Skeleton className='h-9 w-[350px] rounded-lg my-2' />
                </>
              ) : (
                <LabelInputContainer>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    placeholder='E-mail Address'
                    disabled
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </LabelInputContainer>
              )}

            </div>

            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">

              {loading ? (
                <>
                  <Skeleton className='h-4 w-[250px] rounded-lg mt-10' />
                  <Skeleton className='h-9 w-[350px] rounded-lg my-2' />
                </>
              ) : (
                <LabelInputContainer>
                  <Label htmlFor="phoneNumber">Phone Number</Label>
                  <Input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    placeholder='Your Phone Number'
                    disabled
                    value={formData.primaryPhoneNumber || ''}
                    onChange={(e) => setFormData({ ...formData, primaryPhoneNumber: e.target.value })}
                  />
                </LabelInputContainer>
              )}

              {loading ? (
                <>
                  <Skeleton className='h-4 w-[250px] rounded-lg mt-10' />
                  <Skeleton className='h-9 w-[350px] rounded-lg my-2' />
                </>
              ) : (
                <LabelInputContainer>
                  <Label htmlFor="username">Username</Label>
                  <Input
                    type="text"
                    id="username"
                    name="username"
                    placeholder='username'
                    value={formData.username}
                    disabled
                    onChange={(e) => setFormData({ ...formData, referral_code: e.target.value })}
                  />
                </LabelInputContainer>
              )}

            </div>

            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">

              {loading ? (
                <>
                  <Skeleton className='h-4 w-[250px] rounded-lg mt-10' />
                  <Skeleton className='h-9 w-[350px] rounded-lg my-2' />
                </>
              ) : (
                <LabelInputContainer>
                  <Label htmlFor="password">Password</Label>
                  <Input
                    type="password"
                    id="password"
                    name="password"
                    placeholder='Set Password'
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  />
                </LabelInputContainer>
              )}

              {loading ? (
                <>
                  <Skeleton className='h-4 w-[250px] rounded-lg mt-10' />
                  <Skeleton className='h-9 w-[350px] rounded-lg my-2' />
                </>
              ) : (
                <LabelInputContainer>
                  <Label htmlFor="referral_code">Referral Code</Label>
                  <Input
                    type="text"
                    id="referral_code"
                    name="referral_code"
                    placeholder='Referaal Code'
                    value={formData.referral_code}
                    onChange={(e) => setFormData({ ...formData, referral_code: e.target.value })}
                  />
                </LabelInputContainer>
              )}

            </div>


            <button type='submit' className="my-10 px-8 py-2 rounded-md bg-teal-500 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-teal-500">
              Submit
            </button>


          </form>
        </CardContent>
      </Card >

    </div >
  );
};

export default AdditionalDetailsPage;
