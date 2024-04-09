import Link from 'next/link';

const AuthNav = () => {
  return (
    <div className="flex items-center gap-6">
      <Link className="link" href="/auth">
        Sign In
      </Link>
    </div>
  );
};

export default AuthNav;
