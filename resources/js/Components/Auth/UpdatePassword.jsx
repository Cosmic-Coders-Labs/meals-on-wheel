import React from 'react';
import { useForm } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

const UpdatePassword = () => {
    const { data, setData, put, processing, errors } = useForm({
        current_password: '',
        password: '',
        password_confirmation: '',
    });

    const submit = (e) => {
        e.preventDefault();
        put(route('password.update'));
    };

    return (
        <AuthenticatedLayout header={<h2>Update Your Password</h2>}>
            <div className="p-6 max-w-md mx-auto">
                <form onSubmit={submit}>
                    <div>
                        <label className="block font-medium text-sm text-gray-700">
                            Current Password
                        </label>
                        <input
                            type="password"
                            value={data.current_password}
                            onChange={(e) => setData('current_password', e.target.value)}
                            className={`mt-1 block w-full ${errors.current_password ? 'border-red-500' : 'border-gray-300'
                                } rounded-md shadow-sm`}
                        />
                        {errors.current_password && (
                            <span className="text-red-600 text-sm">{errors.current_password}</span>
                        )}
                    </div>

                    <div className="mt-4">
                        <label className="block font-medium text-sm text-gray-700">
                            New Password
                        </label>
                        <input
                            type="password"
                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                            className={`mt-1 block w-full ${errors.password ? 'border-red-500' : 'border-gray-300'
                                } rounded-md shadow-sm`}
                        />
                        {errors.password && (
                            <span className="text-red-600 text-sm">{errors.password}</span>
                        )}
                    </div>

                    <div className="mt-4">
                        <label className="block font-medium text-sm text-gray-700">
                            Confirm New Password
                        </label>
                        <input
                            type="password"
                            value={data.password_confirmation}
                            onChange={(e) => setData('password_confirmation', e.target.value)}
                            className={`mt-1 block w-full ${errors.password_confirmation ? 'border-red-500' : 'border-gray-300'
                                } rounded-md shadow-sm`}
                        />
                        {errors.password_confirmation && (
                            <span className="text-red-600 text-sm">{errors.password_confirmation}</span>
                        )}
                    </div>

                    <div className="mt-4">
                        <button
                            type="submit"
                            disabled={processing}
                            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
                        >
                            Update Password
                        </button>
                    </div>
                </form>
            </div>
        </AuthenticatedLayout>
    );
};

export default UpdatePassword;
