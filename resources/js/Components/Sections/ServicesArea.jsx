import React from "react";
import { Link } from "@inertiajs/react";

const ServicesArea = () => {
    return (
        <section className="bg-primary-50 py-14 px-10">
            <h2 className="text-center text-4xl font-extrabold text-primary-900 mb-8">
                Our Services
            </h2>
            <div className="flex flex-col md:flex-row justify-evenly gap-16">
                <div className="text-center max-w-xs mx-auto mt-5">
                    <p className="text-secondary-800 font-semibold text-lg mb-6 px-6">
                        1# Support our mission to provide meals and hope to
                        those in need.
                    </p>
                    <Link href={route('donation')}>
                        <button className="bg-primary-700 text-white text-lg px-7 py-2 rounded-full hover:bg-primary-800 transition duration-300">
                            Donate Now
                        </button>
                    </Link>
                </div>
                <div className="text-center max-w-xs mx-auto mt-5">
                    <p className="text-secondary-800 font-semibold text-lg mb-6 px-6">
                        2# Become part of our dedicated team of volunteers and
                        make a difference.
                    </p>
                    <Link href={route('register')}>
                        <button className="bg-secondary-700 text-white text-lg px-7 py-2 rounded-full hover:bg-secondary-800 transition duration-300">
                            Join Us
                        </button>
                    </Link>
                </div>
                <div className="text-center max-w-xs mx-auto mt-5">
                    <p className="text-secondary-800 font-semibold text-lg mb-6 px-6">
                        3# Request a nutritious meal types tailored to your needs
                        today.
                    </p>
                    <Link href={route('getmeal')}>
                        <button className="bg-primary-600 text-white text-lg px-7 py-2 rounded-full hover:bg-primary-700 transition duration-300">
                            Get Meal
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ServicesArea;
