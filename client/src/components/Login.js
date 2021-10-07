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
        <div>
            <form onSubmit={handleSubmit}>
                <h3>Login With Username</h3>
                <label htmlFor="username">Username: </label>
                <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                />
                <button type="submit">Login</button>
            </form>
            {user ? (
                <div>
                    <p>Welcome, {user.username}!</p>
                    {/* <button onClick={handleLogout}>Logout</button> */}
                    <Link exact to='/study'>Get to studying!</Link>
                </div>
            ) : (
            null
            )}
        </div>
    );
  }
  
export default Login