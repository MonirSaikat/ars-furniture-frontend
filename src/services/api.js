import axios from 'axios';

// const baseURL = "https://ars-furniture-backend.onrender.com/";
const baseURL = "http://localhost:5000";

const axiosIns  = axios.create({
  baseURL,
});

export const api = {
  get: async (path, auth = false) => {
    const config = {};
    if(auth) {
      config.headers = {
         Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    };

    const resp = await axiosIns.get(path, config);
    return await resp.data;
  },

  post: async (path, data, auth = false) => {
    const config = {};
    if(auth) {
      config.headers = {
         Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    };

    try {
      const resp = await axiosIns.post(path, data , config);
      return await resp.data;
    } catch (error) {
      return error;
    }
  },

  put: async (path, data) => {
    const resp = await axiosIns.post(path, data);
    return await resp.data;
  }
};
