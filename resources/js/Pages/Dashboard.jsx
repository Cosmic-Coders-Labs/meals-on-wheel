import React, { useState } from "react";
import AdminDashboard from "@/Components/Admin/dashboard/dashboard";
import Sidebar from "@/Components/Sidebar/Sidebar";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

// Import other components for different pages
import UserPage from "@/Components/Admin/user/UserPage";
import MealsPage from "@/Components/Admin/meals/Meals";


export default function Dashboard() {
    const [isSidebarClosed, setIsSidebarClosed] = useState(false);
    const [activePage, setActivePage] = useState("Dashboard"); // State to track the active page

    const handleSidebarToggle = (closed) => {
        setIsSidebarClosed(closed);
    };

    // Function to render the active component based on `activePage`
    const renderActivePage = () => {
        switch (activePage) {
            case "Dashboard":
                return <AdminDashboard />;
            case "User":
                return <UserPage />;
            case "Meals":
                return <MealsPage />;
            // case "Volunteer":
            //     return <VolunteerPage />;
            // case "Partner":
            //     return <PartnerPage />;
            // case "Delivery":
            //     return <DeliveryPage />;
            // default:
            //     return <AdminDashboard />;
        }
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    {activePage}
                </h2>
            }
        >
            <Head title={activePage} />

            <div className="flex">
                {/* Sidebar */}
                <Sidebar
                    onSidebarToggle={handleSidebarToggle}
                    setActivePage={setActivePage} // Pass the setActivePage function
                />
                {/* Main Content */}
                <div
                    className={`main-content flex-1 transition-all duration-300 ${isSidebarClosed ? "ml-20" : "ml-60"
                        }`}
                >
                    <div className="p-4 w-full">{renderActivePage()}</div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
