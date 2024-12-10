import React, { useState } from "react";

const MediaLibraryAttachment = ({
    name,
    initialValue,
    validationRules = { maxSizeInKB: 1024, acceptedTypes: ["image/jpeg", "image/png"] },
    validationErrors,
    onFileChange,
}) => {
    const [file, setFile] = useState(initialValue);
    const [dragging, setDragging] = useState(false);

    // File validation function
    const validateFile = (file) => {
        const { maxSizeInKB, acceptedTypes } = validationRules;
        if (file.size > maxSizeInKB * 1024) {
            return `File size exceeds the maximum limit of ${maxSizeInKB} KB.`;
        }
        if (!acceptedTypes.includes(file.type)) {
            return `Invalid file type. Accepted types: ${acceptedTypes.join(", ")}.`;
        }
        return null; // No validation errors
    };

    const handleFileChange = (file) => {
        const validationError = validateFile(file);
        if (validationError) {
            alert(validationError);
            setFile(null);
            onFileChange(null);
        } else {
            setFile(file);
            onFileChange(file);
        }
    };

    // Handle drag and drop events
    const handleDragOver = (e) => {
        e.preventDefault();
        setDragging(true);
    };

    const handleDragLeave = (e) => {
        e.preventDefault();
        setDragging(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setDragging(false);

        const droppedFile = e.dataTransfer.files[0];
        if (droppedFile) {
            handleFileChange(droppedFile);
        }
    };

    // Handle file selection via input
    const handleInputChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            handleFileChange(selectedFile);
        }
    };

    return (
        <div
            className={`border-2 rounded-lg p-6 text-center cursor-pointer transition-all duration-300 ${dragging
                    ? "border-blue-500 bg-blue-100"
                    : "border-gray-300 hover:border-blue-500"
                }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
        >
            <input
                type="file"
                name={name}
                id={name}
                style={{ display: "none" }}
                onChange={handleInputChange}
            />
            <label htmlFor={name} className="block text-gray-500">
                Drag & drop a file here, or <span className="text-blue-500 underline">click to select one</span>
            </label>
            {file && (
                <p className="mt-2 text-sm text-green-500">
                    Selected file: <span className="font-medium">{file.name}</span>
                </p>
            )}
            {validationErrors && (
                <span className="block mt-2 text-sm text-red-500">
                    {Array.isArray(validationErrors)
                        ? validationErrors.join(", ")
                        : validationErrors}
                </span>
            )}
        </div>
    );
};

export default MediaLibraryAttachment;
