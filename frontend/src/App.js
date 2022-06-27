import React from "react";
import "./App.css";
import "react-router-dom";
import Home from './pages/home/Home'
import Register from "./pages/Login/Register";
import Login from "./pages/Login/Login";
import ForgetPass from "./pages/Login/ForgetPass";
import { BrowserRouter as Router, Route, Switch, Routes } from "react-router-dom"

const App = () => {
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

export default App;
