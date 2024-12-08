import { useForm } from "@inertiajs/react";
import { useState } from "react";
import InputField from "./InputField";
import Alert from "./Alert";

const rolesFields = {
    member: [
        { id: "gender", label: "Gender", type: "select", options: ["male", "female", "other"], placeholder: "Select Gender" },
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
        { id: "gender", label: "Gender", type: "select", options: ["male", "female", "other"], placeholder: "Select Gender" },
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
    const [location, setLocation] = useState({ latitude: null, longitude: null });
    const [step, setStep] = useState(1);
    const [selectedRole, setSelectedRole] = useState("");

    const { data, setData, post, processing, errors } = useForm({
        name: "",
        email: "",
        password: "",
        role: "",
    });

    const handleNext = (e) => {
        e.preventDefault();
        if (step === 1) {
            setStep(step + 1);
        }
    };

    const handleBack = () => setStep(step - 1);

    const fetchLocation = async () => {
        try {
            const coords = await getCurrentLocation();
            console.log("Fetched Coordinates:", coords);
            setData((prevData) => ({
                ...prevData,
                latitude: coords.latitude,
                longitude: coords.longitude,
            }));
        } catch (error) {
            console.error("Error fetching location:", error);
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
                        setData("latitude", latitude);
                        setData("longitude", longitude);
                        resolve({ latitude, longitude });
                    },
                    (error) => {
                        reject(`Unable to retrieve location: ${error.message}`);
                    }
                );
            }
        });
    };


    const handleFinish = (e) => {
        e.preventDefault();
        if (!data.latitude || !data.longitude) {
            fetchLocation()
        }
        post(route("register"), {
            onSuccess: () => setAlert({ type: "success", message: "Registration successful!" }),
            onError: () => setAlert({ type: "error", message: "Registration failed. Please try again." }),
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
                    <form onSubmit={handleNext} className="space-y-6">
                        <h2 className="text-1xl font-bold">Enter User Credentials</h2>
                        <InputField
                            id="name"
                            label="Full Name"
                            placeholder="John Doe"
                            value={data.name}
                            onChange={(e) => setData("name", e.target.value)}
                            errorMessage={errors.name}
                        />
                        <InputField
                            id="email"
                            label="Email Address"
                            type="email"
                            placeholder="john@example.com"
                            value={data.email}
                            onChange={(e) => setData("email", e.target.value)}
                            errorMessage={errors.email}
                        />
                        <InputField
                            id="password"
                            label="Password"
                            type={showPassword ? "text" : "password"}
                            placeholder="••••••••"
                            value={data.password}
                            onChange={(e) => setData("password", e.target.value)}
                            errorMessage={errors.password}
                            showPasswordToggle={true}
                            onPasswordToggle={() => setShowPassword(!showPassword)}
                        />

                        <label htmlFor="role" className="block text-sm font-medium text-gray-700">
                            Select Role
                        </label>
                        <select
                            id="role"
                            value={data.role}
                            onChange={(e) => {
                                setData("role", e.target.value);
                                setSelectedRole(e.target.value);
                            }}
                            className="block w-full px-3 py-2 border border-gray-300 rounded-md"
                        >
                            <option value="">Select a role</option>
                            {Object.keys(rolesFields).map((role) => (
                                <option key={role} value={role}>
                                    {role}
                                </option>
                            ))}
                        </select>
                        {errors.role && <p className="text-red-500 text-xs">{errors.role}</p>}

                        <button
                            type="submit"
                            className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-lg shadow-sm text-md font-medium text-white bg-secondary-600 active:scale-95"
                        >
                            Next
                        </button>
                    </form>
                )}

                {step === 2 && (
                    <form onSubmit={handleFinish} className="space-y-6">
                        <h2 className="text-1xl font-bold">Enter Your Information</h2>
                        {rolesFields[selectedRole]?.map((field) => (
                            <InputField
                                key={field.id}
                                id={field.id}
                                label={field.label}
                                type={field.type}
                                placeholder={field.placeholder}
                                options={field.options}
                                value={data[field.id] || ""}
                                onChange={(e) => setData(field.id, e.target.value)}
                                errorMessage={errors[field.id]}
                            />
                        ))}
                        <div className="flex justify-between">
                            <button
                                type="button"
                                onClick={handleBack}
                                className="py-2 px-4 bg-gray-300 rounded-md"
                            >
                                Back
                            </button>
                            <button
                                type="submit"
                                className="flex justify-center py-2.5 px-4 border border-transparent rounded-lg shadow-sm text-md font-medium text-white bg-secondary-600 active:scale-95"
                            >
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
