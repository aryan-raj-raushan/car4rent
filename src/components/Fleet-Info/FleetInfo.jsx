import React from "react";
import Demo from "../../assets/images/fleet/swift.png";
import Transmission from "../../assets/illustrator/fleet/transmission.png";
import Bootspace from "../../assets/illustrator/fleet/boot-space.png";
import CarLength from "../../assets/illustrator/fleet/car-length.png";
import FuelIndication from "../../assets/illustrator/fleet/fuel.png";
// import PriceTag from "../../assets/illustrator/fleet/price.png";
import Mileage from "../../assets/illustrator/fleet/mileage.png";
import CarSeat from "../../assets/illustrator/fleet/car-seat.png";
import CarModel from "../../assets/illustrator/fleet/car-model.png";
import { useCarContext } from "../../context/CarContext";
import { useMyState } from "../../context/myState";

const FleetInfo = () => {
  const { carCollection } = useCarContext();
  const { loading } = useMyState();
  console.log("data", carCollection);

  return (
    <>
      {loading ? (
        <div>Loading....</div>
      ) : (
        <section className="px-4 sm:px-10 py-4">
          <div className="Container">
            <div className="flex flex-col gap-10">
              <h2 className="bg-orange-600 px-4 py-2 rounded-t-lg text-lg text-white">
                Rent Car Model for Self drive
              </h2>
              <div className="flex flex-col lg:flex-row items-center gap-10">
                <img
                  src={Demo}
                  alt="title"
                  width={800}
                  height={800}
                  className="w-fit max-w-lg"
                />
                <div className="flex flex-col gap-4 justify-between lg:basis-1/2">
                  <div className="grid grid-cols-5 gap-4 place-content-center mt-10">
                    <div className="flex items-center gap-2">
                      <img
                        src={Transmission}
                        alt="transmission"
                        width={100}
                        height={100}
                        className="w-8 h-8"
                      />
                      <h6 className="text-gray-600 text-sm">Manual</h6>
                    </div>
                    <div className="flex items-center gap-2">
                      <img
                        src={FuelIndication}
                        alt="fuel"
                        width={100}
                        height={100}
                        className="w-8 h-8"
                      />
                      <h6 className="text-gray-600 text-sm">Diesel</h6>
                    </div>
                    <div className="flex items-center gap-2">
                      <img
                        src={CarSeat}
                        alt="seat"
                        width={100}
                        height={100}
                        className="w-8 h-8"
                      />
                      <h6 className="text-gray-600 text-sm">5 seater</h6>
                    </div>
                    <div className="flex items-center gap-2">
                      <img
                        src={Bootspace}
                        alt="boot-space"
                        width={100}
                        height={100}
                        className="w-8 h-8"
                      />
                      <h6 className="text-gray-600 text-sm">345 L</h6>
                    </div>
                    <div className="flex items-center gap-2">
                      <img
                        src={Mileage}
                        alt="Mileage"
                        width={100}
                        height={100}
                        className="w-8 h-8"
                      />
                      <h6 className="text-gray-600 text-sm">24kmpl</h6>
                    </div>
                    <div className="flex items-center gap-2">
                      <img
                        src={CarLength}
                        alt="transmission"
                        width={100}
                        height={100}
                        className="w-8 h-8"
                      />
                      <h6 className="text-gray-600 text-sm">2452mm</h6>
                    </div>
                    <div className="flex items-center gap-2">
                      <img
                        src={CarModel}
                        alt="model-year"
                        width={100}
                        height={100}
                        className="w-8 h-8"
                      />
                      <h6 className="text-gray-600 text-sm">2018</h6>
                    </div>
                  </div>
                  <p className="text-gray-500 font-normal text-base tracking-wide ">
                    When you want to drive a vehicle that has a rolling
                    definition of toughness and strength, you ought to test
                    Mahindra TUV 300 at least once on a road trip. The Indian
                    market is full of vehicles that promise excellent driving
                    experience, but very few cars live up to their reputation.
                    The Mahindra TUV 300 is a car that is not easy to intimidate
                    because it is probably the most robust SUV in the country.
                    When you are on a long road trip, you don't like to
                    compromise on comfort, luxury, and safety; it is unlike
                    going to a market to fetch groceries. With features like
                    steering mounted controls, power windows, electrically
                    adjustable mirrors, rear wiper, and rear AC vent, every
                    passenger in the car can travel with immense comfort.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default FleetInfo;
