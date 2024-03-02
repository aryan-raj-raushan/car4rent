import SelectCar from "../../images/plan/icon1.png";
import Contact from "../../images/plan/icon2.png";
import Drive from "../../images/plan/icon3.png";

const PlanTrip = () => {
  return (
    <>
      <section className="plan-section py-14 px-0 bg-white">
        <div className="container max-w-screen-xl !my-0 !mx-auto py-0 px-1">
          <div className="plan-container flex flex-col">
            <div className="plan-container__title my-0 mx-auto text-center text-black">
              <h3 className="text-2xl font-medium font-rubik">
                Plan your trip now
              </h3>
              <h2 className="text-4xl tracking-wide font-bold font-poppins mt-3 mb-7">
                Quick & easy car rental
              </h2>
            </div>

            <div className="plan-container__boxes grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-6 mt-16 md:row-gap-8 md:mt-10">
              <div className="plan-container__boxes__box text-center py-2.5 px-2.5 sm:px-14">
                <img
                  src={SelectCar}
                  alt="icon_img"
                  className="w-44 h-auto mx-auto"
                />
                <h3 className="text-2xl font-bold mb-2.5">Select Car</h3>
                <p className="text-base font-rubik text-gray-500 ">
                  We offer a big range of vehicles for all your driving needs.
                  We have the perfect car to meet your needs
                </p>
              </div>

              <div className="plan-container__boxes__box text-center py-2.5 px-2.5 sm:px-14">
                <img
                  src={Contact}
                  alt="icon_img"
                  className="w-44 h-auto mx-auto"
                />
                <h3 className="text-2xl font-bold mb-2.5">Contact Operator</h3>
                <p className="text-base font-rubik text-gray-700 ">
                  Our knowledgeable and friendly operators are always ready to
                  help with any questions or concerns
                </p>
              </div>

              <div className="plan-container__boxes__box text-center py-2.5 px-2.5 sm:px-14">
                <img
                  src={Drive}
                  alt="icon_img"
                  className="w-44 h-auto mx-auto"
                />
                <h3 className="text-2xl font-bold mb-2.5">Let's Drive</h3>
                <p className="text-base font-rubik text-gray-700 ">
                  Whether you're hitting the open road, we've got you covered
                  with our wide range of cars
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PlanTrip;
