import { useForm } from "@inertiajs/react";
import { useState, useEffect } from "react";
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

const AddEditUserForm = ({ user = null }) => {
    const [alert, setAlert] = useState(null);
    const [showPassword, setShowPassword] = useState(false);
    const [selectedRole, setSelectedRole] = useState(user ? user.role : "");

    const { data, setData, post, put, processing, errors } = useForm({
        name: user ? user.name : "",
        email: user ? user.email : "",
        password: "",
        role: user ? user.role : "",
    });

    useEffect(() => {
        if (user) {
            setSelectedRole(user.role);
            setData({
                name: user.name,
                email: user.email,
                role: user.role,
            });
        }
    }, [user]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (user) {
            put(route("users.update", user.id), {
                onSuccess: () => setAlert({ type: "success", message: "User updated successfully!" }),
                onError: () => setAlert({ type: "error", message: "Update failed. Please try again." }),
            });
        } else {
            post(route("users.store"), {
                onSuccess: () => setAlert({ type: "success", message: "User added successfully!" }),
                onError: () => setAlert({ type: "error", message: "User creation failed. Please try again." }),
            });
        }
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

                <form onSubmit={handleSubmit} className="space-y-6">
                    <h2 className="text-1xl font-bold">{user ? "Edit User" : "Add User"}</h2>
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
                    {!user && (
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
                    )}

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

                    <button
                        type="submit"
                        className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-lg shadow-sm text-md font-medium text-white bg-secondary-600 active:scale-95"
                    >
                        {user ? "Save Changes" : "Add User"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddEditUserForm;
