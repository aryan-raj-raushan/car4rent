import { useState } from "react";

const CarBox = ({ data, carID }) => {
  const [carLoad, setCarLoad] = useState(true);
  return (
    <>
      {data[carID].map((car, id) => (
        <div
          key={id}
          className="box-cars gap-8 xl:gap-28 flex flex-col sm:flex-row justify-center items-center sm:justify-between"
        >
          {/* car */}
          <div className="pick-car w-full md:w-[500px] relative">
            {carLoad && <span className="loader"></span>}
            <img
              style={{ display: carLoad ? "none" : "block" }}
              src={car.img}
              alt="car_img"
              onLoad={() => setCarLoad(false)}
              className="w-full mt-14"
            />
          </div>
          {/* description */}
          <div className="pick-description w-64">
            <div className="pick-description__price w-full bg-orange-600 text-white text-lg flex items-center gap-2 py-2 px-5 whitespace-nowrap">
              <span className="text-3xl font-bold">₹{car.price}</span>/ rent per
              hour
            </div>
            <div className="pick-description__table grid grid-cols-1 text-sm">
              {Object.entries(car)
                .filter(([key]) => !["name", "price", "img"].includes(key))
                .map(([key, value], idx) => (
                  <div
                    key={idx}
                    className="pick-description__table__col grid grid-cols-2 text-center py-2.5 px-1.5 border-x-2 border-solid border-b-2 border-gray-500"
                  >
                    <span className="border-r-2 border-gray-400 border-solid">
                      {key.charAt(0).toUpperCase() + key.slice(1)}
                    </span>
                    <span>{value}</span>
                  </div>
                ))}
            </div>
            {/* btn cta */}
            <a
              href="#booking-section"
              className="cta-btn text-xl uppercase font-semibold text-white bg-orange-500 font-poppins p-2.5 w-full flex justify-center mt-3.5 transition-all duration-300 hover:bg-orange-600 shadow-lg drop-shadow-lg shadow-gray-400 rounded-lg"
            >
              Reserve Now
            </a>
          </div>
        </div>
      ))}
    </>
  );
};

export default CarBox;
