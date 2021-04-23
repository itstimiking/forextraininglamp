import React from "react";
import Image from 'next/image'
import BannerBar from "./BannerBar";


function Banner() {
    return (
        <div
            className="header w-full bg-gray-800 bg-center bg-no-repeat bg-cover relative z-0"
            style={{
                backgroundImage: `url('./images/liquid_back.png')`,
                width: "100%",
            }}
        >
            <div className="w-full lg:container lg:mx-auto px-4 sm:px-16 header pt-60 sm:pt-60 md:pt-36 lg:pt-16 flex flex-wrap md:flex-nowrap items-center text-white">
                <div className="w-screen -mt-12 mb-10 md:mb-0 md:mt-0 md:w-1/2 flex flex-col justify-center order-2 md:order-1">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black">
                        Become a Forex Trading Expert
                    </h1>
                    <p className="text-gray-300 text-xl pt-6">
                        Trade in US Dollars, Euro, Pounds and all the global currencies from the confort of your sitting room. You too can become a global trader
                    </p>
                    <p className="mt-10">
                        <button className="rounded-md border-gray-300 border-2 border-solid p-3">
                            Get started today
                        </button>
                    </p>
                </div>

                <div className="sm:flex w-screen md:w-1/2 h-full flex justify-center md:justify-end order-1 md:order-2"> 
                    <Image 
                        src="/images/slide-1.svg"
                        height={450}
                        width={500}                      
                    />
                </div>
            </div>

            <BannerBar />
            

        </div>
    );
}

export default Banner;
