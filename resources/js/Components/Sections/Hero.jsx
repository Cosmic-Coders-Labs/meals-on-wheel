import React from "react";
import { Link } from "@inertiajs/react";
import hero from "../../../assets/hero.jpg";

const HeroSection = () => {
    return (
        <section className="bg-primary-50 py-10 px-6 sm:py-20 sm:px-10 min-h-[550px]">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-6 items-center">
                {/* Left Column (Text Section) */}
                <div className="md:col-span-3 text-center md:text-left mt-10">
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-primary-800 leading-tight">
                        Delivering Meals,
                    </h1>
                    <h1 className="text-4xl sm:text-5xl mt-2 font-extrabold italic text-secondary-700">
                        <span className="md:ml-[10rem]">Delivering Hopes</span>
                    </h1>

                    <p className="text-secondary-800 mt-6 text-base sm:text-lg leading-relaxed font-medium">
                        At MerryMeal, we believe no one should go hungry or feel
                        forgotten. Through the Meals-On-Wheels initiative, we
                        bring nutritious meals and warm smiles to those in need,
                        including the elderly, individuals with disabilities,
                        and families facing food insecurity.
                    </p>
                    <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center md:justify-start">
                        <Link href={route('fundraising')}>
                            <button className="bg-primary-700 text-white px-6 py-2 sm:px-8 sm:py-3 rounded-lg mr-0 sm:mr-4 mb-4 sm:mb-0 text-base sm:text-lg hover:bg-primary-800 focus:outline-none transition duration-300 ease-in-out">
                                Donate Now
                            </button>
                        </Link>
                        <Link href={route("getmeal")}>
                            <button className="border-2 border-secondary-700 text-secondary-700 bg-white px-6 py-2 sm:px-8 sm:py-3 rounded-lg text-base sm:text-lg hover:bg-secondary-700 hover:text-white focus:outline-none transition duration-300 ease-in-out">
                                Get Meals
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Right Column (Image Section) */}
                <div className="md:col-span-2 flex justify-center">
                    <img
                        src={hero}
                        alt="Delivering Meals Image"
                        className="w-full max-w-[400px] sm:max-w-[600px] md:max-w-[800px] h-auto rounded-lg shadow-md"
                    />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
