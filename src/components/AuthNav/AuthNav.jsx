import Link from 'next/link';

import { UserAuth } from '@/context/AuthContext';

const AuthNav = () => {
  const { googleSignIn } = UserAuth();

  const handleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <ul className="flex items-center gap-6">
      <li onClick={handleSignIn}>Sign In</li>

      <li onClick={handleSignIn}>Register</li>
    </ul>
  );
};

export default AuthNav;
