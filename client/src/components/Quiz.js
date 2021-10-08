import React from "react";
import NavBar from "./NavBar";
import Header from "./Header";
import GenerateQuizButton from "./GenerateQuizButton";
import QuizOnDisplay from "./QuizOnDisplay";

function Quiz({quizCards, user, title, subject, content, onLogout, handleGenerateQuizButton, handleQuizContentChange}) {
    return (
        <div>
            <Header user={user} onLogout={onLogout}/>
            <NavBar/>
            <div className="study-heading-container">
                <h1 className="study-heading">Quiz Session</h1>
            </div>

            <GenerateQuizButton handleGenerateQuizButton={handleGenerateQuizButton}/>
            <QuizOnDisplay title={title} subject={subject} content={content} handleQuizContentChange={handleQuizContentChange}/>
            <div>
                {quizCards.map(quiz => <QuizOnDisplay title={quiz.title} subject={quiz.subject} content={quiz.content}/>)}
            </div>
        </div>
    )
    

}


export default Quiz;