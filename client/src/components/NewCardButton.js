import React from "react";

function NewCardButton({ handleNewCardButton }) {

    return (
        <div className="create-button-container">
            <button className="create-button" onClick={handleNewCardButton}>Create New Card</button>        
        </div>
    )
}

export default NewCardButton