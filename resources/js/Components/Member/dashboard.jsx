import React, { useState, useEffect } from "react";
import Dropdown from "@/Components/Dropdown";
import ReusableTable from "@/Components/Table";
import DashboardHeader from "@/Components/DashboardHeader";
import { fetchProfiles, fetchOrdersByCaregiver, getMe, getUserById, fetchOrdersByMemberID } from "@/Utils/utils";
import MemberOrderDetailModal from "./OrderDetail";
import { router } from "@inertiajs/react";



const MyOrderPage = () => {
    const [orders, setOrders] = useState([]);
    const [profiles, setProfiles] = useState([]);
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [showOrderDetailModal, setShowOrderDetailModal] = useState(false);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const profilesData = await fetchProfiles();
                const myProfile = await getMe();
                const myUserData = await getUserById(myProfile.id);
                const ordersData = await fetchOrdersByMemberID(myUserData.member_id);
                setProfiles(profilesData);
                setOrders(ordersData);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
            setLoading(false);
        };
        fetchData();
    }, []);

    // Get member details by ID
    const getMemberDetails = (userId, field) => {
        const profile = profiles.find((profile) => profile.user_id === userId);
        return profile ? profile[field] || "N/A" : "Unknown User";
    };

    // Handle dropdown actions
    const handleAction = async (action, order) => {
        if (action === "View") {
            setSelectedOrder(order);
            setShowOrderDetailModal(true);
        }
    };

    // Table headers and data
    const tableHeaders = ["Member Name", "Age", "Order ID", "Order Status", "Needs", "Actions"];
    const actions = ["View"];

    const tableData = orders.map((order) => [
        getMemberDetails(order.member?.user_id, "first_name") +
        " " +
        getMemberDetails(order.member?.user_id, "last_name"),
        getMemberDetails(order.member?.user_id, "age"),
        order.order_id,
        order.status,
        order.member?.needs || "None",
        <Dropdown
            options={actions}
            disabled={false}
            onSelect={(action) => handleAction(action, order)}
        />,
    ]);

    return (
        <div className="bg-white p-6 rounded-lg shadow">
            <DashboardHeader
                title="My Orders"
                actions={[
                    {
                        label: "Create Order",
                        onClick: () => {
                            router.visit(route('getmeal'))
                        },
                        color: "bg-blue-500 hover:bg-blue-600",
                    },
                ]}
            />

            <div className="mt-6">
                {loading ? (
                    <div>Loading...</div>
                ) : orders.length > 0 ? (
                    <ReusableTable
                        headers={tableHeaders}
                        data={tableData}
                        page={page}
                        setPage={setPage}
                        showPagination={true}
                        reverse={false}
                    />
                ) : (
                    <div>No orders found.</div>
                )}
            </div>
            {showOrderDetailModal && (
                <MemberOrderDetailModal
                    order={selectedOrder}
                    onClose={() => setShowOrderDetailModal(false)}
                />
            )}
        </div>
    );
};

export default MyOrderPage;
