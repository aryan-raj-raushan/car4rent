import React from "react";
import { IconX } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { links } from "../../constant/NavConst";

const NavbarMob = ({open, isOpen}) => {
  return (
    <div
      className={`mobile-navbar ${
        open ? "left-0" : "-left-full"
      } fixed top-0 w-full h-screen bg-white z-50 flex flex-col justify-center items-center transition-all ease-in-out duration-500`}
    >
      <div
        onClick={isOpen}
        className="absolute top-8 right-8 text-black cursor-pointer transition-colors duration-300 hover:text-orange"
      >
        <IconX className="w-8 h-8" />
      </div>
      <ul className="flex flex-col items-center gap-8 text-black text-lg list-none">
      {links.map((link, index) => (
              <li key={index} onClick={isOpen}>
                <Link className={link.className} to={link.to}>
                  {link.text}
                </Link>
              </li>
            ))}
      </ul>
    </div>
  );
};

export default NavbarMob;
