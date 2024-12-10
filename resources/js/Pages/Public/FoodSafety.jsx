import FoodSafetySection from '@/Components/FoodSafety/FoodSafetySection';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link } from '@inertiajs/react';

export default function FoodSafetyPage({ auth }) {
  return (
    <GuestLayout>
      <Head title="FoodSafety" />
      <FoodSafetySection />
    </GuestLayout>
  );
}
