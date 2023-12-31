import { livingroom, twitter, furnishing, landscape, wwd, industrial, remodelling, building, interior, third } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const Services = () => (

<div id='Services' className="relative mt-20">
      <img src={wwd} className="w-full h-auto" alt="Background" />

      <div className="relative bg-black">
  <div className="bg-white p-4 md:p-8">
    <h1 className="text-4xl  mb-4">What we do</h1>
    <p className="text-base md:text-lg md:text-left lg:text-justify ml-1">
      Our team has a wealth of knowledge and varied project experience. As a company, we offer the following services:
    </p>
    <ul className="text-base md:text-lg mt-6 md:mt-8 list-disc ml-5">
    <li className="mt-3 md:mt-5">Interior Design</li>
    <li className="mt-3 md:mt-5 ">Landscape Design</li>
    <li className="mt-3 md:mt-5 ">Remodeling</li>
    <li className="mt-3 md:mt-5 ">Furnishing</li>
    <li className="mt-3 md:mt-5 ">Residential Projects</li>
 <li className="mt-3 md:mt-5 ">Commercial Projects</li>
    <li className="mt-3 md:mt-5 ">Industrial Projects</li>
      
    </ul>
  </div>
</div>

      
    </div>

);

export default Services;
