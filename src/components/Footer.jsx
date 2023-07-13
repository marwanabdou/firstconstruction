import styles from "../style";
import { logo, largelogo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => (
  <section id="Contact" className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
    <div className="flex-[1] flex flex-col justify-start mr-10 mx-auto md:mx-0">
  <img
    src={largelogo}
    alt="firstlogo"
    className="w-[266px] h-[72.14px] object-contain"
  />
  <p className={`mt-4 max-w-[312px] text-black`}>
    INNOVATION IS OUR INSPIRATION
  </p>
</div>


      
      <div>
        <h6
          className="mt-6 mb-3 flex justify-center font-semibold uppercase md:justify-start text-black">
          Contact
        </h6>
        <p className="mb-4 flex items-center justify-center md:justify-start text-black">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="mr-3">
    <path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/>
  </svg>
  <a className="text-decoration-line: underline" href="https://www.google.com/maps/place/Cairo+Business+Plaza,+N+90+St,+New+Cairo+1,+Cairo+Governorate+4740007/@30.0279999,31.4849091,17z/data=!3m1!4b1!4m6!3m5!1s0x145822f4c2456129:0x2cceaf7b61654143!8m2!3d30.0280369!4d31.48757!16s%2Fg%2F11bvt9p7g_?entry=ttu" target="_blank" rel="noopener noreferrer">
    Cairo Business Plaza, Office 504, New Cairo
  </a>
</p>

        <p className="mb-4 flex items-center justify-center md:justify-start text- black">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="black"
            className="mr-3 h-5 w-5">
            <path
              d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
            <path
              d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
          </svg>
          <a className='text-decoration-line: underline' href="mailto:first.contracting.egy@gmail.com" target="_blank" rel="noopener noreferrer">first.contracting.egy@gmail.com</a>
        </p>
        <p className="mb-0 flex items-center justify-center md:justify-start text- black">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="black"
            className="mr-3 h-5 w-5">
            <path
              fillRule="evenodd"
              d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
              clipRule="evenodd" />
          </svg>
          <a className='text-decoration-line: underline' href="tel:+201029171914">+ 20 102 917 1914</a>
        </p>
       
      </div>
    </div>
  
    

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text- black">
        Copyright Ⓒ 2023 First International Co. All Rights Reserved.
      </p>

      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${
              index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            }`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Footer;