import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";

function NavBar() {
    return (
        <div className="nav-container">
            <div className="nav-bar">
            <NavLink 
                activeClassName="active-nav-link" 
                className="nav-link" 
                style={{ textDecoration: 'none' }}
                exact to="study">
                Study
            </NavLink>

            <NavLink 
                activeClassName="active-nav-link" 
                className="nav-link"
                style={{ textDecoration: 'none' }}
                exact to="quiz">
                Quiz
            </NavLink>
            </div>
        </div>
    )
}

export default NavBar