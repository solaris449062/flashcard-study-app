import React from "react";
import { useState, useEffect } from "react";

function QuizOnDisplay({id, title, subject, content, studied, mastered, handleQuizContentChange, handleQuizCardClick, handleQuizSubmit, quizSolution, submissionState, resetStatus}) {
    console.log(resetStatus)
    const [quizContent, setQuizContent] = useState("");
    const [resetState, setResetState] = useState(resetStatus)
    console.log(resetStatus)
    console.log(resetState)

    function contentReset() {
        console.log(resetState)
        if (resetState) {
            // setResetState(!resetState)
            setQuizContent("")
            setResetState(false)
            console.log("resetted")
            console.log(resetState)
            console.log(quizContent)
            return quizContent 
        }
    } 


    return (
    <div className="card-display-container" onClick={() => handleQuizCardClick(id)}>
        <div className="card-display"> 
            <h1 className="card-title">{`Explain ${title}`}</h1>
            {/* <h3 className="card-studied">{`studied: ${studied}`}</h3>
            <h3 className="card-mastered">{`mastered: ${mastered}`}</h3> */}
            <textarea className="input-content" type="text" placeholder="Type your answer..." value={contentReset()} onChange={event => setQuizContent(event.target.value)}/>
            
            {submissionState ? <p className="input-content">{content ? content : null}</p> : null} 
       </div>
    </div>
    )
}

export default QuizOnDisplay