import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="home-container">
            <div className="home-box">
                <div className="home-logo">Flashspace</div>
                <Link exact to="/login">
                    <button className="home-button">Sign in</button>
                </Link>
            </div>
        </div>
    )
}

export default Home