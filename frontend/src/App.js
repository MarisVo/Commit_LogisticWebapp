import React from "react";
import "./App.css";
import "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Home, About, Commit } from "./pages/pageExport"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (

    <Router>
      <div className="wrapper">
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          {/* <Route path="/about" component={About} />
          <Route path="/commit" component={Commit} />
          <Route path="/tracking" component={Tracking} />
          <Route path="/service" component={Service} />
          <Route path="/standard-service" component={StandardService} />
          <Route path="/fast-service" component={FastService} /> */}
        </Switch>
        <Footer />
      </div>
    </Router>

  )
}

export default App;
