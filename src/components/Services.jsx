import { livingroom, twitter, furnishing, landscape, commercial, industrial, remodelling } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const Services = () => (
  <section id='Services'>
  <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
      <div className="max-w-screen-md mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white-900  text-white">Our Services</h2>
          <p className="text-gray-500 sm:text-xl  text-white-400">Our team has a wealth of knowledge and varied project experience.  
As a company we offer the following services:</p>
      </div>
      <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
          <div>
              <div className="max-w-xs transition duration-300 ease-in-out hover:scale-110 flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12  bg-primary-900">
              <img className="w-5 h-5 text-white lg:w-10 lg:h-10  text-white max-w-xs transition duration-300 ease-in-out hover:scale-110" src={livingroom} alt='interior-design'/>
              </div>
              <h3 className="mb-2 text-xl font-bold text-white max-w-xs transition duration-300 ease-in-out hover:scale-110">Interior Design</h3>
              <p className="text-white max-w-xs transition duration-300 ease-in-out hover:scale-110">Elevate your spaces with our impeccable design solutions, tailored for residential and commercial projects, ensuring aesthetic appeal and functional excellence.</p>
          </div>
          <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12  bg-primary-900">
                  <img className="w-5 h-5 text-white lg:w-10 lg:h-10  text-white max-w-xs transition duration-300 ease-in-out hover:scale-110" src={remodelling} alt='remodelling'/>
              </div>
              <h3 className="mb-2 text-xl font-bold  text-white max-w-xs transition duration-300 ease-in-out hover:scale-110">Remodelling</h3>
              <p className=" text-white max-w-xs transition duration-300 ease-in-out hover:scale-110">Transform your existing spaces into stunning havens with our remodeling expertise, reviving outdated interiors and optimizing layouts for a fresh and modern look.</p>
          </div>
          <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12  bg-primary-900">
              <img className="w-5 h-5 text-white lg:w-10 lg:h-10  text-white max-w-xs transition duration-300 ease-in-out hover:scale-110" src={landscape} alt='landscape'/>
              </div>
              <h3 className="mb-2 text-xl font-bold  text-white">Landscape Design</h3>
              <p className=" text-white">Experience the beauty of nature with our exquisite landscape designs, harmoniously blending greenery, hardscaping, and outdoor amenities to create breathtaking outdoor retreats.</p>
          </div>
          <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12  bg-primary-900">
              <img className="w-5 h-5 text-white lg:w-10 lg:h-10  text-white max-w-xs transition duration-300 ease-in-out hover:scale-110" src={furnishing} alt='furnishing'/>
              </div>
              <h3 className="mb-2 text-xl font-bold  text-white">Furnishing</h3>
              <p className=" text-white">Enhance your spaces with our curated collection of premium furnishings, meticulously selected to add style, comfort, and functionality to your interiors.</p>
          </div>
          <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12  bg-primary-900">
              <img className="w-5 h-5 text-white lg:w-10 lg:h-10  text-white max-w-xs transition duration-300 ease-in-out hover:scale-110" src={industrial} alt='industrial'/>
              </div>
              <h3 className="mb-2 text-xl font-bold  text-white">Industrial Projects</h3>
              <p className=" text-white">From factories to warehouses, our expertise in industrial design maximizes efficiency, safety, and aesthetics, creating spaces that optimize operations and inspire innovation.</p>
          </div>
          <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12  bg-primary-900">
              <img className="w-5 h-5 text-white lg:w-10 lg:h-10  text-white max-w-xs transition duration-300 ease-in-out hover:scale-110" src={commercial} alt='commercial'/>
              </div>
              <h3 className="mb-2 text-xl font-bold  text-white">Commercial Projects</h3>
              <p className=" text-white">We specialize in creating captivating commercial spaces, blending functionality and design to enhance productivity, impress clients, and leave a lasting impression.

</p>
          </div>
      </div>
  </div>
</section>
);

export default Services;
