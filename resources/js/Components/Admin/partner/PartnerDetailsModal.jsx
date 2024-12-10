import React from "react";

const PartnerDetailModal = ({ partner, onClose }) => {
    if (!partner) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg w-3/4 max-w-lg p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Partner Details</h2>

                {/* Grid Layout */}
                <div className="grid grid-cols-2 gap-4">
                    {/* Partner Information */}
                    <div className="col-span-2">
                        <h3 className="text-lg font-bold text-gray-800">Partner Information</h3>
                    </div>
                    <div>
                        <p className="font-bold text-gray-700">Partner Name:</p>
                        <p className="text-gray-600">{partner.partner_name}</p>
                    </div>
                    <div>
                        <p className="font-bold text-gray-700">Registered By:</p>
                        <p className="text-gray-600">{partner.partner_registered_by}</p>
                    </div>
                    <div>
                        <p className="font-bold text-gray-700">Address:</p>
                        <p className="text-gray-600">{partner.address}</p>
                    </div>
                    <div>
                        <p className="font-bold text-gray-700">Business License:</p>
                        <p className="text-gray-600">{partner.business_license}</p>
                    </div>
                    <div>
                        <p className="font-bold text-gray-700">Business Type:</p>
                        <p className="text-gray-600">{partner.business_type}</p>
                    </div>

                    {/* User Information */}
                    <div className="col-span-2 mt-4">
                        <h3 className="text-lg font-bold text-gray-800">User Information</h3>
                    </div>
                    <div>
                        <p className="font-bold text-gray-700">Name:</p>
                        <p className="text-gray-600">{`${partner.user?.profile?.first_name} ${partner.user?.profile?.last_name}`}</p>
                    </div>
                    <div>
                        <p className="font-bold text-gray-700">Email:</p>
                        <p className="text-gray-600">{partner.user?.email}</p>
                    </div>
                    <div>
                        <p className="font-bold text-gray-700">Contact Number:</p>
                        <p className="text-gray-600">{partner.user?.profile?.contact_number}</p>
                    </div>
                    <div>
                        <p className="font-bold text-gray-700">Age:</p>
                        <p className="text-gray-600">{partner.user?.profile?.age || "N/A"}</p>
                    </div>
                    <div>
                        <p className="font-bold text-gray-700">Gender:</p>
                        <p className="text-gray-600">{partner.user?.profile?.gender || "N/A"}</p>
                    </div>
                    <div>
                        <p className="font-bold text-gray-700">Status:</p>
                        <p className="text-gray-600 capitalize">{partner.user?.status}</p>
                    </div>
                </div>

                {/* Close Button */}
                <div className="mt-6 text-right">
                    <button
                        className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                        onClick={onClose}
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PartnerDetailModal;
