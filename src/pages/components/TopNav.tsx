import * as React from "react";
import Link from "next/link";

interface INavProps {}

const NavTop: React.FunctionComponent<INavProps> = (props) => {
    return (
        <nav className="w-full h-24 bg-black bg-opacity-10 text-gray-400 relative z-10">
            <div className="lg:container h-full lg:mx-auto px-4 flex flex-wrap items-center">
                <div className="text-2xl text-red-700">FX-LOGO</div>

                <ul className="pl-10 flex flex-wrap space-x-2 text-40">
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
                            <a className="block p-4">About us</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <a className="block p-4">Contact</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavTop;
