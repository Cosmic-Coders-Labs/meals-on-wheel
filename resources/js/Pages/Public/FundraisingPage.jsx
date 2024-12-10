
import FundraisingSection from '@/Components/Fundraising/FundraisingSection';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link } from '@inertiajs/react';

export default function FundraisingPage({ auth }) {
    return (
        <GuestLayout>
            <Head title="Fundraising" />
            <FundraisingSection />
        </GuestLayout>
    );
}
