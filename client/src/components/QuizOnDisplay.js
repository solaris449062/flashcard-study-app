import React from "react";
import { useState, useEffect } from "react";

function QuizOnDisplay({id, title, subject, content, studied, mastered, handleQuizContentChange }) {

    return (
    <div className="card-display-container">
        <div className="card-display"> 
            <h1 className="card-title">{title}</h1>
            <h2 className="card-subject">{subject}</h2>
            {/* <h3 className="card-studied">{`studied: ${studied}`}</h3>
            <h3 className="card-mastered">{`mastered: ${mastered}`}</h3> */}
            <textarea className="input-content" type="text" value={content} onChange={handleQuizContentChange}/>
        </div>
    </div>
    )
}

export default QuizOnDisplay