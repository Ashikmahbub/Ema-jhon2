import React, { useContext } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/UserContext";

const Login = () => {
  const {loginUser} =useContext(AuthContext);
  return (
    <div className="form-container">
      <h2 className="form-title">Login</h2>
      <form>
        <div className="form-control">
            <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter Your Mail"
            required
          />
            <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter Your Password"
            required
          />
          <button type="submit">Login</button>
        </div>
        
      </form>
      <p>New to ema jhon <Link to='/signup'>Create a new account</Link></p>
    </div>
  );
};

export default Login;
