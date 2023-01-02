import React from 'react';
import { Link } from 'react-router-dom';
import {
  AiOutlineDashboard,
  AiOutlineShopping,
  AiOutlineHome,
} from "react-icons/ai";
import { FaList, FaPlus } from 'react-icons/fa';
import { MdOutlineReviews } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import classNames from 'classnames';
import { useAuth } from '../../hooks/use-auth';

const Sidebar = ({ className }) => {
  const { user } = useAuth();

  const links = [
    {
      path: "/",
      label: "Home",
      icon: <AiOutlineHome />,
      site: true,
    },
    {
      path: "",
      label: "Dashboard",
      icon: <AiOutlineDashboard />,
    },
    {
      path: "orders",
      label: "Orders",
      icon: <AiOutlineShopping />,
    },
    {
      path: "review",
      label: "Review",
      icon: <MdOutlineReviews />,
    },
    {
      path: "profile",
      label: "Profile",
      icon: <CgProfile />,
    },
    {
      path: "products",
      label: "Products",
      admin: true,
      icon: <FaList />,
    },
    {
      path: "products/add",
      label: "Add Product",
      admin: true,
      icon: <FaPlus />,
    },
  ];

  const linkClasses = classNames(
    "p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
  );

  const renderLinks = links.map((link) => {
    const to = link.site ? link.path : `/dashboard/${link.path}`;
    const forAdmin = link.admin && (!user.isAdmin);

    if(forAdmin) return null;

    return (
      <div key={link.path}>
        <Link
          to={to} className={linkClasses}
        >
          <span className="sidebar-icon">
            {link.icon}
          </span>
          <span className="text-[15px] ml-4 text-gray-200 font-bold">{link.label}</span>
        </Link>
      </div>
    );
  });

  return (
      <div
      className="sidebar fixed top-16 bottom-0 lg:left-0 p-2 overflow-y-auto text-center bg-gray-900 w-48"
      >
        <div
          className="p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-gray-700 text-white"
        >
          <i className="bi bi-search text-sm"></i>
          <input
            type="text"
            placeholder="Search"
            className="text-[15px] ml-4 w-full bg-transparent focus:outline-none"
          />
        </div>
        {renderLinks}
        <div className="my-4 bg-gray-600 h-[1px]"></div>

        {/* { renderLinks } */}
      </div>
  );
}

export default Sidebar;
