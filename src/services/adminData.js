import axios from "axios";
import { baseURL } from "./api";

const api = axios.create({ baseURL });

export const adminData = async (method, url, data) => {
  const response = await api({
    method,
    url,
    data,
  });

  return await response.data;
};
