import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "./actions/authActions";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Signup from "./components/Signup";

const App = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const [isSignup, setIsSignup] = useState(false); // Toggle state

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
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh", // Full viewport height
            flexDirection: "column",
          }}
        >
          {/* Switch Button */}
          <button
            onClick={() => setIsSignup((prev) => !prev)}
            style={{
              padding: "8px 16px",
              marginBottom: "10px",
              cursor: "pointer",
              backgroundColor: "#46ccd5", // Your preferred theme color
              color: "#fff",
              border: "none",
              borderRadius: "4px",
            }}
          >
            {isSignup ? "Switch to Login" : "Switch to Signup"}
          </button>

          {/* Display Login or Signup based on state */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              justifySelf: "center",
            }}
          >
            {isSignup ? <Signup /> : <Login />}
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
