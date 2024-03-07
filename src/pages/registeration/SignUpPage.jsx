// import Navbar from "../../components/Navbar/Navbar";
import Header from "./Header";
import SignUp from "./SignUp";
import React from "react";

const SignUpPage = () => {
  return (
    <>
      {/* <Navbar /> */}
      <div className="w-full bg-white pt-6 flex justify-center items-center">
        <div className="bg-white flex flex-col border border-gray-200 rounded-lg shadow-sm drop-shadow-md justify-center w-96 px-6 pt-4 pb-7">
          <Header
            heading="Signup to create an account"
            paragraph="Already have an account? "
            linkName="Login"
            linkUrl="/login"
          />
          <div className="min-h-[40vh]">
            <SignUp />
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
