import React from "react";
import Image from 'next/image'


function Banner() {
    return (
        <div
            className="header w-full bg-gray-800 absolute top-0 z-0 bg-center bg-no-repeat bg-cover"
            style={{
                backgroundImage: `url('./images/liquid_back.png')`,
                width: "100%",
            }}
        >
            <div className="w-full lg:container lg:mx-auto px-8 header pt-60 sm:pt-60 md:pt-36 lg:pt-16 flex flex-nowrap items-center text-white">
                <div className="w-full md:w-1/2 flex flex-col justify-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black">
                        How To Become a Global Trader
                    </h1>
                    <p className="text-gray-300 text-xl pt-4">
                        Trade in US Dollars, Euro, Pounds and all the global currencies from the confort of your sitting room. You to can become a global trader
                    </p>
                    <p className="mt-8">
                        <button className="rounded border-gray-300 border-2 border-solid p-3">
                            Get started today...
                        </button>
                    </p>
                </div>

                <div className="xs:absolute sm:flex w-1/2 h-full flex justify-end"> 
                    <Image 
                        src="/images/slide-1.svg"
                        height={500}
                        width={500}
                    />
                </div>
            </div>
        </div>
    );
}

export default Banner;
