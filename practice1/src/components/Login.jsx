import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../actions/authActions";

const Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(credentials));
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
        type="email"
        placeholder="Email"
        value={credentials.email}
        style={{ margin: "10px", height: "30px",padding:'0.26rem' }}
        onChange={(e) =>
          setCredentials({ ...credentials, email: e.target.value })
        }
      />
      <input
        type="password"
        placeholder="Password"
        value={credentials.password}
        style={{ margin: "10px",height: "30px",padding:'0.26rem' }}
        onChange={(e) =>
          setCredentials({ ...credentials, password: e.target.value })
        }
      />
      <button style={{margin:'5px',width:'11rem'}} type="submit">Login</button>
    </form>
  );
};

export default Login;
