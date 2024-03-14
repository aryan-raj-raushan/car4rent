import React from "react";
import BookDemo from "../../assets/illustrator/fleet/BookDemo.jpg";
import { Link } from "react-router-dom";
import CarIcon from "../../assets/images/fleet/car-icon.png";
import useFleetHook from "./useFleetHook";

const Fleet = () => {
  const { carCollection } = useFleetHook();
  return (
    <section id="home" className="px-4 sm:px-10 py-8">
      <div className="Container">
        <div className="flex flex-col mt-2 ">
          <div className="flex flex-col gap-4 items-center relative z-20">
            <h2 className="text-3xl font-bold text-orange-400">Our Fleets</h2>
            <h6 className="text-base font-normal text-gray-500">
              Choose from Wide Range of our Self-Drive Cars
            </h6>
            <span className="absolute z-0 -top-10 opacity-70 right-[15%] hidden">
              <img
                src={BookDemo}
                alt="bookdemo"
                width={200}
                height={200}
                className="z-0 w-60 bg-contain object-contain"
              />
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8 mt-10">
            {carCollection.map((car, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg shadow-md flex flex-col justify-between min-w-52 p-2 box-border"
              >
                <img
                  src={car.image}
                  alt="title-model"
                  width={500}
                  height={500}
                  className="w-60 sm:w-fit min-w-44 h-full object-contain p-4 hover:rotate-12 hover:scale-125 transition-all duration-300 cursor-pointer"
                />
                <div className="flex items-center justify-between px-2 mt-2 ">
                  <div className="flex items-center gap-2">
                    <img
                      src={CarIcon}
                      alt="car svg"
                      width={100}
                      height={100}
                      className="w-8 h-8 object-contain"
                    />
                    <h4 className="text-base font-semibold">{car.brand}</h4>
                  </div>
                  <h6 className="text-lg font-semibold block w-fit">
                    {car.model}
                  </h6>
                </div>
                <div className="flex items-center justify-between px-4 mt-1">
                  <h4 className="text-sm">
                    ₹
                    <span className="text-lg font-medium text-orange-600">
                      {car.price}
                    </span>
                    /hr
                  </h4>
                  <Link
                    to=""
                    className="text-sm font-normal text-gray-500 hover:scale-110 transition duration-300"
                  >
                    View Details &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fleet;
