import { capitalize } from "@/Utils/utils";
import React, { useState, useEffect, useRef } from "react";

const Dropdown = ({
    options = [],
    disabled = false,
    defaultValue = "", // New prop for default value
    onSelect = () => { },
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(defaultValue || options[0] || "");
    const dropdownRef = useRef(null);

    // Update selectedOption if defaultValue changes after initial render
    useEffect(() => {
        if (defaultValue && defaultValue !== selectedOption) {
            setSelectedOption(defaultValue);
        }
    }, [defaultValue, selectedOption]);

    // Close the dropdown if clicked outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    // Toggle dropdown visibility
    const toggleDropdown = () => {
        if (!disabled) setIsOpen(!isOpen);
    };

    // Handle option click
    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
        onSelect(option); // Pass selected option to parent
    };

    return (
        <div className="relative dropdown" ref={dropdownRef}>
            {/* Input/Button */}
            <div
                className={`relative w-36 h-9 flex items-center px-3 pr-9 text-sm font-medium rounded-md border transition ${disabled
                    ? "bg-white border-gray-300 text-gray-800 cursor-not-allowed"
                    : "bg-white border-gray-400 text-gray-900 hover:border-gray-500 focus-within:border-gray-600"
                    }`}
                tabIndex={0}
                onClick={toggleDropdown}
            >
                {selectedOption || "Select"} {/* Show selected or placeholder */}
                <svg
                    className={`absolute w-4 h-4 right-3 transform transition-transform ${isOpen ? "rotate-180" : "rotate-0"
                        } ${disabled ? "fill-gray-800" : "fill-gray-900"}`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fillRule="evenodd"
                        d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L10 6.414l-3.293 3.293a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                    />
                </svg>
            </div>

            {/* Dropdown Options */}
            {isOpen && !disabled && (
                <ul className="absolute top-10 left-0 z-10 w-36 bg-white border border-gray-300 rounded-md shadow-md">
                    {options.map((option, index) => (
                        <li
                            key={index}
                            className="px-3 py-2 text-sm text-gray-900 cursor-pointer hover:bg-gray-100"
                            onClick={() => handleOptionClick(option)}
                        >
                            {capitalize(option)}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Dropdown;
