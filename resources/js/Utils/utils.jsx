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
export const fetchMenus = () => apiRequest("menus");
export const fetchOrders = () => apiRequest("orders");
export const fetchTasks = () => apiRequest("tasks");
export const fetchMealsOrders = () => apiRequest("meals-orders");
export const fetchProfiles = () => apiRequest("profiles");
export const fetchProfile = (id) => apiRequest(`profiles/${id}`);
export const fetchCount = () => apiRequest('admin-dashboard');
export const fetchVolunteerAssignments = () => apiRequest('volunteer-assignments');


export const addUser = (userData) => apiRequest("users", "POST", userData);
export const editUser = (id, userData) => apiRequest(`users/${id}`, "PUT", userData);
export const deleteUser = (id) => apiRequest(`users/${id}`, "DELETE");

export const addRole = (roleData) => apiRequest("roles", "POST", roleData);
export const editRole = (id, roleData) => apiRequest(`roles/${id}`, "PUT", roleData);
export const deleteRole = (id) => apiRequest(`roles/${id}`, "DELETE");

export const addMeal = (mealData) => apiRequest("meals", "POST", mealData);
export const editMeal = (id, mealData) => apiRequest(`meals/${id}`, "PUT", mealData);
export const rejectMeal = (id) => apiRequest(`meals/${id}`, "DELETE");

export const addVolunteerAssignment = (assignmentData) => apiRequest("volunteer-assignments", "POST", assignmentData);
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

export const capitalize = (status) => {
    if (!status) return 'Unknown';
    return status.charAt(0).toUpperCase() + status.slice(1).toLowerCase();
};
