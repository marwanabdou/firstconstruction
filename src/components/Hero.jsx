import styles from "../style";
import { building, building1, building2, building4, building5, building6 } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section 
      id="Home"
      className={`flex md:flex-row flex-col backdrop-brightness-50 ${styles.paddingY}`}
      style={{
        background: `url(${building4})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh"
      }}
    >
    {/* <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`} style={{ background: "transparent" }}> */}

    <div className="flex-1 flex flex-col items-start justify-end xl:px-0 sm:px-16 px-6">
        <div className="flex flex-col items-start justify-end h-full">
          <div className="flex flex-col items-start justify-end">
            <h1 className="font-poppins font-semibold ss:text-[72px] text-7xl text-white ss:leading-[100.8px] leading-[75px] text-left">
              We Are FICC
            </h1>
            <p className="text-2xl text-white mt-5 md:text-left lg:text-justify">
              Our contracting company is backed by a dedicated team of experts who employ a systematic methodology to identify
              the most suitable solutions for your construction needs.
            </p>
          </div>
        </div>
      </div>

      
      
    </section>
  );
};

export default Hero;
