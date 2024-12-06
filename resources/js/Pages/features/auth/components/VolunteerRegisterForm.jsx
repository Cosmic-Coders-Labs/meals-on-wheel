import { Link, router } from "@inertiajs/react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";

const VolunteerRegisterForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm();

    const handleVolunteerRegister = (data) => {
        console.log(data);

        router.visit("/volunteer/login");
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
                    onSubmit={handleSubmit(handleVolunteerRegister)}
                >
                    <div className="space-y-4 flex flex-col gap-3">
                        {/* Name Field */}
                        <div>
                            <label
                                htmlFor="volunteerName"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Full Name
                            </label>
                            <div className="mt-1">
                                <input
                                    id="volunteerName"
                                    {...register("volunteerName", {
                                        required: "Full name is required",
                                    })}
                                    type="text"
                                    autoComplete="name"
                                    className={`appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary ${
                                        errors.volunteerName
                                            ? "border-red-500"
                                            : ""
                                    }`}
                                    placeholder="John Doe"
                                />
                                {errors.volunteerName && (
                                    <p className="text-red-500 text-xs mt-1">
                                        {errors.volunteerName.message}
                                    </p>
                                )}
                            </div>
                        </div>

                        {/* Age Field */}
                        <div>
                            <label
                                htmlFor="volunteerAge"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Age
                            </label>
                            <div className="mt-1">
                                <input
                                    id="volunteerAge"
                                    {...register("volunteerAge", {
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
                                        errors.volunteerAge
                                            ? "border-red-500"
                                            : ""
                                    }`}
                                    placeholder="60"
                                />
                                {errors.volunteerAge && (
                                    <p className="text-red-500 text-xs mt-1">
                                        {errors.volunteerAge.message}
                                    </p>
                                )}
                            </div>
                        </div>

                        {/* Gender Field */}
                        <div>
                            <label
                                htmlFor="volunteerGender"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Gender
                            </label>
                            <div className="mt-1 flex gap-5">
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        name="volunteerGender"
                                        value="male"
                                        className="mr-2"
                                        {...register("volunteerGender", {
                                            required: "Gender is required",
                                        })}
                                    />
                                    <span>Male</span>
                                </label>

                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        name="volunteerGender"
                                        value="female"
                                        className="mr-2"
                                        {...register("volunteerGender", {
                                            required: "Gender is required",
                                        })}
                                    />
                                    <span>Female</span>
                                </label>

                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        name="volunteerGender"
                                        value="other"
                                        className="mr-2"
                                        {...register("volunteerGender", {
                                            required: "Gender is required",
                                        })}
                                    />
                                    <span>Other</span>
                                </label>
                            </div>
                            {errors.volunteerGender && (
                                <p className="text-red-500 text-xs mt-1">
                                    {errors.volunteerGender.message}
                                </p>
                            )}
                        </div>

                        {/* Phone Field */}
                        <div>
                            <label
                                htmlFor="volunteerPhone"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Phone Number
                            </label>
                            <div className="mt-1">
                                <input
                                    id="volunteerPhone"
                                    {...register("volunteerPhone", {
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
                                        errors.volunteerPhone
                                            ? "border-red-500"
                                            : ""
                                    }`}
                                    placeholder="09765546127"
                                />
                                {errors.volunteerPhone && (
                                    <p className="text-red-500 text-xs mt-1">
                                        {errors.volunteerPhone.message}
                                    </p>
                                )}
                            </div>
                        </div>

                        {/* Availability Field */}
                        <div>
                            <label
                                htmlFor="availability"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Availability
                                <span className="block">
                                    (list the days and times you are available)
                                </span>
                            </label>
                            <div className="mt-1">
                                <textarea
                                    id="availability"
                                    {...register("availability", {
                                        required:
                                            "Need to fill the availability",
                                    })}
                                    className={`appearance-none block w-full h-32 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary ${
                                        errors.availability
                                            ? "border-red-500"
                                            : ""
                                    }`}
                                ></textarea>
                                {errors.availability && (
                                    <p className="text-red-500 text-xs mt-1">
                                        {errors.availability.message}
                                    </p>
                                )}
                            </div>
                        </div>

                        {/* Prefer Role Field */}
                        <div>
                            <label
                                htmlFor="volunteerPreferRole"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Prefer Role
                                <span className="block">
                                    (list the roles you are interested in)
                                </span>
                            </label>
                            <div className="mt-1">
                                <textarea
                                    id="volunteerPreferRole"
                                    {...register("volunteerPreferRole", {
                                        required:
                                            "Need to fill the prefer role",
                                    })}
                                    className={`appearance-none block w-full h-32 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary ${
                                        errors.volunteerPreferRole
                                            ? "border-red-500"
                                            : ""
                                    }`}
                                ></textarea>
                                {errors.volunteerPreferRole && (
                                    <p className="text-red-500 text-xs mt-1">
                                        {errors.volunteerPreferRole.message}
                                    </p>
                                )}
                            </div>
                        </div>

                        {/* Email Field */}
                        <div>
                            <label
                                htmlFor="volunteerEmail"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Email address
                            </label>
                            <div className="mt-1">
                                <input
                                    id="volunteerEmail"
                                    type="email"
                                    {...register("volunteerEmail", {
                                        required: "Email is required",
                                        pattern: {
                                            value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                                            message:
                                                "Please enter a valid email address",
                                        },
                                    })}
                                    className={`appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary ${
                                        errors.volunteerEmail
                                            ? "border-red-500"
                                            : ""
                                    }`}
                                    placeholder="youremail@example.com"
                                />
                                {errors.volunteerEmail && (
                                    <p className="text-red-500 text-xs mt-1">
                                        {errors.volunteerEmail.message}
                                    </p>
                                )}
                            </div>
                        </div>

                        {/* Password Field */}
                        <div>
                            <label
                                htmlFor="volunteerPassword"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Password
                            </label>
                            <div className="mt-1 relative">
                                <input
                                    id="volunteerPassword"
                                    {...register("volunteerPassword", {
                                        required: "Password is required",
                                        minLength: {
                                            value: 8,
                                            message:
                                                "Password must be at least 8 characters",
                                        },
                                    })}
                                    type={showPassword ? "text" : "password"}
                                    className={`appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary ${
                                        errors.volunteerPassword
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
                            {errors.volunteerPassword && (
                                <p className="text-red-500 text-xs mt-1">
                                    {errors.volunteerPassword.message}
                                </p>
                            )}
                        </div>

                        {/* Confirm Password Field */}
                        <div>
                            <label
                                htmlFor="volunteerConfirmPassword"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Confirm Password
                            </label>
                            <div className="mt-1 relative">
                                <input
                                    id="volunteerConfirmPassword"
                                    {...register("volunteerConfirmPassword", {
                                        required:
                                            "Please confirm your password",
                                        validate: (val) => {
                                            if (
                                                watch("volunteerPassword") !=
                                                val
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
                                        errors.volunteerConfirmPassword
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
                            {errors.volunteerConfirmPassword && (
                                <p className="text-red-500 text-xs mt-1">
                                    {errors.volunteerConfirmPassword.message}
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
                            href="/volunteer/login"
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

export default VolunteerRegisterForm;
