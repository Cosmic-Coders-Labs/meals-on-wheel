import { Link } from "@inertiajs/react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";

const VolunteerLoginForm = () => {
    const [showPassword, setShowPassword] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const handleCaregiverLogin = (data) => {
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
                        Please sign in to your account
                    </p>
                </div>

                {/* Form */}
                <form
                    className="mt-8 space-y-6"
                    onSubmit={handleSubmit(handleCaregiverLogin)}
                >
                    <div className="space-y-4">
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
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    {...register("email", {
                                        required: "Email is required",
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: "Invalid email address",
                                        },
                                    })}
                                    className={`appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary
                                      ${errors.email ? "border-red-500" : ""}`}
                                    placeholder="john@example.com"
                                />
                                {errors.email?.type === "required" && (
                                    <p className="text-red-500 text-xs">
                                        {errors.email.message}
                                    </p>
                                )}
                                {errors.email?.type === "pattern" && (
                                    <p className="text-red-500 text-xs">
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
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    autoComplete="current-password"
                                    // required
                                    {...register("password", {
                                        required: "Password is required",
                                        minLength: {
                                            value: 8,
                                            message:
                                                "Password must be at least 8 characters",
                                        },
                                        pattern: {
                                            value: /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[a-z])[A-Za-z!@#$%^&*]{8,}$/,
                                            message:
                                                "Password must contain at least one capital letter and one special character",
                                        },
                                    })}
                                    className={`appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary
                                      ${
                                          errors.password
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
                            {errors.password?.type === "required" && (
                                <div className="text-red-500 text-xs">
                                    {errors.password.message}
                                </div>
                            )}
                            {errors.password?.type === "minLength" && (
                                <div className="text-red-500 text-xs">
                                    {errors.password.message}
                                </div>
                            )}
                            {errors.password?.type === "pattern" && (
                                <div className="text-red-500 text-xs">
                                    {errors.password.message}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Forgot Password Link */}
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
                            Sign in
                        </button>
                    </div>

                    {/* Register Link */}
                    <div className="text-center text-sm">
                        <span className="text-gray-600">
                            Don't have an account?
                        </span>{" "}
                        <a
                            href="/member/register"
                            className="font-medium text-primary underline hover:text-primary/90"
                        >
                            Register here
                        </a>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default VolunteerLoginForm;
