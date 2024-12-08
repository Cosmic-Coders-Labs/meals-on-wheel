import React from "react";
import logos from "../../../../../assets/logos.jpg"; // Updated to use the single image file

const OurPartners = () => {
    return (
        <section className="bg-white py-20 px-8">
            <div className="container mx-auto text-center">
                {/* Section Title */}
                <h2 className="text-4xl font-extrabold text-primary-900 mb-12 transform transition-all duration-300 hover:scale-105">
                    Our Trusted Partners
                </h2>

                {/* Single Image Section */}
                <div className="flex justify-center items-center">
                    <img
                        src={logos}
                        alt="Our Partners Logos"
                        className="w-full sm:w-[600px] md:w-[800px] lg:w-[1000px] h-auto max-w-4xl rounded-lg"
                    />
                </div>

                {/* Button Section */}
                <div className="mt-12">
                    <button className="px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-accent-400 via-primary-800 to-accent-700 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 hover:rotate-3 hover:shadow-2xl">
                        Want Your Company Logo Here?
                    </button>
                </div>
            </div>
        </section>
    );
};

export default OurPartners;
