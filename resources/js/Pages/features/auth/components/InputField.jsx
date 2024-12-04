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

export default InputField;
