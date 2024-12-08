import React from "react";
import mission from "../../../../../assets/mission.jpeg";
import history from "../../../../../assets/history.jpg";

const LearnMore = () => {
    return (
        <section className="bg-gradient-to-br from-accent-100 via-accent-200 to-secondary-100 py-20 px-8 lg:px-24">
            <div className="container mx-auto">
                {/* Section Heading */}
                <h2 className="text-4xl font-extrabold text-secondary-800 text-center mb-16 leading-tight">
                    Learn More About
                    <span className="text-accent-600"> MerryMeal's</span> Story,
                    Mission, and Impact
                </h2>

                {/* First Row - Mission Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 items-center mb-20 gap-12">
                    {/* Text Section */}
                    <div className="text-center md:text-left">
                        <div className="mb-4 inline-block bg-accent-50 px-4 py-1 rounded-full shadow">
                            <span className="text-accent-700 text-sm font-semibold uppercase">
                                Our Mission
                            </span>
                        </div>
                        <h3 className="text-2xl font-bold text-accent-800 mb-4">
                            Supporting Nutrition, Health, and Independence
                        </h3>
                        <p className="text-secondary-900 text-lg leading-relaxed">
                            "Supporting individuals with age, disability, or
                            illness to maintain their nutrition." MerryMeal’s
                            mission is to serve vulnerable individuals by
                            providing reliable access to healthy, home-delivered
                            meals. We believe in promoting dignity, health, and
                            independence for:
                        </p>
                        <ul className="list-disc list-inside mt-6 text-secondary-900 text-lg">
                            <li>
                                Elders and seniors who face challenges due to
                                age-related health issues.
                            </li>
                            <li>
                                People with disabilities who are unable to
                                prepare their own meals.
                            </li>
                        </ul>
                        <p className="text-secondary-900 text-lg mt-6">
                            Through our Meals-On-Wheels initiative, we aim to
                            bridge the gap between hunger and hope, ensuring
                            that every meal is a reminder that they are cared
                            for and valued.
                        </p>
                    </div>
                    {/* Image Section */}
                    <div className="flex justify-center md:justify-end mt-8 md:mt-0">
                        <img
                            src={mission}
                            alt="Mission Illustration"
                            className="w-full md:w-[600px] h-auto rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                </div>

                {/* Second Row - History Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
                    {/* Image Section */}
                    <div className="flex justify-center md:justify-end">
                        <img
                            src={history}
                            alt="History Illustration"
                            className="w-full md:w-[600px] h-auto rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                    {/* Text Section */}
                    <div className="text-center md:text-left">
                        <div className="mb-4 inline-block bg-secondary-50 px-4 py-1 rounded-full shadow">
                            <span className="text-secondary-700 text-sm font-semibold uppercase">
                                Our History
                            </span>
                        </div>
                        <h3 className="text-2xl font-bold text-accent-800 mb-4">
                            A Journey of Care and Commitment
                        </h3>
                        <p className="text-secondary-900 text-lg leading-relaxed">
                            "Timeline or story of how MerryMeal started."
                            MerryMeal’s journey began in a church kitchen where
                            a group of volunteers came together to address a
                            growing issue: seniors and individuals with
                            disabilities who were unable to cook for themselves.
                        </p>
                        <ul className="list-disc list-inside mt-6 text-secondary-900 text-lg">
                            <li>
                                <strong>2015:</strong> The introduction of
                                personalized meal plans to meet dietary needs.
                            </li>
                            <li>
                                <strong>2018:</strong> Expansion to frozen meal
                                delivery to offer recipients greater
                                flexibility.
                            </li>
                            <li>
                                <strong>2022:</strong> Launch of an online
                                platform for meal requests, scheduling, and
                                donations.
                            </li>
                        </ul>
                        <p className="text-secondary-900 text-lg mt-6">
                            Every step of our journey is driven by a commitment
                            to ensure that no one in our care feels alone or
                            neglected.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LearnMore;
