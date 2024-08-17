import axios from 'axios';

const api = axios.create({
  baseURL: 'https://mdev1004-m2024-api-rjnp.onrender.com/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
