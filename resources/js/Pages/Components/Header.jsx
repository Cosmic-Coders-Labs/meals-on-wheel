import { Link } from "@inertiajs/react";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../../assets/logo.png";


const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="z-50 w-full border-b border-secondary-200 bg-white">
            <div className="container flex flex-wrap items-center justify-between px-4 py-4 mx-auto md:flex-nowrap md:px-8">
                {/* Left side: Logo */}
                <Link href="/" className="flex items-center space-x-2">
                    <img src={logo} className="h-8" alt="logo" />
                    <span className="text-lg font-bold text-secondary-400 md:text-xl">
                        Meals On Wheel
                    </span>
                </Link>

                {/* Hamburger menu for mobile */}
                <button
                    className="text-secondary-600 md:hidden"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>

                {/* Navigation Links */}
                <nav
                    className={`${
                        menuOpen ? "block" : "hidden"
                    } w-full flex md:w-auto md:flex flex-col md:flex-row items-center gap-4 text-lg font-medium mt-4 md:mt-0`}
                >
                    <Link
                        href="/"
                        className="relative inline-block active:scale-95 before:absolute before:left-0 before:bottom-0 before:h-[2px] before:w-0 before:bg-secondary-400 before:transition-all before:duration-500 hover:before:w-full hover:text-secondary-400"
                    >
                        Home
                    </Link>
                    <Link
                        href="/about"
                        className="relative inline-block active:scale-95 before:absolute before:left-0 before:bottom-0 before:h-[2px] before:w-0 before:bg-secondary-400 before:transition-all before:duration-500 hover:before:w-full hover:text-secondary-400"
                    >
                        About Us
                    </Link>
                    <Link
                        href="/donor/donate"
                        className=" relative inline-block active:scale-95 before:absolute before:left-0 before:bottom-0 before:h-[2px] before:w-0 before:bg-secondary-400 before:transition-all before:duration-500 hover:before:w-full hover:text-secondary-400"
                    >
                        Donate
                    </Link>
                    <Link
                        href="/get-meal"
                        className="relative inline-block active:scale-95 before:absolute before:left-0 before:bottom-0 before:h-[2px] before:w-0 before:bg-secondary-400 before:transition-all before:duration-500 hover:before:w-full hover:text-secondary-400"
                    >
                        Get Meal
                    </Link>
                </nav>

                {/* Right side: Auth Links */}
                <div
                    className={`${
                        menuOpen ? "block" : "hidden"
                    } w-full md:w-auto flex md:flex flex-col md:flex-row items-center gap-4 mt-4 md:mt-0`}
                >
                    <Link
                        href="/member/register"
                        className="relative inline-block py-1 px-3 border border-transparent bg-secondary-600 text-white rounded-md active:scale-95 hover:scale-105 w-full"
                    >
                        Register
                    </Link>
                    <span className="hidden md:inline-block text-secondary-400">/</span>
                    <Link
                        href="/member/login"
                        className="relative inline-block py-1 px-3 border border-secondary-600 text-secondary-600 rounded-md active:scale-95 hover:bg-secondary-600 hover:text-white hover:scale-105 w-full"
                    >
                        Login
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
