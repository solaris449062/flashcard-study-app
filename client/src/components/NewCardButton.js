import React from "react";

function NewCardButton({ handleNewCardButton }) {

    return (
        <button className="new-button" onClick={handleNewCardButton}>Create New Card</button>
    )
}

export default NewCardButton