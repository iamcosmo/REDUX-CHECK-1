import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../actions/authActions';

const Logout = () => {
  const dispatch = useDispatch();
  console.log(logout); // Should log the action creator function
  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
};

export default Logout;