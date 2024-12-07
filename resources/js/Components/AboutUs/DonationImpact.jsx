import React from "react";

const DonationImpact = () => {
    return (
        <section className="bg-gradient-to-r from-primary-300 via-accent-300 to-primary-300 py-28 px-8 md:px-16">
            <div className="container mx-auto text-center">
                {/* Title */}
                <h2 className="text-4xl font-bold text-primary-900 mb-12 leading-snug tracking-tight">
                    Your Generosity, Their Hope: How Your Donations Change Lives
                </h2>

                {/* Content Wrapper */}
                <div className="bg-white p-10 rounded-xl shadow-2xl mx-auto max-w-4xl space-y-8">
                    {/* Introduction Paragraph */}
                    <p className="text-lg text-secondary-800 leading-relaxed">
                        Every donation to MerryMeal is more than just a
                        contribution; it is a lifeline for the elderly,
                        disabled, and others in need. With your support, we are
                        able to offer more than just meals—we offer hope, care,
                        and a brighter tomorrow for those who need it most.
                    </p>

                    {/* Key Points */}
                    <div className="text-left space-y-6">
                        <p className="text-secondary-900 font-semibold text-xl">
                            Here’s how your support truly makes a difference:
                        </p>
                        <ul className="list-disc pl-6 text-secondary-800 space-y-3">
                            <li>
                                <strong>Warm, Nutritious Meals:</strong> Your
                                donation ensures hot meals for those who can no
                                longer cook for themselves, due to health
                                challenges or age.
                            </li>
                            <li>
                                <strong>Compassionate Care:</strong>{" "}
                                Contributions go toward providing care for
                                individuals who are recovering from illness or
                                managing chronic conditions, ensuring they have
                                the nutrition they need to recover.
                            </li>
                            <li>
                                <strong>Building Connections:</strong> Your
                                support helps our volunteers make meaningful
                                connections with recipients, offering both
                                nourishment and companionship during meal
                                deliveries.
                            </li>
                        </ul>
                    </div>

                    {/* Quote from a Recipient */}
                    <div className="bg-primary-50 p-8 rounded-lg shadow-inner italic text-secondary-700">
                        <p className="text-lg">
                            “Thanks to MerryMeal, I no longer worry about where
                            my next meal will come from. The volunteers brighten
                            my day every time they visit—it feels like family.”
                        </p>
                        <p className="mt-4 text-sm text-right font-semibold">
                            – A Grateful Recipient
                        </p>
                    </div>

                    {/* Call to Action Button */}
                    <div className="mt-12">
                        <button className="bg-gradient-to-r from-accent-500 via-primary-700 to-accent-500 text-white px-6 py-3 text-xl rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300">
                            Join Us in Making a Difference
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DonationImpact;
