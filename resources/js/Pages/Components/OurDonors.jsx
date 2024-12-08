import React from "react";
import { Link } from "@inertiajs/react";
import man1 from "../../../assets/man1.jpg";
import woman1 from "../../../assets/woman1.jpg";
import woman2 from "../../../assets/woman2.jpg";

const OurDonors = () => {
    return (
        <section className="bg-secondary-100 py-16 px-8">
            <h2 className="text-4xl font-bold text-secondary-700 mb-8 ms-20">
                # Our Donors & Their Feedbacks
            </h2>
            <div className="flex flex-col md:flex-row justify-evenly gap-12 md:gap-6">
                {/* First Donor */}
                <div className="relative mt-5">
                    {/* Circle image */}
                    <div className="bg-primary-200 p-1 rounded-full w-28 h-28 mx-auto absolute top-0 left-1/2 transform -translate-x-1/2">
                        <img
                            src={man1}
                            alt="Donor 1"
                            className="w-full h-full rounded-full object-cover"
                        />
                    </div>
                    {/* Square box for feedback */}
                    <div className="bg-white p-6 rounded-lg shadow-lg mt-16 w-80 mx-auto">
                        <p className="font-semibold mt-8 text-center">
                            Robert M.
                        </p>
                        <div className="relative mt-10">
                            {/* Double Quote Icon */}
                            <span className="absolute left-0 text-6xl font-bold text-primary-600 -top-6">
                                “
                            </span>
                            <p className="text-secondary-600 font-semibold text-start italic pl-8">
                                Supporting MerryMeal's hot meal initiative has
                                been deeply fulfilling. I'm honored to
                                contribute to their impactful work.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Second Donor */}
                <div className="relative mt-5">
                    {/* Circle image */}
                    <div className="bg-primary-200 p-1 rounded-full w-28 h-28 mx-auto absolute top-0 left-1/2 transform -translate-x-1/2">
                        <img
                            src={woman1}
                            alt="Donor 2"
                            className="w-full h-full rounded-full object-cover"
                        />
                    </div>
                    {/* Square box for feedback */}
                    <div className="bg-white p-6 rounded-lg shadow-lg mt-16 w-80 mx-auto">
                        <p className="font-semibold mt-8 text-center">
                            Emily K.
                        </p>
                        <div className="relative mt-10">
                            {/* Double Quote Icon */}
                            <span className="absolute left-0 text-6xl font-bold text-primary-600 -top-6">
                                “
                            </span>
                            <p className="text-secondary-600 font-semibold text-start italic pl-8">
                                Donating to MerryMeal makes me feel like I'm
                                directly making a difference in the lives of
                                those in need of support and care. It's amazing.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Third Donor */}
                <div className="relative mt-5">
                    {/* Circle image */}
                    <div className="bg-primary-200 p-1 rounded-full w-28 h-28 mx-auto absolute top-0 left-1/2 transform -translate-x-1/2">
                        <img
                            src={woman2}
                            alt="Donor 3"
                            className="w-full h-full rounded-full object-cover"
                        />
                    </div>
                    {/* Square box for feedback */}
                    <div className="bg-white p-6 rounded-lg shadow-lg mt-16 w-80 h-100 mx-auto">
                        <p className="font-semibold mt-8 text-center">
                            Anna L.
                        </p>
                        <div className="relative mt-10">
                            {/* Double Quote Icon */}
                            <span className="absolute left-0 text-6xl font-bold text-primary-600 -top-6">
                                “
                            </span>
                            <p className="text-secondary-600 font-semibold text-start italic pl-8">
                                I am very proud to support MerryMeal's mission
                                of bringing hope and nourishment to those
                                individuals and families in need.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Link to Donate page */}
            <div className="flex justify-center mt-12">
                <Link href="/donate">
                    <button className="bg-secondary-700 text-white text-lg px-7 py-2 rounded-full hover:bg-primary-700 transition duration-300">
                        Support Us
                    </button>
                </Link>
            </div>
        </section>
    );
};

export default OurDonors;
