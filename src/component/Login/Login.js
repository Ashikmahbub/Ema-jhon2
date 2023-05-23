import React, { useContext } from "react";
import "./Login.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/UserContext";

const Login = () => {
  const {loginUser,user,logOut} =useContext(AuthContext);
  const navigate =  useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  const handleLogin =event =>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password =form.password.value;
    console.log(email,password);
    loginUser(email,password)
    .then(result =>{
      const user = result.user;
      console.log(user);
      form.reset();
      console.log(from);
      navigate(from ,{replace:true})
     

    })
    .catch(error =>console.error(error))
  }
  return (
    <div className="form-container">
      <h2 className="form-title">Login</h2>
      <form onSubmit={handleLogin}>
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
