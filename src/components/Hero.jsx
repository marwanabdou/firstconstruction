import styles from "../style"; 
import "../constants/Hero.css"
import { building, building1, building2, building4, building5, building6, first } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section 
      id="Home"
      className={`flex md:flex-row flex-col backdrop-brightness-50 ${styles.paddingY}`}
      style={{
        background: `url(${first})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh"
      }}
    >
      <div className="flex-1 flex flex-col items-center justify-center xl:px-0 sm:px-16 px-6">
        <div className="flex flex-col items-center justify-center h-full">
          <div className="flex flex-col items-center justify-center mt-20">
            <h1 className="font-poppins font-semibold ss:text-[72px] text-7xl text-white ss:leading-[100.8px] leading-[75px] text-center my-auto">
              We Are First
            </h1>
            <p className="text-5xl text-white mt-5 md:text-left lg:text-justify text-center my-auto">
                 {/* Our contracting company is backed by a dedicated team of experts who employ a systematic methodology to identify
              the most suitable solutions for your construction needs. */}
               A One Stop Shops
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
