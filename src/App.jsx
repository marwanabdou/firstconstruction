import styles from './style';
import { Billing, People, Services, Clients, CTA, Footer, Navbar, Stats, Hero, Portfolio, AboutUs, Home, Catalog, LearnMore } from "./components";
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'




const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      
    
<Routes>
      <Route path="/" element={<Home/>}/>


      <Route path="/Catalog" element={<Catalog/>}/>
    </Routes>  
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
    <Footer />
    </div>
    </div>

    
          </div>
        
);

export default App;
