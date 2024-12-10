import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";
import { GiMeal } from "react-icons/gi";
import { HiBriefcase } from "react-icons/hi";
import { MdVolunteerActivism, MdOutlineDeliveryDining } from "react-icons/md";
import { RiBillLine } from "react-icons/ri";
import logo from "../../../assets/logo.png";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { pageAccess } from "@/Utils/PageAccess";
import { handleLogout } from "@/Utils/utils";
import { BiSupport } from "react-icons/bi";
import { FaUserEdit, FaDonate, FaBoxes } from "react-icons/fa";
import { GrCertificate } from "react-icons/gr";
const Sidebar = ({ onSidebarToggle, activePage, setActivePage, role }) => {
    const [isSidebarClosed, setIsSidebarClosed] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarClosed(!isSidebarClosed);
        if (onSidebarToggle) onSidebarToggle(!isSidebarClosed);
    };

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const menuItems = [
        { icon: <RxDashboard />, label: "Dashboard" },
        { icon: <FaUser />, label: "User" },
        { icon: <GiMeal />, label: "Meals" },
        { icon: <MdVolunteerActivism />, label: "Tasks" },
        { icon: <HiBriefcase />, label: "Partner" },
        { icon: <BiSupport />, label: "Member Management" },
        { icon: <FaUserEdit />, label: "Member Assignment" },
        { icon: <MdOutlineDeliveryDining />, label: "Delivery" },
        { icon: <RiBillLine />, label: "My Orders" },
        { icon: <FaDonate />, label: "Donation" },
        { icon: <GrCertificate />, label: "My Certificates" },
        { icon: <FaBoxes />, label: "My Tasks" },
    ];

    // Filter menu items based on role and pageAccess
    const filteredMenuItems = menuItems.filter((item) =>
        pageAccess[item.label]?.includes(role)
    );

    return (
        <nav
            className={`fixed top-0 left-0 h-screen transition-all duration-300 ${isSidebarClosed ? "w-20" : "w-60"
                } bg-white text-black shadow-lg flex flex-col`}
        >
            {/* Header Section */}
            <header className="flex items-center justify-between p-4 border-b border-gray-300">
                <div className="flex items-center">
                    <span className="w-10 h-10 bg-gray-200 rounded-full">
                        <img
                            src={logo}
                            alt="logo"
                            className="w-full h-full object-cover rounded-full"
                        />
                    </span>
                    {!isSidebarClosed && (
                        <div className="fixed ml-12 pl-1">
                            <span className="text-md font-semibold">Meal On Wheel</span>
                        </div>
                    )}
                </div>
                <button
                    className="p-2 focus:outline-none text-gray-500 hover:text-black"
                    onClick={toggleSidebar}
                >
                    {isSidebarClosed ? <FaAngleRight /> : <FaAngleLeft />}
                </button>
            </header>

            {/* Sidebar Menu */}
            <div className="px-4 pt-4 flex-grow">
                <ul className="space-y-2">
                    {filteredMenuItems.map((item, index) => (
                        <li
                            key={index}
                            className={`flex items-center p-2 cursor-pointer border-l-4 hover:bg-gray-100 hover:border-secondary-600 hover:font-bold text-sm  ${activePage === item.label
                                ? "border-secondary-600 font-bold"
                                : "border-neutral-100"
                                }`}
                            onClick={() => setActivePage(item.label)}
                        >
                            {item.icon}
                            {!isSidebarClosed && <span className="fixed ml-10">{item.label}</span>}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Footer Section */}
            <div className="px-4 my-3 space-y-4 mt-auto relative">
                <div className="relative">
                    <button
                        className="flex items-center p-2 w-full cursor-pointer text-sm hover:bg-gray-300 rounded-lg"
                        onClick={toggleMenu}
                    >
                        <FaUser />
                        {!isSidebarClosed && <span className="ml-4">Profile</span>}
                    </button>
                    {showMenu && (
                        <div className="absolute left-0 bottom-full mb-2 bg-white border border-gray-300 shadow-lg rounded-lg w-full z-10">
                            <ul>
                                <li className="p-2 cursor-pointer hover:bg-gray-100 text-sm" onClick={() => setActivePage("Profile")}>View Profile</li>
                                {/* <li className="p-2 cursor-pointer hover:bg-gray-100">Settings</li> */}
                                <li
                                    className="p-2 cursor-pointer hover:bg-gray-100 text-red-500 text-sm"
                                    onClick={handleLogout}
                                >
                                    Logout
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Sidebar;
