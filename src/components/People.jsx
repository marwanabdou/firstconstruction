import { Moda, Hisham, Fares } from "../assets";

const People = () => (
  // <div className="mt-20">
  //   <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3 ">
  //     <div className="max-w-2xl">
  //       <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl mt-20">Meet our leadership</h2>
  //       <p className="mt-6 text-lg leading-8 text-black-400">We take great pride in presenting our talented and experienced leadership team that drives our organization forward.</p>
  //     </div>
  //     <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
  //       <li>
  //         <div className="flex items-center gap-x-6">
  //           <img className="h-16 w-auto rounded-full" src={Hisham} alt="" />
  //           <div>
  //             <h3 className="text-base font-semibold leading-7 tracking-tight text-black">Hisham Abdulhafez</h3>
  //             <p className="text-sm font-semibold leading-6 text-black">General Manager</p>
  //           </div>
  //         </div>
  //       </li>
  //       <li>
  //         <div className="flex items-center gap-x-6">
  //           <img className="h-16 w-auto rounded-full" src={Fares} alt="" />
  //           <div>
  //             <h3 className="text-base font-semibold leading-7 tracking-tight text-black">Mohammed Fares</h3>
  //             <p className="text-sm font-semibold leading-6 text- black">Technical Office Manager</p>
  //           </div>
  //         </div>
  //       </li>

  //       <li>
  //         <div className="flex items-center gap-x-6">
  //           <img className="h-16 w-auto rounded-full" src={Moda} alt="" />
  //           <div>
  //             <h3 className="text-base font-semibold leading-7 tracking-tight text-black">Mohammed Hisham</h3>
  //             <p className="text-sm font-semibold leading-6 text- black">Head of Marketing</p>
  //           </div>
  //         </div>
  //       </li>
  //       <li>
  //         <div className="flex items-center gap-x-6">
  //           <img className="h-16 w-auto rounded-full" src={Hisham} alt="" />
  //           <div>
  //             <h3 className="text-base font-semibold leading-7 tracking-tight text-black">Person 4</h3>
  //             <p className="text-sm font-semibold leading-6 text- black">General Manager</p>
  //           </div>
  //         </div>
  //       </li>
  //       <li>
  //         <div className="flex items-center gap-x-6">
  //           <img className="h-16 w-auto rounded-full" src={Hisham} alt="" />
  //           <div>
  //             <h3 className="text-base font-semibold leading-7 tracking-tight text-black">Person 5</h3>
  //             <p className="text-sm font-semibold leading-6 text- black">General Manager</p>
  //           </div>
  //         </div>
  //       </li>
  //       <li>
  //         <div className="flex items-center gap-x-6">
  //           <img className="h-16 w-auto rounded-full" src={Hisham} alt="" />
  //           <div>
  //             <h3 className="text-base font-semibold leading-7 tracking-tight text-black">Person 6</h3>
  //             <p className="text-sm font-semibold leading-6 text- black">General Manager</p>
  //           </div>
  //         </div>
  //       </li>

  //       {/* More people... */}
  //     </ul>
  //   </div>
  // </div>
  <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            Core Team
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="1d4040f3-9f3e-4ac7-b117-7d4009658ced"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#1d4040f3-9f3e-4ac7-b117-7d4009658ced)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">Meet</span>
          </span>{' '}
          Our Leadership
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
        We take great pride in presenting our talented and experienced leadership team that drives our organization forward.
        </p>
      </div>
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-2">
        <div>
          <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-contain w-full h-56 md:h-64 xl:h-80"
              src={Hisham}
              alt="Person"
            />
            <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
              <p className="mb-1 text-lg font-bold text-gray-100">
              Hisham Abdulhafez
              </p>
              <p className="mb-4 text-xs text-gray-100">General Manager</p>
              
              
            </div>
          </div>
        </div>
        <div>
          <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-contain w-full h-56 md:h-64 xl:h-80"
              src={Moda}
              alt="Person"
            />
            <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
              <p className="mb-1 text-lg font-bold text-gray-100">
              Mohammed Hisham
              </p>
              <p className="mb-4 text-xs text-gray-100">Head of Marketing</p>
              
              
            </div>
          </div>
        </div>

        <div>
          <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-contain w-full h-56 md:h-64 xl:h-80"
              src={Fares}
              alt="Person"
            />
            <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
              <p className="mb-1 text-lg font-bold text-gray-100">
              Mohammed Fares

              </p>
              <p className="mb-4 text-xs text-gray-100">Technical Office Manager</p>
              
              
            </div>
          </div>
        </div>
        <div>
          <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-contain w-full h-56 md:h-64 xl:h-80"
              src={Hisham}
              alt="Person"
            />
            <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
              <p className="mb-1 text-lg font-bold text-gray-100">
              Person 4

              </p>
              <p className="mb-4 text-xs text-gray-100">Position</p>
              
              
            </div>
          </div>
        </div>

      
        </div>
      </div>
);

export default People;
