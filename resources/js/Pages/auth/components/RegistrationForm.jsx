import { useState } from "react";
import { useForm } from "react-hook-form";
import InputField from "./InputField";
import axios from "axios";
import Alert from "../../../Components/alert";

const rolesFields = {
    member: [
        {
            id: "gender",
            label: "Gender",
            type: "select",
            options: ["male", "female", "other"],
            placeholder: "Select Gender",
        },
        { id: "birthday", label: "Birthday", type: "date", placeholder: "YYYY-MM-DD" },
        { id: "contact_number", label: "Contact Number", type: "text", placeholder: "Enter your contact number" },
        { id: "address", label: "Address", type: "text", placeholder: "Enter your address" },
        { id: "needs", label: "Needs", type: "text", placeholder: "Needs" },
        { id: "allergies", label: "Allergies", type: "text", placeholder: "Allergies (Optional)" },
    ],
    caregiver: [
        { id: "contact_number", label: "Contact Number", type: "text", placeholder: "Enter your contact number" },
        { id: "address", label: "Address", type: "text", placeholder: "Enter your address" },
    ],
    volunteer: [
        { id: "volunteer_role", label: "Volunteer Role", type: "text", placeholder: "Role" },
        {
            id: "gender",
            label: "Gender",
            type: "select",
            options: ["male", "female", "other"],
            placeholder: "Select Gender",
        },
        { id: "birthday", label: "Birthday", type: "date", placeholder: "YYYY-MM-DD" },
        { id: "contact_number", label: "Contact Number", type: "text", placeholder: "Enter your contact number" },
        { id: "address", label: "Address", type: "text", placeholder: "Enter your address" },
    ],
    partner: [
        { id: "partner_name", label: "Partner Name", type: "text", placeholder: "Partner Name" },
        { id: "partner_registered_by", label: "Registrar Name", type: "text", placeholder: "Enter your registrar name" },
        { id: "address", label: "Address", type: "text", placeholder: "Address" },
        { id: "contact_number", label: "Contact Number", type: "text", placeholder: "Enter your contact number" },
        { id: "business_license", label: "Business License", type: "text", placeholder: "License Number" },
    ],
};

const MultiStepRegistrationForm = () => {
    const [alert, setAlert] = useState(null);
    const [showPassword, setShowPassword] = useState(false);
    const [location, setLocation] = useState({ latitude: null, longitude: null }); // State for location
    const [step, setStep] = useState(1); // Step tracker
    const [selectedRole, setSelectedRole] = useState(""); // Selected role
    const [formData, setFormData] = useState({}); // Consolidate data from all steps

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const handleNext = (data) => {
        setFormData({ ...formData, ...data }); // Save current step data
        setStep(step + 1); // Go to next step
    };

    const handleBack = () => {
        setStep(step - 1); // Go to previous step
    };

    const handleFinish = async (data) => {
        // Merge all step data
        const completeData = { ...formData, latitude: location.latitude, longitude: location.longitude, ...data }; //
        // Merge all form data
        console.log(completeData);
        try {
            // API endpoint URL (replace with your Laravel backend endpoint)
            const apiUrl = "http://127.0.0.1:8000/api/register";
            // Axios POST request
            const response = await axios.post(apiUrl, completeData, {
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (response.data.status) {
                const token = response.data.token;
                localStorage.setItem("authToken", token);
                console.log("Registration successful:", response.data);
                setAlert({ type: "success", message: response.data.message });
            }

        } catch (error) {
            // Handle error response
            console.error("Error:", error.response?.data || error.message);
            setAlert({ type: "error", message: "Registration failed. Please try again." });
        }
    };

    const fetchLocation = async () => {
        try {
            const coords = await getCurrentLocation();
            setLocation(coords);
        } catch (error) {
            console.error(error);
            alert(error);
        }
    };

    const getCurrentLocation = async () => {
        return new Promise((resolve, reject) => {
            if (!navigator.geolocation) {
                reject("Geolocation is not supported by your browser");
            } else {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        const { latitude, longitude } = position.coords;
                        resolve({ latitude, longitude });
                    },
                    (error) => {
                        reject(`Unable to retrieve location: ${error.message}`);
                    }
                );
            }
        });
    };

    return (
        <div className="flex items-center justify-center my-10">
            <div className="w-full max-w-md space-y-8 p-8 bg-white border rounded-xl shadow-lg">
                {alert && (
                    <Alert
                        type={alert.type}
                        message={alert.message}
                        duration={4000}
                        onClose={() => setAlert(null)}
                    />
                )}
                {step === 1 && (
                    <form onSubmit={handleSubmit(handleNext)} className="space-y-6">
                        <h2 className="text-1xl font-bold">Enter User Credentials</h2>
                        {/* Username field */}
                        <InputField
                            id="name"
                            label="Full Name"
                            placeholder="John Doe"
                            register={register}
                            validation={{ required: "Full name is required" }}
                            errorMessage={errors.fullName?.message}
                        />
                        {/* Email Field */}
                        <InputField
                            id="email"
                            label="Email Address"
                            type="email"
                            placeholder="john@example.com"
                            register={register}
                            validation={{
                                required: "Email is required",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "Invalid email address",
                                },
                            }}
                            errorMessage={errors.email?.message}
                        />
                        {/* Password Field */}
                        <InputField
                            id="password"
                            label="Password"
                            type={showPassword ? "text" : "password"}
                            placeholder="••••••••"
                            register={register}
                            validation={{
                                required: "Password is required",
                                minLength: { value: 8, message: "Password must be at least 8 characters" },
                                pattern: {
                                    value: /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[a-z])[A-Za-z!@#$%^&*]{8,}$/,
                                    message: "Password must contain at least one capital letter and one special character",
                                },
                            }}
                            errorMessage={errors.password?.message}
                            showPasswordToggle={true}
                            onPasswordToggle={() => setShowPassword(!showPassword)}
                        />

                        {/* Location */}
                        <div>
                            <button
                                type="button"
                                className="w-full flex justify-center py-2.5 px-4 border border-gray-300 rounded-lg shadow-sm text-md font-medium text-black bg-gray-100 hover:bg-gray-200"
                                onClick={fetchLocation}
                            >
                                Get Current Location
                            </button>
                            {location.latitude && location.longitude && (
                                <p className="text-sm text-gray-500 mt-2">
                                    Location: {location.latitude}, {location.longitude}
                                </p>
                            )}
                        </div>

                        {/* Role Selection */}
                        <label htmlFor="role" className="block text-sm font-medium text-gray-700">
                            Select Role
                        </label>
                        <select
                            id="role"
                            {...register("role", { required: "Role is required" })}
                            className="block w-full px-3 py-2 border border-gray-300 rounded-md"
                            onChange={(e) => setSelectedRole(e.target.value)}
                        >
                            <option value="">Select a role</option>
                            {Object.keys(rolesFields).map((role) => (
                                <option key={role} value={role}>
                                    {role}
                                </option>
                            ))}
                        </select>
                        {errors.role && <p className="text-red-500 text-xs">{errors.role.message}</p>}
                        <button type="submit" className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-lg shadow-sm text-md font-medium text-white bg-secondary-600 active:scale-95">
                            Next
                        </button>
                    </form>
                )}

                {step === 2 && (
                    <form onSubmit={handleSubmit(handleFinish)} className="space-y-6">
                        <h2 className="text-1xl font-bold">Enter Your Information</h2>
                        {rolesFields[selectedRole]?.map((field) => (
                            <InputField
                                key={field.id}
                                id={field.id}
                                label={field.label}
                                type={field.type}
                                placeholder={field.placeholder}
                                register={register}
                                validation={{ required: `${field.label} is required` }}
                                errorMessage={errors[field.id]?.message}
                                options={field.options} // Pass options for dropdowns
                            />
                        ))}
                        <div className="flex justify-between">
                            <button type="button" onClick={handleBack} className="py-2 px-4 bg-gray-300 rounded-md">
                                Back
                            </button>
                            <button type="submit" className="flex justify-center py-2.5 px-4 border border-transparent rounded-lg shadow-sm text-md font-medium text-white bg-secondary-600 active:scale-95">
                                Finish
                            </button>
                        </div>
                    </form>
                )}

            </div>
        </div>
    );
};

export default MultiStepRegistrationForm;
