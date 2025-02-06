import React from 'react';
import { useSelector } from 'react-redux';
import Login from './components/Login';
import Logout from './components/Logout';
import Signup from './components/Signup';

const App = () => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);

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