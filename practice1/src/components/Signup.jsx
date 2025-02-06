import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signup } from "../actions/authActions";

const Signup = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signup(userData));
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        margin: "20px",
        padding: "20px",
        border: "5px solid yellow",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <input
        type="text"
        placeholder="Name"
        style={{ margin: "10px", height: "30px", padding: "0.26rem" }}
        value={userData.name}
        onChange={(e) => setUserData({ ...userData, name: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        value={userData.email}
        style={{ margin: "10px", height: "30px", padding: "0.26rem" }}
        onChange={(e) => setUserData({ ...userData, email: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        value={userData.password}
        style={{ margin: "10px", height: "30px", padding: "0.26rem" }}
        onChange={(e) => setUserData({ ...userData, password: e.target.value })}
      />
      <button style={{ margin: "5px", width: "11rem" }} type="submit">Signup</button>
    </form>
  );
};

export default Signup;
