import React from "react";
import { Link } from "@inertiajs/react";
import hero from "../../../assets/hero.jpg";

const HeroSection = () => {
    return (
        <section className="bg-primary-50 py-10 sm:py-16 lg:py-20 px-6 sm:px-10 min-h-[550px]">
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-5 gap-6 items-center">
                {/* Left Column (Text Section) */}
                <div className="lg:col-span-3 text-center lg:text-left px-4 sm:px-6 lg:px-10 mt-6 lg:mt-10">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary-800 leading-snug">
                        Delivering Meals,
                    </h1>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl mt-2 sm:mt-1 font-extrabold italic text-secondary-700">
                        <span className="block lg:inline lg:ml-12">
                            Delivering Hopes
                        </span>
                    </h1>

                    <p className="text-secondary-800 mt-4 sm:mt-6 text-base sm:text-lg leading-relaxed font-medium">
                        At MerryMeal, we believe no one should go hungry or feel
                        forgotten. Through the Meals-On-Wheels initiative, we
                        bring nutritious meals and warm smiles to those in need,
                        including the elderly, individuals with disabilities,
                        and families facing food insecurity.
                    </p>
                    <div className="mt-6 sm:mt-8">
                        <Link href="/donate">
                            <button className="bg-primary-700 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg mr-4 text-sm sm:text-lg hover:bg-primary-800 focus:outline-none transition duration-300 ease-in-out">
                                Donate Now
                            </button>
                        </Link>
                        <Link href="/get-meal">
                            <button className="border-2 border-secondary-700 text-secondary-700 bg-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg text-sm sm:text-lg hover:bg-secondary-700 hover:text-white focus:outline-none transition duration-300 ease-in-out">
                                Get Meals
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Right Column (Image Section) */}
                <div className="lg:col-span-2 flex justify-center">
                    <img
                        src={hero}
                        alt="Delivering Meals Image"
                        className="w-full max-w-md sm:max-w-lg lg:max-w-xl h-auto rounded-lg shadow-md"
                    />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
