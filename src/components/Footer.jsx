import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => (
  <section id="Contact" className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
    <div className="flex-[1] flex flex-col justify-start mr-10 mx-auto md:mx-0">
  <img
    src={logo}
    alt="firstlogo"
    className="w-[266px] h-[72.14px] object-contain"
  />
  <p className={`mt-4 max-w-[312px] text-black`}>
    INNOVATION IS OUR INSPIRATION
  </p>
</div>


      
      <div>
        <h6
          className="mb-4 flex justify-center font-semibold uppercase md:justify-start text-black">
          Contact
        </h6>
        <p className="mb-4 flex items-center justify-center md:justify-start text-black">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="black"
            className="mr-3 h-5 w-5">
            <path
              d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
            <path
              d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
          </svg>
          <a className='text-decoration-line: underline' href="https://www.google.com/maps/place/Cairo+Business+Plaza,+N+90+St,+New+Cairo+1,+Cairo+Governorate+4740007/@30.0279999,31.4849091,17z/data=!3m1!4b1!4m6!3m5!1s0x145822f4c2456129:0x2cceaf7b61654143!8m2!3d30.0280369!4d31.48757!16s%2Fg%2F11bvt9p7g_?entry=ttu" target="_blank" rel="noopener noreferrer">Cairo Business Plaza, Office 504, New Cairo</a>
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
        <p className="mb-4 flex items-center justify-center md:justify-start text- black">
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
        <p className="flex items-center justify-center md:justify-start text- black">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="black"
            className="mr-3 h-5 w-5">
            <path
              fillRule="evenodd"
              d="M7.875 1.5C6.839 1.5 6 2.34 6 3.375v2.99c-.426.053-.851.11-1.274.174-1.454.218-2.476 1.483-2.476 2.917v6.294a3 3 0 003 3h.27l-.155 1.705A1.875 1.875 0 007.232 22.5h9.536a1.875 1.875 0 001.867-2.045l-.155-1.705h.27a3 3 0 003-3V9.456c0-1.434-1.022-2.7-2.476-2.917A48.716 48.716 0 0018 6.366V3.375c0-1.036-.84-1.875-1.875-1.875h-8.25zM16.5 6.205v-2.83A.375.375 0 0016.125 3h-8.25a.375.375 0 00-.375.375v2.83a49.353 49.353 0 019 0zm-.217 8.265c.178.018.317.16.333.337l.526 5.784a.375.375 0 01-.374.409H7.232a.375.375 0 01-.374-.409l.526-5.784a.373.373 0 01.333-.337 41.741 41.741 0 018.566 0zm.967-3.97a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H18a.75.75 0 01-.75-.75V10.5zM15 9.75a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V10.5a.75.75 0 00-.75-.75H15z"
              clipRule="evenodd" />
          </svg>
          + 01 234 567 89
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