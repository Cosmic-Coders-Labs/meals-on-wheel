import React from "react";
import { Link } from "@inertiajs/react";
import about from "../../../assets/about.jpg";

const AboutUs = () => {
    return (
        <section className="bg-pink-100 py-16 px-6 sm:px-10">
            <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
                {/* Left Side - Text Section */}
                <div className="text-center md:text-left max-w-lg">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-primary-900 mb-4">
                        ABOUT US
                    </h2>
                    <p className="text-secondary-800 font-semibold text-base sm:text-lg mb-6">
                        MerryMeal is a charitable organization committed to
                        combating hunger and uplifting individuals in need.
                        Through our Meals-On-Wheels initiative, we deliver
                        freshly prepared meals to seniors, families, and
                        individuals facing food insecurity.
                    </p>
                    <p className="text-secondary-800 font-semibold text-base sm:text-lg mb-6">
                        By partnering with generous donors and dedicated
                        volunteers, we ensure that every meal we deliver brings
                        warmth and hope to the lives of those we serve.
                    </p>
                    <Link href={route('aboutus')}>
                        <button className="bg-accent-700 text-white text-base sm:text-lg px-6 py-2 rounded-full hover:bg-primary-800 transition duration-300">
                            Learn More
                        </button>
                    </Link>
                </div>

                {/* Right Side - Responsive Image Section */}
                <div className="w-full md:w-1/2 flex justify-center">
                    <img
                        src={about}
                        alt="About Us"
                        className="w-full h-auto max-w-[700px] rounded-lg shadow-md object-cover"
                    />
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
