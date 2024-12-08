import React from "react";

const KeyStatistics = () => {
    return (
        <div className="bg-primary-600 py-6 sm:py-8 lg:py-12">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-16 text-center">
                {/* Meals Delivered */}
                <div>
                    <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-300">
                        10,000+
                    </p>
                    <p className="text-lg sm:text-xl font-semibold text-white">
                        Meals Delivered
                    </p>
                </div>

                {/* Members Served */}
                <div>
                    <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-300">
                        2,000+
                    </p>
                    <p className="text-lg sm:text-xl font-semibold text-white">
                        Members Served
                    </p>
                </div>

                {/* Volunteers */}
                <div>
                    <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-300">
                        500+
                    </p>
                    <p className="text-lg sm:text-xl font-semibold text-white">
                        Volunteers
                    </p>
                </div>
            </div>
        </div>
    );
};

export default KeyStatistics;
