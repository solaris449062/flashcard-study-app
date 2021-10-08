import React from "react";

function GenerateQuizButton({ handleGenerateQuizButton }) {

    return (
        <div className="create-button-container">
            <button className="create-button" onClick={handleGenerateQuizButton}>Generate New Quiz</button>
        </div>
        
        
    )
}

export default GenerateQuizButton