import React, { useState, useEffect } from "react";
import elderly from '../../../assets/elderly.jpg';
import frozenfundraising from '../../../assets/frozenfundraising.jpg';
import FoodSafetyRegulations from '../../../assets/FoodSafetyRegulations.png';
import { router } from "@inertiajs/react";

const FundraisingSection = () => {
    const [campaigns, setCampaigns] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch campaigns data (mock or from API)
    const fetchCampaigns = async () => {
        try {
            setLoading(true);
            // Replace with actual API call or backend integration
            const mockData = [
                {
                    id: 1,
                    name: "Support Meals for the Elderly",
                    description:
                        "Provide nutritious meals to elderly individuals within our 10-km service radius.",
                    targetAmount: 5000,
                    raisedAmount: 3200,
                    deadline: "2024-12-31",
                    image: elderly,
                },
                {
                    id: 2,
                    name: "Expand Weekend Frozen Meals",
                    description:
                        "Help us reach members beyond the 10-km radius with frozen weekend meals.",
                    targetAmount: 7000,
                    raisedAmount: 4500,
                    deadline: "2024-12-20",
                    image: frozenfundraising,
                },
                {
                    id: 3,
                    name: "Food Safety Compliance Initiative",
                    description:
                        "Ensure top-notch food safety compliance across all our kitchens.",
                    targetAmount: 3000,
                    raisedAmount: 1200,
                    deadline: "2024-12-15",
                    image: FoodSafetyRegulations,
                },
            ];
            setCampaigns(mockData);
        } catch (error) {
            console.error("Error fetching campaigns:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCampaigns();
    }, []);

    // Navigate to donation details (example handler)
    const handleDonate = (campaignId) => {
        alert(`Redirecting to donation page for Campaign ID: ${campaignId}`);
        // Implement navigation logic, e.g., using React Router
    };

    return (
        <div className="bg-gray-100 text-gray-800 p-8 w-full flex flex-col items-center">
            <h1 className="text-2xl font-bold text-center mb-6">
                Fundraising Campaigns
            </h1>
            {loading ? (
                <div className="text-center text-lg font-semibold">Loading...</div>
            ) : campaigns.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1000px]">
                    {campaigns.map((campaign) => (
                        <div
                            key={campaign.id}
                            className="bg-white rounded-lg shadow-lg p-4 flex flex-col justify-between"
                        >
                            <div className="flex flex-col">
                                <img
                                    src={campaign.image}
                                    alt={campaign.name}
                                    className="rounded-lg mb-4 w-full h-48 object-cover"
                                />
                                <h2 className="text-xl font-bold mb-2">{campaign.name}</h2>
                                <p className="text-gray-600 mb-4">{campaign.description}</p>
                            </div>

                            <div className="flex flex-col">
                                <div className="mb-4">
                                    <p className="text-sm font-semibold">
                                        Amount Raised: ${campaign.raisedAmount}
                                    </p>
                                    <p className="text-sm font-semibold">
                                        Target Amount: ${campaign.targetAmount}
                                    </p>
                                    <div className="relative w-full bg-gray-200 h-2 rounded-full mt-2">
                                        <div
                                            className="absolute top-0 left-0 h-full bg-green-500 rounded-full"
                                            style={{
                                                width: `${(campaign.raisedAmount / campaign.targetAmount) * 100
                                                    }%`,
                                            }}
                                        ></div>
                                    </div>
                                </div>

                                <button
                                    onClick={() => router.visit(route('donation'))}
                                    className="bg-secondary-500 text-white px-4 mt-auto py-2 rounded-lg hover:bg-secondary-600"
                                >
                                    Donate Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="text-center text-lg font-semibold">
                    No campaigns available.
                </div>
            )}
        </div>
    );
};

export default FundraisingSection;
