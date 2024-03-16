import React, { useState } from "react";
import { useMyState } from "../context/myState";
import { menuItems } from "../constant/SiderbarConst";
import { Link } from "react-router-dom";

const Sidebar = ({ children }) => {
  const { openSideNav } = useMyState();
  const [selectedItem, setSelectedItem] = useState(null);

  const handleClick = (index) => {
    if (index !== menuItems.length - 1) {
      setSelectedItem(index);
    }
  };

  return (
    <div className="flex h-full">
      <div
        className={`sidebar ${
          openSideNav
            ? "w-52 lg:sticky transition-all duration-500 px-4 sm:px-0  "
            : "w-0 sm:w-[4.5rem] transition-all duration-500"
        } fixed top-24 left-0 transition-all duration-500 ease hover:w-52 border-r h-full bg-white sm:px-4 sm:py-3 border-t !z-50 overflow-y-scroll no-scrollbar`}
      >
        <ul className="flex flex-col justify-between items-center list-none gap-4 py-4 mb-20">
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
      <div className="flex-1 overflow-y-auto sm:ml-14">{children}</div>
    </div>
  );
};

export default Sidebar;
