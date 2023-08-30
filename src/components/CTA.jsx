import styles from "../style";
import Button from "./Button";

const CTA = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-[#6B6159] rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Contact Us</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Build your dream project with us
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <a href="https://wa.me/201029171914?text=I'm%20interested%20in%20your%20services" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-[#262626] rounded-[10px] outline-none ${styles}`}>
        WhatsApp Now
      </a>
    </div>
  </section>
);

export default CTA;
