import React, { useState, useEffect } from "react";
import Dropdown from "@/Components/Dropdown";
import ReusableTable from "@/Components/Table";
import DashboardHeader from "@/Components/DashboardHeader";
import { fetchDonationById, getMe, getUserById } from "@/Utils/utils";
import { router } from "@inertiajs/react";


const DonationPage = () => {
    const [donations, setDonations] = useState([]);
    const [showDonationDetailModal, setShowDonationDetailModal] = useState(false);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(0);

    // Fetch profiles and orders on mount
    useEffect(() => {
        const fetchData = async () => {
            try {
                const myProfile = await getMe();
                const userResponse = await getUserById(myProfile.id);
                const donationData = await fetchDonationById(userResponse.donor_id);
                setDonations(donationData);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
            setLoading(false);
        };
        fetchData();
    }, [donations]);

    // Handle dropdown actions
    const handleAction = async (action, order) => {
        if (action === "View") {
            setSelectedOrder(order);
            setShowDonationDetailModal(true);
        }
    };

    // Table headers and data
    const tableHeaders = ["Donation ID", "Currency", "Amount", "Status", "Message", "Transaction Date"];


    const tableData = donations.map((donation) => [
        donation.donation_id,
        donation.currency,
        donation.amount,
        donation.status,
        donation.message,
        donation.created_at
    ]);

    return (
        <div className="bg-white p-6 rounded-lg shadow">
            <DashboardHeader
                title="My Donations"
                actions={[
                    {
                        label: "Make Donation",
                        onClick: () => {
                            router.visit(route('donation'))
                        },
                        color: "bg-blue-500 hover:bg-blue-600",
                    },
                ]}
            />

            <div className="mt-6">
                {loading ? (
                    <div>Loading...</div>
                ) : donations.length > 0 ? (
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

            {showDonationDetailModal && (
                // <MemberOrderDetailModal
                //     order={selectedOrder}
                //     onClose={() => setShowDonationDetailModal(false)}
                // />
                <h3>hi</h3>
            )}
        </div>
    );
};

export default DonationPage;
