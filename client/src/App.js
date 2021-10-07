import ReactDOM from "react-dom";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, NavLink, withRouter } from "react-router-dom";
import Card from "./components/Card"
import CardDisplay from "./components/CardDisplay"
import CardContainer from "./components/CardContainer"
import Header from "./components/Header"
import Login from "./components/Login"
import NavBar from "./components/NavBar"
import Quiz from "./components/Quiz"
import Study from "./components/Study"

function App() {
  const [user, setUser] = useState(null);
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

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  function handleLogin(user) {
    setUser(user);
  }

  function handleLogout() {
    setUser(null);
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
        {/* <Route exact path="/login">
          <Login 
            user={user} 
            onLogout={handleLogout}
            onLogin={handleLogin} 
          />
        </Route> */}

        <Header user={user} onLogout={handleLogout}/>
        {/* <nav>
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
        </nav> */}
        <Switch>


          {/* <Route exact path="/login">
            <Login onLogin={handleLogin} />
          </Route> */}

          <Route exact path="/">
            <h1>Flashspace</h1>
          </Route>

          <Route exact path="/login">
          <Login 
            user={user} 
            onLogout={handleLogout}
            onLogin={handleLogin} 
          />
        </Route>

          <Route exact path="/study">
            <Study
              cardOnDisplay={cardOnDisplay}
              handleSaveContent={handleSaveContent}
              handleTitleChange={handleTitleChange}
              handleSubjectChange={handleSubjectChange}
              handleContentChange={handleContentChange}
              cards={cards}
              handleContainerCardClick={handleContainerCardClick}
            />
            
            {/* <NavBar/>
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
            {cards ? <CardContainer cards={cards} handleContainerCardClick={handleContainerCardClick}/> : null} */}
          </Route>

          <Route exact path="/quiz">

            <Quiz/>
          </Route>

        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;