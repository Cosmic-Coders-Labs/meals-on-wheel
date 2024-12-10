import React from 'react';
import { useForm } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

const VerifyEmail = () => {
    const { post, processing } = useForm();

    const resendVerificationEmail = (e) => {
        e.preventDefault();
        post(route('verification.send'));
    };

    return (
        <AuthenticatedLayout header={<h2>Verify Your Email</h2>}>
            <div className="p-6">
                <h3 className="text-lg font-semibold">Email Verification Required</h3>
                <p className="mt-2 text-gray-600">
                    Please verify your email address by clicking the link we sent to your email. If you didn’t receive the email, you can resend it below.
                </p>
                <form onSubmit={resendVerificationEmail} className="mt-4">
                    <button
                        type="submit"
                        disabled={processing}
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
                    >
                        Resend Verification Email
                    </button>
                </form>
            </div>
        </AuthenticatedLayout>
    );
};

export default VerifyEmail;
