import { AiOutlineLogout } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/use-auth';
import Button from '../Button';

const AdminNav = () => {
  const { user, logout } = useAuth();

  return(
    <div className="h-16 bg-gray-900 flex justify-between pl-4 items-center pr-5 fixed w-full">
      <Link to="/dashboard">
        <strong className="text-gray-300">
          {user.name}'s Dashboard
        </strong>
      </Link>
      <Button danger onClick={logout}>
        <AiOutlineLogout className="mr-3" />
        Logout
      </Button>
    </div>
  );
};

export default AdminNav;
