import React from "react"
import Quiz from "./Card"

function QuizContainer({quizCards, handleContainerCardClick, handleCardDelete}) {
    
    return (
        <div className="card-container">
            {quizCards.map((quiz) => (
                <Quiz 
                    key={quiz.id}
                    card={quiz}
                    handleContainerCardClick={handleContainerCardClick}
                    handleCardDelete={handleCardDelete}
                />
            ))}
        </div>
    )
}

export default QuizContainer;