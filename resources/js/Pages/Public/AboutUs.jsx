import WhoWeAre from "@/Components/AboutUs/WhoWeAre";
import LearnMore from "@/Components/AboutUs/LearnMore";
import OurPartners from "@/Components/AboutUs/OurPartners";
import DonationImpact from "@/Components/AboutUs/DonationImpact";
import GuestLayout from '@/Layouts/GuestLayout';
import { Head } from '@inertiajs/react';

export default function AboutUs({ auth }) {
    return (
        <GuestLayout>
            <Head title="About Us" />
            <WhoWeAre />
            <LearnMore />
            <OurPartners />
            <DonationImpact />
        </GuestLayout>
    );
}
