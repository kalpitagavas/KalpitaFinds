import axios from "axios";

const API_URL = "http://localhost:8080/api/users/";

const Register = (username, email, password) => {
    return axios.post(`${API_URL}register`, { username, email, password });
};

const Login = (email, password) => {
    return axios.post(`${API_URL}login`, { email, password });
};

// Function to check if a user already exists
const CheckUserExists = async (email) => {
    try {
        const response = await axios.get(`${API_URL}check?email=${email}`);
        return response.data.exists; // Assuming API returns { exists: true/false }
    } catch (error) {
        console.error("Error checking user existence:", error);
        return false; // Assume false if an error occurs
    }
};

export default { Register, Login, CheckUserExists };
