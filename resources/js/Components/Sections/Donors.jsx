import React from "react";
import { Link } from "@inertiajs/react";
import man1 from "../../../assets/man1.jpg";
import woman1 from "../../../assets/woman1.jpg";
import woman2 from "../../../assets/woman2.jpg";

const OurDonors = () => {
    return (
        <section className="bg-secondary-100 py-16 px-6 sm:px-8">
            <h2 className="text-center text-3xl sm:text-4xl font-bold text-secondary-700 mb-12">
                # Our Donors & Their Feedbacks
            </h2>
            <div className="flex flex-col sm:flex-row justify-center gap-12 sm:gap-8 mx-auto max-w-screen-lg">
                {/* Donor Cards */}
                {[
                    {
                        name: "Robert M.",
                        img: man1,
                        feedback:
                            "Supporting MerryMeal's hot meal initiative has been deeply fulfilling. I'm honored to contribute to their impactful work.",
                    },
                    {
                        name: "Emily K.",
                        img: woman1,
                        feedback:
                            "Donating to MerryMeal makes me feel like I'm directly making a difference in the lives of those in need of support and care. It's amazing.",
                    },
                    {
                        name: "Anna L.",
                        img: woman2,
                        feedback:
                            "I am very proud to support MerryMeal's mission of bringing hope and nourishment to those individuals and families in need.",
                    },
                ].map((donor, index) => (
                    <div
                        key={index}
                        className="relative flex flex-col items-center"
                    >
                        {/* Circle image */}
                        <div className="bg-primary-200 p-1 rounded-full w-28 h-28 mx-auto absolute top-0 left-1/2 transform -translate-x-1/2">
                            <img
                                src={donor.img}
                                alt={donor.name}
                                className="w-full h-full rounded-full object-cover object-center"
                            />
                        </div>
                        {/* Feedback Box */}
                        <div className="bg-white p-6 rounded-lg shadow-lg w-80 mx-auto flex flex-col justify-between h-[320px]">
                            <p className="font-semibold text-center mt-8">
                                {donor.name}
                            </p>
                            <div className="relative mt-10">
                                {/* Double Quote Icon */}
                                <span className="absolute left-0 text-6xl font-bold text-primary-600 -top-6">
                                    “
                                </span>
                                <p className="text-secondary-600 font-semibold text-start italic pl-8">
                                    {donor.feedback}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Link to Donate page */}
            <div className="flex justify-center mt-12">
                <Link href={route('fundraising')}>
                    <button className="bg-secondary-700 text-white text-lg px-7 py-2 rounded-full hover:bg-primary-700 transition duration-300">
                        Support Us
                    </button>
                </Link>
            </div>
        </section>
    );
};

export default OurDonors;
