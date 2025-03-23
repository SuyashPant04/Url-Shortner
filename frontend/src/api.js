import axios from 'axios';

const API = axios.create({
    baseURL: "http://localhost:8000",
    withCredentials: true,
});

export const shortenURL = (formData) => API.post('/shorten', formData);
export const redirectURL = (shortCode) => API.get(`/${shortCode}`);