import React, { useState, useEffect } from "react";
import CardDisplay from "./CardDisplay"
import CardContainer from "./CardContainer"
import NavBar from "./NavBar"
import Header from "./Header";
import NewCardButton from "./NewCardButton";


function Study({cardOnDisplay, handleSaveContent, handleTitleChange, handleSubjectChange, handleContentChange, cards, handleContainerCardClick, user, onLogout, handleNewCardButton}) {
    
    return (
        <div>
            <Header user={user} onLogout={onLogout}/>
            <NavBar/>
            <h1>Study Session</h1>
            <NewCardButton handleNewCardButton={handleNewCardButton}/>
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