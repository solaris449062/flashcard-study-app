import React from "react"
import { useState, useEffect } from "react";

function CardDisplay({id, title, subject, content, studied, mastered, handleSaveContent, handleContentChange}) {

    return (
    <div className="card-container2"> 
        <textarea className="input-title" value={title}/>
        <textarea className="input-subject" value={subject}/>
        <h3 className="card-studied">{`studied: ${studied}`}</h3>
        <h3 className="card-mastered">{`mastered: ${mastered}`}</h3>
        <textarea className="input-content" type="text" value={content} onChange={handleContentChange}/>
        <button className="save-button" onClick={() => handleSaveContent(id)}>Save</button>
    </div>
    )
}

export default CardDisplay