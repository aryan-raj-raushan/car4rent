import { Link } from "react-router-dom";
import Logo from "../../images/logo/logo.png";
import { useState } from "react";
import { IconMenu2, IconX } from "@tabler/icons-react";

function Navbar() {
  const [nav, setNav] = useState(false);

  const openNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <nav className="relative z-50">
        {/* mobile */}
        <div
          className={`mobile-navbar ${
            nav ? "left-0" : "-left-full"
          } fixed top-0 w-full h-screen bg-white z-50 flex flex-col justify-center items-center transition-all ease-in-out duration-500`}
        >
          <div
            onClick={openNav}
            className="absolute top-8 right-8 text-black cursor-pointer transition-colors duration-300 hover:text-orange"
          >
            <IconX className="w-8 h-8" />
          </div>
          <ul className="flex flex-col items-center gap-8 text-black text-lg">
            <li>
              <Link onClick={openNav} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/about">
                About
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/models">
                Vehicle Models
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/testimonials">
                Testimonials
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/team">
                Our Team
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* desktop */}
        <div className="navbar max-w-screen-xl w-full my-0 mx-auto flex justify-between items-center py-6 px-5 md:px-0 bg-transparent z-50">
          <div className="flex items-center space-x-2 text-center">
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

          <ul className="hidden md:flex gap-8 text-black text-lg">
            <li>
              <Link className="home-link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="about-link" to="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="models-link" to="/models">
                Vehicle Models
              </Link>
            </li>
            <li>
              <Link className="testi-link" to="/testimonials">
                Testimonials
              </Link>
            </li>
            <li>
              <Link className="team-link" to="/team">
                Our Team
              </Link>
            </li>
            <li>
              <Link className="contact-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
          <div className="navbar__buttons flex gap-10 md:gap-6 text-lg items-center">
            <Link className="text-black hover:text-orange" to="/">
              Sign In
            </Link>
            <Link
              className="text-white bg-orange-500 px-6 py-3 rounded-md shadow-md hover:bg-orange-600 transition-all duration-300"
              to="/"
            >
              Register
            </Link>
          </div>
          {/* mobile */}
          <div className="mobile-hamb md:hidden" onClick={openNav}>
            <IconMenu2 className="w-8 h-8" />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
