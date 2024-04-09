import Link from 'next/link';

const Navbar = () => {
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

          <li>
            <Link href="/profile">Profile</Link>
          </li>
        </ul>

        <ul className="flex items-center gap-6">
          <li>Login</li>

          <li>Login</li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
