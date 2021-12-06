import React from "react";
import NavBar from "./NavBar";
import Header from "./Header";
import GenerateQuizButton from "./GenerateQuizButton";
import QuizOnDisplay from "./QuizOnDisplay";

function Quiz({quizCards, user, title, subject, content, onLogout, handleGenerateQuizButton, handleQuizCardClick, handleQuizContentChange, handleQuizSubmit, quizSolution, isSubmitted, submissionState}) {
    return (
        <div>
            <Header user={user} onLogout={onLogout}/>
            <NavBar/>
            <div className="study-heading-container">
                <h1 className="study-heading"></h1>
            </div>

            <GenerateQuizButton handleGenerateQuizButton={handleGenerateQuizButton}/>
            {/* <QuizOnDisplay title={title} subject={subject} content={content} handleQuizContentChange={handleQuizContentChange}/> */}
            <div>
                {quizCards.map(quiz => 
                    <QuizOnDisplay 
                        title={quiz.title}
                        id={quiz.id} 
                        subject={quiz.subject} 
                        content={quiz.content} 
                        handleQuizCardClick={handleQuizCardClick} 
                        handleQuizContentChange={handleQuizContentChange} 
                        handleQuizSubmit={handleQuizSubmit}
                        quizSolution={quizSolution}
                        submissionState={submissionState}
                    />
                )}
            </div>
            <div> 
            {(submissionState || quizCards.length === 0) ? null : 
                <button className="submit-button" onClick={() => {
                    console.log(title)
                    console.log()
                    handleQuizSubmit();
                }
                }>Show Answer</button>
            }
            </div>
        </div>
    )
    

}


export default Quiz;