import toast from 'react-hot-toast';

import { UserAuth } from '@/context/AuthContext';

const UserMenu = () => {
  const { user, logOut } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
      toast.success('Logged out');
    } catch (error) {
      toast.error('Something went wrong');
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <p>
        Welcome, <b>{user.displayName}</b>
      </p>

      <button
        className="border border-gray-400 w-fit rounded-xl px-6 transition-colors bg-gray-200 hover:bg-gray-300"
        type="button"
        onClick={handleSignOut}
      >
        Sign Out
      </button>
    </div>
  );
};

export default UserMenu;
