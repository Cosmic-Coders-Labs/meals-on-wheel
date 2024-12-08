import React from "react";
import { Link } from "@inertiajs/react";

const ServicesArea = () => {
    return (
        <section className="bg-primary-50 py-14 px-6 sm:px-10">
            <h2 className="text-center text-4xl sm:text-5xl font-extrabold text-primary-900 mb-8">
                Our Services
            </h2>
            <div className="flex flex-col md:flex-row justify-evenly gap-8 sm:gap-10 md:gap-16">
                {/* Service 1 */}
                <div className="text-center max-w-xs mx-auto mt-5">
                    <p className="text-secondary-800 font-semibold text-lg sm:text-xl mb-6 px-6">
                        1# Support our mission to provide meals and hope to
                        those in need.
                    </p>
                    <Link to="/donate">
                        <button className="bg-primary-700 text-white text-lg sm:text-xl px-7 py-2 rounded-full hover:bg-primary-800 transition duration-300">
                            Donate Now
                        </button>
                    </Link>
                </div>

                {/* Service 2 */}
                <div className="text-center max-w-xs mx-auto mt-5">
                    <p className="text-secondary-800 font-semibold text-lg sm:text-xl mb-6 px-6">
                        2# Become part of our dedicated team of volunteers and
                        make a difference.
                    </p>
                    <Link href="/volunteer/register">
                        <button className="bg-secondary-700 text-white text-lg sm:text-xl px-7 py-2 rounded-full hover:bg-secondary-800 transition duration-300">
                            Join Us
                        </button>
                    </Link>
                </div>

                {/* Service 3 */}
                <div className="text-center max-w-xs mx-auto mt-5">
                    <p className="text-secondary-800 font-semibold text-lg sm:text-xl mb-6 px-6">
                        3# Request a nutritious meal types tailored to your
                        needs today.
                    </p>
                    <Link href="/get-meal">
                        <button className="bg-primary-600 text-white text-lg sm:text-xl px-7 py-2 rounded-full hover:bg-primary-700 transition duration-300">
                            Get Meal
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ServicesArea;
