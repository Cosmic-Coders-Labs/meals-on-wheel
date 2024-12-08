import React, { useState } from 'react';
import { useForm } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

const ConfirmPassword = () => {
    const { data, setData, post, processing, errors } = useForm({
        password: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('password.confirm'));
    };

    return (
        <AuthenticatedLayout header={<h2>Confirm Your Password</h2>}>
            <div className="p-6 max-w-md mx-auto">
                <form onSubmit={submit}>
                    <div>
                        <label className="block font-medium text-sm text-gray-700">
                            Password
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
                        <button
                            type="submit"
                            disabled={processing}
                            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
                        >
                            Confirm Password
                        </button>
                    </div>
                </form>
            </div>
        </AuthenticatedLayout>
    );
};

export default ConfirmPassword;
