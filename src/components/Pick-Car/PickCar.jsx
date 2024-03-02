import { useState } from "react";
import CarBox from "./CarBox";
import { CAR_DATA } from "./CarData";

function PickCar() {
  const [active, setActive] = useState("FirstCar");
  const [colorBtn, setColorBtn] = useState("btn1");

  const btnID = (id) => {
    setColorBtn(colorBtn === id ? "" : id);
  };

  const coloringButton = (id) => {
    return colorBtn === id ? "bg-orange-500 text-white" : "bg-gray-200 ";
  };

  return (
    <>
      <section className="pick-section py-24 px-0 bg-white">
        <div className="container max-w-screen-xl !my-0 !mx-auto py-0 px-1">
          <div className="pick-container flex flex-col ">
            <div className="pick-container__title text-center max-w-lg mx-auto mb-12">
              <h3 className="text-2xl font-rubik font-medium">
                Vehicle Models
              </h3>
              <h2 className="text-4xl font-poppins font-bold mt-2.5 tracking-wide mb-2.5 mx-0">
                Our rental fleet
              </h2>
              <p className="text-base font-rubik font-normal text-gray-500">
                Choose from a variety of our amazing vehicles to rent for your
                next adventure or business trip
              </p>
            </div>
            <div className="pick-container__car-content flex flex-col justify-between gap-2.5 lg:gap-12 lg:flex-row md:gap-8">
              {/* pick car */}

              <div className="pick-box flex flex-col gap-2">
                <button
                  className={`text-xl font-poppins font-semibold px-6 py-4 rounded transition-all duration-200 text-left border-none hover:bg-orange-500 hover:text-white  ${coloringButton(
                    "btn1"
                  )}`}
                  onClick={() => {
                    setActive("FirstCar");
                    btnID("btn1");
                  }}
                >
                  {" "}
                  VW Golf 6
                </button>
                <button
                  className={`text-xl font-poppins font-semibold px-6 py-4 rounded transition-all duration-200 text-left border-none hover:bg-orange-500 hover:text-white ${coloringButton(
                    "btn2"
                  )}`}
                  onClick={() => {
                    setActive("SecondCar");
                    btnID("btn2");
                  }}
                >
                  Audi A1 S-Line
                </button>
                <button
                  className={`text-xl font-poppins font-semibold px-6 py-4 rounded transition-all duration-200 text-left border-none hover:bg-orange-500 hover:text-white ${coloringButton(
                    "btn3"
                  )}`}
                  onClick={() => {
                    setActive("ThirdCar");
                    btnID("btn3");
                  }}
                >
                  Toyota Camry
                </button>
                <button
                  className={`text-xl font-poppins font-semibold px-6 py-4 rounded transition-all duration-200 text-left border-none hover:bg-orange-500 hover:text-white ${coloringButton(
                    "btn4"
                  )}`}
                  onClick={() => {
                    setActive("FourthCar");
                    btnID("btn4");
                  }}
                >
                  BMW 320 ModernLine
                </button>
                <button
                  className={`text-xl font-poppins font-semibold px-6 py-4 rounded transition-all duration-200 text-left border-none hover:bg-orange-500 hover:text-white ${coloringButton(
                    "btn5"
                  )}`}
                  onClick={() => {
                    setActive("FifthCar");
                    btnID("btn5");
                  }}
                >
                  Mercedes-Benz GLK
                </button>
                <button
                  className={`text-xl font-poppins font-semibold px-6 py-4 rounded transition-all duration-200 text-left border-none  hover:bg-orange-500 hover:text-white ${coloringButton(
                    "btn6"
                  )}`}
                  onClick={() => {
                    setActive("SixthCar");
                    btnID("btn6");
                  }}
                >
                  VW Passat CC
                </button>
              </div>

              {active === "FirstCar" && <CarBox data={CAR_DATA} carID={0} />}
              {active === "SecondCar" && <CarBox data={CAR_DATA} carID={1} />}
              {active === "ThirdCar" && <CarBox data={CAR_DATA} carID={2} />}
              {active === "FourthCar" && <CarBox data={CAR_DATA} carID={3} />}
              {active === "FifthCar" && <CarBox data={CAR_DATA} carID={4} />}
              {active === "SixthCar" && <CarBox data={CAR_DATA} carID={5} />}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PickCar;
