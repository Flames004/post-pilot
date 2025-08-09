import axios from "axios";

// Use environment variable or fallback to development server
const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000/api";

export default axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true
});
