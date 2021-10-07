import React, { useState, useEffect } from "react";
import CardDisplay from "./CardDisplay"
import CardContainer from "./CardContainer"
import NavBar from "./NavBar"
import Header from "./Header";


function Study({cardOnDisplay, handleSaveContent, handleTitleChange, handleSubjectChange, handleContentChange, cards, handleContainerCardClick}) {
    
    return (
        <div>
            {/* <Header user={user} onLogout={handleLogout}/> */}
            <NavBar/>
            <h1>Study Session</h1>
            {cardOnDisplay ? <CardDisplay 
                        id={cardOnDisplay.id}
                        title={cardOnDisplay.title}
                        subject={cardOnDisplay.subject}
                        content={cardOnDisplay.content}
                        studied={cardOnDisplay.studied}
                        mastered={cardOnDisplay.mastered}
                        handleSaveContent={handleSaveContent}
                        handleTitleChange={handleTitleChange}
                        handleSubjectChange={handleSubjectChange}
                        handleContentChange={handleContentChange}
                        /> : null}
            {cards ? <CardContainer cards={cards} handleContainerCardClick={handleContainerCardClick}/> : null}
        </div>
    )
}

export default Study