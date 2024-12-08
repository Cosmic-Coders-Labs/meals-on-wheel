import React from "react";
import { Link } from "@inertiajs/react";
import about from "../../../assets/about.jpg";

const AboutUs = () => {
    return (
        <section className="bg-pink-100 py-16 px-6 sm:px-10">
            <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
                {/* Left Side - Text Section */}
                <div className="text-center md:text-left max-w-lg mx-auto">
                    <h2 className="text-4xl sm:text-5xl font-extrabold text-primary-900 mb-4">
                        ABOUT US
                    </h2>
                    <p className="text-secondary-800 font-semibold text-lg sm:text-xl mb-6">
                        MerryMeal is a charitable organization committed to
                        combating hunger and uplifting individuals in need.
                        Through our Meals-On-Wheels initiative, we deliver
                        freshly prepared meals to seniors, families, and
                        individuals facing food insecurity.
                    </p>
                    <p className="text-secondary-800 font-semibold text-lg sm:text-xl mb-6">
                        By partnering with generous donors and dedicated
                        volunteers, we ensure that every meal we deliver brings
                        warmth and hope to the lives of those we serve.
                    </p>
                    <Link href="/about">
                        <button className="bg-accent-700 text-white text-lg sm:text-xl px-7 py-2 rounded-full hover:bg-primary-800 transition duration-300">
                            Learn More
                        </button>
                    </Link>
                </div>

                {/* Right Side - Image Section */}
                <div className="flex justify-center md:w-1/2">
                    <img
                        src={about}
                        alt="About Us"
                        className="w-[400px] h-[250px] sm:w-[500px] sm:h-[300px] md:w-[700px] md:h-[450px] rounded-lg shadow-md"
                    />
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
