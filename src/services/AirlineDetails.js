const airports = require("airport-data-js");

// Function to get airport details by IATA code
export const getAirportDetails = (iataCode) => {
  const airportByIATA = airports.getAirportByIata(iataCode);
  return airportByIATA;
};
