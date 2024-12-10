import { router } from "@inertiajs/react";
import axios from "axios";

const API_BASE_URL = "http://127.0.0.1:8000/api"; // Your Laravel API base URL

// Utility function to handle API requests (GET)
const apiRequest = async (endpoint, method = 'GET', data = null) => {
    try {
        const config = {
            method,
            url: `${API_BASE_URL}/${endpoint}`,
            data,
        };

        const response = await axios(config);
        return response.data;
    } catch (error) {
        console.error(`Error during ${method} request to ${endpoint}:`, error.message);
        throw new Error(`Failed to ${method} data from the API.`);
    }
};

// Fetch data

export const fetchUsers = () => apiRequest("users");
export const fetchRoles = () => apiRequest("roles");
export const fetchCaregivers = () => apiRequest("caregivers");
export const fetchMembers = () => apiRequest("members");
export const fetchPartners = () => apiRequest("partners");
export const fetchVolunteers = () => apiRequest("volunteers");
export const fetchMeals = () => apiRequest("meals");
export const fetchMeal = (id) => apiRequest(`meals/${id}`);
export const fetchMenus = () => apiRequest("menus");
export const fetchOrders = () => apiRequest("orders");
export const fetchOrdersByCaregiver = (caregiver_id) => apiRequest(`orders/caregiver/${caregiver_id}`);
export const fetchOrdersByMemberID = (member_id) => apiRequest(`orders/member/${member_id}`);

export const fetchTasks = () => apiRequest("tasks");
export const fetchAvailableTasks = () => apiRequest('tasks/available');
export const updateTask = (id, data) => apiRequest(`tasks/${id}`, "PUT", data);

export const fetchMealsOrders = () => apiRequest("meals-orders");
export const fetchProfiles = () => apiRequest("profiles");
export const fetchProfile = (id) => apiRequest(`profiles/${id}`);
export const fetchCount = () => apiRequest('admin-dashboard');
export const fetchVolunteerAssignments = () => apiRequest('volunteer-assignments');
export const fetchDonation = () => apiRequest('donations')
export const fetchDonationById = (id) => apiRequest(`donations/donor/${id}`);

export const fetchCertificates = () => apiRequest('certificates');
export const addCertificates = (data) => apiRequest('certificates', 'POST', data);
export const fetchCertificatesByID = (id) => apiRequest(`partners/${id}/certificates`);
export const deleteCertificatesByID = (id) => apiRequest(`certificates/${id}`, "DELETE");

export const fetchCaregiversToMember = (id) => apiRequest(`caregivers-to-members/${id}`);
export const fetchAllMembersByCaregiverId = (id) => apiRequest(`caregivers-to-members/caregiver/${id}`);

export const makeDonation = (data) => apiRequest('donations', "POST", data);

export const getUserById = (user_id) => apiRequest(`users/${user_id}`);
export const addUser = (userData) => apiRequest("users", "POST", userData);
export const editUser = (id, userData) => apiRequest(`users/${id}`, "PUT", userData);
export const deleteUser = (id) => apiRequest(`users/${id}`, "DELETE");

export const editProfile = (id, userData) => apiRequest(`profiles/${id}`, "PUT", userData);

export const addRole = (roleData) => apiRequest("roles", "POST", roleData);
export const editRole = (id, roleData) => apiRequest(`roles/${id}`, "PUT", roleData);
export const deleteRole = (id) => apiRequest(`roles/${id}`, "DELETE");

export const addMeal = (mealData) => apiRequest("meals", "POST", mealData);
export const editMeal = (id, mealData) => apiRequest(`meals/${id}`, "PUT", mealData);
export const rejectMeal = (id) => apiRequest(`meals/${id}`, "DELETE");

export const addVolunteerAssignment = (assignmentData) => apiRequest("volunteer-assignments", "POST", assignmentData);
export const getVolunteerAssignmentById = (id) => apiRequest(`volunteer/${id}/tasks`);
export const editVolunteerAssignment = (id, assignmentData) => apiRequest(`volunteer-assignments/${id}`, "PUT", assignmentData);
export const cancelAssignment = (id) => apiRequest(`volunteer-assignments/${id}`, "DELETE");

export const updateUserStatus = async (userId, newStatus) => {
    try {
        const response = await axios.patch(`/api/users/${userId}/status`, { status: newStatus });
        return response.data;
    } catch (error) {
        console.error("Failed to update user status:", error);
        throw error;
    }
};


export const updateAssignmentStatus = async (assignmentID, newStatus) => {
    try {
        const response = await axios.patch(
            `/api/volunteer-assignments/${assignmentID}/status`,
            { status: newStatus }, // Ensure payload matches expected structure
            { headers: { 'Content-Type': 'application/json', Accept: 'application/json' } }
        );
        return response.data;
    } catch (error) {
        console.error("Failed to update assignment status:", error.response?.data || error.message);
        throw error;
    }
};



export const getMe = async () => {
    try {
        const response = await axios.get(`/users/me`);
        return response.data;
    } catch (error) {
        console.error("Failed to get user:", error);
        throw error;
    }
}

export const getMyRole = async () => {
    try {
        const response = await axios.get(`/user/role`);
        return response.data;
    } catch (error) {
        console.error("Failed to get role:", error);
        throw error;
    }
}

export const fetchCaregiverMemberDropdown = async () => {
    try {
        const response = await apiRequest("caregivers-to-members/dropdown");
        return response;
    } catch (error) {
        console.error("Failed to fetch dropdown data:", error.message);
        throw error;
    }
};


export const capitalize = (status) => {
    if (!status) return 'Unknown';
    return status.charAt(0).toUpperCase() + status.slice(1).toLowerCase();
};


export const handleLogout = () => {
    localStorage.removeItem("activePage");
    router.post('logout')
};


export const assignCaregiverToMember = (data) => apiRequest("caregivers-to-members", "POST", data);
export const getFreeMembersFromCaregiver = () => apiRequest("caregivers-to-members/dropdown");
