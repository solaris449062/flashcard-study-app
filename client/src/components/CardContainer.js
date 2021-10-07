import React from "react"
import Card from "./Card"

function CardContainer({cards, handleContainerCardClick}) {
    
    return (
        <div className="card-container">
            {cards.map((card) => (
                <Card 
                    key={card.id}
                    card={card}
                    handleContainerCardClick={handleContainerCardClick}
                />
            ))}
        </div>
    )
}

export default CardContainer;