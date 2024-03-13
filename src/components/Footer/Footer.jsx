import { IconMail, IconPhoneCall } from "@tabler/icons-react";

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-900 text-white py-12 lg:py-24 px-4">
        <div className="Container">
          <div className="footer-content grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[27fr_21fr_21fr_21fr] gap-8 lg:gap-20 text-left">
            <ul className="footer-content__1 sm:text-left text-center list-none">
              <li className="text-xl lg:text-2xl mb-2 lg:mb-4">
                <span className="font-bold">CAR</span> Rental
              </li>
              <li className="text-sm lg:text-base text-gray-400 mb-7">
                We offer a wide range of vehicles for all your driving needs. We
                have the perfect car to meet your needs.
              </li>
              <li className="font-base font-rubik font-medium mb-2.5">
                <a
                  href="tel:123456789"
                  className="no-underline transition-all duration-200 hover:text-orange-600 flex items-center gap-2 justify-center sm:justify-start"
                >
                  <IconPhoneCall />
                  (123) -456-789
                </a>
              </li>
              <li className="font-base font-rubik font-medium mb-2.5">
                <a
                  href="mailto:car4rent@gmail.com"
                  className="no-underline transition-all duration-200 hover:text-orange-600 flex items-center gap-2 justify-center sm:justify-start"
                >
                  <IconMail />
                  car4rent@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/aryan-raj-raushan/car4rent"
                  target="_blank"
                  rel="noreferrer"
                  className="no-underline transition-all duration-200 hover:text-orange-600 flex items-center gap-2 justify-center sm:justify-start"
                >
                  Design & Developed By - Aryan Raj
                </a>
              </li>
              <li className="text-xs mt-1">&#169; XspeedStudio Design</li>
            </ul>

            <ul className="footer-content__2 hidden lg:block sm:text-left text-center list-none text-base space-y-2.5 ">
              <li className="font-bold uppercase text-2xl font-poppins cursor-auto">
                Company
              </li>
              <li>
                <a href="#home">New York</a>
              </li>
              <li>
                <a href="#home">Careers</a>
              </li>
              <li>
                <a href="#home">Mobile</a>
              </li>
              <li>
                <a href="#home">Blog</a>
              </li>
              <li>
                <a href="#home">How we work</a>
              </li>
            </ul>

            <ul className="footer-content__2 sm:text-left text-center list-none text-base space-y-2.5">
              <li className="font-bold uppercase text-lg lg:text-2xl font-poppins cursor-auto">
                Working Hours
              </li>
              <li className="text-sm lg:text-base">
                Mon - Fri: 9:00AM - 9:00PM
              </li>
              <li className="text-sm lg:text-base">Sat: 9:00AM - 19:00PM</li>
              <li className="text-sm lg:text-base">Sun: Closed</li>
            </ul>

            <ul className="footer-content__2 sm:text-left text-center list-none text-base space-y-2.5">
              <li className="font-bold uppercase lg:text-2xl font-poppins cursor-auto">
                Subscription
              </li>
              <li>
                <p className="text-sm -tracking-tighter font-medium">
                  Subscribe to our newsletter for the latest news & updates.
                </p>
              </li>
              <div className="inline-flex justify-center sm:justify-start sm:lg:flex-col items-center gap-2 pb-8 w-full">
                <li className="w-full">
                  <input
                    type="email"
                    placeholder="Enter Email Address"
                    className="w-full bg-gray-200 border border-transparent px-4 py-2.5 mt-2.5 font-rubik text-sm leading-relaxed text-black outline-none rounded "
                  />
                </li>
                <li className="lg:w-full">
                  <button className="submit-email bg-orange-500 text-white px-4 py-2 mt-2 shadow-lg shadow-orange-800 text-base cursor-pointer w-full border-2 border-solid border-orange-500 rounded transition-all duration-300 ease-linear hover:shadow-xl hover:bg-orange-600 hover:shadow-orange-900">
                    Submit
                  </button>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
