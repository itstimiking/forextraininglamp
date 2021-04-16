import React from "react";

export default function TopBar() {
    
    return (
        <div className="w-full h-14 bg-gray-700 relative z-10">
            <div className="w-full lg:container lg:mx-auto px-4 h-full flex flex-wrap justify-between items-center text-white">
                <p>ForexTradingLamp.com</p>

                <button className="border-green-400 bg-green-500 rounded-md border-2 px-2 py-1">
                    Signup Here
                </button>
            </div>
        </div>
    );
}