import { Link } from "@inertiajs/react";
import React from "react";
import logo from "../../../assets/logo.png";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-secondary-800 text-white mt-auto">
            <div className="container py-12 mx-auto px-6">
                <div className="grid grid-cols-2 gap-5 lg:gap-8 md:grid-cols-3 lg:grid-cols-4">
                    {/* Logo Section */}
                    <div className=" flex items-center justify-center md:justify-start lg:justify-center mb-5 lg:mb-0 col-span-2 md:col-span-3 lg:col-span-1">
                        <div className="flex items-center gap-2 bg-white px-5 rounded-md h-20">
                            <img src={logo} alt="logo" className="size-16" />
                            <div className=" flex flex-col">
                                <span className="text-2xl text-nowrap text-secondary-400 font-bold">
                                    Meals On Wheel
                                </span>
                                <span className=" text-xs text-zinc-400">
                                    Merry Meal
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className=" lg:ms-16">
                        <nav className="flex flex-col gap-5">
                            <Link
                                href="/"
                                className="hover:text-gray-300 transition-colors"
                            >
                                Home
                            </Link>
                            <Link
                                href="/about-us"
                                className="hover:text-gray-300 transition-colors"
                            >
                                About Us
                            </Link>
                            <Link
                                href="/donate"
                                className="hover:text-gray-300 transition-colors"
                            >
                                Donate
                            </Link>
                            <Link
                                href="/get-meal"
                                className="hover:text-gray-300 transition-colors"
                            >
                                Get Meal
                            </Link>
                        </nav>
                    </div>

                    {/* Services */}
                    <div className="">
                        <nav className="flex flex-col gap-5">
                            <Link
                                href="/become-volunteer"
                                className="hover:text-gray-300 transition-colors"
                            >
                                Become Volunteer
                            </Link>
                            <Link
                                href="/become-partner"
                                className="hover:text-gray-300 transition-colors"
                            >
                                Become Partner
                            </Link>
                            <Link
                                href="/donate-help"
                                className="hover:text-gray-300 transition-colors"
                            >
                                Donate And Help
                            </Link>
                            <Link
                                href="/food-safety"
                                className="hover:text-gray-300 transition-colors"
                            >
                                Food Safety Certification
                            </Link>
                        </nav>
                    </div>

                    {/* Connect With Us */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">
                            Connect With Us:
                        </h3>
                        <div className="flex items-center gap-3">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-white text-black p-2 rounded-md"
                            />
                            <button className="bg-primary-600 text-white px-4 py-2 rounded-md">
                                Join
                            </button>
                        </div>
                        <div className="flex space-x-4 mt-4">
                            <Link
                                href="#"
                                className="hover:text-gray-300 transition-colors"
                            >
                                <FaFacebook className=" size-7" />
                            </Link>
                            <Link
                                href="#"
                                className="hover:text-gray-300 transition-colors"
                            >
                                <FaInstagram className=" size-7" />
                            </Link>
                            <Link
                                href="#"
                                className="hover:text-gray-300 transition-colors"
                            >
                                <FaTwitter className=" size-7" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* Copyright */}
            <div className=" py-2 bg-secondary-900 text-center text-sm">
                <p>
                    © {new Date().getFullYear()} Meals on Wheels. All rights
                    reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
