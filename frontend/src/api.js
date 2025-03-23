import axios from 'axios';

const API = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL, // Accessing the environment variable
    withCredentials: true,
});

export const shortenURL = (formData) => API.post('/shorten', formData);
export const redirectURL = (shortCode) => API.get(`/${shortCode}`);

