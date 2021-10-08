import React from "react"
import { useState, useEffect } from "react";

function Card({card, handleContainerCardClick, handleCardDelete}) {

    const [cardContent, setCardContent] = useState(card.content)

    function handleContentChange(event) {
        setCardContent(event.target.value);
    }

    return (
    <div className="card" onClick={() => handleContainerCardClick(card.id)}> 
        <div className="trash-container">
            <button onClick={() => handleCardDelete(card.id)}className="trash-button">X</button>
        </div>
        <div className="card-details-contn">
            <h1 className="card-title">{card.title}</h1>
            <h2 className="card-subject">{card.subject}</h2>
            <p className="card-content">{card.content}</p>
        </div>
        {/* <h3 className="card-studied">{card.studied ? "studied": "not studied"}</h3>
        <h3 className="card-mastered">{card.mastered ? "studied": "not mastered"}</h3> */}
    </div>
    )
}

export default Card