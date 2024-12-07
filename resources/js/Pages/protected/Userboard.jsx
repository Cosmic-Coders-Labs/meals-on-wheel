import React from "react";
import Sidebar from "./Components/Sidebar"
import Udcontent from "./Components/Udcontent"


const Userboard = () => {
    return (

        <div className="flex min-h-screen bg-blue-500">
            <Sidebar />
            <Udcontent/>
        </div>
    );
};

export default Userboard;
