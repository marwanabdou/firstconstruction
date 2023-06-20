import styles from "../style";
import { building, building1, building2 } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section 
      id="/"
      className={`flex md:flex-row flex-col mt-20 ${styles.paddingY}`}
      style={{
        background: `url(${building1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
    {/* <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`} style={{ background: "transparent" }}> */}

      <div className={`flex-1 ${styles.flexCenter} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] text-center">
            First <br className="sm:block hidden" />{" "}
            <span className="text-gradient">International</span>{" "}
            Contracting Co.
          </h1>
          <p className={`${styles.paragraph} text-white max-w-[470px] mt-5 text-center`}>
            Our contracting company is backed by a dedicated team of experts who employ a systematic methodology to identify
            the most suitable solutions for your construction needs.
          </p>
        </div>
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        {/* <GetStarted /> */}
      </div>
    </section>
  );
};

export default Hero;
