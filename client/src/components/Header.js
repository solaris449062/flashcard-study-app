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
    <header>
      {/* {user ? (
        <div>
          <p>Welcome, {user.username}!</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        null
      )} */}
      <h1>Flashspace</h1>
      <Link exact to='/login'>
        <button onClick={handleLogout}>Logout</button>
      </Link>
    </header>
  );
}

export default Header 