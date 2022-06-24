import React from "react";
import "./App.css";
import "react-router-dom";
import Home from "./pages/home/Home";
import CareerOpportunities from "./pages/CareerOpportunities/CareerOpportunities";

const App = () => {
  return (
    <>
      <Home />
      <CareerOpportunities />
    </>
  );
};

export default App;
