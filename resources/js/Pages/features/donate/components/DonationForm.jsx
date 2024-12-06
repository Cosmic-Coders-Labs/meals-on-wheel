
import React, { useState } from "react";

const DonationForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    donationType: "",
    amount: "",
    notes: "",
    cardNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted: ", formData);
  };

  return (
    <div className="max-w-3xl my-10 mx-auto bg-secondary-50 p-8 rounded-lg shadow-lg border border-secondary-50">
      {/* Header Section */}
      <div className="text-center mb-8">
        {/* Donation Icon */}
        <div className="flex items-center justify-center mb-4">
          <svg
            className="w-16 h-16 fill-secondary-950"
            viewBox="0 0 576 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M163.9 136.9c-29.4-29.8-29.4-78.2 0-108s77-29.8 106.4 0l17.7 18 17.7-18c29.4-29.8 77-29.8 106.4 0s29.4 78.2 0 108L310.5 240.1c-6.2 6.3-14.3 9.4-22.5 9.4s-16.3-3.1-22.5-9.4L163.9 136.9zM568.2 336.3c13.1 17.8 9.3 42.8-8.5 55.9L433.1 485.5c-23.4 17.2-51.6 26.5-80.7 26.5H192 32c-17.7 0-32-14.3-32-32V416c0-17.7 14.3-32 32-32H68.8l44.9-36c22.7-18.2 50.9-28 80-28H272h16 64c17.7 0 32 14.3 32 32s-14.3 32-32 32H288 272c-8.8 0-16 7.2-16 16s7.2 16 16 16H392.6l119.7-88.2c17.8-13.1 42.8-9.3 55.9 8.5zM193.6 384l0 0-.9 0c.3 0 .6 0 .9 0z" />
          </svg>
        </div>

        {/* YourFundraiser Title */}
        <h1 className="text-2xl font-bold text-accent-900">YourFundraiser</h1>

        {/* Donation Form Label */}
        <div className="bg-secondary-200 py-3 mt-4 rounded">
          <h2 className="text-xl font-medium text-secondary-800">
            Donation Form
          </h2>
        </div>
      </div>

      {/* Donation Form */}
      <form onSubmit={handleSubmit}>
        {/* First and Last Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-lg font-medium text-secondary-800">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="mt-2 p-3 w-full text-lg border border-primary-300 rounded-md focus:outline-primary-500"
              placeholder="Your First Name"
              required
            />
          </div>
          <div>
            <label className="block text-lg font-medium text-secondary-800">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="mt-2 p-3 w-full text-lg border border-primary-300 rounded-md focus:outline-primary-500"
              placeholder="Your Last Name"
              required
            />
          </div>
        </div>

        {/* Email */}
        <div className="mt-6">
          <label className="block text-lg font-medium text-secondary-800">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-2 p-3 w-full text-lg border border-primary-300 rounded-md focus:outline-primary-500"
            placeholder="Email Address"
            required
          />
        </div>

        {/* Phone */}
        <div className="mt-6">
          <label className="block text-lg font-medium text-secondary-800">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="mt-2 p-3 w-full text-lg border border-primary-300 rounded-md focus:outline-primary-500"
            placeholder="Phone Number"
            required
          />
        </div>

        {/* Donation Type */}
        <div className="mt-6">
          <label className="block text-lg font-medium text-secondary-800">
            I would like to make a...
          </label>
          <div className="flex gap-6 mt-3">
            <label className="flex items-center text-lg text-secondary-800">
              <input
                type="radio"
                name="donationType"
                value="One Time Donation"
                onChange={handleChange}
                className="mr-2 accent-secondary-500"
              />
              One Time Donation
            </label>
            <label className="flex items-center text-lg text-secondary-800">
              <input
                type="radio"
                name="donationType"
                value="Love Offering"
                onChange={handleChange}
                className="mr-2 accent-secondary-500"
              />
              Love Offering
            </label>

            <label className="flex items-center text-lg text-secondary-800">
              <input
                type="radio"
                name="donationType"
                value="Love Offering"
                onChange={handleChange}
                className="mr-2 accent-secondary-500"
              />
              Building Expansion
            </label>
          </div>
        </div>

        {/* Donation Amount */}
        <div className="mt-6">
          <label className="block text-lg font-medium text-secondary-800">
            How much do you wish to donate?
          </label>
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            className="mt-2 p-3 w-full text-lg border border-primary-300 rounded-md focus:outline-primary-500"
            placeholder="$ Donation Amount"
            required
          />
        </div>

        {/* Donor Notes */}
        <div className="mt-6">
          <label className="block text-lg font-medium text-secondary-800">
            Donor Notes
          </label>
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            className="mt-2 p-3 w-full text-lg border border-primary-300 rounded-md focus:outline-primary-500"
            placeholder="Your Notes"
            rows="5"
          />
        </div>

        {/* Credit Card */}
        <div className="mt-6">
          <label className="block text-lg font-medium text-secondary-800">
            Credit Card
          </label>
          <input
            type="text"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
            className="mt-2 p-3 w-full text-lg border border-primary-300 rounded-md focus:outline-primary-500"
            placeholder="Card Number"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-8 bg-primary-600 text-white py-2 px-4 text-lg rounded-md hover:scale-105 active:scale-95 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default DonationForm;
