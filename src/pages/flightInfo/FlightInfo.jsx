import React from "react";
import FlightInfoCard from "./FlightInfoCard";
import { useMyState } from "../../context/myState";
import { IoIosArrowRoundUp } from "react-icons/io";
import useFlightInfoHook from "./useFlightInfoHook";
import FlightSortCard from "./FlightSortCard";
import FlightSearchCard from "./FlightSearchCard";

const FlightInfo = () => {
  const { flightData } = useMyState();
  const { data, actions } = useFlightInfoHook(flightData);
  const { flights, sortOrder, selectedCriteria } = data;
  const { handleClearSort, sortByCriteria } = actions;
  const criteriaList = [
    { key: "departure", label: "Departure" },
    { key: "duration", label: "Duration" },
    { key: "arrival", label: "Arrival" },
    { key: "price", label: "Price" },
  ];
  console.log(flightData);
  return (
    <>
      {flightData.length > 0 ? (
        <section className="py-5">
          <div className="Container">
            <div className="mb-5">
              <FlightSearchCard />
            </div>
            <div className="flex gap-8">
              <FlightSortCard data={data} actions={actions} />
              {/* Flight search data */}
              <div className="max-w-4xl flex gap-6 flex-col w-full flex-1">
                <ul className="flex items-center text-center gap-4 bg-slate-100 rounded-3xl py-1 text-sm sticky top-28 cursor-pointer z-30 font-poppins font-light">
                  <li className="basis-1/6 text-center">Airline</li>
                  {criteriaList.map((criteria, ind) => (
                    <li
                      key={ind}
                      className={`${
                        criteria.key === "duration"
                          ? "basis-[12%]"
                          : "basis-[16%]"
                      } ${
                        selectedCriteria === criteria.key ? "text-blue-500" : ""
                      }`}
                      onClick={() => sortByCriteria(criteria.key)}
                    >
                      {criteria.label}
                      {selectedCriteria === criteria.key && (
                        <IoIosArrowRoundUp
                          className={`inline-block duration-200 ${
                            sortOrder === "asc" ? "rotate-0" : "rotate-180"
                          }`}
                        />
                      )}
                    </li>
                  ))}
                  <li
                    onClick={handleClearSort}
                    className="text-xs text-blue-500 basis-[12%]"
                  >
                    Clear all
                  </li>
                </ul>
                {flightData.map((flightData, index) => {
                  const { dictionaries } = flightData;
                  return flights && flights.length > 0 ? (
                    flights.map((flight, num) => {
                      const [itineraries, returnItineraries] =
                        flight?.itineraries;
                      return (
                        <div key={`${index}-${num}`}>
                          {flight.itineraries.length === 1 && (
                            <FlightInfoCard
                              key={`${index}-${num}-one-way`}
                              data={flight}
                              dictionaries={dictionaries}
                              itineraries={itineraries}
                              journey="one-way"
                            />
                          )}
                          {flight.itineraries.length === 2 && (
                            <div className="flex flex-col border max-w-4xl gap-4 rounded-lg p-2">
                              <FlightInfoCard
                                key={`${index}-${num}-one-way`}
                                data={flight}
                                dictionaries={dictionaries}
                                itineraries={itineraries}
                                journey="one-way"
                              />

                              <FlightInfoCard
                                key={`${index}-${num}-two-way`}
                                data={flight}
                                dictionaries={dictionaries}
                                itineraries={returnItineraries}
                                journey="two-way"
                              />
                            </div>
                          )}
                        </div>
                      );
                    })
                  ) : (
                    <div key={`no-data-${index}`}>No data found</div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      ) : (
        <div className="flex justify-center items-center h-full min-h-60">
          No data found
        </div>
      )}
    </>
  );
};

export default FlightInfo;
