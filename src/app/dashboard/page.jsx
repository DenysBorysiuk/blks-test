'use client';

import { useEffect } from 'react';
import { redirect } from 'next/navigation';

import { UserAuth } from '@/context/AuthContext';

const Dashboard = () => {
  const { user } = UserAuth();

  useEffect(() => {
    if (!user) {
      return redirect('/');
    }
  }, [user]);

  return !user ? null : (
    <div className="container">
      <h1>Dashboard</h1>
    </div>
  );
};

export default Dashboard;
