import DonationForm from '@/Components/Donate/DonationForm';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link } from '@inertiajs/react';

export default function DonationPage({ auth }) {
  return (
    <GuestLayout>
      <Head title="Donation" />
      <DonationForm />
    </GuestLayout>
  );
}
