import React from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import MusicPage from "./pages/Music Page/Music";
import ComingSoonPage from "./pages/Shop Page/ComingSoon";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/music" exact component={MusicPage} />
          <Route path="/shop" exact component={ComingSoonPage} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
