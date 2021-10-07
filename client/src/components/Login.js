import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Login({ onLogin, user, onLogout }) {
    const [username, setUsername] = useState("");
  
    function handleSubmit(e) {
      e.preventDefault();
      fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username }),
      }).then((r) => {
        if (r.ok) {
          r.json().then((user) => onLogin(user));
        }
      });
    }

    function handleLogout() {
        fetch("/logout", {
          method: "DELETE",
        }).then(() => onLogout());
    }
  
    return (
        <div className="login-container">
            <h1 className="login-logo">Flashspace</h1>
            <form onSubmit={handleSubmit} className="label-input-container">
                <h3 className="login-heading">Login</h3>
                {/* <label htmlFor="username" className="input-labels">Username </label> */}
                <input
                className="login-inputs"
                type="text"
                id="username"
                placeholder=" Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                />
                <input
                className="login-inputs"
                type="password"
                id="password"
                placeholder=" Password"
                />
                <button className="login-button" type="submit">Login</button>
               
            </form>
            <div>
            {user ? (
                <div className="login-messages">
                    <p className="welcome-message">Welcome, {user.username}!</p>
                    {/* <button onClick={handleLogout}>Logout</button> */}
                    <Link exact to='/study' className="enter-link">Get to studying!</Link>
                </div>
            ) : (
            null
            )}
            </div>
        </div>
    );
  }
  
export default Login