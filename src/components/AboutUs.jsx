import React from "react";

const AboutUs = () => {
    return (
        // <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
        //     <div className="flex flex-col lg:flex-row justify-between gap-8">
        //         <div className="w-full lg:w-5/12 flex flex-col justify-center">
        //             <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-white pb-4">About Us</h1>
        //             <p className="font-normal text-base leading-6 text-white ">First International is a relationship-based contractor and we work with our clients from conception to completion, to ensure that their expectations and vision are realized.  We view every project as an opportunity to showcase our core values of quality, integrity, innovation, relationships, commitment, excellence and success.</p>
        //         </div>
        //         <div className="w-full lg:w-8/12 ">
        //             <img className="w-full h-full" src="https://i.ibb.co/FhgPJt8/Rectangle-116.png" alt="A group of People" />
        //         </div>
        //     </div>

        //     <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
        //         <div className="w-full lg:w-5/12 flex flex-col justify-center">
        //             <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-white pb-4">Our Mission</h1>
        //             <p className="font-normal text-base leading-6 text-white ">We aspire to be one of the benchmarks for engineering and construction companies in Egypt and to dedicate ourselves to provide innovations and pioneer solutions for the future. </p>
        //         </div>
        //         <div className="w-full lg:w-8/12 lg:pt-8">
                    
        //         </div>
        //     </div>
        // </div>
        <section className="flex items-center  xl:h-screen font-poppins dark:bg-gray-800 ">
        <div className="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
            <div className="flex flex-wrap ">
                <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
                    <div className="relative lg:max-w-md">
                        <img src="https://i.ibb.co/FhgPJt8/Rectangle-116.png" alt="aboutimage"
                            className="relative z-10 object-cover w-full rounded h-96"/>
                        <div
                            className="absolute bottom-0 right-0 z-10 p-8 bg-white border-4 border-white-500 rounded shadow dark:border-blue-400 lg:-mb-8 lg:-mr-11 sm:p-8 dark:text-gray-300 dark:bg-gray-800 ">
                            <p className="text-lg font-semibold md:w-72">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                    className="absolute top-0 left-0 w-16 h-16 text-blue-700 dark:text-gray-300 opacity-10"
                                    viewBox="0 0 16 16">
                                    <path
                                        d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z">
                                    </path>
                                </svg> Successfully Providing contracting solutions since 2012
                            </p>
                        </div>
                    </div>
                </div>
                <div className="w-full px-6 mb-10 lg:w-1/2 lg:mb-0 ">
                    <div className="pl-4 mb-6 border-l-4 border-blue-500 ">
                        <span className="text-sm text-gray-500 uppercase text-gray-500">Who we are?</span>
                        <h1 className="mt-2 text-3xl font-black text-white md:text-5xl dark:text-gray-300">
                            About Us
                        </h1>
                    </div>
                    <p className="mb-6 text-base leading-7 text-white">
                    Our vision is to revolutionize the industry by offering inventive and unparalleled products and services that enhance the quality of life and surpass the expectations of our esteemed customers. Moreover, we strive to cultivate an environment that is revered as an outstanding workplace, fostering growth and prosperity for our dedicated team members. Additionally, we are committed to delivering an exceptional return on investment for our valued clients, solidifying our position as a trusted and reputable company. 

At the core of our mission is the unwavering dedication to establish ourselves as a prominent standard-bearer among engineering and construction enterprises in Egypt. We aim to channel our efforts into pioneering advancements and groundbreaking solutions that shape the future of the industry. With an unwavering commitment to excellence, we are driven to leave an indelible mark, setting the benchmark for engineering and construction companies and driving forward progress and innovation.
                    </p>
                   
                </div>
            </div>
        </div>
    </section>
    );
};

export default AboutUs;
