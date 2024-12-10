import { getMe, getUserById, makeDonation } from "@/Utils/utils";
import { router } from "@inertiajs/react";
import React, { useState, useEffect } from "react";

const DonationForm = () => {
    const [user, setUser] = useState(null); // Store user info
    const [formData, setFormData] = useState({
        amount: "",
        currency: "USD",
        message: "",
        cardNumber: "",
    });
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(true);

    // Simulated authentication check
    useEffect(() => {
        const checkAuth = async () => {
            try {
                const myProfile = await getMe();
                const userResponse = await getUserById(myProfile.id);
                if (userResponse) {
                    setUser(userResponse);
                } else {
                    router.visit(route('login'));
                }
            } catch (error) {
                console.error("Error checking authentication:", error);
                router.visit(route('login'));
            } finally {
                setLoading(false);
            }
        };

        checkAuth();
    }, []);

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Validate the form
    const validateForm = () => {
        const newErrors = {};
        if (!formData.amount || parseFloat(formData.amount) <= 0) {
            newErrors.amount = "Please enter a valid donation amount.";
        }
        if (!formData.cardNumber.trim() || !/^\d{16}$/.test(formData.cardNumber)) {
            newErrors.cardNumber = "A valid 16-digit card number is required.";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            try {
                const response = await makeDonation({
                    amount: parseFloat(formData.amount),
                    currency: formData.currency,
                    message: formData.message,
                    donor_id: user.donor_id,
                });
                if (response.success) {
                    alert("Thank you for your donation!");
                    setFormData({
                        amount: "",
                        currency: "USD",
                        message: "",
                        cardNumber: "",
                    });
                    setErrors({});
                } else {
                    alert("There was an issue with your donation. Please try again.");
                }
            } catch (error) {
                console.error("Error submitting donation:", error);
                alert("An error occurred. Please try again.");
            }
        }
    };

    if (loading) return <p>Loading...</p>;

    return user ? (
        <div className="container mx-auto">
            <div className="max-w-md sm:max-w-full md:max-w-screen-md my-10 mx-auto bg-white p-8 rounded-lg shadow-lg">
                <h1 className="text-2xl font-bold mb-4 text-center">Make a Donation</h1>
                <form onSubmit={handleSubmit}>

                {/* Donation Amount */}
                    <div className="mb-4">
                        <label className="block text-lg font-medium">Donation Amount ($)</label>
                    <input
                        type="number"
                        name="amount"
                        value={formData.amount}
                        onChange={handleChange}
                            className={`mt-2 p-3 w-full border rounded-md ${errors.amount ? "border-red-500" : "border-gray-300"}`}
                            placeholder="Enter amount"
                    />
                        {errors.amount && <p className="text-red-500 text-sm">{errors.amount}</p>}
                    </div>

                    {/* Currency */}
                    <div className="mb-4">
                        <label className="block text-lg font-medium">Currency</label>
                        <select
                            name="currency"
                            value={formData.currency}
                            onChange={handleChange}
                            className="mt-2 p-3 w-full border border-gray-300 rounded-md"
                        >
                            <option value="USD">USD</option>
                            <option value="EUR">EUR</option>
                            <option value="GBP">GBP</option>
                        </select>
                    </div>

                    {/* Message */}
                    <div className="mb-4">
                        <label className="block text-lg font-medium">Message (Optional)</label>
                    <textarea
                            name="message"
                            value={formData.message}
                        onChange={handleChange}
                            className="mt-2 p-3 w-full border border-gray-300 rounded-md"
                            placeholder="Write a message with your donation"
                    />
                </div>

                    {/* Credit Card Number */}
                    <div className="mb-4">
                        <label className="block text-lg font-medium">Credit Card Number</label>
                    <input
                        type="text"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleChange}
                            className={`mt-2 p-3 w-full border rounded-md ${errors.cardNumber ? "border-red-500" : "border-gray-300"}`}
                            placeholder="Enter your card number"
                    />
                        {errors.cardNumber && <p className="text-red-500 text-sm">{errors.cardNumber}</p>}
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                        className="mt-6 w-full bg-blue-500 text-white py-3 text-lg rounded-md hover:bg-blue-600 transition"
                >
                        Submit Donation
                </button>
            </form>
        </div>
        </div>
    ) : (
        <p className="text-center mt-10">Redirecting to login...</p>
    );
};

export default DonationForm;
