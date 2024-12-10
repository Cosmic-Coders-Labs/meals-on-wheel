import React from "react";
import { MdClose, MdOutlineReceipt, MdPerson, MdFastfood, MdAssignment } from "react-icons/md";

const MemberOrderDetailModal = ({ order, onClose }) => {
    if (!order) return null;

    const {
        order_id,
        status,
        total_price,
        order_date,
        delivery_date,
        special_instructions,
        rejection_reason,
        created_at,
        updated_at,
        member,
        meal,
        caregiver,
        tasks,
    } = order;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-3/4 max-h-[80vh] overflow-y-auto">
                {/* Header */}
                <div className="flex justify-between items-center border-b pb-4 mb-4">
                    <div className="flex items-center space-x-2">
                        <MdOutlineReceipt className="text-blue-500 text-3xl" />
                        <h2 className="text-2xl font-bold">Order Details</h2>
                    </div>
                    <button
                        className="text-red-500 font-bold text-2xl hover:text-red-700"
                        onClick={onClose}
                    >
                        <MdClose />
                    </button>
                </div>

                {/* Order Information */}
                <div className="grid grid-cols-2 gap-6 mb-6">
                    <div>
                        <strong className="text-gray-600">Order ID:</strong> {order_id}
                    </div>
                    <div>
                        <strong className="text-gray-600">Status:</strong>
                        <span className={`ml-2 px-2 py-1 rounded text-white text-sm ${status === 'cancelled' ? 'bg-red-500' : 'bg-green-500'}`}>
                            {status}
                        </span>
                    </div>
                    <div>
                        <strong className="text-gray-600">Total Price:</strong> ${total_price}
                    </div>
                    <div>
                        <strong className="text-gray-600">Order Date:</strong> {new Date(order_date).toLocaleString()}
                    </div>
                    <div>
                        <strong className="text-gray-600">Delivery Date:</strong> {new Date(delivery_date).toLocaleString()}
                    </div>
                    <div>
                        <strong className="text-gray-600">Special Instructions:</strong> {special_instructions || "N/A"}
                    </div>
                    <div>
                        <strong className="text-gray-600">Rejection Reason:</strong> {rejection_reason || "N/A"}
                    </div>
                    <div>
                        <strong className="text-gray-600">Updated At:</strong> {new Date(updated_at).toLocaleString()}
                    </div>
                </div>

                <hr className="border-t-4 border-gray-300 my-6" />

                {/* Member Details */}
                <div className="mb-6">
                    <div className="flex items-center space-x-2 mb-4">
                        <MdPerson className="text-green-500 text-2xl" />
                        <h3 className="text-xl font-semibold">Member Details</h3>
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                        <div>
                            <strong className="text-gray-600">Member ID:</strong> {member.member_id}
                        </div>
                        <div>
                            <strong className="text-gray-600">Eligibility:</strong> {member.eligebility}
                        </div>
                        <div>
                            <strong className="text-gray-600">Needs:</strong> {member.needs}
                        </div>
                        <div>
                            <strong className="text-gray-600">Allergies:</strong> {member.allergies}
                        </div>
                    </div>
                </div>


                <hr className="border-t-4 border-gray-300 my-6" />

                {/* Meal Details */}
                <div className="mb-6">
                    <div className="flex items-center space-x-2 mb-4">
                        <MdFastfood className="text-yellow-500 text-2xl" />
                        <h3 className="text-xl font-semibold">Meal Details</h3>
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                        <div>
                            <strong className="text-gray-600">Meal Name:</strong> {meal.name}
                        </div>
                        <div>
                            <strong className="text-gray-600">Short Description:</strong> {meal.short_description}
                        </div>
                        <div>
                            <strong className="text-gray-600">Ingredients:</strong> {JSON.parse(meal.ingredients).join(", ")}
                        </div>
                        <div>
                            <strong className="text-gray-600">Price:</strong> ${meal.price}
                        </div>
                        <div>
                            <strong className="text-gray-600">Dietary Type:</strong> {meal.dietary_type}
                        </div>
                        <div>
                            <strong className="text-gray-600">Calories:</strong> {meal.calories} kcal
                        </div>
                    </div>
                </div>

                <hr className="border-t-4 border-gray-300 my-6" />

                {/* Caregiver Details */}
                <div className="mb-6">
                    <div className="flex items-center space-x-2 mb-4">
                        <MdPerson className="text-purple-500 text-2xl" />
                        <h3 className="text-xl font-semibold">Caregiver Details</h3>
                    </div>
                    <div>
                        <strong className="text-gray-600">Caregiver ID:</strong> {caregiver.caregiver_id}
                    </div>
                </div>

                <hr className="border-t-4 border-gray-300 my-6" />

                {/* Tasks */}
                <div>
                    <div className="flex items-center space-x-2 mb-4">
                        <MdAssignment className="text-teal-500 text-2xl" />
                        <h3 className="text-xl font-semibold">Tasks</h3>
                    </div>
                    {tasks.length > 0 ? (
                        <ul className="list-disc pl-6">
                            {tasks.map((task, index) => (
                                <li key={index} className="text-gray-700">
                                    {task.description || "Task details unavailable"}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <div className="text-gray-600">No tasks assigned to this order.</div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MemberOrderDetailModal;
