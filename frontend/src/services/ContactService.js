// ContactService.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/api';

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use((config) => {
  const authTokens = JSON.parse(localStorage.getItem('authTokens'));
  if (authTokens) {
    config.headers.Authorization = `Bearer ${authTokens.access}`;
  }
  return config;
});

const ContactService = {
  getContacts: async (params) => {
    try {
      const response = await axiosInstance.get('/contacts/', { params });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  createContact: async (contactData) => {
    try {
      const response = await axiosInstance.post('/contacts/', contactData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  getContact: async (contactId) => {
    try {
      const response = await axiosInstance.get(`/contacts/${contactId}/`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  updateContact: async (contactId, contactData) => {
    try {
      const response = await axiosInstance.put(`/contacts/${contactId}/`, contactData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  deleteContact: async (contactId) => {
    try {
      const response = await axiosInstance.delete(`/contacts/${contactId}/`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default ContactService;
