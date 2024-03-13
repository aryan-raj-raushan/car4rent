import { useState } from "react";
import CarBox from "./CarBox";
import { CAR_DATA } from "./CarData";

function PickCar() {
  const [active, setActive] = useState("VW Golf 6");
  const [colorBtn, setColorBtn] = useState("btn1");

  const btnID = (id) => {
    setColorBtn(colorBtn === id ? "" : id);
  };

  const coloringButton = (id) => {
    return colorBtn === id ? "bg-orange-500 text-white" : "bg-gray-200 ";
  };

  const carData = [
    "VW Golf 6",
    "Audi A1 S-Line",
    "Toyota Camry",
    "BMW 320 ModernLine",
    "Mercedes-Benz GLK",
    "VW Passat CC",
  ];

  return (
    <>
      <section className="pick-section lg:py-24 py-4 px-2 lg:px-2 bg-white">
        <div className="Container">
          <div className="pick-container flex flex-col ">
            <div className="pick-container__title text-center max-w-lg mx-auto mb-12">
              <h3 className="text-xl lg:text-2xl font-rubik font-medium">
                Vehicle Models
              </h3>
              <h2 className="text-2xl lg:text-4xl font-poppins font-bold  my-1 lg:my-2.5 tracking-wide mx-0">
                Our premium rental fleet
              </h2>
              <p className="text-sm lg:text-base font-rubik font-normal text-gray-500">
                Choose from a variety of our amazing vehicles to rent for your
                next adventure or business trip
              </p>
            </div>
            <div className="pick-container__car-content flex flex-col lg:flex-row md:gap-8 justify-between gap-2.5 lg:gap-12 ">
              {/* pick car */}
              <div className="pick-box flex lg:flex-col gap-2 overflow-auto no-scrollbar">
                {carData.map((car, index) => (
                  <div className="w-full min-w-fit lg:min-w-full">
                    <button
                      key={index}
                      className={`lg:w-full text-base lg:text-xl font-poppins font-semibold px-2 py-2 lg:px-6 lg:py-4 rounded transition-all duration-200 text-left border-none hover:bg-orange-500 hover:text-white ${coloringButton(
                        `btn${index + 1}`
                      )}`}
                      onClick={() => {
                        setActive(car);
                        btnID(`btn${index + 1}`);
                      }}
                    >
                      {car}
                    </button>
                  </div>
                ))}
              </div>
              {/* Car box */}
              {carData.map((car, index) => (
                <>
                  {active === car && (
                    <CarBox key={index} data={CAR_DATA} carID={index} />
                  )}
                </>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PickCar;
