import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";

function NavBar() {
    return (
        <div>
          <NavLink 
            activeClassName="active-nav-link" 
            className="study-route" 
            exact to="study">
            Study
          </NavLink>

          <NavLink 
            activeClassName="active-nav-link" 
            className="quiz-route"
            exact to="quiz">
            Quiz
          </NavLink>
        </div>
    )
}

export default NavBar