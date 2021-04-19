import React from "react";

function CallToAction() {
    return (
        <div className="w-full min-h-0 bg-black">
            <div className="lg:container md:mx-auto px-8 py-20">
                <div className="w-full flex flex-wrap">
                    <div className="w-full sm:w-2/3 lg:w-1/2">
                        <h2 className="text-3xl md:text-4xl text-gray-200 font-black">
                            Save time and {" "}
                            <span className="text-red-500">
                                money, {""}
                            </span>
                            get our free forex training
                        </h2>
                    </div>
                    <div className="w-full sm:w-1/3 lg:w-1/2 pt-3">
                        <button className="sm:float-right font-light hover:font-normal border-red-600 rounded-md border-2 p-2 text-gray-200">
                            Register Here
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CallToAction;
