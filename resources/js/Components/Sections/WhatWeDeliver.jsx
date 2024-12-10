import React from "react";
import hot from "../../../assets/hot.jpg";
import frozen from "../../../assets/frozen.jpg";

const WhatWeDeliver = () => {
    return (
        <section className="bg-primary-100 py-16 px-6 sm:px-8">
            <h2 className="text-center text-3xl sm:text-4xl font-extrabold text-accent-900 mb-12">
                ...What We Deliver...
            </h2>

            {/* First Row: Image Left, Text Right */}
            <div className="flex flex-col md:flex-row items-center justify-center mx-auto mb-16 max-w-screen-lg">
                {/* Image Section */}
                <div className="w-full md:w-1/2 mb-6 md:mb-0">
                    <img
                        src={hot}
                        alt="Hot Noon Meals"
                        className="w-full h-auto max-w-[800px] rounded-xl shadow-lg border-[2px] border-primary-700 object-cover"
                    />
                </div>

                {/* Text Section */}
                <div className="w-full md:w-1/2 md:pl-10 text-center md:text-left">
                    <h3 className="text-primary-700 font-bold text-2xl sm:text-3xl mb-4">
                        <span className="text-3xl font-extrabold">` </span>
                        Hot Noon Meals
                        <span className="text-3xl font-extrabold"> `</span>
                    </h3>
                    <p className="text-primary-600 font-semibold text-base sm:text-lg leading-relaxed">
                        We deliver freshly cooked, hot noon meals to those
                        within a 10-kilometer radius of our kitchen. Perfectly
                        prepared to bring warmth and comfort to your day.
                    </p>
                </div>
            </div>

            {/* Second Row: Image Right, Text Left */}
            <div className="flex flex-col md:flex-row-reverse items-center justify-center mx-auto max-w-screen-lg">
                {/* Image Section */}
                <div className="w-full md:w-1/2 mb-6 md:mb-0">
                    <img
                        src={frozen}
                        alt="Frozen Meals"
                        className="w-full h-auto max-w-[800px] rounded-xl shadow-lg border-[2px] border-secondary-700 object-cover"
                    />
                </div>

                {/* Text Section */}
                <div className="w-full md:w-1/2 md:pr-10 text-center md:text-left">
                    <h3 className="text-secondary-700 font-bold text-2xl sm:text-3xl mb-4">
                        <span className="text-3xl font-extrabold">` </span>
                        Frozen Meals
                        <span className="text-3xl font-extrabold"> `</span>
                    </h3>
                    <p className="text-secondary-600 font-semibold text-base sm:text-lg leading-relaxed">
                        Frozen meals are delivered to locations over 10
                        kilometers away, ensuring long-lasting freshness while
                        maintaining the same high quality of our hot meals.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default WhatWeDeliver;
