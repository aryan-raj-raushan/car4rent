import { IconX } from "@tabler/icons-react";
import useBookCarHook from "./useBookCarHook";
import BookCarModal from "./BookCarModal";
// import BookCarForm from "./BookCarForm";
import SearchBar from "../Search-bar/SearchBar";

const BookCar = () => {
  const {
    handleModal,
    hideMessage,
    errorMessage,
    modal,
    // handleSubmit,
    formData,
    // handleChange,
    confirmBooking,
    modalErrorMsg,
    handleModalChange,
    modalFormData,
  } = useBookCarHook();

  return (
    <>
      <section
        id="booking-section"
        className="book-section relative bg-transparent px-4 sm:px-10"
      >
        {/* <!-- overlay --> */}
        <div
          onClick={handleModal}
          className={`modal-overlay ${
            modal ? "active-modal !opacity-100 !flex" : "hidden"
          } fixed w-full h-full bg-black bg-opacity-30 top-0 right-0 opacity-0 !z-50 overflow-hidden`}
        ></div>

        <div className="Container">
          <div className="book-content mx-auto my-16 lg:my-0 lg:mb-24">
            <div className="book-content__box bg-white w-full h-auto pt-8 sm:pt-10 pb-12 pl-6 pr-6 sm:pr-12 sm:pl-14 shadow-lg drop-shadow-md rounded-md relative z-40 text-black flex flex-col bg-book-content-box bg-cover bg-center bg-no-repeat">
              <h2 className="text-2xl font-bold mb-7">Book a car</h2>
              {errorMessage && (
                <div className="error-message bg-red-100 border border-red-400 text-red-700 px-6 py-3 mb-6 flex items-center justify-between shadow-md rounded">
                  <p className="font-rubik text-base">{errorMessage}</p>
                  <IconX
                    className="w-5 h-5 cursor-pointer"
                    onClick={hideMessage}
                  />
                </div>
              )}

              <p className="booking-done bg-green-100 border border-green-400 text-green-700 px-6 py-4 mb-12 hidden">
                Check your email to confirm an order.
                <IconX
                  className="w-5 h-5 cursor-pointer"
                  onClick={hideMessage}
                />
              </p>
              {/* <BookCarForm
                handleSubmit={handleSubmit}
                formData={formData}
                handleChange={handleChange}
              /> */}
              <SearchBar />
            </div>
          </div>
        </div>
      </section>
      {/* booking modal */}
      <BookCarModal
        modal={modal}
        submit={confirmBooking}
        data={formData}
        handleModal={handleModal}
        errorMessage={modalErrorMsg}
        modalData={modalFormData}
        handleChange={handleModalChange}
      />
    </>
  );
};

export default BookCar;
