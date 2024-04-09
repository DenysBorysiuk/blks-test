'use client';

import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { redirect } from 'next/navigation';

import { UserAuth } from '@/context/AuthContext';

const Auth = () => {
  const { googleSignIn, user } = UserAuth();

  const handleSignIn = async () => {
    try {
      await googleSignIn();
      toast.success(`Welcome to Dashboard`);
    } catch (error) {
      toast.error('Something went wrong');
    }
  };

  useEffect(() => {
    if (user) {
      return redirect('/dashboard');
    }
  }, [user]);

  return user ? null : (
    <div className="container flex justify-center items-center h-[calc(100vh-70px)]">
      <button
        className="icon border flex items-center gap-2 px-4 py-2 font-medium"
        onClick={handleSignIn}
        type="button"
      >
        Sign in with Google
      </button>
    </div>
  );
};

export default Auth;
