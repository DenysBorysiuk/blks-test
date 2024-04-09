import Link from 'next/link';

import { UserAuth } from '@/context/AuthContext';
import UserMenu from '@/components/UserMenu';
import AuthNav from '../AuthNav';

const Navbar = () => {
  const { user } = UserAuth();

  return (
    <header className="container border-b-[1px] border-black">
      <nav className="flex justify-between">
        <ul className="flex gap-6 h-16 items-center">
          <li>
            <Link className="link" href="/">
              Home
            </Link>
          </li>

          {!user ? null : (
            <li>
              <Link className="link" href="/dashboard">
                Dashboard
              </Link>
            </li>
          )}
        </ul>

        {!user ? <AuthNav /> : <UserMenu />}
      </nav>
    </header>
  );
};

export default Navbar;
