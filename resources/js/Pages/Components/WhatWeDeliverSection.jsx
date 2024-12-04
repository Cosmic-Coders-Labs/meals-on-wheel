import React from "react";

const WhatWeDeliver = () => {
    return (
        <section className="bg-primary-100 py-16 px-8">
            <h2 className="text-center text-4xl font-extrabold text-accent-900 mb-16">
                ...What We Deliver...
            </h2>

            {/* First Row: Image Left, Text Right */}
            <div className="flex flex-col md:flex-row items-center justify-center mx-auto mb-16 max-w-screen-lg">
                {/* Image Section */}
                <div className="w-full md:w-2/3 mb-6 md:mb-0">
                    <img
                        src="https://via.placeholder.com/400"
                        alt="Hot Noon Meals"
                        className="w-full h-auto rounded-lg shadow-lg"
                    />
                </div>

                {/* Text Section */}
                <div className="w-full ps-20">
                    <h3 className="text-primary-700 font-bold text-2xl mb-4">
                        <span className="text-3xl font-extrabold">` </span>
                        Hot Noon Meals
                        <span className="text-3xl font-extrabold"> `</span>
                    </h3>
                    <p className="text-primary-600 font-semibold">
                        We deliver freshly cooked, hot noon meals to those
                        within a 10-kilometer radius of our kitchen. Perfectly
                        prepared to bring warmth to your day.
                    </p>
                </div>
            </div>

            {/* Second Row: Image Right, Text Left */}
            <div className="flex flex-col md:flex-row items-center justify-center mx-auto max-w-screen-lg">
                <div className="w-full pe-20">
                    <h3 className="text-secondary-700 font-bold text-2xl mb-4">
                        <span className="text-3xl font-extrabold">` </span>
                        Frozen Meals
                        <span className="text-3xl font-extrabold"> `</span>
                    </h3>

                    <p className="text-secondary-600 font-semibold">
                        Frozen meals are delivered to locations over 10
                        kilometers away, ensuring long-lasting freshness while
                        maintaining high quality.
                    </p>
                </div>
                <div className="w-full md:w-2/3 mb-6 md:mb-0">
                    <img
                        src="https://via.placeholder.com/400"
                        alt="Frozen Meals"
                        className="w-full h-auto rounded-lg shadow-lg"
                    />
                </div>
            </div>
        </section>
    );
};

export default WhatWeDeliver;
