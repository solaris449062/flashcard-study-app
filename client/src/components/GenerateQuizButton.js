import React from "react";

function GenerateQuizButton({ handleGenerateQuizButton }) {

    return (
        <button className="new-button" onClick={handleGenerateQuizButton}>Generate New Quiz</button>
    )
}

export default GenerateQuizButton