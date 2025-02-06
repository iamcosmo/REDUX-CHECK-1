// Async Action for Login
export const login = (credentials) => async (dispatch) => {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials),
    });
    const data = await response.json();
    if (response.ok) {
      localStorage.setItem('token', data.token); // Store token in local storage
      dispatch(loginSuccess(data.user));
    } else {
      console.error(data.message);
    }
  };
  
  // Async Action for Signup
  export const signup = (userData) => async (dispatch) => {
    const response = await fetch('http://localhost:5000/api/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData),
    });
    const data = await response.json();
    if (response.ok) {
      localStorage.setItem('token', data.token); // Store token in local storage
      dispatch(signupSuccess(data.user));
    } else {
      console.error(data.message);
    }
  };
  
  // Logout Action
  export const logout = () => (dispatch) => {
    localStorage.removeItem('token'); // Remove token from local storage
    dispatch(logout());
  };
  
  // Fetch Authenticated User Data
  export const fetchUser = () => async (dispatch) => {
    const token = localStorage.getItem('token');
    if (token) {
      const response = await fetch('http://localhost:5000/api/auth/me', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      if (response.ok) {
        dispatch(loginSuccess(data.user));
      } else {
        console.error(data.message);
      }
    }
  };