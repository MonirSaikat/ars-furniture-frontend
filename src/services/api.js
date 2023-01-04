import axios from 'axios';

export const baseURL = "https://ars-furniture-backend.onrender.com/";
// export const baseURL = "http://localhost:5000";

const axiosIns  = axios.create({ baseURL });
const token = localStorage.getItem('token');
const config = {};
const headers = {
  Authorization: token ? `Bearer ${token}` : ''
}

export const api = {
  get: async (path, auth = false) => {
    if(auth) config.headers = headers;

    const resp = await axiosIns.get(path, config);
    return await resp.data;
  },

  post: async (path, data, auth = false) => {
    if(auth) config.headers = headers;
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
  },

  delete: async(path, auth = false) => {
    if(auth) config.headers = headers;
    const resp = await axiosIns.delete(path);
    return resp.data;
  }
};
