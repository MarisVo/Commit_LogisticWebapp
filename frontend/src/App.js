import React, { useContext } from "react";
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
  Register_OTP,
  StaffLogin,
  StaffRegister,
  ForgetPass,
  RecruitmentDetails,
  Purchase,
  PurchaseStage,
  PurchaseDetail,
  Profile,
  Notification,
  PurchaseDriver,
  LayerStorekeeper,
  Bills,
  Inventory,
  InventoryDetail,
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
  AdminDepartment,
  AdminWarehouse,
  AdminCar,
  AdminRoad,
} from "./pages/pageExport";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainProvider, { MainContext } from "./context/MainContext";
import ProtectedRoute from "./layouts/ProtectLayout";
import StaffRoute from "./layouts/StaffLayout";
import CustomerRoute from "./layouts/CustomerRoute";
import Metadata from './SEO/Metadata';
const App = () => {
  return (
    <MainProvider>
      <Metadata>
      <BrowserRouter>
        <div className="wrapper">
          {/* <ScrollToTop /> */}
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
                <Route path="chi-tiet-viec-lam-noi-bat" element={<RecruitmentDetails />} />
                <Route path="chi-tiet-viec-lam-moi" element={<RecruitmentDetails />} />
              </Route>
              <Route path="cuoc-song" element={<Life />} />
              {/* ------------------------Dịch vụ---------------------- */}
              <Route path="dich-vu" element={<Service />} />
              <Route path="chuyen-phat-tieu-chuan" element={<StandardService />} />
              <Route path="chuyen-phat-nhanh" element={<FastService />} />
              <Route path="sieu-dich-vu-chuyen-phat" element={<SuperService />} />
              <Route path="chuyen-phat-do-tuoi-song" element={<FreshService />} />
              {/* ----------------------Profile------------------ */}
              <Route element={<CustomerRoute />}>
                <Route path="user/account/profile" element={<Profile />} />
                <Route path="user/purchase" element={<Purchase />} />
                <Route path="driver/purchase" element={<PurchaseDriver />} />
                <Route path="user/purchase/:id" element={<PurchaseDetail />} />
                <Route path="user/purchase/order/:id" element={<PurchaseStage />} />
                <Route path="user/notifications/order" element={<Notification />} />
              </Route>
              {/* -------------------------Đăng kí/Đăng nhập------------- */}
                <Route element={<ProtectedRoute/>}>
              <Route path="dang-ki" element={<Register /> } />
              <Route path="dang-nhap" element={<Login /> } />
              <Route path="quen-mat-khau" element={<ForgetPass />} />
              <Route path="xac-thuc-otp" element={<Register_OTP />} />
              <Route path="dang-nhap-nhan-vien" element={<StaffLogin /> } />
              <Route path="dang-ki-nhan-vien" element={<StaffRegister /> } />
                </Route>            
              {/* -----------------------Tư vấn----------------------- */}
              <Route path="tu-van/lien-he" element={<Contact />} />
              <Route path="tu-van/dang-ki-tu-van" element={<SignUpAdvice />} />
              <Route path="*" element={<PageNotFound />} />
            </Route>
            {/* <Route element={<StaffRoute />}> */}
              <Route path="storekeeper" element={<LayerStorekeeper />}>
                <Route index element={<Bills />} />
                <Route path="bills" element={<Bills />} />
                <Route path="inventory" element={<Inventory />} />
                <Route path="inventory/:id" element={<InventoryDetail />} />
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
                <Route path="warehouse" element={<AdminWarehouse />}></Route>
                <Route path="car" element={<AdminCar />}></Route>
                <Route path="road" element={<AdminRoad />}></Route>
                <Route path="staff_regis" element={<StaffRegister />}></Route>
              </Route>
            {/* </Route> */}
          </Routes>
        </div>
      </BrowserRouter>
      </Metadata>
    </MainProvider>
  );
};

export default App;
