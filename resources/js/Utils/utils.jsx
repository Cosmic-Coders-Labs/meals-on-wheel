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



// Add a new user (POST request)
export const addUser = (userData) => apiRequest("users", "POST", userData);

// Edit an existing user (PUT request)
export const editUser = (id, userData) => apiRequest(`users/${id}`, "PUT", userData);

// Delete a user (DELETE request)
export const deleteUser = (id) => apiRequest(`users/${id}`, "DELETE");

// Add a new role (POST request)
export const addRole = (roleData) => apiRequest("roles", "POST", roleData);

// Edit an existing role (PUT request)
export const editRole = (id, roleData) => apiRequest(`roles/${id}`, "PUT", roleData);

// Delete a role (DELETE request)
export const deleteRole = (id) => apiRequest(`roles/${id}`, "DELETE");
