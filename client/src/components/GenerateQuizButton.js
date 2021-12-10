import React from "react";

function GenerateQuizButton({ handleGenerateQuizButton }) {

    return (
        <div className="quiz-button-container">
            <button className="quiz-button" onClick={handleGenerateQuizButton}>Generate New Quiz</button>
        </div>
        
        
    )
}

export default GenerateQuizButton