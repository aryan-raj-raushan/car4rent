// import Navbar from "../../components/Navbar/Navbar";
import Header from "./Header";
import SignUp from "./SignUp";
import React from "react";
import BgLoginPage from "../../assets/check/old-car.jpg";
import AsideSection from "./AsideSection";

const SignUpPage = () => {
  const tagLine = `As a new member, you're not just joining a car rental service –
  you're embarking on a journey of exploration, freedom, and
  convenience.`;
  const description = "Drive Towards Your Dreams: Sign Up and Let's Roll.";
  const classes = "bottom-2 left-16";
  return (
    <>
      {/* <Navbar /> */}
      <div className=" flex Container">
        <img
          className="absolute top-0 right-0 left-0 hidden sm:block -z-20 h-full w-full opacity-35"
          src={BgLoginPage}
          alt="bg-login"
        />
        <AsideSection
          description={description}
          tagLine={tagLine}
          classes={classes}
        />
        <div className="w-full pt-8 flex justify-center items-center flex-1 md:basis-1/2">
          <div className="flex flex-col rounded-lg justify-center w-[23rem] px-6 pt-8 pb-8 bg-black bg-opacity-80 z-10">
            <Header
              heading="Join Us"
              paragraph="Please Enter Your Details & Join the journey"
            />
            <div className="min-h-[40vh]">
              <SignUp />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
