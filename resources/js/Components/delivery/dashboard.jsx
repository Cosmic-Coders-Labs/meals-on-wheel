import React, { useState, useEffect } from "react";
import { fetchOrdersByMemberID, fetchProfiles, getMe, getUserById } from "@/Utils/utils";
import DeliveryTracking from "./DeliveryTrack";
import DeliveryInfo from "./DeliveryInfo";

const DeliveryPage = () => {
    const [orders, setOrders] = useState([]);
    const [profiles, setProfiles] = useState([]);
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [showOrderDetailModal, setShowOrderDetailModal] = useState(false);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(0);

    // Fetch profiles and orders on mount
    useEffect(() => {
        const fetchData = async () => {
            try {
                const profilesData = await fetchProfiles();
                const myProfile = await getMe();
                const myUserData = await getUserById(myProfile.id);
                const ordersData = await fetchOrdersByMemberID(myUserData.member_id);
                console.log(ordersData);
                setProfiles(profilesData);
                setOrders(ordersData);

            } catch (error) {
                console.error("Error fetching data:", error);
            }
            setLoading(false);
        };
        fetchData();
    }, []);


    if (loading) {
        return <div className="text-center py-10">Loading Maps...</div>;
    }

    if (!orders[0]) {
        return (
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-[500px] text-center">
                <h2 className="text-xl font-semibold text-gray-700">No orders yet</h2>
                <p className="text-gray-500">Your order details will appear here when available.</p>
            </div>
        );
    }

    return (
        <div className="p-6 flex flex-wrap items-center justify-center space-x-3 space-y-3 gap-4">

            <DeliveryInfo order={orders[0]} />
            <DeliveryTracking orderId={1} />
        </div>
    );
};

export default DeliveryPage;
