import React from "react";
import { Link } from "react-router-dom";
import useFirebase from "../../hooks/useFirebase";
import './Header.css'

const Header = () => {
  const {user, handleSignOut} = useFirebase();
  return (
    <div className="header">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/order">Order</Link>
        <Link to="/register">Register</Link>
        <span className="user-name">{user?.displayName && user.displayName}</span>
        <span className = "user-photo"><img src={user?.photoURL && user.photoURL} alt="" /></span>
        
        
      {
        user?.uid ?
         <button  onClick={handleSignOut}>Sign out</button> :
        <Link to="/login">Login</Link>
        }
      </nav>
    </div>
  );
};

export default Header;
