import styles from './style';
import { Billing, People, Services, Clients, CTA, Footer, Navbar, Stats, Hero, Portfolio, AboutUs } from "./components";
import { Route, Routes } from 'react-router-dom';

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>

          <Stats />
          <AboutUs />
          <People />
          <Services />
          <Portfolio />
          <Clients />
          <CTA />
          <Footer />
          {/* <Billing /> */}
        </div>
      </div>
  </div>
);

export default App;
