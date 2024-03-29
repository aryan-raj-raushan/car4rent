import React from "react";
import { HiMiniChevronDoubleDown } from "react-icons/hi2";
import FlightDetailsCard from "./FlightDetailsCard";
import useFlightInfoCardHook from "./useFlightInfoCardHook";

const FlightInfoCard = ({ data, dictionaries, itineraries, journey }) => {
  const {
    handleOpen,
    airlineCode,
    airlineName,
    carrierNumber,
    formattedTotal,
    grandTotal,
    base,
    handleBookNow,
    open,
    carriers,
    airportDetails,
    travelDetails,
    numberOfStops,
    departureTime,
    fDuration,
    arrivalTime,
    price,
    mealDescription,
  } = useFlightInfoCardHook({ data, dictionaries, itineraries });

  return (
    <div
      className={`border border-gray-300 rounded-lg shadow hover:shadow-md px-7 py-4 cursor-pointer relative`}
      onClick={handleOpen}
    >
      {journey === "two-way" && (
        <div className="ribbon">
          <span>Return</span>
        </div>
      )}
      {mealDescription && (
        <p className="absolute left-0 top-0 text-xs font-light bg-blue-100 rounded-tl-lg px-1 rounded-br-lg">
          Enjoy free meal
        </p>
      )}
      <div
        className={`flex items-center ${
          journey === "one-way" ? "justify-between" : "justify-start gap-10"
        }`}
      >
        {/* 1st */}
        <div className="flex gap-1 items-center basis-1/6">
          <img
            src={`https://pics.avs.io/200/200/${airlineCode}@2x.png`}
            alt="Airline"
            width={500}
            height={500}
            className="w-16 object-cover object-center "
          />
          <div className="leading-tight">
            <h4 className="text-sm font-medium text-gray-500 leading-[1rem]">
              {airlineName}
            </h4>
            <h6 className="text-xs text-gray-500 uppercase">
              {airlineCode}-{carrierNumber}
            </h6>
          </div>
        </div>
        {/* 2nd div */}
        <div className="flex items-center justify-between basis-2/5">
          <h4 className="text-2xl font-rubik font-light">{departureTime}</h4>
          <div className="text-xs text-center text-gray-500 relative z-10">
            <h4 className="border-b-2 pb-0.5">{fDuration}</h4>
            {numberOfStops >= 1 && (
              <span className="absolute w-1 h-1 rounded-full ring-orange-600 bg-white ring-1 top-[47%] left-[44%] z-20"></span>
            )}
            <h6 className="">
              {numberOfStops === 0
                ? "Non-stop"
                : `${
                    numberOfStops > 1
                      ? `${numberOfStops} stops`
                      : `${numberOfStops} stop`
                  }`}
            </h6>
          </div>
          <h4 className="text-2xl font-rubik font-light">{arrivalTime}</h4>
        </div>
        {journey === "one-way" && (
          <>
            <div className="text-right basis-1/6 leading-tight mt-3">
              <h3 className="text-lg font-semibold">
                &#8377; {formattedTotal}
              </h3>
              <p className="text-xs text-green-500 font-medium">
                &#8377;{grandTotal - base} instant discount{" "}
              </p>
            </div>
            <div className="pt-4">
              <button
                className="bg-orange-500 shadow-sm hover:bg-orange-600 transition duration-200 text-sm text-white px-4 py-2 rounded-md"
                onClick={(e) => handleBookNow(e)}
              >
                Book Now
              </button>
            </div>
          </>
        )}
      </div>
      <div>
        <h6
          className="text-[0.9rem] text-blue-400 leading-3 font-rubik tracking-wide underline underline-offset-2 inline duration-1000 ease-in-out transition-all"
          // onClick={handleOpen}
        >
          {open ? "Hide details" : "Flight details"}{" "}
          <HiMiniChevronDoubleDown
            className={`inline-block ${
              open ? "rotate-180 duration-700" : "rotate-0 duration-700"
            } `}
          />
        </h6>
        <FlightDetailsCard
          itinerary={itineraries}
          open={open}
          carriers={carriers}
          airportDetails={airportDetails}
          travelDetails={travelDetails}
          numberOfStops={numberOfStops}
          price={price}
        />
      </div>
    </div>
  );
};

export default FlightInfoCard;
