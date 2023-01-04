import axios from 'axios';

export const baseURL = "https://ars-furniture-backend.onrender.com/";
// export const baseURL = "http://localhost:5000";

const axiosIns  = axios.create({ baseURL });

const getConfig = (token) => {
  return {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };
};

export const api = {
  get: async (path, token) => {
    const resp = await axiosIns
      .get(path, getConfig(token));

    return await resp.data;
  },

  post: async (path, data, token) => {
    try {
      const resp = await axiosIns
        .post(path, data , getConfig(token));

      return await resp.data;
    } catch (error) {
      return error;
    }
  },

  put: async (path, data, token) => {
    const resp = await axiosIns
      .post(path, data, getConfig(token));

    return await resp.data;
  },

  delete: async(path, token) => {
    const resp = await axiosIns
      .delete(path, getConfig(token));

    return resp.data;
  }
};
