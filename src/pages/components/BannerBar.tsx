import Image from 'next/image'
import React from 'react'

function BannerBar() {
    return (
        <div className="w-full h-40 bg-gray-800 relative z-20">
            <div className="lg:container lg:mx-auto px-4 sm:px-16 py-8 flex flex-nowrap justify-between space-x-1 items-center h-full">
                <div className="flex flex-nowrap">
                    <Image
                        src="/images/euro-icon.png"
                        height="50"
                        width="50"
                        className="text-red-600"
                    />
                    <div className="flex flex-col pl-2">
                        <span className="pr-2 text-2xl font-black">EUR/USD</span>
                        <div className="flex flex-row text-white space-x-1 text-xs">
                            <span className="bg-green-600 p-1 rounded">
                                1.29873
                            </span>
                            <span className="bg-red-600 p-1 rounded">
                                1.29870
                            </span>
                        </div>
                    </div>
                </div>


                {/** Yen Currency paire */}
                <div className="flex flex-nowrap">
                    <Image
                        src="/images/dollar-icon.png"
                        height="60"
                        width="60"
                        className="text-red-600"
                    />
                    <div className="flex flex-col pl-2">
                        <span className="pr-2 text-2xl font-black">USD/NZD</span>
                        <div className="flex flex-row text-white space-x-1 text-xs">
                            <span className="bg-green-600 p-1 rounded">
                                1.29873
                            </span>
                            <span className="bg-red-600 p-1 rounded">
                                1.29870
                            </span>
                        </div>
                    </div>
                </div>

                 {/** Yen Currency paire */}
                 <div className="flex flex-nowrap">
                    <Image
                        src="/images/yen-icon.png"
                        height="60"
                        width="60"
                        className="text-red-600"
                    />
                    <div className="flex flex-col pl-2">
                        <span className="pr-2 text-2xl font-black">USD/YEN</span>
                        <div className="flex flex-row text-white space-x-1 text-xs">
                            <span className="bg-green-600 p-1 rounded">
                                1.29873
                            </span>
                            <span className="bg-red-600 p-1 rounded">
                                1.29870
                            </span>
                        </div>
                    </div>
                </div>

                 {/** Yen Currency paire */}
                 <div className="flex flex-nowrap">
                    <Image
                        src="/images/bitcoin-icon.png"
                        height="60"
                        width="60"
                        className="text-red-600"
                    />
                    <div className="flex flex-col pl-2">
                        <span className="pr-2 text-2xl font-black">Bitcoin</span>
                        <div className="flex flex-row text-white space-x-1 text-xs">
                            <span className="bg-green-600 p-1 rounded">
                                1.29873
                            </span>
                            <span className="bg-red-600 p-1 rounded">
                                1.29870
                            </span>
                        </div>
                    </div>
                </div>

                 {/** Yen Currency paire */}
                 <div className="flex flex-nowrap">
                    <Image
                        src="/images/yen-icon.png"
                        height="60"
                        width="60"
                        className="text-red-600"
                    />
                    <div className="flex flex-col pl-2">
                        <span className="pr-2 text-2xl font-black">USD/YEN</span>
                        <div className="flex flex-row text-white space-x-1 text-xs">
                            <span className="bg-green-600 p-1 rounded">
                                1.29873
                            </span>
                            <span className="bg-red-600 p-1 rounded">
                                1.29870
                            </span>
                        </div>
                    </div>
                </div>



                
            </div>
        </div>
    )
}

export default BannerBar
