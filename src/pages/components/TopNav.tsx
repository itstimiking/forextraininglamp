import * as React from "react";
import Link from "next/link";

interface INavProps {}

const NavTop: React.FunctionComponent<INavProps> = (props) => {
    return (
        <nav className="w-full h-20 bg-black bg-opacity-10 text-gray-400 relative z-10">
            <div className="lg:container h-full lg:mx-auto px-8 flex flex-nowrap items-center">
                <div className="text-2xl text-red-700 whitespace-nowrap">
                    FX-LOGO
                </div>

                <div className="pl-10 flex justify-between w-full">
                    <ul className="flex flex-wrap space-x-2 text-40">
                        <li>
                            <Link href="#">
                                <a className="block p-4">Home</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a className="block p-4">Articles</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a className="block p-4">Categories</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a className="block p-4">Free Course</a>
                            </Link>
                        </li>

                        <li>
                            <Link href="#">
                                <a className="block p-4">Contact us</a>
                            </Link>
                        </li>
                    </ul>
                    <button className="whitespace-nowrap bg-red-500 rounded text-white px-2 py-1 h-10 flex self-center items-center">
                        Create Account
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default NavTop;
