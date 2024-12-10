import React, { useState } from "react";
import MediaLibraryAttachment from "../MediaLibraryAttachment"; // Assuming you have a similar reusable component

const CertificateFormModal = ({ isOpen, onClose, onSave, myID }) => {
    const [formData, setFormData] = useState({
        title: "",
        subtitle: "",
        date: "",
        image: null,
        partner_id: myID,
    });

    // Handle Input Change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // Handle File Input
    const handleFileChange = (file) => {
        setFormData((prev) => ({
            ...prev,
            image: file,
        }));
    };

    // Handle Form Submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        const newFormData = new FormData();
        newFormData.append("title", formData.title);
        newFormData.append("subtitle", formData.subtitle);
        newFormData.append("expire_date", formData.date);
        newFormData.append("partner_id", formData.partner_id);
        newFormData.append("status", "pending");
        if (formData.image) {
            newFormData.append("image", formData.image);
        }

        try {
            const response = await axios.post(
                "http://127.0.0.1:8000/api/certificates",
                newFormData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );
            alert("Certificate added successfully!");
            setFormData({
                title: "",
                subtitle: "",
                date: "",
                status: "Pending",
                image: null,
                partner_id: myID,
            });
            onClose();
            onSave();
        } catch (error) {
            console.error("Error uploading certificate:", error);
            alert("Failed to save certificate. Please try again.");
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Add Certificate</h3>
                <form onSubmit={handleSubmit}>
                    {/* Title */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Title</label>
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    </div>

                    {/* Subtitle */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Subtitle</label>
                        <input
                            type="text"
                            name="subtitle"
                            value={formData.subtitle}
                            onChange={handleChange}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    </div>

                    {/* Date */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Date</label>
                        <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    </div>

                    {/* Image */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Image</label>
                        <MediaLibraryAttachment
                            name="fileUpload"
                            initialValue={null}
                            validationRules={{ maxSizeInKB: 2048, acceptedTypes: ["image/jpeg", "image/png"] }}
                            onFileChange={handleFileChange}
                        />
                        {formData.image && <p className="mt-2 text-green-600">Image uploaded successfully.</p>}
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-end space-x-2">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CertificateFormModal;
