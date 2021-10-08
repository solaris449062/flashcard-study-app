import ReactDOM from "react-dom";
import React, { useState, useEffect, Fragment } from "react";
import { BrowserRouter, Switch, Route, NavLink, withRouter } from "react-router-dom";
import Card from "./components/Card"
import CardDisplay from "./components/CardDisplay"
import CardContainer from "./components/CardContainer"
import Header from "./components/Header"
import Login from "./components/Login"
import NavBar from "./components/NavBar"
import Quiz from "./components/Quiz"
import Study from "./components/Study"
import QuizOnDisplay from "./components/QuizOnDisplay";



function App() {
  const [user, setUser] = useState(null);
  const [count, setCount] = useState(0);
  const [cards, setCards] = useState([]);
  const [cardOnDisplay, setCardOnDisplay] = useState([]);
  const [quizCards, setQuizCards] = useState([]);
  const [quizOnDisplay, setQuizOnDisplay] = useState([]);
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

  function handleQuizContentChange(event) {
    // console.log(event)
    console.log(quizOnDisplay)
    setQuizOnDisplay({...quizOnDisplay, content: event.target.value });
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

  const newCardTemplate = {
    title: "New Flashcard",
    subject: "New subject",
    content: "New content",
    studied: false,
    mastered: false,
    user_id: null
  }

  function handleNewCardButton() {
    console.log("new card button clicked")
    console.log(user.id)
    console.log({...newCardTemplate, user_id: user.id})
    let newCardInformation = {...newCardTemplate, user_id: user.id}
    fetch(`/cards/`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(newCardInformation),
      })
      .then(response => response.json())
      .then(updatedCard => {
        console.log(updatedCard)
        setCards([updatedCard, ...cards])
        // console.log(updatedCard)
        // setCards(...updatedCard);
    });
  }

  function handleGenerateQuizButton() {
    
    // console.log(cards)

    function selectQuizCards() {
      // console.log(cards)
      let numTotalCards = cards.length
      let numQuiz = Math.floor(numTotalCards/2)
      
      function pickRandomNumberNoOverlap(numTotal, numPicks) {
        
        let indexArray = [];
        for (let i = 0; i < numTotal; i++) {
          indexArray.push(i)
        }
  
        let numDelete = numTotal - numPicks;
        for (let i = 0; i < numDelete; i++ ) {
          let indexToDelete = Math.floor(Math.random()*indexArray.length)
          indexArray.splice(indexToDelete, 1)
        }
  
        return indexArray;
      }
  
      let selectedIndexArray = pickRandomNumberNoOverlap(numTotalCards, numQuiz);
  
      // console.log(selectedIndexArray)

      let selectedCards = [];
      for (let i = 0; i < selectedIndexArray.length; i++) {
        selectedCards.push(cards[selectedIndexArray[i]])
      }
      // console.log(selectedCards)
      return selectedCards;
    }
    
    let quizCardsOriginal = selectQuizCards();
    // console.log(quizCardsOriginal[0].content)
    let quizCardsNoContent = JSON.parse(JSON.stringify(quizCardsOriginal))

    for (let i = 0; i < quizCardsOriginal.length; i++) {
      // console.log(quizCardsOriginal[i])
      quizCardsNoContent[i].content = "Write down what you remember!";
    }
    setQuizCards(quizCardsNoContent)
    setQuizOnDisplay(quizCardsNoContent[0])
    console.log(quizCards)
    console.log(quizOnDisplay)
    console.log(quizOnDisplay.title)

  }

  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);

  useEffect(() => {
    fetch("/cards")
      .then((res) => res.json())
      .then(cardsData => {
        if (user) {
          let userCards = cardsData.filter(card => card.user_id === user.id)
          setCards(userCards)
        }
        setCardOnDisplay(cards[0])

        console.log(cards)
      })

  }, [user])

  function handleCardDelete(id) {
    fetch("/cards", {
      method: 'DELETE',
      headers: {
        Accepts: 'application/json',
        'Content-type': 'application/json',
      }
    }).then(() => setCards(cards.filter((card) => card.id !== id)));
  }

  return (
    <BrowserRouter>

      

      <div className="App">
        

        <Route exact path="/login">
          <Login 
            user={user} 
            onLogout={handleLogout}
            onLogin={handleLogin} 
          />
        </Route>
        {/* <Route exact path="/login">
          <Login 
            user={user} 
            onLogout={handleLogout}
            onLogin={handleLogin} 
          />
        </Route> */}
       
        {/* <Header user={user} onLogout={handleLogout}/> */}
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

          

          <Route exact path="/study">
            <Study
              cardOnDisplay={cardOnDisplay}
              handleSaveContent={handleSaveContent}
              handleTitleChange={handleTitleChange}
              handleSubjectChange={handleSubjectChange}
              handleContentChange={handleContentChange}
              cards={cards}
              handleContainerCardClick={handleContainerCardClick}
              user={user} 
              onLogout={handleLogout}
              handleNewCardButton={handleNewCardButton}
              handleCardDelete={handleCardDelete}
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
            <Quiz
              user={user} 
              onLogout={handleLogout}
              handleGenerateQuizButton={handleGenerateQuizButton}
              quizCards={quizCards}
              handleQuizContentChange={handleQuizContentChange}
            />
          </Route>

        </Switch>
       
      </div>
    </BrowserRouter>
  );
}

export default App;