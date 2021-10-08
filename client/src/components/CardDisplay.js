import React from "react";
import { useState, useEffect } from "react";

function CardDisplay({id, title, subject, content, studied, mastered, handleSaveContent, handleContentChange, handleSubjectChange, handleTitleChange}) {

    return (
    <div className="card-display-container">
        <div className="card-display"> 
            <textarea className="input-title" value={title} onChange={handleTitleChange}/>
            <textarea className="input-subject" value={subject} onChange={handleSubjectChange}/>
            <h3 className="card-studied">{`studied: ${studied}`}</h3>
            <h3 className="card-mastered">{`mastered: ${mastered}`}</h3>
            <textarea className="input-content" type="text" value={content} onChange={handleContentChange}/>
            <button className="save-button" onClick={() => handleSaveContent(id)}>Save</button>
        </div>
    </div>
    )
}

export default CardDisplay