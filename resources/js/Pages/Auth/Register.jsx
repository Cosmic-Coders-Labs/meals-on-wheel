
import MultiStepRegistrationForm from '@/Components/Forms/MultiStepsForm';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { FaUserCircle } from 'react-icons/fa';


export default function Register() {

    return (
        <GuestLayout>
            <Head title="Register" />
            <div className=" container mx-auto">
                {/* icon and text */}
                <div className=" flex flex-col items-center justify-center mt-10">
                    <FaUserCircle className=" size-14 text-secondary-500" />
                    <h1 className=" text-3xl font-bold text-secondary-500">
                        Registration
                    </h1>
                </div>

                {/* login form */}
                <MultiStepRegistrationForm />

            </div>

        </GuestLayout>
    );
}
