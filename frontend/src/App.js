<<<<<<< HEAD
import React from "react";
import "./App.css";
import "react-router-dom";
import Home from './pages/home/Home'
import Register from "./pages/Login/Register";
import Login from "./pages/Login/Login";
import ForgetPass from "./pages/Login/ForgetPass";
import { BrowserRouter as Router, Route, Switch, Routes } from "react-router-dom"
=======
import React from 'react';
import './App.css';
import 'react-router-dom';
>>>>>>> ef96025e6a1e9cee2b9ecd32e3c477f9e4168187


import Track from './pages/track/Track';
import Advice from './pages/advice/Advice';
const App = () => {
<<<<<<< HEAD
  return (
    <Router>
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgetpassword" element={<ForgetPass />} />
        </Routes>
      </div>
    </Router>
  )
}
=======
	return (
	
		<Track/>
		// <Advice />
	);
};
>>>>>>> ef96025e6a1e9cee2b9ecd32e3c477f9e4168187

export default App;
