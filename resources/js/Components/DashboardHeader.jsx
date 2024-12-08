// src/components/DashboardHeader.jsx

import React from "react";

const DashboardHeader = ({ title, actions }) => {
    return (
        <div className="flex justify-between items-center py-4 border-b border-gray-200">
            {/* Header Title */}
            <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>

            {/* Action Buttons */}
            <div className="flex space-x-3">
                {actions.map((action, index) => (
                    <button
                        key={index}
                        onClick={action.onClick}
                        className={`px-4 py-2 rounded shadow-sm font-medium ${action.color
                            ? `${action.color} text-white`
                            : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                            }`}
                    >
                        {action.label}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default DashboardHeader;
