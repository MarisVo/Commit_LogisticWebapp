import React, { useEffect, useState } from "react";
import "./App.css";
import "react-router-dom";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
import { Home, About, Commit, Track, VanDon, Adivce, SignUpAdvice, Contact, PageNotFound, Layer } from "./pages/pageExport"
import { BrowserRouter, Route, Routes } from "react-router-dom";
const App = () => {

  return (
    <BrowserRouter>
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<Layer />}>
            <Route index element={<Home />} ></Route>
            <Route path="about" element={<About />} />
            <Route path="commit" element={<Commit />} />
            <Route path="track" element={<Track />} >
              <Route path="cuoc-van-chuyen" element={<Track number={"1"} />} />
              <Route path="van-don" element={<Track number={"2"} />} />
              <Route path="buu-cuc" element={<Track number={"3"} />} />
              <Route path="bang-gia" element={<Track number={"4"} />} />
              <Route path="hang-cam-gui" element={<Track number={"5"} />} />
            </Route>          
            <Route path="dang-ki-tu-van" element={<SignUpAdvice />} />
            <Route path="contact" element={<Contact />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>

    </BrowserRouter>
  )
}

export default App;
