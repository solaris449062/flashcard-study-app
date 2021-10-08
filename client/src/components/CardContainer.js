import React from "react"
import Card from "./Card"

function CardContainer({cards, handleContainerCardClick, handleCardDelete}) {
    
    return (
        <div className="card-container">
            {cards.map((card) => (
                <Card 
                    key={card.id}
                    card={card}
                    handleContainerCardClick={handleContainerCardClick}
                    handleCardDelete={handleCardDelete}
                />
            ))}
        </div>
    )
}

export default CardContainer;