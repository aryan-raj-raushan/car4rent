import React from "react";
import {
  IconInfoCircleFilled,
  IconMapPinFilled,
  IconX,
} from "@tabler/icons-react";
import { detailsArray, carImages } from "../../constant/BookCarConst";
import BookCarPersonalInfo from "./BookCarPersonalInfo";

const BookCarModal = ({
  modal,
  data,
  submit,
  handleModal,
  errorMessage,
  handleChange,
  modalData,
}) => {
  const { carType, pickUp, dropTime, pickTime, dropOff } = data;
  const imgUrl = carType && carImages[carType];
  const details = detailsArray(pickTime, dropTime, pickUp, dropOff);
  return (
    <div
      className={`booking-modal ${
        modal
          ? "active-modal !flex !opacity-100 z-50 overflow-hidden"
          : "hidden"
      } flex-col fixed overflow-x-hidden !overflow-y-scroll top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full sm:w-[50rem] h-screen border-2 border-solid border-white bg-white pr-0.5 text-black mt-4 !z-50`}
    >
      <div className="booking-modal_title flex justify-between py-2.5 px-4 text-white bg-orange-600 items-center">
        <h2 className="text-2xl uppercase font-bold">Complete Reservation</h2>
        <IconX
          onClick={handleModal}
          className="text-2xl text-white opacity-85 cursor-pointer transition-all duration-200 hover:opacity-100"
        />
      </div>
      <div className="booking-modal_message flex flex-col gap-4 py-5 px-7 bg-orange-50">
        <h4 className="flex items-center gap-1 text-xl font-bold text-orange-500">
          <IconInfoCircleFilled className="text-2xl" /> Upon completing this
          reservation enquiry,you will receive:
        </h4>
        <p className="text-lg px-6 text-gray-500 font-medium ">
          Your rental voucher to produce on arrival at the rental desk and a
          toll-free customer support number.
        </p>
      </div>
      {/* Search car Info  */}
      <div className="booking-car-info bg-white p-7 grid grid-cols-1 sm:grid-cols-2 border-b border-solid border-gray-400 border-opacity-60 text-center sm:text-left">
        <div className="booking-details(date-div) flex flex-col gap-6">
          <h4 className="text-lg text-orange-500 font-bold -mb-2">
            Booking Details
          </h4>
          {details.map((detail, index) => (
            <div className="flex gap-2" key={index}>
              <span>
                <IconMapPinFilled className="text-xl pt-0.5" />
              </span>
              <div>
                <h6 className="text-base mb-0.5 font-bold">{detail.title}</h6>
                <p className="text-base text-gray-600">
                  {detail.value}{" "}
                  {detail.input && (
                    <>
                      <span className="text-gray-500">/</span>{" "}
                      <input
                        type="time"
                        className="input-time text-center border border-gray-200 px-2 w-20 text-sm cursor-pointer"
                      ></input>
                    </>
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="booking-modal__car-info__model flex flex-col gap-7 mt-9 sm:mt-0">
          <h5 className="text-xl text-orange-500 font-bold">
            <span className="text-black">Car -</span> {carType}
          </h5>
          {imgUrl && (
            <img src={imgUrl} alt="car_img" className="w-full h-auto" />
          )}
        </div>
      </div>
      {/* Personal Info */}
      <BookCarPersonalInfo
        submit={submit}
        handleChange={handleChange}
        data={modalData}
        errorMessage={errorMessage}
      />
    </div>
  );
};

export default BookCarModal;
