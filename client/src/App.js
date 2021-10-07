import ReactDOM from "react-dom";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";
import Card from "./components/Card"
import CardDisplay from "./components/CardDisplay"
import CardContainer from "./components/CardContainer"

function App() {
  const [count, setCount] = useState(0);
  const [cards, setCards] = useState([])

  const card = cards ? cards[0] : null;
  const [cardID, setCardID] = useState(card.id)
  const [cardTitle, setTitle] = useState(card.title)
  const [cardSubject, setCardSubject] = useState(card.subject)
  const [cardContent, setCardContent] = useState(card.content)
  const [cardStudied, setCardStudied] = useState(card.studied)
  const [cardMastered, setCardMastered] = useState(card.mastered)


  function handleContentChange(event) {
      setCardContent(event.target.value);
  }

  function handleSaveContent(id) {
      fetch(`/cards/${id}`, {
          method: 'PATCH',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              // title: cardTitle,
              // subject: cardSubject,
              content: cardContent
              // studied: cardStudied,
              // mastered: cardMastered
               }),
          })
          .then(response => response.json())
          .then(data => {
          console.log('Success:', data);
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
      .then(data => {
        setCards(data)
        console.log(data)
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
            {cards ? <CardDisplay 
                        id={cardID}
                        title={cardTitle}
                        subject={cardSubject}
                        content={cardContent}
                        studied={cardStudied}
                        mastered={cardMastered}
                        handleSaveContent={handleSaveContent}
                        handleContentChange={handleContentChange}
                        /> : null}
            {cards ? <CardContainer cards={cards}/> : null}
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