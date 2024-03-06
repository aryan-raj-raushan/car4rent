import { boxesData } from "../../constant/PlanTripConst";
const PlanTrip = () => {
  return (
    <>
      <section className="plan-section py-14 px-0 bg-white">
        <div className="container max-w-screen-xl !my-0 !mx-auto py-0 px-1">
          <div className="plan-container flex flex-col">
            <div className="plan-container__title my-0 mx-auto text-center text-black">
              <h3 className="text-lg sm:text-2xl font-medium font-rubik">
                Plan your trip now
              </h3>
              <h2 className="text-2xl sm:text-4xl tracking-wide font-bold font-poppins mt-1 sm:mt-3 mb-4 sm:mb-7">
                Quick & easy car rental
              </h2>
            </div>

            <div className="plan-container__boxes lg:grid flex  lg:grid-cols-3 gap-6 md:row-gap-8 mt-4 md:mt-10 overflow-x-auto lg:overflow-hidden no-scrollbar">
              {boxesData.map((box, index) => (
                <div
                  key={index}
                  className="plan-container__boxes__box text-center py-2.5 px-5 sm:px-14 min-w-60 sm:min-w-80 lg:min-w-full"
                >
                  <img
                    src={box.image}
                    alt="icon_img"
                    className="w-36 sm:w-44 h-auto mx-auto"
                  />
                  <h3 className="text-2xl font-bold mb-2.5">{box.title}</h3>
                  <p className="text-sm sm:text-base font-rubik text-gray-500">
                    {box.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PlanTrip;
