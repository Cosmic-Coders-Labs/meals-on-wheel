import React from "react";

const OurPartners = () => {
    return (
        <section className="bg-white py-20 px-8">
            <div className="container mx-auto text-center">
                {/* Updated "Our Partners" Title */}
                <h2 className="text-4xl font-extrabold text-primary-900 mb-12 transform transition-all duration-300 hover:scale-105">
                    Our Trusted Partners
                </h2>

                {/* First Row - Five Logos (Reduced Sizes and Aligned) */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 mb-12 px-10 justify-center items-center">
                    <div className="flex justify-center items-center p-4 transform hover:scale-105 transition-all duration-300 mt-5">
                        <img
                            src="https://via.placeholder.com/120"
                            alt="Partner 1"
                            className="h-20 w-20 object-contain"
                        />
                    </div>
                    <div className="flex justify-center items-center p-4 transform hover:scale-105 transition-all duration-300">
                        <img
                            src="https://via.placeholder.com/120"
                            alt="Partner 2"
                            className="h-20 w-20 object-contain"
                        />
                    </div>
                    <div className="flex justify-center items-center p-4 transform hover:scale-105 transition-all duration-300">
                        <img
                            src="https://via.placeholder.com/120"
                            alt="Partner 3"
                            className="h-20 w-20 object-contain"
                        />
                    </div>
                    <div className="flex justify-center items-center p-4 transform hover:scale-105 transition-all duration-300">
                        <img
                            src="https://via.placeholder.com/120"
                            alt="Partner 4"
                            className="h-20 w-20 object-contain"
                        />
                    </div>
                </div>

                {/* Second Row - Four Logos (Adjusted for Alignment with First Row) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    <div className="flex justify-end items-center p-4 transform hover:scale-105 transition-all duration-300">
                        <img
                            src="https://via.placeholder.com/120"
                            alt="Partner 6"
                            className="h-20 w-20 object-contain"
                        />
                    </div>
                    <div className="flex justify-center items-center p-4 transform hover:scale-105 transition-all duration-300">
                        <img
                            src="https://via.placeholder.com/120"
                            alt="Partner 7"
                            className="h-20 w-20 object-contain"
                        />
                    </div>
                    <div className="flex justify-start items-center p-4 transform hover:scale-105 transition-all duration-300">
                        <img
                            src="https://via.placeholder.com/120"
                            alt="Partner 8"
                            className="h-20 w-20 object-contain"
                        />
                    </div>
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
