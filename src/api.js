// src/api.js
import axios from "axios";

const BASE = (import.meta.env.VITE_API_URL || "").replace(/\/+$/, "");
const api = axios.create({
  // Prod: https://...azurewebsites.net/api
  // Dev:  falls back to /api (Vite proxy)
  baseURL: BASE ? `${BASE}/api` : "/api",
});

api.interceptors.request.use((cfg) => {
  const token = localStorage.getItem("token");
  if (token) cfg.headers.Authorization = `Bearer ${token}`;
  return cfg;
});

export default api;
