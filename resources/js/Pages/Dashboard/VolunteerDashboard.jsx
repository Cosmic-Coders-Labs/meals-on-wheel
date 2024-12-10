import React, { useEffect, useState } from "react";
import Sidebar from "@/Components/Sidebar/Sidebar";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import MealsPage from "@/Components/Admin/meals/Meals";
import { fetchProfile, getMyRole } from "@/Utils/utils";
import { pageAccess } from "@/Utils/PageAccess";
import useActivePage from "@/Utils/useActivePage";
import ProfilePage from "@/Components/Profile/ProfilePage";
import Partner from "@/Components/User/Partner";
import VolunteerAssignmentsPage from "@/Components/Volunteer/dashboard";
import AvailableTasksPage from "@/Components/Volunteer/AvailableTasksPage";

export default function VolunteerDashboard() {
    const [isSidebarClosed, setIsSidebarClosed] = useState(false);
    const [activePage, setActivePage] = useActivePage();
    const [userRole, setUserRole] = useState(null);
    const [userData, setUserData] = useState({});

    useEffect(() => {
        const getUserDataFunc = async () => {
            try {
                const data = await getMyRole();
                const userDataResponse = await fetchProfile(data.user.id);
                setUserData(userDataResponse);
                setUserRole(data.role[0]);
            } catch (error) {
                setError("Failed to fetch user data.");
            }
        };
        getUserDataFunc();
    }, []);

    const handleSidebarToggle = (closed) => {
        setIsSidebarClosed(closed);
    };

    useEffect(() => {
        if (!activePage || !pageAccess[activePage]?.includes(userRole)) {
            setActivePage("My Tasks");
        }
    }, [activePage, userRole]);

    // Function to render the active component based on `activePage` and role
    const renderActivePage = () => {
        switch (activePage) {
            case "Tasks":
                return <AvailableTasksPage />;
            case "My Tasks":
                return <VolunteerAssignmentsPage />;
            case "Profile":
                return <ProfilePage userData={userData} />

            default:
                return (
                    <div className="text-center text-gray-500 font-bold p-10">
                        Page Not Found
                    </div>
                );
        }
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Dashboard
                </h2>
            }
        >
            <Head title="My Certificates" />

            <div className="flex">
                {/* Sidebar */}
                <Sidebar
                    onSidebarToggle={handleSidebarToggle}
                    activePage={activePage}
                    setActivePage={setActivePage}
                    role={userRole}
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
