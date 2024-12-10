import React, { useEffect, useState } from "react";
import Sidebar from "@/Components/Sidebar/Sidebar";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { fetchProfile, getMyRole } from "@/Utils/utils";
import { pageAccess } from "@/Utils/PageAccess";
import useActivePage from "@/Utils/useActivePage";
import ProfilePage from "@/Components/Profile/ProfilePage";
import CaregiverPage from "@/Components/Caregiver/dashboard";
import CaregiverAssignmentPage from "@/Components/Caregiver/CaregiverAssignmentPage";

export default function CaregiverDashboard() {
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

    // Function to render the active component based on `activePage` and role
    const renderActivePage = () => {
        if (!activePage && !pageAccess[activePage]?.includes(userRole)) {
            setActivePage("Member Management");
        }
        switch (activePage) {
            case "Member Management":
                return <CaregiverPage />;
            case "Member Assignment":
                return <CaregiverAssignmentPage />;
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
                    {activePage}
                </h2>
            }
        >
            <Head title={activePage} />

            <div className="flex">
                {/* Sidebar */}
                <Sidebar
                    onSidebarToggle={handleSidebarToggle}
                    activePage={activePage}
                    setActivePage={setActivePage} // Pass the setActivePage function
                    role={userRole} // Pass the role to Sidebar
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
