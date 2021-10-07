import React from "react"
import { useState, useEffect } from "react";

function Card({card}) {

    const [cardContent, setCardContent] = useState(card.content)

    function handleContentChange(event) {
        setCardContent(event.target.value);
    }

    return (
    <div className="card-container2"> 
        <h1 className="card-title">{card.title}</h1>
        <h2 className="card-subject">{card.subject}</h2>
        <p className="card-content">{card.content}</p>
        <h3 className="card-studied">{card.studied ? "studied": "not studied"}</h3>
        <h3 className="card-mastered">{card.mastered ? "studied": "not mastered"}</h3>
    </div>
    )
}

export default Card