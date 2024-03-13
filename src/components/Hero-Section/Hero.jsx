import { Link } from "react-router-dom";
import BgShape from "../../assets/images/hero/hero-bg.png";
import HeroCar from "../../assets/images/hero/main-car.png";
import { IconChevronRight, IconCircleCheck } from "@tabler/icons-react";
import useHeroHook from "./useHeroHook";

const Hero = () => {
  const { scrollUp, scrollToTop, scrollToBookingSection } = useHeroHook();
  return (
    <>
      <section
        id="home"
        className="hero-section h-auto lg:h-[74vh] px-4 sm:px-10"
      >
        <div className="Container">
          <img
            className="absolute top-0 right-0 hidden md:block z-0"
            src={BgShape}
            alt="bg-shape"
          />
          <div className="hero-content h-full w-full flex items-center justify-center md:justify-between relative md:mt-4 lg:mt-8">
            <div className="hero-content__text max-w-[500px] mt-2 lg:mt-12 z-30">
              <h4 className="text-[22px] font-semibold text-black font-rubik">
                Plan your trip now
              </h4>
              <h1 className="text-3xl sm:text-4xl lg:text-[3.25rem] lg:leading-tight tracking-wide font-poppins font-bold mb-3 md:mb-6 mt-2.5">
                Save <span className="text-orange-500">big</span> with our car
                rental
              </h1>
              <p className="text-sm md:text-base mb-10 leading-4 text-gray-500">
                Rent the car of your dreams. Unbeatable prices, unlimited miles,
                flexible pick-up options and much more.
              </p>
              <div className="hero-content__text__btns flex flex-col md:flex-row gap-5">
                <Link
                  onClick={scrollToBookingSection}
                  className="text-white font-bold bg-orange-500 px-7 py-4 md:py-4 rounded-md shadow-lg transition duration-300 hover:bg-orange-600 flex items-center justify-center border-2 border-solid border-orange-500"
                  to="/"
                >
                  Book Ride <IconCircleCheck className="ml-2" />
                </Link>
                <Link
                  className="text-black border border-black border-solid px-7 py-3 md:py-4 rounded-md shadow-lg transition duration-300 hover:bg-black hover:text-white flex items-center justify-center bg-transparent"
                  to="/"
                >
                  Learn More <IconChevronRight className="ml-2" />
                </Link>
              </div>
            </div>

            {/* img */}
            <img
              src={HeroCar}
              alt="car-img"
              className="hero-content__car-img hidden absolute right-0 md:block w-2/3 z-20 lg:mt-12"
            />
          </div>
        </div>

        {/* page up */}
        <div
          onClick={scrollToTop}
          className={`scroll-up fixed bottom-5 sm:bottom-10 right-10 flex items-center justify-center bg-orange-500 border-4 border-white w-12 h-12 text-white text-2xl font-bold rounded-full cursor-pointer transition duration-300 z-50 ${
            scrollUp ? "block" : "hidden"
          }`}
        >
          ^
        </div>
      </section>
    </>
  );
};

export default Hero;
