import React from "react";
import { BsChevronRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  const quickLinks = [
    {
      path: "/",
      label: "home",
    },
    {
      path: "/about",
      label: "about us",
    },
    {
      path: "/reviews",
      label: "customer reviews",
    },
    {
      path: "/login",
      label: "user login",
    },
    {
      path: "/admin",
      label: "admin login",
    },
  ];

  const impLinks = [
    {
      path: "/services",
      label: "Services",
    },
    {
      path: "/privacy-policy",
      label: "Privacy & Policy",
    },
    {
      path: "/maintainance",
      label: "Maintanance",
    },
    {
      path: "/release-status",
      label: "Relase Status",
    },
  ];

  const renderLinks = (links) => {
    return links.map((link) => {
      return (
        <Link
          to={link.path}
          key={link.path}
          className="flex items-center text-gray-400 text-sm capitalize my-3"
        >
          <BsChevronRight className="mr-2" />
          <span>{link.label}</span>
        </Link>
      );
    });
  };

  const renderMap = (
    <div className="gmap_canvas">
      <iframe
        className="gmap_iframe"
        width="100%"
        frameBorder={0}
        scrolling="no"
        marginHeight={0}
        marginWidth={0}
        src="https://maps.google.com/maps?width=1215&amp;height=400&amp;hl=en&amp;q=Medical Pakarmatha&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      ></iframe>
    </div>
  );

  const renderLogoAddress = (
    <div className="flex mb-3">
      <img
        className="w-16 mb-3 rounded-full"
        src="/images/logo.png"
        alt="Logo"
      />
      <div className="ml-3">
        <h2 className="text-3xl text-white">
          <strong>ARS</strong> Furniture
        </h2>
        <p className="text-gray-400 mb-4 text-sm">
          Medical Pakarmatha, Rangpur.
        </p>
      </div>
    </div>
  );

  const renderCopyright = (
    <p className="text-center text-gray-400 my-4">
      &copy; Copyright {new Date().getFullYear()} |<strong>ARS</strong>{" "}
      Furniture
    </p>
  );

  return (
    <footer className="bg-gray-900 py-8 pt-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 px-4 md:px-0">
        <div className="p-5 pt-0 md:col-span-2">
          {renderLogoAddress}
          {renderMap}
        </div>

        <div>
          <h2 className="text-3xl text-white mb-4">Useful Links</h2>
          {renderLinks(quickLinks)}
        </div>

        <div>
          <h2 className="text-3xl text-white mb-4">More Links</h2>
          {renderLinks(impLinks)}
        </div>

        <div>
          <h2 className="text-3xl text-white mb-4">Payments</h2>
          <img src="/images/payments.jpg" alt="Payments for ars furniture" />
        </div>
      </div>
      {renderCopyright}
    </footer>
  );
};

export default Footer;
