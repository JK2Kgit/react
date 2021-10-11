import logo from './logo.svg';
import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Students from './Students';
import Data from './data.json'

function App() {
  return (
    <div className="App">
      <Router>

        <Link to="/">Home </Link>
        <Link to="/Men">Men </Link>
        <Link to="/Women">Women </Link>

        <Switch>
          <Route exact path="/">
            <Students studentsList={Data} />
          </Route>
          <Route exact path="/Men">
          <Students studentsList={Data.filter((x) => x.name.split(' ')[0].slice(-1) !== "a" )} />
          </Route>
          <Route exact psth="/Women">
            <Students studentsList={Data.filter((x) => x.name.split(' ')[0].slice(-1) === "a" )} />
          </Route>
        </Switch>

      </Router>
    </div>
  );
}

export default App;
