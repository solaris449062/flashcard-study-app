import React from "react"
import { useState, useEffect } from "react";

function Card({card, handleContainerCardClick, handleCardDelete, handleCheckboxClick}) {

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
        <div className="card-checkbox">
            <div>
                <input type="checkbox" name="studied" onClick={(event) => handleCheckboxClick(event, card.id)} checked={card.studied}/>
                <label for="studied">studied</label>
            </div>
            <div>
                <input type="checkbox" name="mastered" onClick={(event) => handleCheckboxClick(event, card.id)} checked={card.mastered}/>
                <label for="studied">mastered</label>
            </div>
            
        </div>
    </div>
    )
}

export default Card