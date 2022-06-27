import React from "react";
import "./App.css";
import "react-router-dom";

import CareerOpportunities from "./pages/CareerOpportunities/CareerOpportunities";
import Life from "./pages/Life/Life";
import RecruitmentDetails from "./pages/RecruitmentDetails/RecruitmentDetails";

const App = () => {
  return (
    <>
      <CareerOpportunities />
      <Life />
      <RecruitmentDetails />
    </>
  );
};

export default App;
