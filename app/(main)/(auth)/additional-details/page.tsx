'use client';

import { useState } from 'react';
import { useUser } from '@clerk/nextjs';
import { FormEvent } from 'react';
import { useRouter } from 'next/navigation';

const AdditionalDetailsPage = () => {
  const { user } = useUser();
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: user?.primaryEmailAddress?.emailAddress || '',
    password: '',
    wallet: 0,
    planId: '',
    status: 'active',
    referral_code: '',
    leftDownlineId: '',
    rightDownlineId: '',
  });

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    try {
      const response = await fetch('/api/updateUser', {
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
        router.push('/dashboard'); // Redirect to the dashboard on success
      } else {
        console.error('Failed to update/create user');
      }
    } catch (error) {
      console.error('An error occurred', error);
    }
  };

  return (
    <div className="container mx-auto p-4 bg-slate-500">
      <h1 className="text-2xl font-bold mb-4">Additional Details</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="border border-gray-300 rounded-md p-2 w-full text-black"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="border border-gray-300 rounded-md p-2 w-full text-black"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            className="border border-gray-300 rounded-md p-2 w-full text-black"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="wallet" className="block text-gray-700 font-bold mb-2">Wallet</label>
          <input
            type="number"
            id="wallet"
            name="wallet"
            value={formData.wallet}
            onChange={(e) => setFormData({ ...formData, wallet: parseFloat(e.target.value) })}
            className="border border-gray-300 rounded-md p-2 w-full text-black"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="planId" className="block text-gray-700 font-bold mb-2">Plan ID</label>
          <input
            type="text"
            id="planId"
            name="planId"
            value={formData.planId}
            onChange={(e) => setFormData({ ...formData, planId: e.target.value })}
            className="border border-gray-300 rounded-md p-2 w-full text-black"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="status" className="block text-gray-700 font-bold mb-2">Status</label>
          <select
            id="status"
            name="status"
            value={formData.status}
            onChange={(e) => setFormData({ ...formData, status: e.target.value })}
            className="border border-gray-300 rounded-md p-2 w-full text-black"
          >
            <option value="pending">Pending</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
            <option value="suspended">Suspended</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="referral_code" className="block text-gray-700 font-bold mb-2">Referral Code</label>
          <input
            type="text"
            id="referral_code"
            name="referral_code"
            value={formData.referral_code}
            onChange={(e) => setFormData({ ...formData, referral_code: e.target.value })}
            className="border border-gray-300 rounded-md p-2 w-full text-black"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="leftDownlineId" className="block text-gray-700 font-bold mb-2">Left Downline ID</label>
          <input
            type="text"
            id="leftDownlineId"
            name="leftDownlineId"
            value={formData.leftDownlineId}
            onChange={(e) => setFormData({ ...formData, leftDownlineId: e.target.value })}
            className="border border-gray-300 rounded-md p-2 w-full text-black"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="rightDownlineId" className="block text-gray-700 font-bold mb-2">Right Downline ID</label>
          <input
            type="text"
            id="rightDownlineId"
            name="rightDownlineId"
            value={formData.rightDownlineId}
            onChange={(e) => setFormData({ ...formData, rightDownlineId: e.target.value })}
            className="border border-gray-300 rounded-md p-2 w-full text-black"
          />
        </div>

        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AdditionalDetailsPage;
