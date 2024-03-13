import Img1 from "../../assets/images/download/appstore.svg";
import Img2 from "../../assets/images/download/googleapp.svg";

const Download = () => {
  return (
    <>
      <section className="download-section bg-cover bg-center bg-no-repeat w-full h-auto px-4 py-12 lg:py-24 bg-download-banner">
        <div className="Container ">
          <div className="download-text flex flex-col gap-3 lg:gap-5 items-center lg:items-start max-w-[34.5rem] mx-auto md:mx-0 text-center md:text-start">
            <h2 className="text-xl lg:text-[2.6rem] lg:leading-[3.8rem] font-bold text-black ">
              Download our app to get most out of it
            </h2>
            <p className="text-sm lg:text-base text-gray-500 font-normal font-rubik">
              Thrown shy denote ten ladies though ask saw. Or by to he going
              think order event music. Incommode so intention defective at
              convinced. Led income months itself and houses you.
            </p>
            <div className="download-text__btns flex items-center md:items-start justify-center md:justify-start gap-4 lg:gap-7 mt-5">
              <img
                alt="download_img"
                src={Img2}
                className="w-36 md:w-[44%] cursor-pointer"
              />
              <img
                alt="download_img"
                src={Img1}
                className="w-36 md:w-[44%] cursor-pointer"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Download;
