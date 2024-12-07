import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";
import { GiMeal } from "react-icons/gi";
import { HiBriefcase } from "react-icons/hi";
import { MdVolunteerActivism, MdOutlineDeliveryDining } from "react-icons/md";
import { BiCog } from "react-icons/bi"; // Import Settings Icon
import logo from "../../../../assets/logo.png"; // Correct relative path

const Sidebar = () => {
  const [isSidebarClosed, setIsSidebarClosed] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarClosed(!isSidebarClosed);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <nav
      className={`relative top-0 left-0 h-screen transition-all duration-300 ${
        isSidebarClosed ? "w-20" : "w-60"
      } ${isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"} shadow-lg`}
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
            <div className="ml-4">
              <span className="text-lg font-semibold">Meal On Wheel</span>
            </div>
          )}
        </div>
        <button
          className="p-2 focus:outline-none text-gray-500 hover:text-black"
          onClick={toggleSidebar}
        >
          {isSidebarClosed ? "›" : "‹"}
        </button>
      </header>

      {/* Sidebar Menu */}
      <div className="px-4 pt-4">
        <div className="search-box mb-4">
          <input
            type="text"
            placeholder="Search"
            className="w-full p-2 bg-gray-100 border border-gray-300 rounded-lg outline-none"
          />
        </div>

        <ul className="space-y-2">
          {[
            { icon: <RxDashboard />, label: "Dashboard" },
            { icon: <FaUser />, label: "User" },
            { icon: <GiMeal />, label: "Meals" },
            { icon: <MdVolunteerActivism />, label: "Volunteer" },
            { icon: <HiBriefcase />, label: "Partner" },
            { icon: <MdOutlineDeliveryDining />, label: "Delivery" },
          ].map((item, index) => (
            <li
              key={index}
              className="flex items-center p-2 cursor-pointer hover:bg-gray-300 rounded-lg"
            >
              {item.icon}
              {!isSidebarClosed && <span className="ml-4">{item.label}</span>}
            </li>
          ))}
        </ul>

        {/* Footer Section */}
        <div className="mt-20 space-y-4">
          <ul>
            <li className="flex items-center p-2 cursor-pointer hover:bg-gray-300 rounded-lg">
              <FaUser className="text-xl" />
              {!isSidebarClosed && <span className="ml-4">View Profile</span>}
            </li>
            <li className="flex items-center p-2 cursor-pointer hover:bg-gray-300 rounded-lg">
              <BiCog className="text-xl" />
              {!isSidebarClosed && <span className="ml-4">Settings</span>}
            </li>
          </ul>

          {/* Dark Mode Toggle */}
          <div className="flex items-center justify-between p-2 bg-gray-100 rounded-lg">
            <span className="text-sm font-semibold">
              {!isSidebarClosed && "Dark Mode"}
            </span>
            <button
              onClick={toggleDarkMode}
              className={`w-12 h-6 flex items-center rounded-full p-1 ${
                isDarkMode ? "bg-green-500" : "bg-gray-400"
              }`}
            >
              <span
                className={`w-4 h-4 bg-white rounded-full transition-transform ${
                  isDarkMode ? "transform translate-x-6" : "transform translate-x-0"
                }`}
              ></span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
