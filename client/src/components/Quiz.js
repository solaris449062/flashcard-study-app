import React from "react";
import NavBar from "./NavBar";
import Header from "./Header";
import GenerateQuizButton from "./GenerateQuizButton";

function Quiz({user, onLogout, handleGenerateQuizButton}) {
    return (
        <div>
            <Header user={user} onLogout={onLogout}/>
            <NavBar/>
            <h1>Quiz Session</h1>
            <GenerateQuizButton handleGenerateQuizButton={handleGenerateQuizButton}/>
        </div>
    )
    

}


export default Quiz;