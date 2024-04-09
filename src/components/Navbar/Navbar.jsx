import Link from 'next/link';

import { UserAuth } from '@/context/AuthContext';

const Navbar = () => {
  const { user, googleSignIn, logOut } = UserAuth();

  const handleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <header className="container border-b-[1px] border-black">
      <nav className="flex justify-between">
        <ul className="flex gap-6 h-16 items-center">
          <li>
            <Link href="/">Home</Link>
          </li>

          <li>
            <Link href="/about">About</Link>
          </li>

          {!user ? null : (
            <li>
              <Link href="/profile">Profile</Link>
            </li>
          )}
        </ul>

        {!user ? (
          <ul className="flex items-center gap-6">
            <li onClick={handleSignIn}>Login</li>

            <li onClick={handleSignIn}>SignUp</li>
          </ul>
        ) : (
          <div>
            <p>Welcome, {user.displayName}</p>

            <button type="button" onClick={handleSignOut}>
              Sign Out
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
