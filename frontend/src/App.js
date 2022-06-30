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
  CareerOpportunities,
  Life,
<<<<<<< HEAD
  DefaultLayout,
  Login,
  Register,
  ForgetPass,
  RecruitmentDetails,
} from "./pages/pageExport";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { MainProvider } from "./context/MainContext";
import StandardService from "./pages/services/StandardService";
import Service from "./pages/services/Service";
import FastService from "./pages/services/FastService";
import SuperService from "./pages/services/SuperService";
import FreshService from "./pages/services/FreshService";
=======
  Purchase,
  PurchaseStage,
  /*Profile,
  Notification,*/
  DefaultLayout,
  Login,
  Register,
  ForgetPass
} from "./pages/pageExport";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HotJob from "./components/HotJob";
import NewJob from "./components/NewJob";
import { MainProvider } from "./context/MainContext";
>>>>>>> 00100bd4e54260dc71d548952f07c9dd3f2d4d54

const App = () => {
  return (
    <MainProvider>
      <BrowserRouter>
        <div className="wrapper">
          <Routes>
            <Route path="/" element={<DefaultLayout />}>
              <Route index element={<Home />}></Route>
<<<<<<< HEAD
              <Route path="ve-chung-toi" element={<About />} />
              <Route path="cam-ket" element={<Commit />} />
              {/* -----------------------Tra cứu---------------------- */}
              <Route path="tra-cuu" element={<Track />}>
=======
              <Route path="about" element={<About />} />
              <Route path="commit" element={<Commit />} />
              {/* -----------------------Tra cứu---------------------- */}
              <Route path="track" element={<Track />}>
>>>>>>> 00100bd4e54260dc71d548952f07c9dd3f2d4d54
                <Route path="cuoc-van-chuyen" element={<CuocVanChuyen />} />
                <Route path="van-don" element={<VanDon />} />
                <Route path="buu-cuc" element={<BuuCuc />} />
                <Route path="bang-gia" element={<BangGia />} />
                <Route path="hang-cam-gui" element={<HangCamGui />} />
              </Route>
              {/* ------------------------Tuyển dụng------------------- */}
              <Route path="tuyen-dung" element={<CareerOpportunities />}>
<<<<<<< HEAD
                <Route
                  path="chi-tiet-viec-lam-noi-bat"
                  element={<RecruitmentDetails />}
                />
                <Route
                  path="chi-tiet-viec-lam-moi"
                  element={<RecruitmentDetails />}
                />
              </Route>
              <Route path="cuoc-song" element={<Life />} />
              {/* ------------------------Dịch vụ---------------------- */}
              <Route path="dich-vu" element={<Service />} />
              <Route
                path="chuyen-phat-tieu-chuan"
                element={<StandardService />}
              />
              <Route path="chuyen-phat-nhanh" element={<FastService />} />
              <Route
                path="sieu-dich-vu-chuyen-phat"
                element={<SuperService />}
              />
              <Route
                path="chuyen-phat-do-tuoi-song"
                element={<FreshService />}
              />
              {/* -------------------------Đăng kí/Đăng nhập------------- */}
              <Route path="dang-ki" element={<Register />} />
              <Route path="dang-nhap" element={<Login />} />
              <Route path="quen-mat-khau" element={<ForgetPass />} />
              {/* -----------------------Tư vấn----------------------- */}
              <Route path="tu-van/lien-he" element={<Contact />} />
              <Route path="tu-van/dang-ki-tu-van" element={<SignUpAdvice />} />
=======
                <Route path="chi-tiet-viec-lam-noi-bat" element={<HotJob />} />
                <Route path="chi-tiet-viec-lam-moi" element={<NewJob />} />
              </Route>
              <Route path="cuoc-song" element={<Life />} />
              {/* -----------------------Tư vấn----------------------- */}
              <Route path="advice/contact" element={<Contact />} />
              <Route path="advice/dang-ki-tu-van" element={<SignUpAdvice />} />
              {/* ----------------------Profile------------------ */}
              <Route path="user/account/profile" element={<Profile />} />
              <Route path="user/purchase" element={<Purchase />} />
              <Route
                path="user/purchase/order/:id"
                element={<PurchaseStage />}
              />
              <Route
                path="user/notifications/order"
                element={<Notification />}
              />
              {/* -----------------------Đăng nhập----------------------- */}
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />              
              <Route path="/forgetpass" element={<ForgetPass />} />   

>>>>>>> 00100bd4e54260dc71d548952f07c9dd3f2d4d54
              <Route path="*" element={<PageNotFound />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </MainProvider>
  );
};
/*   <Route path="user/account/profile" element={<Profile />} />
              <Route path="user/purchase" element={<Purchase />} />
              <Route
                path="user/purchase/order/:id"
                element={<PurchaseState />}
              />
              <Route
                path="user/notifications/order"
                element={<Notification />}
              /> */

export default App;
