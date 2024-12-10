import React from "react";

const KeyStatistics = () => {
    return (
        <div className="bg-primary-600 py-8">
            <div className="container mx-auto px-4 sm:px-8">
                <div className="flex flex-col md:flex-row justify-evenly gap-8 md:gap-16 items-center">
                    <div className="text-center">
                        <p className="text-4xl sm:text-5xl font-bold text-primary-300">
                            10,000+
                        </p>
                        <p className="text-lg sm:text-xl font-semibold text-white">
                            Meals Delivered
                        </p>
                    </div>
                    <div className="text-center">
                        <p className="text-4xl sm:text-5xl font-bold text-primary-300">
                            2,000+
                        </p>
                        <p className="text-lg sm:text-xl font-semibold text-white">
                            Members Served
                        </p>
                    </div>
                    <div className="text-center">
                        <p className="text-4xl sm:text-5xl font-bold text-primary-300">
                            500+
                        </p>
                        <p className="text-lg sm:text-xl font-semibold text-white">
                            Volunteers
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default KeyStatistics;
