import { Link } from "@inertiajs/react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";

const CaregiverRegisterForm = () => {
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
                        {/* Name Field */}
                        <div>
                            <label
                                htmlFor="caregiverName"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Full Name
                            </label>
                            <div className="mt-1">
                                <input
                                    id="caregiverName"
                                    {...register("caregiverName", {
                                        required: "Full name is required",
                                    })}
                                    type="text"
                                    autoComplete="name"
                                    className={`appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary ${
                                        errors.caregiverName
                                            ? "border-red-500"
                                            : ""
                                    }`}
                                    placeholder="John Doe"
                                />
                                {errors.caregiverName && (
                                    <p className="text-red-500 text-xs mt-1">
                                        {errors.caregiverName.message}
                                    </p>
                                )}
                            </div>
                        </div>

                        {/* Age Field */}
                        <div>
                            <label
                                htmlFor="caregiverAge"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Age
                            </label>
                            <div className="mt-1">
                                <input
                                    id="caregiverAge"
                                    {...register("caregiverAge", {
                                        required: "Age is required",
                                        min: {
                                            value: 18,
                                            message:
                                                "You must be at least 18 years old",
                                        },
                                        max: {
                                            value: 120,
                                            message: "Please enter a valid age",
                                        },
                                    })}
                                    type="number"
                                    className={`appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary ${
                                        errors.caregiverAge
                                            ? "border-red-500"
                                            : ""
                                    }`}
                                    placeholder="60"
                                />
                                {errors.caregiverAge && (
                                    <p className="text-red-500 text-xs mt-1">
                                        {errors.caregiverAge.message}
                                    </p>
                                )}
                            </div>
                        </div>

                        {/* Gender Field */}
                        <div>
                            <label
                                htmlFor="caregiverGender"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Gender
                            </label>
                            <div className="mt-1 flex gap-5">
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        name="caregiverGender"
                                        value="male"
                                        className="mr-2"
                                        {...register("caregiverGender", {
                                            required: "Gender is required",
                                        })}
                                    />
                                    <span>Male</span>
                                </label>

                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        name="caregiverGender"
                                        value="female"
                                        className="mr-2"
                                        {...register("caregiverGender", {
                                            required: "Gender is required",
                                        })}
                                    />
                                    <span>Female</span>
                                </label>

                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        name="caregiverGender"
                                        value="other"
                                        className="mr-2"
                                        {...register("caregiverGender", {
                                            required: "Gender is required",
                                        })}
                                    />
                                    <span>Other</span>
                                </label>
                            </div>
                            {errors.caregiverGender && (
                                <p className="text-red-500 text-xs mt-1">
                                    {errors.caregiverGender.message}
                                </p>
                            )}
                        </div>

                        {/* Phone Field */}
                        <div>
                            <label
                                htmlFor="caregiverPhone"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Phone Number
                            </label>
                            <div className="mt-1">
                                <input
                                    id="caregiverPhone"
                                    {...register("caregiverPhone", {
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
                                        errors.caregiverPhone
                                            ? "border-red-500"
                                            : ""
                                    }`}
                                    placeholder="09765546127"
                                />
                                {errors.caregiverPhone && (
                                    <p className="text-red-500 text-xs mt-1">
                                        {errors.caregiverPhone.message}
                                    </p>
                                )}
                            </div>
                        </div>

                        {/* Relevant Experience Field */}
                        <div>
                            <label
                                htmlFor="relevanatExperience"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Relevant Experience
                                <span className="block">
                                    (like previous caregiving or meal
                                    preparation)
                                </span>
                            </label>
                            <div className="mt-1">
                                <textarea
                                    id="relevanatExperience"
                                    {...register("relevanatExperience", {
                                        required:
                                            "Need to fill the relevant experience",
                                    })}
                                    className={`appearance-none block w-full h-32 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary ${
                                        errors.relevanatExperience
                                            ? "border-red-500"
                                            : ""
                                    }`}
                                ></textarea>
                                {errors.relevanatExperience && (
                                    <p className="text-red-500 text-xs mt-1">
                                        {errors.relevanatExperience.message}
                                    </p>
                                )}
                            </div>
                        </div>

                        {/* Certificate Field */}
                        <div>
                            <label
                                htmlFor="caregiverCertificate"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Certificate
                                <span className="block">
                                    (first aid, food handling or caregiving
                                    training)
                                </span>
                            </label>
                            <div className="mt-1">
                                <textarea
                                    id="caregiverCertificate"
                                    {...register("caregiverCertificate", {
                                        required:
                                            "Proof of eligibility is required",
                                    })}
                                    className={`appearance-none block w-full h-32 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary ${
                                        errors.caregiverCertificate
                                            ? "border-red-500"
                                            : ""
                                    }`}
                                ></textarea>
                                {errors.caregiverCertificate && (
                                    <p className="text-red-500 text-xs mt-1">
                                        {errors.caregiverCertificate.message}
                                    </p>
                                )}
                            </div>
                        </div>

                        {/* Email Field */}
                        <div>
                            <label
                                htmlFor="caregiverEmail"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Email address
                            </label>
                            <div className="mt-1">
                                <input
                                    id="caregiverEmail"
                                    type="email"
                                    {...register("caregiverEmail", {
                                        required: "Email is required",
                                        pattern: {
                                            value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                                            message:
                                                "Please enter a valid email address",
                                        },
                                    })}
                                    className={`appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary ${
                                        errors.caregiverEmail
                                            ? "border-red-500"
                                            : ""
                                    }`}
                                    placeholder="youremail@example.com"
                                />
                                {errors.caregiverEmail && (
                                    <p className="text-red-500 text-xs mt-1">
                                        {errors.caregiverEmail.message}
                                    </p>
                                )}
                            </div>
                        </div>

                        {/* Password Field */}
                        <div>
                            <label
                                htmlFor="caregiverPassword"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Password
                            </label>
                            <div className="mt-1 relative">
                                <input
                                    id="caregiverPassword"
                                    {...register("caregiverPassword", {
                                        required: "Password is required",
                                        minLength: {
                                            value: 8,
                                            message:
                                                "Password must be at least 8 characters",
                                        },
                                    })}
                                    type={showPassword ? "text" : "password"}
                                    className={`appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary ${
                                        errors.caregiverPassword
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
                            {errors.caregiverPassword && (
                                <p className="text-red-500 text-xs mt-1">
                                    {errors.caregiverPassword.message}
                                </p>
                            )}
                        </div>

                        {/* Confirm Password Field */}
                        <div>
                            <label
                                htmlFor="caregiverConfirmPassword"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Confirm Password
                            </label>
                            <div className="mt-1 relative">
                                <input
                                    id="caregiverConfirmPassword"
                                    {...register("caregiverConfirmPassword", {
                                        required:
                                            "Please confirm your password",
                                        validate: (val) => {
                                            if (
                                                watch(
                                                    "caregiverPassword"
                                                ) != val
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
                                        errors.caregiverConfirmPassword
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
                            {errors.caregiverConfirmPassword && (
                                <p className="text-red-500 text-xs mt-1">
                                    {errors.caregiverConfirmPassword.message}
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
                            href="/caregiver/login"
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

export default CaregiverRegisterForm;
