import api from '../utils/api';
import { toast } from 'react-toastify';

import {
  GET_BIKES,
  GET_BIKE,
  ADD_BIKE,
  DELETE_BIKE,
  CLEAR_BIKE,
  CLEAR_BIKES,
  BIKE_ERROR,
  ACCOUNT_DELETED
} from './types';

// Get all bikes
export const getBikes = () => async (dispatch) => {
  dispatch({ type: CLEAR_BIKE });

  try {
    const res = await api.get('/bikes');

    dispatch({
      type: GET_BIKES,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: BIKE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Get bike
export const getBike = (id) => async (dispatch) => {
  try {
    const res = await api.get(`/bikes/${id}`);

    dispatch({
      type: GET_BIKE,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: BIKE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Add bike
export const addBike = (formData, navigate) => async (dispatch) => {
  try {
    const res = await api.post('/bikes', formData);

    dispatch({
      type: ADD_BIKE,
      payload: res.data
    });

    toast.success('Bike Added');

    navigate('/dashboard');
  } catch (err) {
    dispatch({
      type: BIKE_ERROR,
      payload: err.response.data
    });
  }
};

// Edit bike
export const editBike = (id, formData) => async (dispatch) => {
  try {
    const res = await api.put(`/bikes/${id}`, formData);

    dispatch({
      type: GET_BIKE,
      payload: res.data
    });

    toast.success('Bike Updated');
  } catch (err) {
    dispatch({
      type: BIKE_ERROR,
      payload: err.response.data
    });
  }
};

// Delete bike
export const deleteBike = (id) => async (dispatch) => {
  try {
    await api.delete(`/bikes/${id}`);

    dispatch({
      type: DELETE_BIKE,
      payload: id
    });

    toast.success('Bike Removed');
  } catch (err) {
    dispatch({
      type: BIKE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Delete account & user bikes
export const deleteAccount = () => async (dispatch) => {
  if (window.confirm('Are you sure? This can NOT be undone!')) {
    try {
      await api.delete('/bikes');

      dispatch({ type: CLEAR_BIKES });
      dispatch({ type: ACCOUNT_DELETED });

      toast.warning('Your account has been permanently deleted');
    } catch (err) {
      dispatch({
        type: BIKE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
  }
};
