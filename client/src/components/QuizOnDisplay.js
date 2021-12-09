import React from "react";
import { useState, useEffect } from "react";

function QuizOnDisplay({id, title, subject, content, studied, mastered, handleQuizContentChange, handleQuizCardClick, handleQuizSubmit, quizSolution, submissionState}) {

    const [quizContent, setQuizContent] = useState("");

    return (
    <div className="card-display-container" onClick={() => handleQuizCardClick(id)}>
        <div className="card-display"> 
            <h1 className="quizcard-title">{`Explain ${title}:`}</h1>
            {/* <h3 className="card-studied">{`studied: ${studied}`}</h3>
            <h3 className="card-mastered">{`mastered: ${mastered}`}</h3> */}
            <textarea className="input-content" type="text" placeholder="Type your answer..." value={quizContent} onChange={event => setQuizContent(event.target.value)}/>
            
            {submissionState ? <p className="answer-content">{content ? content : null}</p> : null} 
       </div>
    </div>
    )
}

export default QuizOnDisplay