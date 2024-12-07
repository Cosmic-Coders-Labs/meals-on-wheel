import React, { useState } from "react";
import CertificateCard from "./CertificateCard";
import CertificateFormModal from "./CertificateFormModal";

const Partner = () => {
    const [certificates, setCertificates] = useState([
        {
            id: 1,
            title: "Certification",
            subtitle: "Subtitle",
            date: "Dec 22, 2022",
            status: "Approved",
            image: "https://via.placeholder.com/150", // Replace with the actual image URL
        },
    ]);

    const [isModalOpen, setIsModalOpen] = useState(false);

    // Handle Add Certificate
    const handleAddCertificate = (newCertificate) => {
        setCertificates((prev) => [
            ...prev,
            { ...newCertificate, id: Date.now() }, // Generate a unique ID
        ]);
    };

    // Handle Certificate Removal
    const handleRemoveCertificate = (id) => {
        setCertificates((prev) => prev.filter((cert) => cert.id !== id));
    };

    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Certificate</h2>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                >
                    Add Certificate
                </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {certificates.map((cert) => (
                    <CertificateCard
                        key={cert.id}
                        title={cert.title}
                        subtitle={cert.subtitle}
                        date={cert.date}
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
            />
        </div>
    );
};

export default Partner;
