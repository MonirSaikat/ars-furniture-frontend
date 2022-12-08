import React from 'react';
import { useAuth } from '../../hooks/use-auth';

const DashboardPage = () => {
  const { user } = useAuth();

  return (
    <div>
      <div className="p-4 bg-gray-100 shadow-md w-full">
        <h2 className="text-2xl">Hey, {user?.name}. Welcome to you dashboard.</h2>
      </div>
    </div>
  );
}

export default DashboardPage;
