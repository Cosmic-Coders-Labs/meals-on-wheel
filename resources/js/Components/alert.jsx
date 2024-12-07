import React, { useState, useEffect } from "react";

const Alert = ({ type = "info", message = "", duration = 3000, onClose }) => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
            if (onClose) onClose();
        }, duration);

        return () => clearTimeout(timer);
    }, [duration, onClose]);

    if (!visible) return null;

    const typeStyles = {
        success: "bg-green-100 border-green-500 text-green-700",
        error: "bg-red-100 border-red-500 text-red-700",
        warning: "bg-yellow-100 border-yellow-500 text-yellow-700",
        info: "bg-blue-100 border-blue-500 text-blue-700",
    };

    return (
        <div
            className={`fixed top-4 right-4 z-50 flex items-center border-l-4 p-4 rounded shadow-md ${typeStyles[type]
                }`}
        >
            <span className="flex-1">{message}</span>
            <button
                onClick={() => {
                    setVisible(false);
                    if (onClose) onClose();
                }}
                className="ml-4 text-lg font-bold"
            >
                &times;
            </button>
        </div>
    );
};

export default Alert;
