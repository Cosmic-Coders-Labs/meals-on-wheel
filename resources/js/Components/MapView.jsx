import React, { useEffect, useState } from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

const MapView = ({ latitude, longitude }) => {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "YOUR_GOOGLE_MAPS_API_KEY", // Replace with your API key
    });

    const [center, setCenter] = useState({ lat: 0, lng: 0 });

    useEffect(() => {
        if (latitude && longitude) {
            setCenter({ lat: parseFloat(latitude), lng: parseFloat(longitude) });
        }
    }, [latitude, longitude]);

    if (!isLoaded) return <div>Loading Map...</div>;

    return (
        <div className="w-full h-[400px]">
            <GoogleMap
                zoom={14}
                center={center}
                mapContainerStyle={{ width: "100%", height: "100%" }}
            >
                <Marker position={center} />
            </GoogleMap>
        </div>
    );
};

export default MapView;
