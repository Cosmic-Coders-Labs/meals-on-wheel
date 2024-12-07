import Sidebar from '@/Components/Sidebar/Sidebar';
import VolunteerAssignment from '@/Components/Volunteer/Volunteer';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { useState } from 'react';

export default function Dashboard() {
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
            <Head title="Volunteer Dashboard" />

            <div className="flex flex-col md:flex-row">
                {/* Sidebar */}
                <Sidebar onSidebarToggle={handleSidebarToggle} />

                {/* Main Content */}
                <div
                    className={`main-content flex-1 transition-all duration-300 ${
                        isSidebarClosed ? "md:ml-20" : "md:ml-60"
                    }`}
                >
                    <div className="p-4 w-full">
                        <VolunteerAssignment />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
