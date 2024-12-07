import GuestLayout from "@/Layouts/GuestLayout";
import { Head, Link, router, useForm } from "@inertiajs/react";
import React, { useState } from "react";
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";
import { FaUserCircle } from "react-icons/fa";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [alert, setAlert] = useState(null);

    const { data, setData, errors, post, processing, reset } = useForm({
        email: "",
        password: "",
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("login"), {
            onSuccess: () => {
                setAlert({ type: "success", message: "Login successful!" });
                router.visit(route("dashboard"));
            },
            onError: () => {
                setAlert({ type: "error", message: "Invalid credentials. Please try again." });
            },
            onFinish: () => reset("password"), // Reset the password field after submission
        });
    };


    return (
        <GuestLayout>
            <Head title="Sign In" />
            {alert && (
                <div
                    className={`p-4 rounded-md ${alert.type === "success" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                        }`}
                >
                    {alert.message}
                </div>
            )}

            <div className="container mx-auto">
                <div className="flex flex-col items-center justify-center mt-10">
                    <FaUserCircle className="size-14 text-secondary-500" />
                    <h1 className="text-3xl font-bold text-secondary-500">Sign In</h1>
                </div>
                <br />
                <div className="max-w-md mx-auto">
                    <form
                        onSubmit={submit}
                        className="space-y-6 p-8 bg-white border rounded-lg shadow-md"
                    >
                        {/* Email */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                value={data.email}
                                onChange={(e) => setData("email", e.target.value)}
                                className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm ${errors.email ? "border-red-500" : "border-gray-300"
                                    }`}
                            />
                            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                        </div>

                        {/* Password */}
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <div className="relative mt-1">
                                <input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    value={data.password}
                                    onChange={(e) => setData("password", e.target.value)}
                                    className={`block w-full px-3 py-2 border rounded-md shadow-sm ${errors.password ? "border-red-500" : "border-gray-300"
                                        }`}
                                />
                                <button
                                    type="button"
                                    className="absolute inset-y-0 right-0 px-3 text-gray-400 hover:text-gray-500"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <HiOutlineEyeOff /> : <HiOutlineEye />}
                                </button>
                            </div>
                            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
                        </div>

                        {/* Actions */}
                        <div className="flex justify-between items-center">
                            <Link href={route("password.request")} className="text-sm text-gray-600 hover:text-primary">
                                Forgot password?
                            </Link>
                            <button
                                type="submit"
                                disabled={processing}
                                className={`px-4 py-2 text-white bg-secondary-600 rounded-md hover:bg-secondary-700 ${processing ? "opacity-50 cursor-not-allowed" : ""
                                    }`}
                            >
                                {processing ? "Processing..." : "Sign In"}
                            </button>
                        </div>

                        {/* Register Link */}
                        <p className="text-center text-sm text-gray-600">
                            Don't have an account?{" "}
                            <Link href={route("register")} className="text-primary hover:text-primary/90">
                                Register
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
            <br />
        </GuestLayout>
    );
};

export default Login;
