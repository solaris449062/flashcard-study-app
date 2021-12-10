import React from "react";
import NavBar from "./NavBar";
import Header from "./Header";
import GenerateQuizButton from "./GenerateQuizButton";
import QuizOnDisplay from "./QuizOnDisplay";

function Quiz({ quizCards, user, title, subject, content, onLogout, handleGenerateQuizButton, handleQuizCardClick, handleQuizContentChange, handleQuizSubmit, quizSolution, isSubmitted, submissionState }) {
    return (
        <div className="quiz-container">
            <Header user={user} onLogout={onLogout} />
            <NavBar />
            <div className="study-heading-container">
                <h1 className="study-heading"></h1>
            </div>

            <div className="filter-button-contn">
                <div className="filter-container">
                    {/* <h5 className="filter-text">Review Level</h5> */}
                    <form className="filter-form">
                        <select className="select-bar">
                            <option className="select-options">Needs Review</option>
                            <option>Studied</option>
                            <option>Mastered</option>
                            <option>All</option>
                        </select>
                    </form>
                    <form className="filter-form">
                        <select className="select-bar">
                            <option>Algebra</option>
                            <option>Geometry</option>
                            <option>Biochemistry</option>
                            <option>Music Theory</option>
                        </select>
                    </form>
                </div>

                <GenerateQuizButton handleGenerateQuizButton={handleGenerateQuizButton} />
            </div>
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