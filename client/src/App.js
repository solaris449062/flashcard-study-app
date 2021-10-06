import React from "react";
import ReactDOM from "react-dom";
import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";
import Card from "./components/Card"
import CardContainer from "./components/CardContainer"

function App() {
  const [count, setCount] = useState(0);
  const [cards, setCards] = useState([])

  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);

  useEffect(() => {
    fetch("/cards")
      .then((res) => res.json())
      .then(data => setCards(data))
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
            {/* <Card/> */}
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