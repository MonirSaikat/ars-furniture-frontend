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
    "p-2.5 mt-3 flex items-center rounded-md px-4 pl-[10px] duration-300 cursor-pointer hover:bg-orange-600 text-white"
  );

  const renderLinks = links.map((link) => {
    const to = link.site ? link.path : `/dashboard/${link.path}`;
    const forAdmin = link.admin;


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
      className="sidebar fixed top-16 bottom-0 lg:left-0 p-0 pr-2 overflow-hidden md:overflow-auto md:p-2 overflow-y-auto text-center bg-gray-900 w-12 md:w-48"
      >
        {renderLinks}
        <div className="my-4 bg-gray-600 h-[1px]"></div>

        {/* { renderLinks } */}
      </div>
  );
}

export default Sidebar;
