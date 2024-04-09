'use client';

import { useEffect } from 'react';
import { redirect } from 'next/navigation';

import { UserAuth } from '@/context/AuthContext';

const Profile = () => {
  const { user } = UserAuth();

  useEffect(() => {
    if (!user) {
      return redirect('/');
    }
  }, [user]);

  if (!user) {
    return null;
  }

  return (
    <div className="container">
      <h1>Dashboard</h1>
    </div>
  );
};

export default Profile;
