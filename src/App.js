import React from "react";
import Navbar from "./Navbar/Navbar";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import MusicPage from "./pages/Music Page/Music";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/music" exact component={MusicPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
