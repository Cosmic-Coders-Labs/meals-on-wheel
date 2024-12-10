import AboutUs from '@/Components/Sections/AboutUs';
import OurDonors from '@/Components/Sections/Donors';
import HeroSection from '@/Components/Sections/Hero';
import KeyStatistics from '@/Components/Sections/KeyStatistics';
import ServicesArea from '@/Components/Sections/ServicesArea';
import WhatWeDeliver from '@/Components/Sections/WhatWeDeliver';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link } from '@inertiajs/react';

export default function Welcome({ auth }) {
    return (
        <GuestLayout>
            <Head title="Welcome" />
            <HeroSection />
            <KeyStatistics />
            <ServicesArea />
            <AboutUs />
            <WhatWeDeliver />
            <OurDonors />
        </GuestLayout>
    );
}
