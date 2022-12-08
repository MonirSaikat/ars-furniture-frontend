import React from 'react';
import { Link } from 'react-router-dom';
import {
  AiOutlineDashboard,
  AiOutlineShopping,
  AiOutlineHome,
} from "react-icons/ai";
import { MdOutlineReviews } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import classNames from 'classnames';

const Sidebar = () => {
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
  ];

  const linkClasses = classNames(
    "text-gray-900 font-semibold flex items-center py-3 hover:bg-gray-200 hover:shadow-md px-4"
  );

  const renderLinks = links.map((link) => {
    const to = link.site ? link.path : `/dashboard/${link.path}`;

    return (
      <div key={link.path}>
        <Link to={to} className={linkClasses}>
          <span className="mr-3 sidebar-icon">
            {link.icon}
          </span>
          {link.label}
        </Link>
      </div>
    );
  });

  return (
    <aside className='bg-gray-50 fixed w-48 min-h-screen border-r'>
      { renderLinks }
    </aside>
  );
}

export default Sidebar;
