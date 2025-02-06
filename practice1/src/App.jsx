import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from './actions/authActions';
import Login from './components/Login';
import Logout from './components/Logout';
import Signup from './components/Signup';

const App = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  // Check if user is authenticated on page load
  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  return (
    <div>
      {isAuthenticated ? (
        <div>
          <h1>Welcome, {user.name}!</h1>
          <Logout />
        </div>
      ) : (
        <div>
          <Login />
          <Signup />
        </div>
      )}
    </div>
  );
};

export default App;