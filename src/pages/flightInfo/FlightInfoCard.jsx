import React, { useEffect, useState } from "react";
import { HiMiniChevronDoubleDown } from "react-icons/hi2";
import { format, parseISO } from "date-fns";
import formatDuration from "../../hoc/FormatedDateDuration";
import { getAirportDetails } from "../../services/AirlineDetails";
import FlightDetailsCard from "./FlightDetailsCard";

const FlightInfoCard = ({ data, dictionaries }) => {
  const [open, setOpen] = useState(false);
  const [airportDetails, setAirportDetails] = useState({});

  const handleOpen = () => setOpen(!open);

  const { itineraries, price, travelerPricings } = data;
  const { carriers } = dictionaries;
  const itinerary = itineraries && itineraries[0];
  const airlineCode = itinerary.segments[0].carrierCode;
  const airlineName = carriers[airlineCode];
  const duration = itinerary.duration;
  const fDuration = formatDuration(duration);
  const numberOfStops = itinerary.segments.length - 1;
  const carrierNumber = itinerary.segments[0].number;

  const departureDate = parseISO(itinerary.segments[0].departure.at);
  const departureTime = format(departureDate, "HH:mm");

  const lastSegment = itinerary.segments[itinerary.segments.length - 1];
  const arrivalDate = parseISO(lastSegment.arrival.at);
  const arrivalTime = format(arrivalDate, "HH:mm");

  const { base, grandTotal, total } = price;
  const formattedTotal = new Intl.NumberFormat("en-IN").format(total);

  const travelDetails = travelerPricings && travelerPricings[0];

  useEffect(() => {
    const fetchAirportDetails = async () => {
      try {
        const segments = data?.itineraries?.[0]?.segments || [];
        const airportPromises = segments.flatMap(async (segment) => {
          const departureCity = segment.departure.iataCode;
          const arrivalCity = segment.arrival.iataCode;

          // Fetch details for departure city
          const departureResponse = await getAirportDetails(departureCity);
          const departureDetails =
            departureResponse && departureResponse.length > 0
              ? { [departureCity]: departureResponse[0] }
              : null;

          // Fetch details for arrival city
          const arrivalResponse = await getAirportDetails(arrivalCity);
          const arrivalDetails =
            arrivalResponse && arrivalResponse.length > 0
              ? { [arrivalCity]: arrivalResponse[0] }
              : null;

          return [departureDetails, arrivalDetails];
        });

        const airportResponses = await Promise.all(airportPromises);
        const mergedDetails = Object.assign(
          {},
          ...airportResponses.flat().filter(Boolean)
        );
        setAirportDetails(mergedDetails);
      } catch (error) {
        console.error("Error fetching airport details:", error);
      }
    };

    fetchAirportDetails();
  }, [data]);

  return (
    <div className="border border-gray-300 rounded-lg px-7 py-4 shadow hover:shadow-md cursor-pointer">
      <div className="flex items-center justify-between">
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
          className="text-[0.9rem] text-blue-400 leading-3 font-rubik tracking-wide underline underline-offset-2 inline duration-1000 ease-in-out transition-all"
          onClick={handleOpen}
        >
          {open ? "Hide details" : "Flight details"}{" "}
          <HiMiniChevronDoubleDown
            className={`inline-block ${
              open ? "rotate-180 duration-700" : "rotate-0 duration-700"
            } `}
          />
        </h6>
        <FlightDetailsCard
          itinerary={itinerary}
          open={open}
          carriers={carriers}
          airportDetails={airportDetails}
          travelDetails={travelDetails}
          numberOfStops={numberOfStops}
        />
      </div>
    </div>
  );
};

export default FlightInfoCard;
