import Header from "./Header";
import Login from "./Login";
import React from "react";
import BgLoginPage from "../../assets/images/cover/old-car-min.jpg";
import AsideSection from "./AsideSection";
const LoginPage = () => {
  const tagLine =
    "We offer hassle-free car rentals, providing you the freedom to drive without the burden of ownership.";
  const description = "Unlock the Freedom of Driving Without Ownership";
  const classes = "-right-10 top-10";
  return (
    <>
      {/* <Navbar /> */}
      <div className="flex Container">
        <img
          className="absolute top-0 right-0 left-0 hidden sm:block -z-20 h-full w-full opacity-35"
          src={BgLoginPage}
          alt="bg-login"
          loading="lazy"
        />
        <AsideSection
          description={description}
          tagLine={tagLine}
          classes={classes}
        />
        <div className="w-full pt-8 flex justify-center items-center flex-1 md:basis-1/2">
          <div className="flex flex-col rounded-lg justify-center w-[23rem] px-6 pt-8 pb-8 bg-black bg-opacity-80 z-10 ">
            <Header
              heading="Welcome Back"
              paragraph="Welcome back! Please Enter Your Details"
            />
            <Login />
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
