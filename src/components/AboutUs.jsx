import React from 'react';
import { building7, interior2 } from '../assets';
import { motion } from "framer-motion";




const AboutPage = () => {
   
  return (
    <div className="relative mt-20">
    
      <img src={interior2} className="w-full h-auto" alt="Background" />

      <div className="relative">
  <div className="bg-white p-4 md:p-8">
  
    <h1 className="text-3xl md:text-7xl font-bold mb-4">Who We Are</h1>
    <p className="text-base md:text-lg">
    First International Contracting Company is a relationship-based contractor and we work with our clients from conception to completion, to ensure that their expectations and vision are realized. Our vision is to revolutionize the industry by offering inventive and unparalleled products and services that enhance the quality of life and surpass the expectations of our esteemed customers. Moreover, we strive to cultivate an environment that is revered as an outstanding workplace, fostering growth and prosperity for our dedicated team members. Additionally, we are committed to delivering an exceptional return on investment for our valued clients, solidifying our position as a trusted and reputable company. At the core of our mission is the unwavering dedication to establish ourselves as a prominent standard-bearer among engineering and construction enterprises in Egypt. We aim to channel our efforts into pioneering advancements and groundbreaking solutions that shape the future of the industry. With an unwavering commitment to excellence, we are driven to leave an indelible mark, setting the benchmark for engineering and construction companies and driving forward progress and innovation.
    </p>

  </div>
</div>

      
    </div>

  );
};

export default AboutPage;
