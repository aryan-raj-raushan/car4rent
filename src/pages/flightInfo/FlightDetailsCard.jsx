import React from "react";
import {formatDuration} from "../../hoc/FormatedDateDuration";
import { format, parseISO } from "date-fns";
import { BsClockHistory } from "react-icons/bs";
import LongLayOver from "../../components/Svgs/LongLayOver";
import useFlightDetailsCardHook from "./useFlightDetailsCardHook";

const FlightDetailsCard = ({
  itinerary,
  open,
  airportDetails,
  carriers,
  travelDetails,
  numberOfStops,
  price,
}) => {
  const {
    calculateLayovers,
    handleKnowMore,
    handlePrevent,
    travelClass,
    CustomWidthTooltip,
    KnowMore,
    weight,
    weightUnit,
    travelType,
  } = useFlightDetailsCardHook({ price, travelDetails });
  return (
    <>
      {itinerary.segments && itinerary.segments.length > 0 && (
        <div
          className={`${
            open ? "max-h-[80rem]" : "max-h-0"
          } text-base font-normal font-rubik text-gray-700 transition-all ease-in-out overflow-hidden duration-1000`}
        >
          {itinerary?.segments.map((segment, index) => {
            const airlineCode = segment.carrierCode;
            const airlineName = carriers[airlineCode];
            const carrierNumber = segment.number;
            const duration = segment.duration;
            // Time
            const fDuration = formatDuration(duration);
            const arrivalTerminal = segment.arrival.terminal
              ? segment.arrival.terminal
              : "";
            const departureTerminal = segment.departure.terminal
              ? segment.departure.terminal
              : "";
            const departureDate = parseISO(segment.departure.at);
            const arrivalDate = parseISO(segment.arrival.at);
            // Formatted time
            const formattedDepartureDate = format(
              departureDate,
              "EEE',' dd MMM yyyy"
            );
            const formattedArrivalDate = format(
              arrivalDate,
              "EEE',' dd MMM yyyy"
            );

            const formattedDepartureDateTop = format(
              departureDate,
              "EEE',' dd MMM"
            );
            const arrivalTime = format(arrivalDate, "HH:mm");
            const departureTime = format(departureDate, "HH:mm");
            const layovers = calculateLayovers(itinerary.segments);
            const departureCity = segment.departure.iataCode;
            const departureAirportDetails = airportDetails[departureCity];

            if (!departureAirportDetails) {
              return null;
            }

            const {
              airport: departureAirport,
              city: departureCityName,
              region_name: departureRegion,
              country_code: departureCountryCode,
            } = departureAirportDetails;

            const arrivalCity = segment.arrival.iataCode;
            const arrivalAirportDetails = airportDetails[arrivalCity];
            if (!arrivalAirportDetails) {
              return null;
            }

            const {
              airport: arrivalAirport,
              city: arrivalCityName,
              region_name: arrivalRegion,
              country_code: arrivalCountryCode,
            } = arrivalAirportDetails;

            return (
              <div key={index} onClick={(e) => handlePrevent(e)}>
                <div className="flex flex-col border border-gray-300 rounded-lg py-3 shadow-inner mt-6 mb-3 relative">
                  {numberOfStops > 0 && layovers[index] && (
                    <div className="absolute -bottom-3 left-1/3">
                      <div className="bg-gray-200 rounded-full px-4 py-0.5 flex items-center text-sm gap-1">
                        <LongLayOver />
                        <p className="text-gray-500 font-poppins">
                          Long layover {layovers[index]}
                        </p>
                      </div>
                    </div>
                  )}
                  <div className="flex items-center justify-between border-b px-4 pb-3">
                    <p className="text-sm font-medium font-poppins text-gray-500">
                      {departureCityName} &rarr; {arrivalCityName}{" "}
                      <span className="ml-2 text-xs font-light text-gray-800">
                        {formattedDepartureDateTop}
                      </span>
                    </p>
                    {index === 0 && (
                      <div className="flex items-center gap-2">
                        <p className="text-xs border rounded-full px-2 bg-green-100 border-green-300">
                          Partially Refundable
                        </p>

                        <CustomWidthTooltip title={KnowMore}>
                          <div
                            className="text-xs text-blue-500 !relative"
                            onClick={handleKnowMore}
                          >
                            Know More
                          </div>
                        </CustomWidthTooltip>
                      </div>
                    )}
                  </div>
                  <div className="flex justify-between gap-5 px-4 py-5 relative z-10">
                    <div className="flex flex-col items-center">
                      <img
                        src={`https://pics.avs.io/200/200/${airlineCode}@2x.png`}
                        alt="airline"
                        width={200}
                        height={200}
                        className="object-contain w-12 h-12"
                      />
                      <h6 className="text-xs text-gray-500">{airlineName}</h6>
                      <small className="leading-3 text-gray-400">
                        {" "}
                        {airlineCode}-{carrierNumber}
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
                        <p className="text-xs mt-2 text-gray-400 ">
                          {departureTerminal && (
                            <span className="font-medium text-gray-600">
                              Terminal {departureTerminal} -{" "}
                            </span>
                          )}{" "}
                          {departureAirport},{departureCityName},
                          {departureRegion}-{departureCountryCode}
                        </p>
                      </div>
                      <div className="flex flex-col items-center gap-2 text-center mt-4">
                        <BsClockHistory className="text-2xl" />
                        <h6 className="text-xs font-light ">{fDuration}</h6>
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
                          {arrivalAirport}, {arrivalCityName}, {arrivalRegion}-
                          {arrivalCountryCode}
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
                          <span className="font-semibold">
                            {" "}
                            {weight > 15 ? 7 : 5}kg
                          </span>{" "}
                          / adult
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default FlightDetailsCard;
