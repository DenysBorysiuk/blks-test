import { UserAuth } from '@/context/AuthContext';

const UserMenu = () => {
  const { user, logOut } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col justify-center">
      <p>Welcome, {user.displayName}</p>

      <button type="button" onClick={handleSignOut}>
        Sign Out
      </button>
    </div>
  );
};

export default UserMenu;
