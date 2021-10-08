import React from "react";
import NavBar from "./NavBar";
import Header from "./Header";
import GenerateQuizButton from "./GenerateQuizButton";
import QuizOnDisplay from "./QuizOnDisplay";

function Quiz({user, quizCards, onLogout, handleGenerateQuizButton, handleQuizContentChange}) {
    return (
        <div>
            <Header user={user} onLogout={onLogout}/>
            <NavBar/>
            <h1>Quiz Session</h1>
            <GenerateQuizButton handleGenerateQuizButton={handleGenerateQuizButton}/>
            {quizCards.map(quiz => 
                <QuizOnDisplay title={quiz.title} subject={quiz.subject} content={quiz.content} handleQuizContentChange={handleQuizContentChange}/>    
            )}
        </div>
    )
    

}


export default Quiz;