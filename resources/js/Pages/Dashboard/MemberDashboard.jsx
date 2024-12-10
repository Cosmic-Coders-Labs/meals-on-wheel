
import DeliveryPage from '@/Components/delivery/dashboard';
import MyOrderPage from '@/Components/Member/dashboard';
import ProfilePage from '@/Components/Profile/ProfilePage';
import Sidebar from '@/Components/Sidebar/Sidebar';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { pageAccess } from '@/Utils/PageAccess';
import useActivePage from '@/Utils/useActivePage';
import { fetchProfile, getMyRole } from '@/Utils/utils';
import { Head } from '@inertiajs/react';
import { useEffect, useState } from 'react';

export default function MemberDashboard() {
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

    useEffect(() => {
        if (!activePage || !pageAccess[activePage]?.includes(userRole)) {
            setActivePage("My Orders");
        }
    }, [activePage]);
    const handleSidebarToggle = (closed) => {
        setIsSidebarClosed(closed);
    };

    const renderActivePage = () => {

        switch (activePage) {
            case "My Orders":
                return <MyOrderPage />;
            case "Delivery":
                return <DeliveryPage />;
            case "Profile":
                return <ProfilePage userData={userData} />
            default:
                return (
                    <div className="text-center text-gray-500 font-bold p-10">
                        Page Not Found
                    </div>
                );
        };
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Member Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

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
