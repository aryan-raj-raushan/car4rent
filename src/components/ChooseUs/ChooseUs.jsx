import Box1 from "../../assets/images/chooseUs/icon1.png";
import Box2 from "../../assets/images/chooseUs/icon2.png";
import Box3 from "../../assets/images/chooseUs/icon3.png";
import MainImg from "../../assets/images/chooseUs/main.png";
import { IconChevronRight } from "@tabler/icons-react";

function ChooseUs() {
  return (
    <>
      <section
        className="choose-section bg-white pt-5 pb-24 px-0 bg-choose-us bg-no-repeat bg-cover"
        style={{ backgroundPosition: "-225px 255px" }}
      >
        <div className="container max-w-screen-xl !my-0 !mx-auto py-0 px-1">
          <div className="choose-container flex flex-col">
            <img
              className="choose-container__img w-full sm:w-[90%] h-auto my-0 mx-auto"
              src={MainImg}
              alt="car_img"
            />
            <div className="text-container flex flex-col lg:flex-row w-full justify-around mt-7 text-center lg:text-left items-center lg:items-start gap-14 lg:gap-0">
              {/* Left side */}
              <div className="text-container_left text-center lg:text-left lg:items-start items-center text-black max-w-lg flex flex-col">
                <h4 className="text-xl lg:text-2xl font-semibold mb-1.5 font-rubik">
                  Why Choose Us
                </h4>
                <h2 className="text-3xl lg:text-[42px] leading-tight font-bold  mb-5">
                  Best valued deals you will ever find
                </h2>
                <p className="text-base font-normal text-gray-500 mb-8 font-rubik">
                  Discover the best deals you'll ever find with our unbeatable
                  offers. We're dedicated to providing you with the best value
                  for your money, so you can enjoy top-quality services and
                  products without breaking the bank. Our deals are designed to
                  give you the ultimate renting experience, so don't miss out on
                  your chance to save big.
                </p>
                <a
                  href="#home"
                  className="cta-btn no-underline flex w-fit text-base border-2 border-solid border-orange-500 rounded shadow-lg font-bold text-white bg-orange-500 transition-all duration-300 hover:shadow-xl hover:bg-orange-600 py-4 px-6"
                >
                  Find Details &nbsp;
                  <IconChevronRight className="w-6 h-6" />
                </a>
              </div>
              {/* Right side */}
              <div className="text-container__right flex flex-col gap-11 max-w-md">
                <div className="text-container__right__box flex flex-col xs:flex-row items-center xs:items-start">
                  <img src={Box1} alt="car-img" className="w-28 h-28 mr-3" />
                  <div className="text-container__right__box__text flex flex-col gap-2.5 justify-center">
                    <h4 className="text-xl lg:text-2xl font-bold">
                      Cross Country Drive
                    </h4>
                    <p className="text-sm lg:text-base lg:leading-tight text-gray-500 font-rubik font-normal">
                      Take your driving experience to the next level with our
                      top-notch vehicles for your cross-country adventures.
                    </p>
                  </div>
                </div>
                <div className="text-container__right__box flex flex-col xs:flex-row items-center xs:items-start">
                  <img src={Box2} alt="coin-img" className="w-28 h-28 mr-3" />
                  <div className="text-container__right__box__text flex flex-col gap-2.5 justify-center">
                    <h4 className="text-xl lg:text-2xl font-bold">
                      All Inclusive Pricing
                    </h4>
                    <p className="text-sm lg:text-base lg:leading-tight text-gray-500 font-rubik font-normal leading-tight">
                      Get everything you need in one convenient, transparent
                      price with our all-inclusive pricing policy.
                    </p>
                  </div>
                </div>
                <div className="text-container__right__box flex flex-col xs:flex-row items-center xs:items-start">
                  <img src={Box3} alt="coin-img" className="w-28 h-28 mr-3" />
                  <div className="text-container__right__box__text flex flex-col gap-2.5 justify-center">
                    <h4 className="text-xl lg:text-2xl font-bold">
                      No Hidden Charges
                    </h4>
                    <p className="text-sm lg:text-base lg:leading-tight text-gray-500 font-rubik font-normal">
                      Enjoy peace of mind with our no hidden charges policy. We
                      believe in transparent and honest pricing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ChooseUs;
