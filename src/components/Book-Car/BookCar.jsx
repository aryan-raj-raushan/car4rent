import { IconCar, IconX } from "@tabler/icons-react";
import { IconMapPinFilled } from "@tabler/icons-react";
import { IconCalendarEvent } from "@tabler/icons-react";
import useBookCarHook from "./useBookCarHook";

const BookCar = () => {
  const {
    openModal,
    modal,
    hideMessage,
    carType,
    handleCar,
    pickUp,
    handleAddress,
    handleDrop,
    handlePick,
    handleDropTime,
    handlePickTime,
    confirmBooking,
    handleZip,
    handleEmail,
    handleAge,
    handleLastName,
    handleName,
    handlePhone,
    handleCity,
    name,
    email,
    phone,
    age,
    city,
    zipcode,
    lastName,
    address,
    dropOff,
    pickTime,
    dropTime,
    setModal,
    imgUrl,
  } = useBookCarHook();
  return (
    <>
      <section
        id="booking-section"
        className="book-section relative bg-transparent"
      >
        {/* <!-- overlay --> */}
        <div
          onclick={openModal}
          className="modal-overlay {{ modal ? 'active-modal' : '' }}"
        ></div>

        <div className="container max-w-screen-xl !my-0 !mx-auto py-0 px-1">
          <div className="book-content mx-auto mt-0 mb-24">
            <div className="book-content__box bg-white w-full h-auto pt-10 pb-12 pl-6 pr-6 sm:pr-12 sm:pl-14 shadow-lg drop-shadow-md rounded-md relative z-40 text-black flex flex-col bg-book-content-box bg-cover bg-center bg-no-repeat">
              <h2 className="text-2xl font-bold mb-7">Book a car</h2>

              <p className="error-message bg-red-100 border border-red-400 text-red-700 px-6 py-4 mb-12 hidden">
                All fields required!
                <IconX className="w-5 h-5 cursor-pointer" />
              </p>

              <p className="booking-done bg-green-100 border border-green-400 text-green-700 px-6 py-4 mb-12 hidden">
                Check your email to confirm an order.
                <IconX
                  className="w-5 h-5 cursor-pointer"
                  onclick={hideMessage}
                />
              </p>

              <form className="box-form grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                <div className="box-form__car-type flex flex-col">
                  <label className="flex items-center mb-3 font-semibold text-base">
                    <IconCar className="input-icon" /> &nbsp; Select Your Car
                    Type
                    <b className="text-orange-500">*</b>
                  </label>
                  <select
                    value={carType}
                    onchange={handleCar}
                    className="text-base text-gray-500 border border-gray-300 rounded p-3 outline-none font-rubik font-normal"
                  >
                    <option>Select your car type</option>
                    <option value="Audi A1 S-Line">Audi A1 S-Line</option>
                    <option value="VW Golf 6">VW Golf 6</option>
                    <option value="Toyota Camry">Toyota Camry</option>
                    <option value="BMW 320 ModernLine">
                      BMW 320 ModernLine
                    </option>
                    <option value="Mercedes-Benz GLK">Mercedes-Benz GLK</option>
                    <option value="VW Passat CC">VW Passat CC</option>
                  </select>
                </div>

                <div className="box-form__car-type flex flex-col">
                  <label className="flex items-center mb-3 font-semibold text-base">
                    <IconMapPinFilled className="input-icon" /> &nbsp; Pick-up{" "}
                    <b className="text-orange-500 text-sm">*</b>
                  </label>
                  <select
                    value={pickUp}
                    onchange={handlePick}
                    className="text-base text-gray-500 border border-gray-300 rounded p-3 outline-none font-rubik font-normal"
                  >
                    <option>Select pick up location</option>
                    <option>Belgrade</option>
                    <option>Novi Sad</option>
                    <option>Nis</option>
                    <option>Kragujevac</option>
                    <option>Subotica</option>
                  </select>
                </div>

                <div className="box-form__car-type flex flex-col">
                  <label className="flex items-center mb-3 font-semibold text-base">
                    <IconMapPinFilled className="input-icon" /> &nbsp; Drop-off{" "}
                    <b className="text-orange-500 text-sm">*</b>
                  </label>
                  <select
                    value={dropOff}
                    onchange={handleDrop}
                    className="text-base text-gray-500 border border-gray-300 rounded p-3 outline-none font-rubik font-normal"
                  >
                    <option>Select drop off location</option>
                    <option>Novi Sad</option>
                    <option>Belgrade</option>
                    <option>Nis</option>
                    <option>Kragujevac</option>
                    <option>Subotica</option>
                  </select>
                </div>

                <div className="box-form__car-time flex flex-col">
                  <label
                    for="picktime"
                    className="flex items-center text-base font-semibold mb-3"
                  >
                    <IconCalendarEvent className="input-icon" /> &nbsp; Pick-up{" "}
                    <b className="text-orange-500">*</b>
                  </label>
                  <input
                    id="picktime"
                    value={pickTime}
                    onchange={handlePickTime}
                    type="date"
                    className="text-sm text-gray-500 border border-gray-300 rounded py-3 px-4 outline-none"
                  />
                </div>

                <div className="box-form__car-time flex flex-col">
                  <label
                    for="droptime"
                    className="flex items-center text-base font-semibold mb-3"
                  >
                    <IconCalendarEvent className="input-icon" /> &nbsp; Drop-off{" "}
                    <b className="text-orange-500 text-sm">*</b>
                  </label>
                  <input
                    id="droptime"
                    value={dropTime}
                    onchange={handleDropTime}
                    type="date"
                    className="text-sm text-gray-500 border border-gray-300 rounded py-3 px-4 outline-none"
                  />
                </div>

                <button
                  onclick={openModal}
                  type="button"
                  className="p-3 bg-orange-500 text-white font-medium rounded shadow-md hover:shadow-lg hover:bg-orange-600 transition duration-300 font-rubik border-none cursor-pointer h-fit self-end"
                >
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* booking modal */}
        <div
          className={`booking-modal ${
            modal ? "active-modal" : ""
          } opacity-0 hidden flex-col fixed overflow-x-hidden overflow-y-scroll z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-108 h-screen border-2 border-white bg-white pr-px text-black`}
        >
          <div className="modal-box">
            <button onClick={() => setModal(false)} className="modal-close">
              <IconX width={20} height={20} />
            </button>

            <div className="modal-content">
              <div className="car-info bg-white py-12 px-12 grid grid-cols-2 border-b border-gray-300">
                <img src={imgUrl} alt={carType} className="w-full h-auto" />
                <div className="text-left">
                  <h3 className="text-2xl font-semibold">{carType}</h3>
                  <p>Price: 50€ / day</p>
                </div>
              </div>

              <div className="booking-details py-12 px-12">
                <h3 className="text-2xl font-semibold">Booking Details</h3>
                <p>
                  Pick-up: <span>{pickUp}</span>
                </p>
                <p>
                  Drop-off: <span>{dropOff}</span>
                </p>
                <p>
                  Pick-up date: <span>{pickTime}</span>
                </p>
                <p>
                  Drop-off date: <span>{dropTime}</span>
                </p>
              </div>

              <form className="modal-form py-12 px-12 grid grid-cols-2 gap-x-8">
                <div className="modal-form__group">
                  <label htmlFor="fname">First Name</label>
                  <input
                    type="text"
                    id="fname"
                    name="fname"
                    value={name}
                    onChange={handleName}
                    className="text-lg border border-gray-300 rounded-md py-3 px-4 outline-none"
                  />
                </div>
                <div className="modal-form__group">
                  <label htmlFor="lname">Last Name</label>
                  <input
                    type="text"
                    id="lname"
                    name="lname"
                    value={lastName}
                    onChange={handleLastName}
                    className="text-lg border border-gray-300 rounded-md py-3 px-4 outline-none"
                  />
                </div>
                <div className="modal-form__group">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    value={phone}
                    onChange={handlePhone}
                    className="text-lg border border-gray-300 rounded-md py-3 px-4 outline-none"
                  />
                </div>
                <div className="modal-form__group">
                  <label htmlFor="age">Age</label>
                  <input
                    type="text"
                    id="age"
                    name="age"
                    value={age}
                    onChange={handleAge}
                    className="text-lg border border-gray-300 rounded-md py-3 px-4 outline-none"
                  />
                </div>
                <div className="modal-form__group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    value={email}
                    onChange={handleEmail}
                    className="text-lg border border-gray-300 rounded-md py-3 px-4 outline-none"
                  />
                </div>
                <div className="modal-form__group">
                  <label htmlFor="address">Address</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={address}
                    onChange={handleAddress}
                    className="text-lg border border-gray-300 rounded-md py-3 px-4 outline-none"
                  />
                </div>
                <div className="modal-form__group">
                  <label htmlFor="city">City</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={city}
                    onChange={handleCity}
                    className="text-lg border border-gray-300 rounded-md py-3 px-4 outline-none"
                  />
                </div>
                <div className="modal-form__group">
                  <label htmlFor="zipcode">Zip Code</label>
                  <input
                    type="text"
                    id="zipcode"
                    name="zipcode"
                    value={zipcode}
                    onChange={handleZip}
                    className="text-lg border border-gray-300 rounded-md py-3 px-4 outline-none"
                  />
                </div>
                <button
                  onClick={confirmBooking}
                  className="py-4 px-6 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition duration-300 col-span-2"
                >
                  Confirm booking
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BookCar;
