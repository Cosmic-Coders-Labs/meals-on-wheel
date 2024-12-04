import { Link } from "@inertiajs/react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";

// Reusable Input Field Component
const InputField = ({
  id,
  label,
  type = "text",
  placeholder,
  register,
  validation,
  errorMessage,
  showPasswordToggle = false,
  onPasswordToggle,
}) => {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="mt-1 relative">
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          {...register(id, validation)}
          className={`appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary ${
            errorMessage ? "border-red-500" : ""
          }`}
        />
        {showPasswordToggle && (
          <button
            type="button"
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-500"
            onClick={onPasswordToggle}
          >
            {type === "password" ? (
              <HiOutlineEye className="h-5 w-5" aria-hidden="true" />
            ) : (
              <HiOutlineEyeOff className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        )}
      </div>
      {errorMessage && <p className="text-red-500 text-xs">{errorMessage}</p>}
    </div>
  );
};

const RegistrationForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [location, setLocation] = useState({ latitude: null, longitude: null }); // State for location
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password");

  const fetchLocation = async () => {
    try {
      const coords = await getCurrentLocation();
      setLocation(coords);
      console.log("Location fetched:", coords);
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

  const handleRegistration = (data) => {
    console.log({ ...data, lat: location.latitude, lon: location.longitude }); // Include location in form data
    // Add your registration logic here
  };

  return (
    <div className="flex items-center justify-center my-10">
      <div className="w-full max-w-md space-y-8 p-8 bg-white border rounded-xl shadow-lg">
        {/* Header */}
        <div className="text-center">
          <h2 className="mt-3 text-3xl font-bold text-secondary-500">Welcome</h2>
          <p className="mt-2 text-sm text-gray-600">Please create an account</p>
        </div>

        {/* Form */}
        <form
          className="mt-8 space-y-6"
          onSubmit={handleSubmit(handleRegistration)}
        >
          <div className="space-y-4">
            {/* Full Name Field */}
            <InputField
              id="fullName"
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

            {/* Confirm Password Field */}
            <InputField
              id="confirmPassword"
              label="Confirm Password"
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              register={register}
              validation={{
                required: "Please confirm your password",
                validate: (value) =>
                  value === password || "Passwords do not match",
              }}
              errorMessage={errors.confirmPassword?.message}
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
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-lg shadow-sm text-md font-medium text-white bg-secondary-600 active:scale-95"
            >
              Sign Up
            </button>
          </div>

          {/* Register Link */}
          <div className="text-center text-sm">
            <span className="text-gray-600">Already have an account?</span>{" "}
            <a
              href="/member/login"
              className="font-medium text-primary underline hover:text-primary/90"
            >
              Login Here
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
