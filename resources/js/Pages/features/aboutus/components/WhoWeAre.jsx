import React from "react";
import about from "../../../../../assets/about.jpg";

const WhoWeAre = () => {
    return (
        <section className="bg-gradient-to-r from-primary-50 via-primary-100 to-primary-200 py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-12 lg:px-24">
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Text Section */}
                <div className="lg:pr-12 text-center lg:text-left">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-900 mb-4 sm:mb-6 transform transition-all duration-300 hover:scale-105">
                        Who We Are?
                    </h2>
                    <p className="text-secondary-900 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                        MerryMeal is a charitable organization founded with the
                        belief that no one should go to bed hungry. Established
                        in 2010, it started as a small community initiative to
                        combat food insecurity among vulnerable groups such as
                        the elderly, individuals with disabilities, and families
                        facing financial hardships.
                    </p>

                    {/* Short Horizontal Line */}
                    <div className="w-16 h-1 bg-primary-900 mb-4 sm:mb-6 mx-auto lg:mx-0"></div>

                    <p className="text-secondary-900 text-base sm:text-lg leading-relaxed">
                        Over the years, MerryMeal has grown into a trusted name
                        in the community, delivering hot, nutritious meals while
                        fostering a sense of belonging and care. Our
                        organization thrives on the compassion of volunteers and
                        the generosity of donors who share our vision of
                        eradicating hunger and restoring dignity to those in
                        need.
                    </p>
                </div>

                {/* Image Section */}
                <div className="flex justify-center lg:justify-end mt-8 lg:mt-0">
                    <img
                        src={about}
                        alt="About Us Image"
                        className="w-full sm:w-5/6 lg:w-full max-w-2xl h-auto rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
                    />
                </div>
            </div>
        </section>
    );
};

export default WhoWeAre;
