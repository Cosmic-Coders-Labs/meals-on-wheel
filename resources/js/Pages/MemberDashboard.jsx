import AdminDashboard from '@/Components/Admin/dashboard/dashboard';
import DeliveryTrack from '@/Components/DeliveryTrack';
import Sidebar from '@/Components/Sidebar/Sidebar';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, router } from '@inertiajs/react';
import { useState } from 'react';

export default function MemberDashboard() {
    const [isSidebarClosed, setIsSidebarClosed] = useState(false);

    const handleSidebarToggle = (closed) => {
        setIsSidebarClosed(closed);
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="flex">
                {/* Sidebar */}
                <Sidebar onSidebarToggle={handleSidebarToggle} />
                {/* Main Content */}
                <div
                    className={`main-content flex-1 transition-all duration-300 ${isSidebarClosed ? 'ml-20' : 'ml-60'
                        }`}
                >
                    <div className="p-4 w-full">
                        {/* Add DeliveryTrack Component */}
                        <DeliveryTrack />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
