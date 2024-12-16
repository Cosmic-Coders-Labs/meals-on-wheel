import React, { useState, useEffect } from "react";
import axios from "axios";
import CertificateCard from "./CertificateCard";
import CertificateFormModal from "./CertificateFormModal";
import { addCertificates, deleteCertificatesByID, fetchCertificatesByID, getMe, getUserById } from "@/Utils/utils";

const PartnerPage = () => {
    const [certificates, setCertificates] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [loading, setLoading] = useState(true);
    const [myUserData, setMyUserData] = useState({});

    // Fetch certificates from the API
    const fetchCertificates = async () => {
        setLoading(true);
        try {
            const myProfile = await getMe();
            const userData = await getUserById(myProfile.id);
            const response = await fetchCertificatesByID(userData.partner_id);
            setMyUserData(userData);
            setCertificates(response);
        } catch (error) {
            console.error("Error fetching certificates:", error);
            alert("Failed to load certificates.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCertificates();
    }, []);

    // Handle Add Certificate
    const handleAddCertificate = async () => {
        const response = await fetchCertificatesByID(myUserData.partner_id);
        window.location.reload();
    };

    // Handle Remove Certificate
    const handleRemoveCertificate = async (id) => {
        const isConfirmed = window.confirm("Are you sure you want to delete this certificate?");
        if (!isConfirmed) return;

        try {
            await deleteCertificatesByID(id);
            alert("Certificate removed successfully.");
            window.location.reload();
        } catch (error) {
            console.error("Error removing certificate:", error);
            alert("Failed to remove certificate.");
            window.location.reload();
        }
    };

    if (loading) {
        return <div className="text-center py-10">Loading certificates...</div>;
    }

    return (
        <div className="p-6">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Certificates</h2>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                >
                    Add Certificate
                </button>
            </div>

            {/* Certificates Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {certificates.map((cert) => (
                    <CertificateCard
                        key={cert.id}
                        title={cert.title}
                        subtitle={cert.subtitle}
                        date={cert.expire_date}
                        status={cert.status}
                        image={cert.image}
                        onRemove={() => handleRemoveCertificate(cert.id)}
                    />
                ))}
            </div>

            {/* Add Certificate Modal */}
            <CertificateFormModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSave={handleAddCertificate}
                myID={myUserData.partner_id}
            />
        </div>
    );
};

export default PartnerPage;
