import { Moda, Hisham, Fares } from "../assets";

const People = () => (
  <div>
    <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
      <div className="max-w-2xl">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mt-20">Meet our leadership</h2>
        <p className="mt-6 text-lg leading-8 text-gray-400">We take great pride in presenting our talented and experienced leadership team that drives our organization forward.</p>
      </div>
      <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
        <li>
          <div className="flex items-center gap-x-6">
            <img className="h-16 w-auto rounded-full" src={Hisham} alt="" />
            <div>
              <h3 className="text-base font-semibold leading-7 tracking-tight text-white">Hisham Abdulhafez</h3>
              <p className="text-sm font-semibold leading-6 text-indigo-200">General Manager</p>
            </div>
          </div>
        </li>
        <li>
          <div className="flex items-center gap-x-6">
            <img className="h-16 w-auto rounded-full" src={Fares} alt="" />
            <div>
              <h3 className="text-base font-semibold leading-7 tracking-tight text-white">Mohammed Fares</h3>
              <p className="text-sm font-semibold leading-6 text-indigo-200">Technical Office Manager</p>
            </div>
          </div>
        </li>

        <li>
          <div className="flex items-center gap-x-6">
            <img className="h-16 w-auto rounded-full" src={Moda} alt="" />
            <div>
              <h3 className="text-base font-semibold leading-7 tracking-tight text-white">Mohammed Hisham</h3>
              <p className="text-sm font-semibold leading-6 text-indigo-200">Head of Marketing</p>
            </div>
          </div>
        </li>
        <li>
          <div className="flex items-center gap-x-6">
            <img className="h-16 w-auto rounded-full" src={Hisham} alt="" />
            <div>
              <h3 className="text-base font-semibold leading-7 tracking-tight text-white">Person 4</h3>
              <p className="text-sm font-semibold leading-6 text-indigo-200">General Manager</p>
            </div>
          </div>
        </li>
        <li>
          <div className="flex items-center gap-x-6">
            <img className="h-16 w-auto rounded-full" src={Hisham} alt="" />
            <div>
              <h3 className="text-base font-semibold leading-7 tracking-tight text-white">Person 5</h3>
              <p className="text-sm font-semibold leading-6 text-indigo-200">General Manager</p>
            </div>
          </div>
        </li>
        <li>
          <div className="flex items-center gap-x-6">
            <img className="h-16 w-auto rounded-full" src={Hisham} alt="" />
            <div>
              <h3 className="text-base font-semibold leading-7 tracking-tight text-white">Person 6</h3>
              <p className="text-sm font-semibold leading-6 text-indigo-200">General Manager</p>
            </div>
          </div>
        </li>

        {/* More people... */}
      </ul>
    </div>
  </div>
);

export default People;
