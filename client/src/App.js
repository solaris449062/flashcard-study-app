import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";
import Card from "./components/Card"

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);

  return (
    <BrowserRouter>
      <div className="App">

        <NavLink activeClassName="active-nav-link" exact to="study">
          Study
        </NavLink>

        <NavLink activeClassName="active-nav-link" exact to="quiz">
          Quiz
        </NavLink>

        <Switch>

          <Route path="/">
            <h1>Page Count: {count}</h1>
          </Route>

          <Route exact path="/study">
            <h1>Study Session</h1>
            <Card/>
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