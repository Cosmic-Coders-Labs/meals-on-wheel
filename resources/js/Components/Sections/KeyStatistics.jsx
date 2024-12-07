import React from "react";

const KeyStatistics = () => {
    return (
        <div className="bg-primary-600 py-8">
            <div className="flex justify-evenly gap-12 md:gap-16">
                <div className="text-center">
                    <p className="text-5xl font-bold text-primary-300">
                        10,000+
                    </p>
                    <p className="text-xl font-semibold">Meals Delivered</p>
                </div>
                <div className="text-center">
                    <p className="text-5xl font-bold text-primary-300">
                        2,000+
                    </p>
                    <p className="text-xl font-semibold">Members Served</p>
                </div>
                <div className="text-center">
                    <p className="text-5xl font-bold text-primary-300">500+</p>
                    <p className="text-xl font-semibold">Volunteers</p>
                </div>
            </div>
        </div>
    );
};

export default KeyStatistics;
