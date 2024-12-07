import React from "react";
import { FaClock, FaMapMarkerAlt, FaUtensils, FaDollarSign, FaHashtag } from "react-icons/fa";

const DeliveryInfo = ({ order }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-lg w-full">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Delivery Tracking</h2>
                <h3 className="text-gray-600 font-medium">Order #{order.id}</h3>
            </div>
            <div className="space-y-4">
                <div className="flex items-center">
                    <FaClock className="text-blue-500 text-lg mr-3" />
                    <p>
                        <span className="font-medium">Delivery time:</span> {order.time}
                    </p>
                </div>
                <div className="flex items-center">
                    <FaMapMarkerAlt className="text-blue-500 text-lg mr-3" />
                    <p>
                        <span className="font-medium">Delivery Address:</span> {order.address}
                    </p>
                </div>
                <div className="flex items-center">
                    <FaUtensils className="text-blue-500 text-lg mr-3" />
                    <p>
                        <span className="font-medium">Meals Name:</span> {order.meal}
                    </p>
                </div>
                <div className="flex items-center">
                    <FaDollarSign className="text-blue-500 text-lg mr-3" />
                    <p>
                        <span className="font-medium">Price:</span> ${order.price}
                    </p>
                    <FaHashtag className="text-blue-500 text-lg ml-6 mr-3" />
                    <p>
                        <span className="font-medium">Qty:</span> {order.quantity}
                    </p>
                </div>
            </div>
            <div className="border-t border-gray-300 mt-6 pt-4 flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold text-blue-500">J</span>
                </div>
                <div className="ml-4">
                    <p className="font-medium">John Cooper</p>
                    <p className="text-sm text-gray-500">Delivery</p>
                </div>
                <div className="ml-auto flex space-x-4">
                    <button className="p-2 bg-blue-100 rounded-full text-blue-500">
                        📞
                    </button>
                    <button className="p-2 bg-blue-100 rounded-full text-blue-500">
                        💬
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DeliveryInfo;
