import { IconChevronDown } from "@tabler/icons-react";
import { useState } from "react";
import { faqData } from "../../constant/FaqConst";

const Faq = () => {
  const [activeQ, setActiveQ] = useState("q1");

  const openQ = (id) => {
    setActiveQ(activeQ === id ? "" : id);
  };

  const getClassAnswer = (id) => {
    return activeQ === id
      ? "max-h-[28rem] lg:max-h-[12rem] py-4 lg:py-7 transition-all duration-500 ease-in-out "
      : "";
  };

  const getClassQuestion = (id) => {
    return activeQ === id ? "bg-orange-600 text-white shadow-xl" : "";
  };

  return (
    <>
      <section
        className=" faq-section bg-faq-section bg-no-repeat px-2 py-12 lg:py-24 bg-auto bg-white"
        style={{ backgroundPosition: "0 70%" }}
      >
        <div className="Container">
          <div className="faq-content text-black flex flex-col">
            <div className="faq-content__title text-center max-w-[50rem] mx-auto flex flex-col leading-5">
              <h5 className="text-2xl font-bold">FAQ</h5>
              <h2 className="text-2xl lg:text-[42px] lg:leading-[3rem] lg:tracking-wide font-bold mb-5 mt-2 lg:mt-0">
                Frequently Asked Questions
              </h2>
              <p className="text-sm sm:text-base text-gray-500 ">
                Frequently Asked Questions About the Car Rental Booking Process
                on Our Website: Answers to Common Concerns and Inquiries.
              </p>
            </div>

            {/* Faq Q-ans */}
            <div className="all-questions flex flex-col items-center mt-12 lg:mt-16">
              {faqData.map((faq, index) => (
                <div
                  key={index}
                  className="faq-box w-full md:w-[50rem] cursor-pointer flex flex-col text-black bg-white shadow-[0_10px_15px_0_rgba(0,0,0,0.1)]"
                >
                  <div
                    onClick={() => openQ(faq.id)}
                    className={`faq-box__question ${getClassQuestion(
                      faq.id
                    )} flex justify-between items-center px-7 lg:px-11 py-4 transition-all duration-500 ease-in-out shadow-[0_3px_6px_0_rgba(0,0,0,0.1)]`}
                  >
                    <p className="text-sm md:text-lg font-medium">
                      {faq.question}
                    </p>
                    <IconChevronDown className="text-lg lg:text-xl" />
                  </div>
                  <div
                    onClick={() => openQ(faq.id)}
                    className={`faq-box__answer ${getClassAnswer(
                      faq.id
                    )} text-base font-normal font-rubik text-gray-700 px-11 overflow-hidden max-h-0 transition-all duration-500`}
                  >
                    {faq.answer}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;
