import { api } from './api';
import { handleError, handleSuccess } from '../utils';

export const addReivewByUser = async (data) => {
  try {
    const review = await api.post('/reviews', data, true);
    handleSuccess('Review added succesfully');
    return review;
  } catch (error) {
    handleError(error) ;
  }
};

export const fetchReviews = async () => {
  try {
    return await api.get('/reviews/site');
  } catch (error) {
    console.log(error);
  }
};
