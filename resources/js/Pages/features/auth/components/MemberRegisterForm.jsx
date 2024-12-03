import { Link } from "@inertiajs/react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";

const MemberRegisterForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        watch
    } = useForm();

    const handleMemberRegister = (data) => {
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
                    onSubmit={handleSubmit(handleMemberRegister)}
                >
                    <div className="space-y-4">
                        {/* Name Field */}
                        <div>
                            <label
                                htmlFor="memberName"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Full Name
                            </label>
                            <div className="mt-1">
                                <input
                                    id="memberName"
                                    {...register("memberName", {
                                        required: "Full name is required",
                                    })}
                                    type="text"
                                    autoComplete="name"
                                    className={`appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary ${
                                        errors.memberName
                                            ? "border-red-500"
                                            : ""
                                    }`}
                                    placeholder="John Doe"
                                />
                                {errors.memberName && (
                                    <p className="text-red-500 text-xs mt-1">
                                        {errors.memberName.message}
                                    </p>
                                )}
                            </div>
                        </div>

                        {/* Age Field */}
                        <div>
                            <label
                                htmlFor="memberAge"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Age
                            </label>
                            <div className="mt-1">
                                <input
                                    id="memberAge"
                                    {...register("memberAge", {
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
                                        errors.memberAge ? "border-red-500" : ""
                                    }`}
                                    placeholder="60"
                                />
                                {errors.memberAge && (
                                    <p className="text-red-500 text-xs mt-1">
                                        {errors.memberAge.message}
                                    </p>
                                )}
                            </div>
                        </div>

                        {/* Address Field */}
                        <div>
                            <label
                                htmlFor="memberAddress"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Address
                            </label>
                            <div className="mt-1">
                                <input
                                    id="memberAddress"
                                    {...register("memberAddress", {
                                        required: "Address is required",
                                    })}
                                    type="text"
                                    autoComplete="street-address"
                                    className={`appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary ${
                                        errors.memberAddress
                                            ? "border-red-500"
                                            : ""
                                    }`}
                                    placeholder="Your living address"
                                />
                                {errors.memberAddress && (
                                    <p className="text-red-500 text-xs mt-1">
                                        {errors.memberAddress.message}
                                    </p>
                                )}
                            </div>
                        </div>

                        {/* Phone Field */}
                        <div>
                            <label
                                htmlFor="memberPhone"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Phone Number
                            </label>
                            <div className="mt-1">
                                <input
                                    id="memberPhone"
                                    {...register("memberPhone", {
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
                                        errors.memberPhone
                                            ? "border-red-500"
                                            : ""
                                    }`}
                                    placeholder="09765546127"
                                />
                                {errors.memberPhone && (
                                    <p className="text-red-500 text-xs mt-1">
                                        {errors.memberPhone.message}
                                    </p>
                                )}
                            </div>
                        </div>

                        {/* Reason for assistance Field */}
                        <div>
                            <label
                                htmlFor="memberReason"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Reason for Assistance (low income, disabled,
                                etc.)
                            </label>
                            <div className="mt-1">
                                <textarea
                                    id="memberReason"
                                    {...register("memberReason", {
                                        required:
                                            "Reason for assistance is required",
                                    })}
                                    className={`appearance-none block w-full h-32 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary ${
                                        errors.memberReason
                                            ? "border-red-500"
                                            : ""
                                    }`}
                                ></textarea>
                                {errors.memberReason && (
                                    <p className="text-red-500 text-xs mt-1">
                                        {errors.memberReason.message}
                                    </p>
                                )}
                            </div>
                        </div>

                        {/* Proof of Eligibility Field */}
                        <div>
                            <label
                                htmlFor="memberProof"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Proof of Eligibility (government ID, health
                                certificate etc.)
                            </label>
                            <div className="mt-1">
                                <textarea
                                    id="memberProof"
                                    {...register("memberProof", {
                                        required:
                                            "Proof of eligibility is required",
                                    })}
                                    className={`appearance-none block w-full h-32 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary ${
                                        errors.memberProof
                                            ? "border-red-500"
                                            : ""
                                    }`}
                                ></textarea>
                                {errors.memberProof && (
                                    <p className="text-red-500 text-xs mt-1">
                                        {errors.memberProof.message}
                                    </p>
                                )}
                            </div>
                        </div>

                        {/* Email Field */}
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Email address
                            </label>
                            <div className="mt-1">
                                <input
                                    id="email"
                                    type="email"
                                    {...register("email", {
                                        required: "Email is required",
                                        pattern: {
                                            value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                                            message:
                                                "Please enter a valid email address",
                                        },
                                    })}
                                    className={`appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary ${
                                        errors.email ? "border-red-500" : ""
                                    }`}
                                    placeholder="youremail@example.com"
                                />
                                {errors.email && (
                                    <p className="text-red-500 text-xs mt-1">
                                        {errors.email.message}
                                    </p>
                                )}
                            </div>
                        </div>

                        {/* Password Field */}
                        <div>
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Password
                            </label>
                            <div className="mt-1 relative">
                                <input
                                    id="password"
                                    {...register("password", {
                                        required: "Password is required",
                                        minLength: {
                                            value: 8,
                                            message:
                                                "Password must be at least 8 characters",
                                        },
                                    })}
                                    type={showPassword ? "text" : "password"}
                                    autoComplete="new-password"
                                    className={`appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary ${
                                        errors.password ? "border-red-500" : ""
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
                            {errors.password && (
                                <p className="text-red-500 text-xs mt-1">
                                    {errors.password.message}
                                </p>
                            )}
                        </div>

                        {/* Confirm Password Field */}
                        <div>
                            <label
                                htmlFor="confirmPassword"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Confirm Password
                            </label>
                            <div className="mt-1 relative">
                                <input
                                    id="confirmPassword"
                                    {...register("confirmPassword", {
                                        required:
                                            "Please confirm your password",
                                        validate: (val) => {
                                            if (watch("password") != val) {
                                                return "Your passwords do not match";
                                            }
                                        },
                                    })}
                                    type={
                                        showConfirmPassword
                                            ? "text"
                                            : "password"
                                    }
                                    autoComplete="confirm-password"
                                    className={`appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary ${
                                        errors.confirmPassword
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
                            {errors.confirmPassword && (
                                <p className="text-red-500 text-xs mt-1">
                                    {errors.confirmPassword.message}
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
                            href="/member/login"
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

export default MemberRegisterForm;
