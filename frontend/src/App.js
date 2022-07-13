import React from "react";
import "./App.css";
import "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
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
  DefaultLayout,
  Login,
  Register,
  ForgetPass,
  RecruitmentDetails,
  Purchase,
  PurchaseStage,
  PurchaseDetail,
  Profile, 
  Notification,
  PurchaseDriver,
  LayerStorekeeper,
  ProductsManager,
  Inventory,
  StandardService,
  Service,
  FastService,
  SuperService,
  FreshService,
  AdminPage,
  AdminAbout,
  AdminContactUs,
  AdminCommitment,
  AdminContactMessage,
  AdminDeliveryService,
  AdminPartner,
  AdminCareer,
  AdminApplicant,
  AdminDepartment
} from "./pages/pageExport";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainProvider from "./context/MainContext";
const App = () => {
  return (
    <MainProvider>
      <BrowserRouter>
        <div className="wrapper">
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<DefaultLayout />}>

              <Route index element={<Home />}></Route>
              <Route path="ve-chung-toi" element={<About />} />
              <Route path="cam-ket" element={<Commit />} />
              {/* -----------------------Tra cứu---------------------- */}
              <Route path="tra-cuu" element={<Track />}>
                <Route path="cuoc-van-chuyen" element={<CuocVanChuyen />} />
                <Route path="van-don" element={<VanDon />} />
                <Route path="buu-cuc" element={<BuuCuc />} />
                <Route path="bang-gia" element={<BangGia />} />
                <Route path="hang-cam-gui" element={<HangCamGui />} />
              </Route>
              {/* ------------------------Tuyển dụng------------------- */}
              <Route path="tuyen-dung" element={<CareerOpportunities />}>
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
              {/* ----------------------Profile------------------ */}
              <Route path="user/account/profile" element={<Profile />} />
              <Route path="user/purchase" element={<Purchase />} />
              <Route path="driver/purchase" element={<PurchaseDriver />} />
              <Route path="user/purchase/:id" element={<PurchaseDetail />} />
              <Route
                path="user/purchase/order/:id"
                element={<PurchaseStage />}
              />
              <Route
                path="user/notifications/order"
                element={<Notification />}
              />
              {/* -------------------------Đăng kí/Đăng nhập------------- */}
              <Route path="dang-ki" element={<Register />} />
              <Route path="dang-nhap" element={<Login />} />
              <Route path="quen-mat-khau" element={<ForgetPass />} />
              {/* -----------------------Tư vấn----------------------- */}
              <Route path="tu-van/lien-he" element={<Contact />} />
              <Route path="tu-van/dang-ki-tu-van" element={<SignUpAdvice />} />

              <Route path="*" element={<PageNotFound />} />
            </Route>
            <Route path="storekeeper" element={<LayerStorekeeper />}>
              <Route index element={<ProductsManager />} />
              <Route path="xuat-nhap" element={<ProductsManager />} />
              <Route path="ton-kho" element={<Inventory />} />
            </Route>
            <Route path="admin" element={<AdminPage />}>
              <Route path="about" element={<AdminAbout />}></Route>
              <Route path="contact-us" element={<AdminContactUs />}></Route>
              <Route path="commitment" element={<AdminCommitment />}></Route>
              <Route path="message" element={<AdminContactMessage />}></Route>
              <Route path="service" element={<AdminDeliveryService />}></Route>
              <Route path="partner" element={<AdminPartner />}></Route>
              <Route path="career" element={<AdminCareer />}></Route>
              <Route path="applicant" element={<AdminApplicant />}></Route>
              <Route path="department" element={<AdminDepartment />}></Route>
            </Route>
          </Routes>

        </div>
      </BrowserRouter>
    </MainProvider>
  );
};

export default App;
