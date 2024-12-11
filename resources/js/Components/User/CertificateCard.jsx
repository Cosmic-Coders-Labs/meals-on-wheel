import React from "react";

const CertificateCard = ({ title, subtitle, date, status, image, onRemove }) => {
    return (
        <div className="bg-white shadow rounded-lg overflow-hidden relative">
            {/* Image Section */}
            <div className="relative">
                <img src={image} alt={title} className="w-full h-40 object-cover" />
                <img
                    src={image}
                    alt={title}
                    className={`w-full h-full object-cover max-h-20 transition-opacity duration-500`}
                />
                <button
                    className="absolute top-2 right-2 bg-white text-gray-600 rounded-full p-1 shadow hover:bg-gray-100"
                    onClick={onRemove}
                >
                    ✕
                </button>
            </div>

            {/* Content Section */}
            <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
                <p className="text-sm text-gray-600">{subtitle}</p>

                <div className="flex items-center justify-between mt-4">
                    <span className="text-sm text-gray-500">{date}</span>
                    <span
                        className={`px-3 py-1 text-xs font-semibold rounded-full ${status === "Approved"
                                ? "bg-green-100 text-green-600"
                                : "bg-gray-100 text-gray-600"
                            }`}
                    >
                        {status}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default CertificateCard;
