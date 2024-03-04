import Img1 from "../../images/download/appstore.svg";
import Img2 from "../../images/download/googleapp.svg";

const Download = () => {
  return (
    <>
      <section className="download-section bg-cover bg-center bg-no-repeat w-full h-auto py-24 bg-download-banner">
        <div className="container max-w-screen-xl !my-0 !mx-auto py-0 px-1 ">
          <div className="download-text flex flex-col gap-5 items-center lg:items-start max-w-[34.5rem] mx-auto sm:mx-0 text-center sm:text-start">
            <h2 className="text-3xl lg:text-[2.6rem] lg:leading-[3.8rem] font-bold text-black lg:text-left">
              Download our app to get most out of it
            </h2>
            <p className="text-base text-gray-500 font-normal font-rubik">
              Thrown shy denote ten ladies though ask saw. Or by to he going
              think order event music. Incommode so intention defective at
              convinced. Led income months itself and houses you.
            </p>
            <div className="download-text__btns flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-start gap-7 mt-5">
              <img
                alt="download_img"
                src={Img2}
                className="w-56 sm:w-[44%] cursor-pointer"
              />
              <img
                alt="download_img"
                src={Img1}
                className="w-56 sm:w-[44%] cursor-pointer"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Download;
