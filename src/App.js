import React from "react";
import { Route, Switch } from "react-router-dom";
import Curriculum from "./Curriculum";
import Journals from "./Journals";
import Downloads from "./Downloands";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Curriculum} />
        <Route exact path="/journals" component={Journals} />
        <Route exact path="/downloands" component={Downloads} />
      </Switch>
    </div>
  );
}

export default App;
