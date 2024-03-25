import React, { useState } from "react";
import Demo from "../../assets/logo/flight/SpiceJet (SG).png";
import { BsClockHistory } from "react-icons/bs";
import { format, parseISO } from "date-fns";

const FlightInfoCard = ({ data, dictionaries }) => {
  const [open, setOpen] = useState(false);
  const { itineraries, price, travelerPricings } = data;
  const { carriers } = dictionaries;
  const itinerary = itineraries && itineraries[0];
  const airlineCode = itinerary.segments[0].carrierCode;
  const airlineName = carriers[airlineCode];
  const duration = itinerary.duration;
  const arrivalCity = itinerary.segments[0].arrival.iataCode;
  const departureCity = itinerary.segments[0].departure.iataCode;
  const carrier = itinerary.segments[0].carrierCode;
  const carrierNumber = itinerary.segments[0].number;
  const arrivalTerminal = itinerary.segments[0].arrival.terminal
    ? itinerary.segments[0].arrival.terminal
    : "";
  const departureTerminal = itinerary.segments[0].departure.terminal
    ? itinerary.segments[0].departure.terminal
    : "";
  const numberOfStops = itinerary.segments[0].numberOfStops;
  // Time
  const matches = duration.match(/PT(\d+)H(\d+)M/);
  const hours = matches[1];
  const minutes = matches[2];

  // Format duration
  const formattedDuration = `${hours}h ${minutes}m`;

  const departureDate = parseISO(itinerary.segments[0].departure.at);
  const arrivalDate = parseISO(itinerary.segments[0].arrival.at);

  const arrivalTime = format(arrivalDate, "HH:mm");
  const departureTime = format(departureDate, "HH:mm");

  // Format departure and arrival dates
  const formattedDepartureDate = format(departureDate, "EEE',' dd MMM yyyy");
  const formattedArrivalDate = format(arrivalDate, "EEE',' dd MMM yyyy");
  const { base, grandTotal, total } = price;
  const formattedTotal = new Intl.NumberFormat("en-IN").format(total);
  // cabin details
  const travelDetails = travelerPricings && travelerPricings[0];
  const travelClass = travelDetails.fareDetailsBySegment[0].cabin;
  const { weight, weightUnit } =
    travelDetails.fareDetailsBySegment[0].includedCheckedBags;
  const travelType = travelDetails.travelerType;
  const handleOpen = () => setOpen(!open);
  return (
    <div className="border border-gray-300 rounded-lg px-7 py-4 shadow hover:shadow-md cursor-pointer">
      <div className="flex items-center justify-between">
        {/* 1st */}
        <div className="flex gap-1 items-center">
          <img
            src={Demo}
            alt="Airline"
            width={200}
            height={200}
            className="w-16 h-16 object-contain "
          />
          <div className="leading-tight">
            <h4 className="text-sm text-gray-700 leading-[1rem]">
              {airlineName}
            </h4>
            <small className="text-xs text-gray-500 uppercase">
              {carrier}-{carrierNumber}
            </small>
          </div>
        </div>
        {/* 2nd div */}
        <div className="flex items-center justify-between gap-2 basis-2/5 px-2">
          <h4 className="text-2xl font-rubik font-light">{departureTime}</h4>
          <div className="text-xs text-center text-gray-500 relative z-10">
            <h4 className="border-b-2 pb-0.5">{formattedDuration}</h4>
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
        <div className="text-right basis-1/6 leading-tight mt-3">
          <h3 className="text-lg font-semibold">&#8377; {formattedTotal}</h3>
          <p className="text-xs text-green-500 font-medium">
            &#8377;{grandTotal - base} instant discount{" "}
          </p>
        </div>
        <div className="pt-4">
          <button className="bg-orange-500 shadow-sm hover:bg-orange-600 transition duration-200 text-sm text-white px-4 py-2 rounded-md">
            Book Now
          </button>
        </div>
      </div>
      <div>
        <h6
          className="text-[0.9rem] text-blue-400 leading-3 font-rubik tracking-wide underline underline-offset-2 inline"
          onClick={handleOpen}
        >
          Flight details
        </h6>
        <div
          className={`${
            open ? "max-h-[28rem]" : "max-h-0"
          } text-base font-normal font-rubik text-gray-700 transition-all overflow-hidden duration-1000`}
        >
          {/* {Segment details for flight info } */}
          <div className="flex flex-col border border-gray-300 rounded-lg py-3 shadow-inner mt-6 mb-3">
            <div className="flex items-center justify-between border-b px-4 pb-3">
              <p className="text-sm font-medium font-poppins text-gray-500">
                {"New Delhi"} &rarr; {"Kolkata"}{" "}
                <span className="ml-2 text-xs font-light text-gray-800">
                  {"Fri 22Mar"}
                </span>
              </p>
              <div className="flex items-center gap-2">
                <p className="text-xs border rounded-full px-2 bg-green-100 border-green-300">
                  Partially Refundable
                </p>
                <p className="text-xs text-blue-500">Know More</p>
              </div>
            </div>
            <div className="flex justify-between gap-5 px-4 py-5">
              <div className="flex flex-col items-center">
                <img
                  src={Demo}
                  alt="airline"
                  width={200}
                  height={200}
                  className="object-contain w-16 h-16"
                />
                <small className="leading-3 text-gray-400">
                  {" "}
                  {carrier}-{carrierNumber}
                </small>
                <small className="text-[10px] text-gray-400 font-medium">
                  {travelClass}
                </small>
              </div>
              <div className="flex justify-between gap-3 flex-1 px-10">
                <div className="max-w-36 flex flex-col gap-0.5 items-center text-center">
                  <p className="text-xl">
                    {departureCity}{" "}
                    <span className="font-semibold font-rubik">
                      {departureTime}
                    </span>
                  </p>
                  <p className="text-sm text-gray-500">
                    {formattedDepartureDate}
                  </p>
                  <p className="text-xs leading-4 mt-2 text-gray-400">
                    {departureTerminal && (
                      <span className="font-medium text-gray-600">
                        Terminal {departureTerminal} -{" "}
                      </span>
                    )}{" "}
                    Indira Gandhi Airport, New Delhi
                  </p>
                </div>
                <div className="flex flex-col items-center gap-2 text-center mt-4">
                  <BsClockHistory className="text-2xl" />
                  <h6 className="text-xs font-light ">{formattedDuration}</h6>
                </div>
                <div className="max-w-36 flex flex-col gap-0.5 items-center text-center">
                  <p className="text-xl">
                    {arrivalCity}{" "}
                    <span className="font-semibold font-rubik">
                      {arrivalTime}
                    </span>
                  </p>
                  <p className="text-sm text-gray-500">
                    {formattedArrivalDate}
                  </p>
                  <p className="text-xs leading-4 mt-2 text-gray-400">
                    {arrivalTerminal && (
                      <span className="font-medium text-gray-600">
                        Terminal {arrivalTerminal} -{" "}
                      </span>
                    )}{" "}
                    Netaji Subhas Chandra Bose Airport, Kolkata
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-4 items-start">
                <div className="flex justify-between items-start gap-4 w-full">
                  <p className="text-sm font-rubik font-light text-gray-500">
                    Check-in baggage{" "}
                  </p>
                  <p className="text-sm lowercase">
                    {" "}
                    <span className="font-semibold">
                      {" "}
                      {weight}
                      {weightUnit}
                    </span>{" "}
                    / {travelType}
                  </p>
                </div>
                <div className="flex justify-between items-start gap-4 w-full">
                  <p className="text-sm font-rubik font-light text-gray-500">
                    Cabin baggage{" "}
                  </p>
                  <p className="text-sm ">
                    {" "}
                    <span className="font-semibold"> 5kg</span> / adult
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightInfoCard;
