import { Link } from "@inertiajs/react";
import React from "react";

import {
    FaFacebook,
    FaInstagram,
    FaTwitter,
} from "react-icons/fa";
import logo from "../../assets/logo.png";

const Footer = () => {
    return (
        <footer className="bg-secondary-800 text-white mt-auto">
            <div className="container py-12 px-4 mx-auto">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {/* Logo Section */}
                    <div className="flex flex-col items-center lg:items-start">
                        <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-md">
                            <img src={logo} alt="logo" className="h-10" />
                            <div className="flex flex-col">
                                <span className="text-xl text-secondary-400 font-bold">
                                    Meals On Wheel
                                </span>
                                <span className="text-sm text-zinc-400">
                                    Merry Meal
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <nav className="flex flex-col gap-3">
                            <Link
                                href={route('home')}
                                className="hover:text-gray-300 transition-colors"
                            >
                                Home
                            </Link>
                            <Link
                                href={route('aboutus')}
                                className="hover:text-gray-300 transition-colors"
                            >
                                About Us
                            </Link>
                            <Link
                                href={route('fundraising')}
                                className="hover:text-gray-300 transition-colors"
                            >
                                Donate
                            </Link>
                            <Link
                                href={route('getmeal')}
                                className="hover:text-gray-300 transition-colors"
                            >
                                Get Meal
                            </Link>
                        </nav>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Services</h3>
                        <nav className="flex flex-col gap-3">
                            <Link
                                href={route('register')}
                                className="hover:text-gray-300 transition-colors"
                            >
                                Become Volunteer
                            </Link>
                            <Link
                                href={route('register')}
                                className="hover:text-gray-300 transition-colors"
                            >
                                Become Partner
                            </Link>
                            <Link
                                href={route('donation')}
                                className="hover:text-gray-300 transition-colors"
                            >
                                Donate And Help
                            </Link>
                            <Link
                                href={route('foodsafety')}
                                className="hover:text-gray-300 transition-colors"
                            >
                                Food Safety Certification
                            </Link>
                        </nav>
                    </div>

                    {/* Connect With Us */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
                        <div className="space-y-4">
                            <div className="flex items-center">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="flex-1 bg-white text-black px-4 py-2 rounded-l-md"
                                />
                                <button className="bg-primary-600 text-white px-4 py-2 rounded-r-md">
                                    Join
                                </button>
                            </div>
                            <div className="flex justify-center lg:justify-start space-x-4">
                                <Link
                                    href="#"
                                    className="hover:text-gray-300 transition-colors"
                                >
                                    <FaFacebook size={20} />
                                </Link>
                                <Link
                                    href="#"
                                    className="hover:text-gray-300 transition-colors"
                                >
                                    <FaInstagram size={20} />
                                </Link>
                                <Link
                                    href="#"
                                    className="hover:text-gray-300 transition-colors"
                                >
                                    <FaTwitter size={20} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Copyright */}
            <div className="bg-secondary-900 py-3 text-center text-sm">
                <p>© 2024 Meals on Wheels. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
