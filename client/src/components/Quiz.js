import React, {useState} from "react";
import NavBar from "./NavBar";
import Header from "./Header";
import GenerateQuizButton from "./GenerateQuizButton";
import QuizOnDisplay from "./QuizOnDisplay";

function Quiz({quizCards, user, title, subject, content, onLogout, handleGenerateQuizButton, handleQuizCardClick, handleQuizContentChange, handleQuizSubmit, quizSolution, isSubmitted, submissionState}) {

    const [resetStatus, setResetStatus] = useState(false)
    function resetQuizContent() {
        console.log("reset status is " + resetStatus)
       setResetStatus(true) 
       console.log("reset status is " + resetStatus)
    }

    return (
        <div>
            <Header user={user} onLogout={onLogout}/>
            <NavBar/>
            <div className="study-heading-container">
                <h1 className="study-heading"></h1>
            </div>

            <GenerateQuizButton handleGenerateQuizButton={handleGenerateQuizButton} resetQuizContent={resetQuizContent}/>
            {/* <QuizOnDisplay title={title} subject={subject} content={content} handleQuizContentChange={handleQuizContentChange}/> */}
            <div>
                {quizCards.map(quiz => 
                    <QuizOnDisplay 
                        title={quiz.title}
                        id={quiz.id} 
                        subject={quiz.subject} 
                        content={quiz.content} 
                        resetStatus={resetStatus}
                        handleQuizCardClick={handleQuizCardClick} 
                        handleQuizContentChange={handleQuizContentChange} 
                        handleQuizSubmit={handleQuizSubmit}
                        quizSolution={quizSolution}
                        submissionState={submissionState}
                    />
                )}
            </div>
            <div className="show-answer-button-container"> 
                {(submissionState || quizCards.length === 0) ? null : 
                    <button className="show-answer-button" onClick={() => {
                        console.log(title)
                        console.log()
                        handleQuizSubmit();
                    }
                    }>Show Answers</button>
                }
            </div>
        </div>
    )
    

}


export default Quiz;