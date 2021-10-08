import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Study from "./Study";

function Header({ user, onLogout }) {
  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => onLogout());
  }

  return (
    <div className="header">
        <header className="header-container">
        {/* {user ? (
            <div>
            <p>Welcome, {user.username}!</p>
            <button onClick={handleLogout}>Logout</button>
            </div>
        ) : (
            null
        )} */}
        <h1 className="header-logo">Flashspace</h1>
        <Link exact to='/'>
            <button className="logout-button" onClick={handleLogout}>Logout</button>
        </Link>
        </header>
    </div>
  );
}

export default Header 