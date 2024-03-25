import React from "react";
import FlightInfoCard from "./FlightInfoCard";
import { flightInfo as flightInfoData } from "./data";
// import { useMyState } from "../../context/myState";

const FlightInfo = () => {
  // const { loading, flightData } = useMyState();
  console.log("flightInfo", flightInfoData);
  return (
    <>
      {/* {!loading && flightInfoData.length > 0 ? ( */}
      <section className="pt-20">
        <div className="Container">
          <div className="max-w-4xl mx-auto flex gap-6 flex-col">
            {flightInfoData.map((flightData) => {
              const { dictionaries } = flightData;
              return flightData.data.map((flight) => (
                <FlightInfoCard
                  key={flight.id}
                  data={flight}
                  dictionaries={dictionaries}
                />
              ));
            })}
          </div>
        </div>
      </section>
      {/* ) : (
        <div>Loading....</div>
      )} */}
    </>
  );
};

export default FlightInfo;
