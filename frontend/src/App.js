import React, { useEffect, useState } from "react";
import "./App.css";
import "react-router-dom";
import {
  Home,
  About,
  Commit,
  Track,
  VanDon,
  CuocVanChuyen,
  SignUpAdvice,
  Contact,
  PageNotFound,
  BuuCuc,
  BangGia,
  HangCamGui,
  CarerrOpportunity,
  Life,
  DefaultLayout,
} from "./pages/pageExport";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HotJob from "./components/HotJob";
import NewJob from "./components/NewJob";
import { MainProvider } from "./context/MainContext";

const App = () => {
  return (
    <MainProvider>
      <BrowserRouter>
        <div className="wrapper">
          <Routes>
            <Route path="/" element={<DefaultLayout />}>
              <Route index element={<Home />}></Route>
              <Route path="about" element={<About />} />
              <Route path="commit" element={<Commit />} />
              {/* -----------------------Tra cứu---------------------- */}
              <Route path="track" element={<Track />}>
                <Route path="cuoc-van-chuyen" element={<CuocVanChuyen />} />
                <Route path="van-don" element={<VanDon />} />
                <Route path="buu-cuc" element={<BuuCuc />} />
                <Route path="bang-gia" element={<BangGia />} />
                <Route path="hang-cam-gui" element={<HangCamGui />} />
              </Route>
              {/* ------------------------Tuyển dụng------------------- */}
              <Route path="tuyen-dung" element={<CarerrOpportunity />}>
                <Route path="chi-tiet-viec-lam-noi-bat" element={<HotJob />} />
                <Route path="chi-tiet-viec-lam-moi" element={<NewJob />} />
              </Route>
              <Route path="cuoc-song" element={<Life />} />

              {/* -----------------------Tư vấn----------------------- */}
              <Route path="advice/contact" element={<Contact />} />
              <Route path="advice/dang-ki-tu-van" element={<SignUpAdvice />} />
              <Route path="*" element={<PageNotFound />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </MainProvider>
  );
};

export default App;
