import { livingroom, twitter, furnishing, landscape, commercial, industrial, remodelling, building, interior } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const Services = () => (

    <div className="relative bg-black">
    <div className="bg-white p-4 md:p-8">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">What We Do</h1>
      <p className="text-base md:text-lg">
        Our team has a wealth of knowledge and varied project experience. As a company, we offer the following services:
      </p>
     
    </div>

<div id='Services' className="relative mt-20">
      <img src={interior} className="w-full h-auto" alt="Background" />
     
      </div>

<div className="bg-white p-4 md:p-8">
<img src={interior} className="w-full h-auto" alt="Background" />

<h1 className="text-4xl md:text-6xl font-bold mb-4">Interior Design</h1>
<p className="text-base md:text-lg">
Elevate your spaces with our impeccable design solutions, tailored for residential and commercial projects, ensuring aesthetic appeal and functional excellence.

</p>

</div>
<div className="bg-white p-4 md:p-8">
<img src={interior} className="w-full h-auto" alt="Background" />

<h1 className="text-4xl md:text-6xl font-bold mb-4">Remodelling
</h1>
<p className="text-base md:text-lg">
Transform your existing spaces into stunning havens with our remodeling expertise, reviving outdated interiors and optimizing layouts for a fresh and modern look.

</p>

</div>
</div>


      

);

export default Services;
