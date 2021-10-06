import React from "react"
import Card from "./Card"

function CardContainer({cards}) {
    
    return (
        <div className="card-containerx">
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