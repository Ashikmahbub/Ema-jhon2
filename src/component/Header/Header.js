import React, { useContext } from "react";
import "./Header.css";
import logo from "../../images/Logo.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/UserContext";
const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  return (
    <nav className="header">
      <img src={logo} alt="logo" />
      <div className="menu">
        <Link to="/">Shop</Link>
        <Link to="/orders">Orders</Link>

        <Link to="/inventory">Inventory</Link>
        <Link to="/about">About</Link>
        {user?.uid ? 
          <button className="btn-logout"  onClick={logOut}>
         
            Log Out
          </button>
        : (
          <>
            <Link to="/login">Log In</Link>
            <Link to="/signup">Sign Up</Link>
          </>
        )}

        <span className="user">{user?.email}</span>
      </div>
    </nav>
  );
};

export default Header;
