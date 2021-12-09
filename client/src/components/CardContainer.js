import React from "react"
import Card from "./Card"

function CardContainer({cards, handleContainerCardClick, handleCardDelete, handleCheckboxClick}) {
    
    return (
        <div className="card-container">
            {cards.map((card) => (
                <Card 
                    key={card.id}
                    card={card}
                    handleContainerCardClick={handleContainerCardClick}
                    handleCardDelete={handleCardDelete}
                    handleCheckboxClick={handleCheckboxClick}
                />
            ))}
        </div>
    )
}

export default CardContainer;