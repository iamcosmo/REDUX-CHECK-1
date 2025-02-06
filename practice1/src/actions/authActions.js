import axiosInstance from '../config/axiosConfig';
import { LOGIN_SUCCESS, LOGOUT, SIGNUP_SUCCESS } from './actionTypes';

// Login Action
export const login = (credentials) => async (dispatch) => {
  try {
    const response = await axiosInstance.post('/auth/login', credentials);
    const { user, token } = response.data;

    localStorage.setItem('token', token); // Store token in local storage
    dispatch({ type: LOGIN_SUCCESS, payload: user });
  } catch (error) {
    console.error(error.response?.data?.message || 'Login failed');
  }
};

// Signup Action
export const signup = (userData) => async (dispatch) => {
  try {
    const response = await axiosInstance.post('/auth/signup', userData);
    const { user, token } = response.data;

    localStorage.setItem('token', token); // Store token in local storage
    dispatch({ type: SIGNUP_SUCCESS, payload: user });
  } catch (error) {
    console.error(error.response?.data?.message || 'Signup failed');
  }
};

// Logout Action
export const logout = () => (dispatch) => {
  localStorage.removeItem('token'); // Remove token from local storage
  dispatch({ type: LOGOUT });
};

// Fetch Authenticated User Data
export const fetchUser = () => async (dispatch) => {
  try {
    const response = await axiosInstance.get('/auth/me');
    const { user } = response.data;

    dispatch({ type: LOGIN_SUCCESS, payload: user });
  } catch (error) {
    console.error(error.response?.data?.message || 'Failed to fetch user data');
  }
};