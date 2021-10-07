import React from "react";
import NavBar from "./NavBar";
import Header from "./Header";

function Quiz({user, onLogout}) {
    return (
        <div>
            <Header user={user} onLogout={onLogout}/>
            <NavBar/>
            <h1>Quiz Session</h1>
        </div>
    )
    

}


export default Quiz;