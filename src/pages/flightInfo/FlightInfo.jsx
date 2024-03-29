import React from "react";
import FlightInfoCard from "./FlightInfoCard";
import { flightInfo as flightInfoData } from "./data";
// import { useMyState } from "../../context/myState";
import { returnData } from "./returndata";

const FlightInfo = () => {
  // const { loading, flightData } = useMyState();
  
  return (
    <>
      <section className="py-5">
        <div className="Container">
          <div className="max-w-4xl mx-auto flex gap-6 flex-col w-full ">
            <ul className="flex items-center text-center gap-4 bg-slate-100 rounded-3xl py-1 text-sm sticky top-28 cursor-pointer z-50 font-poppins font-light">
              <li className="basis-1/6 text-center">Airline</li>
              <li className="basis-[16%]">Departure</li>
              <li className="basis-[12%]">Duration</li>
              <li className="basis-[16%]">Arrival</li>
              <li className="basis-1/6 text-center">Price</li>
            </ul>
            {flightInfoData.map((flightData) => {
              const { dictionaries } = flightData;
              return flightData.data.map((flight, index) => {
                const itinerary = flight.itineraries && flight.itineraries[0];
                const returnItinerary =
                  flight.itineraries[1] && flight.itineraries[1];
                return (
                  <div key={index}>
                    {flight.itineraries.length === 1 && (
                      <FlightInfoCard
                        data={flight}
                        dictionaries={dictionaries}
                        itineraries={itinerary}
                        journey="one-way"
                      />
                    )}
                    {flight.itineraries.length === 2 && (
                      <div className="flex flex-col border max-w-4xl gap-4 rounded-lg p-2">
                        <FlightInfoCard
                          data={flight}
                          dictionaries={dictionaries}
                          itineraries={itinerary}
                          journey="one-way"
                        />

                        <FlightInfoCard
                          data={flight}
                          dictionaries={dictionaries}
                          itineraries={returnItinerary}
                          journey="two-way"
                        />
                      </div>
                    )}
                  </div>
                );
              });
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default FlightInfo;
