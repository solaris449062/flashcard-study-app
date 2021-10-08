import React, { useState, useEffect } from "react";
import CardDisplay from "./CardDisplay"
import CardContainer from "./CardContainer"
import NavBar from "./NavBar"
import Header from "./Header";
import NewCardButton from "./NewCardButton";


function Study({cardOnDisplay, handleSaveContent, handleTitleChange, handleSubjectChange, handleContentChange, cards, handleContainerCardClick, user, onLogout, handleNewCardButton}) {
    
    return (
        <div className="study-container">
            <Header user={user} onLogout={onLogout}/>
            <NavBar/>

            <div className="study-heading-container">
                <h1 className="study-heading">Flashcards</h1>
            </div>

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