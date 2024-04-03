import { useEffect, useState } from "react";
import { format, parseISO } from "date-fns";
import { formatDuration } from "../../hoc/FormatedDateDuration";
import { getAirportDetails } from "../../services/AirlineDetails";
const useFlightInfoCardHook = ({ data, dictionaries, itineraries }) => {
  const [open, setOpen] = useState(false);
  const [airportDetails, setAirportDetails] = useState({});

  const handleOpen = () => setOpen(!open);

  const { price, travelerPricings } = data;
  const { carriers } = dictionaries;
  const itinerary = itineraries && itineraries;
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
  // Meal service
  const amenities = travelDetails?.fareDetailsBySegment[0]?.amenities;
  const mealService =
    amenities &&
    amenities.find((amenity) => amenity.description === "MEAL SERVICES");
  const mealDescription = mealService ? mealService.description : null;

  const handleBookNow = (e) => {
    e.stopPropagation();
    console.log("Book now");
  };

  useEffect(() => {
    const fetchAirportDetails = async () => {
      try {
        const segments = itinerary?.segments || [];
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
  }, [itinerary]);

  return {
    handleOpen,
    airlineCode,
    airlineName,
    carrierNumber,
    formattedTotal,
    grandTotal,
    base,
    handleBookNow,
    open,
    itinerary,
    carriers,
    airportDetails,
    travelDetails,
    numberOfStops,
    departureTime,
    fDuration,
    arrivalTime,
    price,
    mealDescription
  };
};

export default useFlightInfoCardHook;
