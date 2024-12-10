import React from "react";

const MapView = () => {
    return (
        <div className="relative w-full h-[400px] bg-gray-200 rounded-lg shadow-lg">
            {/* Mock Map */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-lg">📍</span>
                </div>
                {/* Lines or connections */}
                <div className="absolute w-32 h-1 bg-blue-500 transform -rotate-45 -top-8 left-10"></div>
            </div>
        </div>
    );
};

export default MapView;
