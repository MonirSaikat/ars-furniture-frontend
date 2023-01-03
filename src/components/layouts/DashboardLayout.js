import { Outlet } from 'react-router-dom';
import Sidebar from '../admin/Sidebar';
import AdminNav from '../admin/AdminNav';

const DashboardLayout = () => {
  return (
    <div>
      <AdminNav />

      <div className="">
        <Sidebar />
        <div className="ml-48 p-5 pt-20">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
