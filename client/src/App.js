import ReactDOM from "react-dom";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";
import Card from "./components/Card"
import CardDisplay from "./components/CardDisplay"
import CardContainer from "./components/CardContainer"

function App() {
  const [count, setCount] = useState(0);
  const [cards, setCards] = useState([]);
  const [cardOnDisplay, setCardOnDisplay] = useState([])
  // const [cardID, setCardID] = useState(cardOnDisplay.id)
  // const [cardTitle, setTitle] = useState(cardOnDisplay.title)
  // const [cardSubject, setCardSubject] = useState(cardOnDisplay.subject)
  // const [cardContent, setCardContent] = useState(cardOnDisplay.content)
  // const [cardStudied, setCardStudied] = useState(cardOnDisplay.studied)
  // const [cardMastered, setCardMastered] = useState(cardOnDisplay.mastered)


  function handleTitleChange(event) {
    setCardOnDisplay({...cardOnDisplay, title: event.target.value });
  }

  function handleSubjectChange(event) {
    setCardOnDisplay({...cardOnDisplay, subject: event.target.value });
  }

  function handleContentChange(event) {
    setCardOnDisplay({...cardOnDisplay, content: event.target.value });
  }

  function handleContainerCardClick(id) {
    setCardOnDisplay(cards.find(card => card.id === id))
  }

  function handleSaveContent(id) {
      fetch(`/cards/${id}`, {
          method: 'PATCH',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(cardOnDisplay),
          })
          .then(response => response.json())
          .then(updatedCard => {
            console.log(updatedCard)
            let unUpdatedCards = cards.filter(card => card.id !== id);
            let updatedCards = [updatedCard, ...unUpdatedCards];
            setCards(updatedCards)
            // console.log(updatedCard)
            // setCards(...updatedCard);
      });
  }

  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);

  useEffect(() => {
    fetch("/cards")
      .then((res) => res.json())
      .then(cards => {
        setCards(cards)
        setCardOnDisplay(cards[0])
        console.log(cards)
      })

  }, [])

  return (
    <BrowserRouter>
      <div className="App">
        <nav>
          <NavLink 
            activeClassName="active-nav-link" 
            className="study-route" 
            exact to="study">
            Study
          </NavLink>

          <NavLink 
            activeClassName="active-nav-link" 
            className="quiz-route"
            exact to="quiz">
            Quiz
          </NavLink>
        </nav>
        <Switch>

          <Route exact path="/">
            <h1>Page Count: {count}</h1>
          </Route>

          <Route exact path="/study">
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
          </Route>

          <Route exact path="/quiz">
            <h1>Quiz Session</h1>
          </Route>

        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;