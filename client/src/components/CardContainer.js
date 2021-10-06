import React from "react"
import Card from "./Card"

function CardContainer({cards}) {
    
    return (
        <div className="card-container1">
            {cards.map((card) => (
                <Card 
                    key={card.id}
                    card={card}
                />
            ))}
        </div>
    )
}

export default CardContainer;