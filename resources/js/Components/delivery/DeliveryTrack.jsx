import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import axios from "axios";
import L from "leaflet";

// Fix for missing default marker icons in Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
    iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const DeliveryTracking = ({ orderId }) => {
    const [position, setPosition] = useState(null);
    const [orderLocation, setOrderLocation] = useState({ lat: 0, lng: 0 });

    // Function to fetch the order's location from the server
    const fetchOrderLocation = async () => {
        try {
            const response = await axios.get(`/api/orders/${orderId}`);
            const { latitude, longitude } = response.data;
            if (!isNaN(latitude) && !isNaN(longitude)) {
                setOrderLocation({ lat: parseFloat(latitude), lng: parseFloat(longitude) });
            } else {
                console.error("Invalid latitude or longitude received from the API.");
            }
        } catch (error) {
            console.error("Error fetching order location:", error);
        }
    };


    // Use Geolocation API to get current position
    useEffect(() => {
        if ("geolocation" in navigator) {
            const geoWatchId = navigator.geolocation.watchPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    setPosition({ lat: latitude, lng: longitude });
                    console.log("Current Position:", { latitude, longitude });
                },
                (error) => {
                    console.error("Geolocation error:", error);
                    switch (error.code) {
                        case error.PERMISSION_DENIED:
                            alert("Please allow location access for this feature.");
                            break;
                        case error.POSITION_UNAVAILABLE:
                            alert("Location services are currently unavailable.");
                            break;
                        case error.TIMEOUT:
                            alert("Location request timed out. Try again.");
                            break;
                        default:
                            alert("An unknown error occurred with geolocation.");
                            break;
                    }
                },
                { enableHighAccuracy: false, timeout: 10000, maximumAge: 1000 }
            );

            return () => navigator.geolocation.clearWatch(geoWatchId);
        } else {
            console.error("Geolocation is not supported by this browser.");
            alert("Your browser does not support geolocation.");
        }
    }, []);



    // Polling to fetch the order's location every 5 seconds
    useEffect(() => {
        const interval = setInterval(fetchOrderLocation, 5000); // Update every 5 seconds
        return () => clearInterval(interval);
    }, [orderId]);

    return (
        <div style={{ height: "500px", width: "100%" }}>
            <MapContainer
                center={orderLocation}
                zoom={14}
                style={{ height: "100%", width: "100%" }}
            >
                {/* Base map layer from OpenStreetMap */}
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />

                {/* User's current position marker */}
                {position && (
                    <Marker position={position}>
                        <Popup>Your Current Location</Popup>
                    </Marker>
                )}

                {/* Order location marker */}
                <Marker position={orderLocation}>
                    <Popup>Order's Location</Popup>
                </Marker>
            </MapContainer>
        </div>
    );
};

export default DeliveryTracking;
