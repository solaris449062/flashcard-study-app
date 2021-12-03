import React from "react";
import { useState, useEffect } from "react";

function QuizOnDisplay({id, title, subject, content, studied, mastered, handleQuizContentChange, handleQuizCardClick, handleQuizSubmit}) {

    const [quizContent, setQuizContent] = useState("");
    const [quizSolution, setQuizSolution] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);

    function handleQuizSubmit(id) {
        setIsSubmitted(true);
        setQuizSolution("solution");
    }

    return (
    <div className="card-display-container" onClick={() => handleQuizCardClick(id)}>
        <div className="card-display"> 
            <h1 className="card-title">{title}</h1>
            <h2 className="card-subject">{subject}</h2>
            {/* <h3 className="card-studied">{`studied: ${studied}`}</h3>
            <h3 className="card-mastered">{`mastered: ${mastered}`}</h3> */}
            <textarea className="input-content" type="text" value={quizContent} onChange={event => setQuizContent(event.target.value)}/>
            {isSubmitted ? null : <button className="submit-button" onClick={() => handleQuizSubmit(id)}>Show Answer</button>}
            {isSubmitted ? <p className="input-content">{quizSolution}</p> : null} 
       </div>
    </div>
    )
}

export default QuizOnDisplay