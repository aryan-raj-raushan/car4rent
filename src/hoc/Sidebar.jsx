import React, { useState } from "react";
import { useMyState } from "../context/myState";
import { menuItems } from "../constant/SiderbarConst";
import { Link, useLocation } from "react-router-dom";
import { LinearProgressLoader } from "./LinearProgressLoader";

const Sidebar = ({ children }) => {
  const { openSideNav, loading } = useMyState();
  const [selectedItem, setSelectedItem] = useState(null);
  const location = useLocation();
  const isHomeComponent = location.pathname === "/";

  const handleClick = (index) => {
    if (index !== menuItems.length - 1) {
      setSelectedItem(index);
    }
  };
  return (
    <div className="flex h-">
      <div
        className={` ${
          openSideNav
            ? "w-52 fixed lg:!sticky transition-all duration-500 px-4 sm:px-0 bottom-0"
            : "w-0 sm:w-[4.5rem] transition-all duration-500 fixed"
        } sidebar h-full top-24 left-0 transition-all duration-500 ease hover:lg:w-52 border-r bg-white sm:px-4 sm:py-2 border-t !z-50 overflow-y-scroll no-scrollbar`}
      >
        <ul className="flex flex-col justify-between items-center list-none gap-4 py-4 mb-20 lg:mb-0">
          {menuItems.map((item, index) => {
            const itemClass = `flex items-center gap-2 flex-nowrap overflow-x-hidden border-spacing-y-3 w-full p-2 rounded-md cursor-pointer ${item.className}`;
            const hoverClass =
              index !== menuItems.length - 1
                ? "hover:bg-gray-100 text-gray-900"
                : "";
            return (
              <Link
                key={index}
                onClick={() => handleClick(index)}
                className={`${itemClass} ${
                  selectedItem === index ? "bg-gray-200 text-white" : hoverClass
                }`}
                to={item.url}
              >
                <img
                  src={item.image}
                  alt="flight"
                  width={100}
                  height={100}
                  className="w-6 h-6 inline-block object-center object-contain"
                />
                <h6 className="text-gray-900 text-sm flex-none">
                  {item.label}
                </h6>
              </Link>
            );
          })}
        </ul>
      </div>
      {!loading ? (
        <div
          className={`flex-1 ${
            isHomeComponent ? "overflow-y-auto" : ""
          } ml-[4.5rem] ${
            openSideNav
              ? "lg:ml-0 transition duration-200"
              : "lg:ml-[4.5rem] transition duration-200"
          }`}
        >
          {children}
        </div>
      ) : (
        <div className="w-full flex-1 mt-[1px]">
          <LinearProgressLoader />
        </div>
      )}
    </div>
  );
};

export default Sidebar;
