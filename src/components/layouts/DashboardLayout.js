import { Link, Outlet } from 'react-router-dom';
import Sidebar from '../admin/Sidebar';
import Button from '../Button';
import { AiOutlineLogout } from "react-icons/ai";
import { useAuth } from '../../hooks/use-auth';

const DashboardLayout = () => {
  const { user, logout } = useAuth();

  const renderTopBar = (
    <div className="h-16 bg-gray-900 flex justify-between pl-4 items-center pr-14">
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

  return (
    <div>
      {renderTopBar}

      <div className="">
        <Sidebar />
        <div className="ml-48 p-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
