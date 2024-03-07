// import React, { useState } from "react";
// import PasswordResetForm from "./PasswordResetForm";
// import BasicModal from "../../components/Modal/Modal";

const FormExtra = () => {
  // const [isResetModalOpen, setIsResetModalOpen] = useState(false);
  // const openResetModal = () => {
  //   setIsResetModalOpen(true);
  // };
  // const closeResetModal = () => {
  //   setIsResetModalOpen(false);
  // };

  return (
    <div className="flex items-center justify-between gap-4 px-1">
      <div className="flex items-center">
        <input
          id="remember-me"
          name="remember-me"
          type="checkbox"
          className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded cursor-pointer"
        />
        <label htmlFor="remember-me" className="ml-2 block text-sm text-white">
          Remember me
        </label>
      </div>

      {/* <div className=""> */}
      <p className="font-medium text-orange-600 hover:text-orange-500 text-sm cursor-pointer">
        Forgot password?
      </p>
      {/* </div> */}

      {/* <BasicModal isResetModalOpen={isResetModalOpen} isClose={closeResetModal}>
        <PasswordResetForm onClose={closeResetModal} />
      </BasicModal> */}
    </div>
  );
};

export default FormExtra;
