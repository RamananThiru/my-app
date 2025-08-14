import axios from 'axios';

const API_BASE_URL = 'https://www.omdbapi.com/';

const backendAPI = axios.create({
    baseURL: API_BASE_URL,
    timeout: 10000, // Set a timeout of 10 seconds
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
})

export default backendAPI;