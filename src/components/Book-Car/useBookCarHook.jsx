import { useState } from "react";

const useBookCarHook = () => {
  const [modal, setModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [formData, setFormData] = useState({
    carType: "",
    pickUp: "",
    dropOff: "",
    pickTime: "",
    dropTime: "",
  });

  const handleChange = (e, field) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: e.target.value,
    }));
  };
  
  const handleModal = () => {
    setModal(!modal);
    document.body.style.overflow = modal ? "auto" : "hidden";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(formData).some((value) => value === "")) {
      setErrorMessage("Please fill in all required fields.");
      return;
    }
    handleModal();
    console.log("Form data:", formData);
    setErrorMessage("");
  };

  const hideMessage = () => {
    setErrorMessage("");
  };

  /* -------------------------------------------------------------------------- */
  /*                      Modal                                                 */
  /* -------------------------------------------------------------------------- */
  const [modalFormData, setModalFormData] = useState({
    name: "",
    lastName: "",
    phone: "",
    age: "",
    email: "",
    address: "",
    city: "",
    zipcode: "",
  });
  const [modalErrorMsg, setModalErrorMsg] = useState("");

  const handleModalChange = (e) => {
    const { name, value } = e.target;
    setModalFormData({
      ...modalFormData,
      [name]: value,
    });
  };

  const confirmBooking = (e) => {
    e.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      console.log("Booking confirmed:", modalFormData);
    }
  };

  const validateForm = () => {
    // Check if all fields are filled
    const isAnyFieldEmpty = Object.values(modalFormData).some(
      (value) => !value.trim()
    );
    if (isAnyFieldEmpty) {
      setModalErrorMsg("Please fill in all required fields.");
      return false;
    }

    // Check if age is greater than 18
    if (modalFormData.age < 18) {
      setModalErrorMsg("You must be at least 18 years old to book.");
      return false;
    }
    setModalErrorMsg(""); // Clear error message if no errors
    return true;
  };

  return {
    modal,
    hideMessage,
    handleModal,
    setModal,
    setErrorMessage,
    errorMessage,
    formData,
    handleChange,
    handleSubmit,
    handleModalChange,
    confirmBooking,
    modalFormData,
    modalErrorMsg,
  };
};

export default useBookCarHook;
