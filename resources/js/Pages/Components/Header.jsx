import { Link } from "@inertiajs/react";
import React from "react";
import { FaHandHoldingHeart } from "react-icons/fa";
import logo from "../../../assets/logo.png"

const Header = () => {
    return (
        <header className=" z-50 w-full border-b border-secondary-200">
            <div className="container flex py-5 items-center mx-auto">
                {/* left side */}
                <div className="flex items-center gap-2">
                    <Link href="/" className="flex items-center space-x-2">
                        <img src={logo} className="size-16" alt="logo" />
                        <span className="text-xl font-bold text-secondary-400">
                            Meals On Wheel
                        </span>
                    </Link>
                </div>

                {/* middle */}
                <nav className="flex flex-1 items-center justify-center gap-10 text-lg font-medium">
                    <Link
                        href="/"
                        className=" relative inline-block active:scale-95 before:absolute before:left-0 before:bottom-0 before:h-[2px] before:w-0 before:bg-secondary-400 before:transition-all before:duration-500 hover:before:w-full hover:text-secondary-400"
                    >
                        Home
                    </Link>
                    <Link
                        href="/about"
                        className=" relative inline-block active:scale-95 before:absolute before:left-0 before:bottom-0 before:h-[2px] before:w-0 before:bg-secondary-400 before:transition-all before:duration-500 hover:before:w-full hover:text-secondary-400"
                    >
                        About Us
                    </Link>
                    <Link
                        href="donor/donate"
                        className=" relative inline-block active:scale-95 before:absolute before:left-0 before:bottom-0 before:h-[2px] before:w-0 before:bg-secondary-400 before:transition-all before:duration-500 hover:before:w-full hover:text-secondary-400"
                    >
                        Donate
                    </Link>
                    <Link
                        href="/get-meal"
                        className=" relative inline-block active:scale-95 before:absolute before:left-0 before:bottom-0 before:h-[2px] before:w-0 before:bg-secondary-400 before:transition-all before:duration-500 hover:before:w-full hover:text-secondary-400"
                    >
                        Get Meal
                    </Link>
                    <Link
                        href="/get-meal"
                        className="relative inline-block active:scale-95 before:absolute before:left-0 before:bottom-0 before:h-[2px] before:w-0 before:bg-secondary-400 before:transition-all before:duration-500 hover:before:w-full hover:text-secondary-400"
                    >
                        Get Meal
                    </Link>
                </nav>

                {/* right side */}
                <div className="flex items-center gap-2">
                    <Link
                        href="/member/register"
                        className="relative inline-block border py-1 px-3  bg-secondary-600 text-white rounded-md active:scale-95 hover:scale-105"
                    >
                        Register
                    </Link>
                    <span className="text-secondary-400">/</span>
                    <Link
                        href="/member/login"
                        className="relative inline-block py-1 px-3 border border-secondary-600 text-secondary-600 rounded-md active:scale-95 hover:bg-secondary-600 hover:text-white hover:scale-105"
                    >
                        Login
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
