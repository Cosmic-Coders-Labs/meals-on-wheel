import React, { useState, useEffect } from "react";
import Dropdown from "@/Components/Dropdown";
import ReusableTable from "@/Components/Table";
import DashboardHeader from "@/Components/DashboardHeader";
import { fetchMeals, addMeal, editMeal, rejectMeal, getMe, fetchPartners, capitalize, rejectPartner, updateUserStatus } from "@/Utils/utils";
import MealFormModal from "@/Components/Forms/MealForm";
import PartnerDetailModal from "./PartnerDetailsModal";

const PartnerPage = () => {
    const [partners, setPartners] = useState([]);
    const [selectPartner, setSelectPartner] = useState(null);
    const [currentUser, setCurrentUser] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [modalType, setModalType] = useState("");
    const [showProfileDetailModal, setShowProfileDetailModal] = useState(false);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(0);

    const getPartners = async () => {
        try {
            const data = await fetchPartners();
            setPartners(data);
            const user = await getMe();
            setCurrentUser(user);
        } catch (error) {
            console.error("Failed to fetch partners.");
        }
        setLoading(false);
    };

    useEffect(() => {
        getPartners();
    }, []);

    // Handle actions for dropdown
    const handleAction = async (action, partner) => {
        if (action === "View") {
            setSelectPartner(partner);
            setShowProfileDetailModal(true);
        } else if (action === "Reject") {
            if (window.confirm(`Are you sure you want to reject the partner "${partner.partner_name}"?`)) {
                try {
                    await updateUserStatus(partner.user.id, "rejected");
                    getPartners();
                    alert(`Partner "${partner.partner_name}" rejected successfully.`);
                } catch (error) {
                    console.error("Failed to reject partner:", error);
                    alert("Failed to reject partner. Please try again.");
                }
            }
        } else if (action === "Approve") {
            if (window.confirm(`Are you sure you want to approve the partner "${partner.partner_name}"?`)) {
                try {
                    await updateUserStatus(partner.user.id, "active");
                    getPartners();
                    alert(`Partner "${partner.partner_name}" approval successfully.`);
                } catch (error) {
                    alert("Failed to approval partner. Please try again.");
                }
            }
        };
    };

    // Table headers and data mapping
    const tableHeaders = ['ID', 'Name', 'Age', 'Business Type', 'Address', 'Status', 'Actions'];
    const options = ['View', 'Reject', 'Approve'];

    const tableData = partners.map(partner => [
        partner.partner_id,
        partner.user?.profile?.first_name + " " + partner.user?.profile?.last_name || 'N/A',
        partner.user?.profile?.age || 'N/A',
        partner.business_type || 'N/A',
        partner.user?.profile?.address || 'N/A',
        capitalize(partner.user?.status),
        <Dropdown
            options={options}
            disabled={false}
            onSelect={(action) => handleAction(action, partner)}
        />,
    ]);

    return (
        <div className="bg-white p-6 rounded-lg shadow">
            <DashboardHeader
                title="Partners Approval"
                actions={[]}
            />

            <div className="mt-6">
                {loading ? (
                    <div>Loading...</div>
                ) : partners.length > 0 ? (
                    <ReusableTable headers={tableHeaders} data={tableData} page={page} setPage={setPage} showPagination={true} reverse={false} />
                ) : (
                    <div>No Partner found.</div>
                )}
            </div>

            {showProfileDetailModal && (
                <PartnerDetailModal
                    partner={selectPartner}
                    onClose={() => setShowProfileDetailModal(false)}
                />
            )}

        </div>
    );
};

export default PartnerPage;
