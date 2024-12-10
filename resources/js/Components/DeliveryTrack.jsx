import React from "react";
import DeliveryInfo from "./DeliveryInfo";
import MapView from "./MapView";

const DeliveryTrack = () => {
    const order = {
        id: "12345",
        time: "15-20 mins",
        address: "201 Katlian No.21 Street",
        meal: "Chicken Soup",
        price: "5.00",
        quantity: 1,
    };

    return (
        <div className="grid grid-cols-2 gap-6 min-h-screen place-content-center">
            {/* Left Side: Delivery Info */}
            <DeliveryInfo order={order} />
            {/* Right Side: Map View */}
            <MapView />
        </div>
    );
};

export default DeliveryTrack;
