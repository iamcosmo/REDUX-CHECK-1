import { loginSuccess, signupSuccess , logout } from '../reducers/authReducers';

// Async Action for Login
export const login = (credentials) => async (dispatch) => {
  // Simulate an API call
  const response = await fetch('/api/login', {
    method: 'POST',
    body: JSON.stringify(credentials),
  });
  const user = await response.json();
  dispatch(loginSuccess(user));
};

// Async Action for Signup
export const signup = (userData) => async (dispatch) => {
  // Simulate an API call
  const response = await fetch('/api/signup', {
    method: 'POST',
    body: JSON.stringify(userData),
  });
  const user = await response.json();
  dispatch(signupSuccess(user));
};

// Export the logout action (if needed)
export { logout };