import React from "react";
import Sidebar from "./Components/Sidebar"
import Adcontent from "./Components/Adcontent"

const Dashboard = () => {
    return (
        <div className="flex min-h-screen bg-blue-500"> 
            <Sidebar/>
            <Adcontent/>
        </div>
    );
};

export default Dashboard;
