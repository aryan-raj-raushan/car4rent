import MainImg from "../../assets/images/chooseUs/main.png";
import { IconChevronRight } from "@tabler/icons-react";
import { textBoxData } from "../../constant/ChooseUsConst.jsx";

const ChooseUs = () => {
  return (
    <>
      <section className="choose-section bg-white pt-5 pb-24 px-2 lg:px-0">
        <div className="Container">
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
                <h2 className="text-2xl sm:3xl lg:text-[42px] lg:leading-tight font-bold mb-5">
                  Best valued deals you will ever find
                </h2>
                <p className="text-sm sm:text-base font-normaltext-gray-500 mb-8 font-rubik ">
                  Discover the best deals you'll ever find with our unbeatable
                  offers. We're dedicated to providing you with the best value
                  for your money, so you can enjoy top-quality services and
                  products without breaking the bank. Our deals are designed to
                  give you the ultimate renting experience, so don't miss out on
                  your chance to save big.
                </p>
                <a
                  href="#home"
                  className="cta-btn no-underline flex w-fit text-base border-2 border-solid border-orange-500 rounded shadow-lg font-bold text-white bg-orange-500 transition-all duration-300 hover:shadow-xl hover:bg-orange-600 py-3 px-4 sm:py-4 sm:px-6"
                >
                  Find Deals &nbsp;
                  <IconChevronRight className="w-6 h-6" />
                </a>
              </div>
              {/* Right side */}
              <div className="text-container__right flex sm:flex-col gap-11 max-w-md overflow-auto w-full no-scrollbar px-8 sm:px-0">
                {textBoxData.map((textBox, index) => (
                  <div
                    key={index}
                    className="text-container__right__box flex flex-col sm:flex-row items-center sm:items-start min-w-60 sm:min-w-full"
                  >
                    <img
                      src={textBox.image}
                      width={200}
                      height={200}
                      alt={`img-${index}`}
                      className="w-20 h-20 lg:w-28 lg:h-28 mr-3"
                    />
                    <div className="text-container__right__box__text flex flex-col gap-2.5 justify-center">
                      <h4 className="text-xl lg:text-2xl font-bold">
                        {textBox.title}
                      </h4>
                      <p className="text-sm lg:text-base lg:leading-tight text-gray-500 font-rubik font-normal">
                        {textBox.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ChooseUs;
