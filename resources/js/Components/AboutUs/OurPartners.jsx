import React from "react";
import logos from "../../../assets/logos.jpg";
import { router } from "@inertiajs/react";

const OurPartners = () => {
    return (
        <section className="bg-white py-16 px-6 sm:px-12 lg:py-20">
            <div className="container mx-auto text-center">
                {/* Section Title */}
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary-900 mb-8 lg:mb-12 transform transition-all duration-300 hover:scale-105">
                    Our Trusted Partners
                </h2>

                {/* Single Image Section */}
                <div className="flex justify-center items-center">
                    <img
                        src={logos}
                        alt="Our Partners Logos"
                        className="w-full max-w-[800px] h-auto rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
                    />
                </div>

                {/* Button Section */}
                <div className="mt-8 lg:mt-12">
                    <button
                        className="px-5 py-3 sm:px-6 sm:py-3.5 lg:px-8 lg:py-4 text-sm sm:text-lg font-semibold text-white bg-gradient-to-r from-accent-400 via-primary-800 to-accent-700 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 hover:rotate-3 hover:shadow-2xl"
                        onClick={() => router.visit(route('register'))}
                    >
                        Want Your Company Logo Here?
                    </button>
                </div>
            </div>
        </section>
    );
};

export default OurPartners;
