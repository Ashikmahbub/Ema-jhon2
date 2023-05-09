import React, { useContext, useState } from 'react';
import './SignUp.css';
import { Link } from "react-router-dom";
import { AuthContext } from '../../contexts/UserContext';

const SignUp = () => {
  const [error,setError] =useState();
  const {createUser} =useContext(AuthContext);

  const handleSubmit = event =>{
    event.preventDefault();
    const form =event.target;
    const email=form.email.value;
     
    const password=form.password.value;
     
    const confirm=form.confirm.value;
    console.log(email,password,confirm
      );
      if(password.length <6){
        setError('password must be six or more')
        return;
      }
      if (password!== confirm){
        setError('your password did not match')
        return;

      }
      createUser(email,password)
      .then(result =>{
        const user =result.user;
        console.log(user);
        form.reset();
      })
      .catch((error =>console.error(error)))
     
  }
    return (
        <div className="form-container">
      <h2 className="form-title">Sign Up</h2>
      <form onSubmit={handleSubmit}>
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
            <label htmlFor="confirm">Confirm Password</label>
          <input
            type="password"
            name="confirm"
            placeholder="Re-type password"
            required
          />
          <button type="submit">Sign Up</button>
        </div>
        
      </form>
      <p>Already have an account ? <Link to='/login'>Log In</Link></p>
      <p className='error'>{error}</p>
    </div>
    );
};

export default SignUp;