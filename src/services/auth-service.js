import { handleError, handleSuccess } from '../utils';
import { api } from './api';

export const loginUserByEmailAndPassword = async (email, password) => {
  try {
    handleSuccess('You are logged in');
    const data = await api.post('/auth/login', { email, password });
    return {
      user: data.user,
      token: data.token
    }
  } catch (error) {
    handleError(error);
  }
};

export const registerUserByEmailAndPassword = async (name, email, password) => {
  try {
    const data = await api.post('/auth/register', {name, email, password });
    if(data.success) handleSuccess('You are now registered');
    return {
      user: data.data,
      token: data.token
    };
  } catch (error) {
    handleError(error);
  }
};

export const checkAuth = async (token) => {
  try {
    const data = await api.get('/auth/check', token);
    return data.user;
  } catch (error) {

  }
};
