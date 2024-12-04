import { Link } from "@inertiajs/react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const PartnerRegisterForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm();

    const handleCaregiverRegister = (data) => {
        console.log(data);
    };

    return (
        <div className="flex items-center justify-center my-10">
            <div className="w-full max-w-md space-y-8 p-8 bg-white border rounded-xl shadow-lg">
                {/* Header */}
                <div className="text-center">
                    <h2 className="mt-3 text-3xl font-bold text-secondary-500">
                        Welcome
                    </h2>
                    <p className="mt-2 text-sm text-gray-600">
                        Please make your account
                    </p>
                </div>

                {/* Form */}
                <form
                    className="mt-8 space-y-6"
                    onSubmit={handleSubmit(handleCaregiverRegister)}
                >
                    <div className="space-y-4 flex flex-col gap-3">
                        {/* Company Name Field */}
                        <div>
                            <label
                                htmlFor="partnerName"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Company Name
                            </label>
                            <div className="mt-1">
                                <input
                                    id="partnerName"
                                    {...register("partnerName", {
                                        required: "Full name is required",
                                    })}
                                    type="text"
                                    autoComplete="name"
                                    className={`appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary ${
                                        errors.partnerName
                                            ? "border-red-500"
                                            : ""
                                    }`}
                                    placeholder="Lithan"
                                />
                                {errors.partnerName && (
                                    <p className="text-red-500 text-xs mt-1">
                                        {errors.partnerName.message}
                                    </p>
                                )}
                            </div>
                        </div>

                        {/* Company Email Field */}
                        <div>
                            <label
                                htmlFor="partnerEmail"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Company Email
                            </label>
                            <div className="mt-1">
                                <input
                                    id="partnerEmail"
                                    type="email"
                                    {...register("partnerEmail", {
                                        required: "Email is required",
                                        pattern: {
                                            value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                                            message:
                                                "Please enter a valid email address",
                                        },
                                    })}
                                    className={`appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary ${
                                        errors.partnerEmail
                                            ? "border-red-500"
                                            : ""
                                    }`}
                                    placeholder="youremail@example.com"
                                />
                                {errors.partnerEmail && (
                                    <p className="text-red-500 text-xs mt-1">
                                        {errors.partnerEmail.message}
                                    </p>
                                )}
                            </div>
                        </div>

                        {/* Phone Field */}
                        <div>
                            <label
                                htmlFor="partnerPhone"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Phone Number
                            </label>
                            <div className="mt-1">
                                <input
                                    id="partnerPhone"
                                    {...register("partnerPhone", {
                                        required: "Phone number is required",
                                        pattern: {
                                            value: /^[0-9]{10,}$/,
                                            message:
                                                "Please enter a valid phone number",
                                        },
                                    })}
                                    type="tel"
                                    autoComplete="tel"
                                    className={`appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary ${
                                        errors.partnerPhone
                                            ? "border-red-500"
                                            : ""
                                    }`}
                                    placeholder="09765546127"
                                />
                                {errors.partnerPhone && (
                                    <p className="text-red-500 text-xs mt-1">
                                        {errors.partnerPhone.message}
                                    </p>
                                )}
                            </div>
                        </div>

                        {/* Address Field */}
                        <div>
                            <label
                                htmlFor="partnerAddress"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Company Address
                            </label>
                            <div className="mt-1">
                                <input
                                    id="partnerAddress"
                                    type="text"
                                    {...register("partnerAddress", {
                                        required:
                                            "Need to fill the company address",
                                    })}
                                    className={`appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary ${
                                        errors.partnerAddress
                                            ? "border-red-500"
                                            : ""
                                    }`}
                                    placeholder="Address"
                                />
                                {errors.partnerAddress && (
                                    <p className="text-red-500 text-xs mt-1">
                                        {errors.partnerAddress.message}
                                    </p>
                                )}
                            </div>
                        </div>

                        {/* Password Field */}
                        <div>
                            <label
                                htmlFor="partnerPassword"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Password
                            </label>
                            <div className="mt-1 relative">
                                <input
                                    id="partnerPassword"
                                    {...register("partnerPassword", {
                                        required: "Password is required",
                                        minLength: {
                                            value: 8,
                                            message:
                                                "Password must be at least 8 characters",
                                        },
                                    })}
                                    type={showPassword ? "text" : "password"}
                                    className={`appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary ${
                                        errors.partnerPassword
                                            ? "border-red-500"
                                            : ""
                                    }`}
                                    placeholder="••••••••"
                                />
                                <button
                                    type="button"
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-500"
                                    onClick={() =>
                                        setShowPassword(!showPassword)
                                    }
                                >
                                    {showPassword ? (
                                        <HiOutlineEyeOff
                                            className="h-5 w-5"
                                            aria-hidden="true"
                                        />
                                    ) : (
                                        <HiOutlineEye
                                            className="h-5 w-5"
                                            aria-hidden="true"
                                        />
                                    )}
                                </button>
                            </div>
                            {errors.partnerPassword && (
                                <p className="text-red-500 text-xs mt-1">
                                    {errors.partnerPassword.message}
                                </p>
                            )}
                        </div>

                        {/* Confirm Password Field */}
                        <div>
                            <label
                                htmlFor="partnerConfirmPassword"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Confirm Password
                            </label>
                            <div className="mt-1 relative">
                                <input
                                    id="partnerConfirmPassword"
                                    {...register("partnerConfirmPassword", {
                                        required:
                                            "Please confirm your password",
                                        validate: (val) => {
                                            if (
                                                watch("partnerPassword") != val
                                            ) {
                                                return "Your passwords do not match";
                                            }
                                        },
                                    })}
                                    type={
                                        showConfirmPassword
                                            ? "text"
                                            : "password"
                                    }
                                    className={`appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary ${
                                        errors.partnerConfirmPassword
                                            ? "border-red-500"
                                            : ""
                                    }`}
                                    placeholder="••••••••"
                                />
                                <button
                                    type="button"
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-500"
                                    onClick={() =>
                                        setShowConfirmPassword(
                                            !showConfirmPassword
                                        )
                                    }
                                >
                                    {showConfirmPassword ? (
                                        <HiOutlineEyeOff
                                            className="h-5 w-5"
                                            aria-hidden="true"
                                        />
                                    ) : (
                                        <HiOutlineEye
                                            className="h-5 w-5"
                                            aria-hidden="true"
                                        />
                                    )}
                                </button>
                            </div>
                            {errors.partnerConfirmPassword && (
                                <p className="text-red-500 text-xs mt-1">
                                    {errors.partnerConfirmPassword.message}
                                </p>
                            )}
                        </div>
                    </div>

                    <div className="flex items-center justify-end">
                        <div className="text-sm">
                            <Link
                                href="#"
                                className="font-medium text-primary hover:text-primary/90"
                            >
                                Forgot your password?
                            </Link>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div>
                        <button
                            type="submit"
                            className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-lg shadow-sm text-md font-medium text-white bg-secondary-600 active:scale-95"
                        >
                            Sign Up
                        </button>
                    </div>

                    {/* Register Link */}
                    <div className="text-center text-sm">
                        <span className="text-gray-600">
                            Already have an account?
                        </span>
                        <a
                            href="/partner/login"
                            className="font-medium text-primary underline hover:text-primary/90"
                        >
                            Login here
                        </a>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PartnerRegisterForm;
