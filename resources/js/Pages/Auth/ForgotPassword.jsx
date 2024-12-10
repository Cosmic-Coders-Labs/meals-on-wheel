import React, { useState } from 'react';
import { Head, useForm } from '@inertiajs/react';
import GuestLayout from '@/Layouts/GuestLayout';

export default function ForgotPassword() {
    const [alert, setAlert] = useState(null);
    const { data, setData, post, processing, errors } = useForm({
        email: '',
    });

    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        post(route('password.email'), {
            onSuccess: () => {
                setLoading(false);
                setAlert({ type: 'success', message: 'Password reset link sent to your email!' });
            },
            onError: () => {
                setLoading(false);
                setAlert({ type: 'error', message: 'Failed to send reset link. Please try again.' });
            },
        });
    };

    return (
        <GuestLayout>
            <Head title="Forgot Password" />
            {alert && (
                <div
                    className={`p-4 rounded-md ${alert.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                        }`}
                >
                    {alert.message}
                </div>
            )}
            <div className="flex items-center justify-center" style={{ height: 400 }}>
                <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6 border-2 border-blue-100">
                    <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
                        Forgot Password
                    </h1>
                    <form onSubmit={handleSubmit}>
                        {/* Email Input */}
                        <div className="mb-4">
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Email Address
                            </label>
                            <input
                                id="email"
                                type="email"
                                value={data.email}
                                onChange={(e) => setData('email', e.target.value)}
                                className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                required
                            />
                            {errors.email && (
                                <p className="mt-2 text-sm text-red-600">{errors.email}</p>
                            )}
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={processing || loading}
                            className={`w-full py-2 px-4 text-white font-semibold rounded-md shadow-md bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 ${loading && 'opacity-50 cursor-not-allowed'
                                }`}
                        >
                            {loading ? 'Sending...' : 'Send Password Reset Link'}
                        </button>
                    </form>
                </div>
            </div>
        </GuestLayout>
    );
}
