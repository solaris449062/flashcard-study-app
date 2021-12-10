import React from "react";

function GenerateQuizButton({ handleGenerateQuizButton, resetQuizContent }) {

    return (
        <div className="create-button-container">
            <button className="create-button"
                onClick={() => {
                     handleGenerateQuizButton()
                     resetQuizContent()}
                }
            >Generate New Quiz</button>
        </div>
        
        
    )
}

export default GenerateQuizButton