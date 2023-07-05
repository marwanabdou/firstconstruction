import styles from "../style";
import { Billing, People, Services, Clients, CTA, Footer, Navbar, Stats, Hero, Portfolio, AboutUs } from "../components";
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const Home = () => (
  
  <div className="bg-primary w-full overflow-hidden">
    
      

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>

          {/* <Stats /> */}
          <AboutUs />

          <Services />



          <People />
          <Portfolio />
          <Clients />
          <CTA />
          <Footer />

          {/* <Billing /> */}

        </div>
      </div>
  </div>
  
);

export default Home;
