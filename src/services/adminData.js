import axios from 'axios';
const baseURL =
  "https://ars-furniture-backend.onrender.com/";

const api = axios.create({baseURL});

export const adminData = async (method, url, data) => {
  const response = await api({
    method,
    url,
    data
  });

  return await response.data;
};
