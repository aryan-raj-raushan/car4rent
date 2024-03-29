import { Link } from "react-router-dom";
import Logo from "../../assets/logo/logo.png";
// import { useState } from "react";
import { IconMenu2 } from "@tabler/icons-react";
// import NavbarMob from "./NavbarMob";
// import { links } from "../../constant/NavConst";
import { useMyState } from "../../context/myState";
const Navbar = () => {
  const { openSideNav, setOpenSideNav } = useMyState();
  // const [nav, setNav] = useState(false);

  // const openNav = () => {
  //   setNav(!nav);
  // };

  return (
    <>
      <nav className="z-50 w-full h-24 ">
        {/* mobile */}
        {/* <NavbarMob open={nav} isOpen={openNav} /> */}
        {/* desktop */}
        <div className="border-b navbar max-w-full w-full my-0 mx-auto flex justify-between items-center py-2 px-5 lg:px-050 z-50 fixed top-0 right-0 left-0 bg-white bg-opacity-70">
          <div className="flex items-center space-x-2 text-center">
            <div
              className="mobile-hamb"
              onClick={() => setOpenSideNav(!openSideNav)}
            >
              <IconMenu2 className="w-8 h-8 text-gray-400" />
            </div>
            <Link
              to="/"
              onClick={() => window.scrollTo(0, 0)}
              className="flex items-center"
            >
              <img src={Logo} alt="logo-img" className="w-20 h-auto" />
              <h1 className="text-2xl font-semibold text-orange-500">
                <span className="text-3xl">4</span>Rent
              </h1>
            </Link>
          </div>

          {/* <ul className="hidden lg:flex gap-4 xl:gap-8 text-black text-lg">
            {links.map((link, index) => (
              <li key={index}>
                <Link className={link.className} to={link.to}>
                  {link.text}
                </Link>
              </li>
            ))}
          </ul> */}

          {/* SignIn & Registration */}
          <div className="navbar__buttons hidden sm:flex gap-4 lg:gap-6 text-lg items-center sm:w-full lg:w-auto justify-end mr-5 xl:mr-0">
            <Link className="text-black hover:text-orange" to="/login">
              Sign In
            </Link>
            <Link
              className="text-white bg-orange-500 px-6 py-3 rounded-md shadow-md hover:bg-orange-600 transition-all duration-300"
              to="/signup"
            >
              Register
            </Link>
          </div>
          {/* mobile Hamburger Menu */}
          {/* <div className="mobile-hamb lg:hidden" onClick={openNav}>
            <IconMenu2 className="w-8 h-8" />
          </div> */}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
