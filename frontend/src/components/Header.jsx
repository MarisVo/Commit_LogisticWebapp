import logoJT from "../assets/icons/logo-J&T.svg";
import { FaChevronDown, FaBars } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Menu } from "antd";
import "antd/dist/antd.css";

function getItem(label, key, children) {
  return {
    key,
    children,
    label,
  };
}
const items = [
  getItem(<Link to="/">Trang chủ</Link>, "1"),
  getItem(<Link to="ve-chung-toi">Giới thiệu</Link>, "sub2", [
    getItem(<Link to="ve-chung-toi">Về chúng tôi</Link>, "2"),
    getItem(<Link to="cam-ket">Cam kết</Link>, "3"),
  ]),
  getItem(<Link to="tra-cuu">Tra cứu</Link>, "sub3", [
    getItem(<Link to="cuoc-van-chuyen">Cước vận chuyển</Link>, "4"),
    getItem(<Link to="buu-cuc">Bưu cục gần đây</Link>, "5"),
    getItem(<Link to="van-don">Vận đơn</Link>, "6"),
    getItem(<Link to="bang-gia">Bảng giá</Link>, "7"),
    getItem(<Link to="gang-cam-gui">Hàng cấm gửi</Link>, "8"),
  ]),
  getItem(<Link to="dich-vu">Dịch vụ</Link>, "sub4", [
    getItem(
      <Link to="chuyen-phat-tieu-chuan" className="flex flex-col leading-5">
        <span>Dịch vụ chuyển phát tiêu chuẩn</span>
        <i className=" text-[#f0b90c] font-bold">J&T Epress</i>
      </Link>,
      "9"
    ),
    getItem(
      <Link to="chuyen-phat-nhanh" className="flex flex-col leading-5">
        <span>Dịch vụ chuyển phát nhanh</span>
        <i className=" text-[#f0b90c] font-bold">J&T Fast</i>
      </Link>,
      "10"
    ),
    getItem(
      <Link to="sieu-dich-vu-chuyen-phat" className="flex flex-col leading-5">
        <span>Dịch vụ Siêu giao hàng</span>
        <i className=" text-[#f0b90c] font-bold">J&T Super</i>
      </Link>,
      "11"
    ),
    getItem(
      <Link to="chuyen-phat-do-tuoi-song" className="flex flex-col leading-5">
        <span>Dịch vụ Tươi sống</span>
        <i className=" text-[#f0b90c] font-bold">J&T Fresh</i>
      </Link>,
      "12"
    ),
  ]),
  getItem(<Link to="tuyen-dung">Tuển dụng </Link>, "sub5", [
    getItem(<Link to="tuyen-dung">Cơ hội nghề nghiệp</Link>, "13"),
    getItem(<Link to="cuoc-life">Cuộc sống J%T Epress</Link>, "14"),
  ]),
  getItem(<Link to="tu-van/lien-he">Tư vấn</Link>, "sub6", [
    getItem(<Link to="tu-van/lien-he">Liên hệ</Link>, "15"),
    getItem(<Link to="tu-van/dang-ki-tu-van">Đăng kí tư vấn</Link>, "16"),
  ]),
];
const rootSubmenuKeys = ["sub1", "sub2", "sub3", "sub4", "sub5", "sub6"];

const Header = () => {
  const navigate = useNavigate();
  const [defaultService, setDefaultService] = useState("cước vận chuyển");
  function callback(dichVu) {
    setDefaultService(dichVu);
    navigate(`/track?type=${dichVu}`);
  }
  const [openKeys, setOpenKeys] = useState([]);
  //Logic mobile-navigation --- Còn lỗi
  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };
  const [isOpen, setIsOpen] = useState(false);
  const removeMobileMenu = (e) => {
    if (!e.target.closest(".ant-menu") || e.target.closest("a")) {
      setIsOpen(!isOpen);
    }
  };
  // alert('render header')

  return (
    <div className="fixed bg-white inset-x-0 h-[65px]  z-20 shadow-xl">
      <div className=" flex justify-between items-center h-full px-4 lg:px-0 container mx-auto text-sm ">
        <div className="bt lg:hidden" onClick={() => setIsOpen(!isOpen)}>
          <FaBars className="w-7 h-7" />
        </div>
        <Link to="/">
          <img src={logoJT} className="" />
        </Link>
        <ul className="hidden lg:flex h-full justify-center items-center m-0">
          <li>
            <Link
              to="/"
              className=" flex items-center px-4 py-2 rounded-md hover:bg-yellow-200"
            >
              Trang chủ
            </Link>
          </li>
          <div className="group hover:bg-yellow-200 rounded-md">
            <Link
              to="ve-chung-toi"
              className="inline-flex items-center px-4 py-2"
            >
              Giới thiệu
              <FaChevronDown className="h-4 w-4 pl-[6px]" />
            </Link>
            <ul className="hidden group-hover:block absolute bg-white rounded-lg z-10 border shadow-lg">
              <li>
                <Link
                  to="ve-chung-toi"
                  className="flex px-4 py-2 w-auto rounded-lg hover:bg-yellow-100"
                >
                  Về Chúng tôi
                </Link>
              </li>
              <li>
                <Link
                  to="cam-ket"
                  className="flex px-4 py-2 w-auto rounded-lg hover:bg-yellow-100"
                >
                  Cam kết
                </Link>
              </li>
            </ul>
          </div>
          <div className="group hover:bg-yellow-200 rounded-md">
            <Link to="tra-cuu" className="inline-flex items-center  px-4 py-2">
              Tra cứu
              <FaChevronDown className="h-4 w-4 pl-[6px]" />
            </Link>
            <ul
              className="hidden group-hover:block absolute bg-white rounded-lg z-10 border shadow-lg"
              defaultActiveKey="cước vận chuyển"
              onChange={callback}
            >
              <li>
                <Link
                  to="/tra-cuu/cuoc-van-chuyen"
                  className="flex px-4 py-2 w-auto rounded-lg hover:bg-yellow-100"
                  key="cước vận chuyển"
                >
                  Cước vận chuyển
                </Link>
              </li>
              <li>
                <Link
                  to="/tra-cuu/buu-cuc"
                  className="flex px-4 py-2 w-auto rounded-lg hover:bg-yellow-100"
                  key="bưu cục"
                >
                  Bưu cục gần đây
                </Link>
              </li>
              <li>
                <Link
                  to="/tra-cuu/van-don"
                  className="flex px-4 py-2 w-auto rounded-lg hover:bg-yellow-100"
                  key="vận đơn"
                >
                  Vận đơn
                </Link>
              </li>
              <li>
                <Link
                  to="/tra-cuu/bang-gia"
                  className="flex px-4 py-2 w-auto rounded-lg hover:bg-yellow-100"
                  key="bảng giá"
                >
                  Bảng giá
                </Link>
              </li>
              <li>
                <Link
                  to="/tra-cuu/hang-cam-gui"
                  className="flex px-4 py-2 w-auto rounded-lg hover:bg-yellow-100"
                  key="hàng cấm gửi"
                >
                  Hàng cấm gửi
                </Link>
              </li>
            </ul>
          </div>
          <div className="group hover:bg-yellow-200 rounded-md">
            <Link to="dich-vu" className="inline-flex items-center px-4 py-2">
              Dịch vụ
              <FaChevronDown className="h-4 w-4 pl-[6px]" />
            </Link>
            <ul className="hidden group-hover:block absolute bg-white rounded-lg z-10 border shadow-lg">
              <li>
                <Link
                  to="chuyen-phat-tieu-chuan"
                  className="flex flex-col px-4 py-2 w-auto rounded-lg hover:bg-yellow-100"
                >
                  <span>Dịch vụ chuyển phát tiêu chuẩn</span>
                  <i className="text-[#f0b90c] font-bold">J&T Epress</i>
                </Link>
              </li>
              <li>
                <Link
                  to="chuyen-phat-nhanh"
                  className="flex flex-col px-4 py-2 w-auto rounded-lg hover:bg-yellow-100"
                >
                  <span>Dịch vụ nhanh</span>
                  <i className="text-[#f0b90c] font-bold">J&T Fast</i>
                </Link>
              </li>
              <li>
                <Link
                  to="sieu-dich-vu-chuyen-phat"
                  className="flex flex-col px-4 py-2 w-auto rounded-lg hover:bg-yellow-100"
                >
                  <span>Dịch vụ siêu giao hàng</span>
                  <i className="text-[#f0b90c] font-bold">J&T Super</i>
                </Link>
              </li>
              <li>
                <Link
                  to="chuyen-phat-do-tuoi-song"
                  className="flex flex-col px-4 py-2 w-auto rounded-lg hover:bg-yellow-100"
                >
                  <span>Dịch vụ Tươi sống</span>
                  <i className="text-[#f0b90c] font-bold">J&T Fresh</i>
                </Link>
              </li>
            </ul>
          </div>
          <div className="group hover:bg-yellow-200 rounded-md">
            <Link
              to="tuyen-dung"
              className="inline-flex items-center px-4 py-2"
            >
              Tuyển dụng
              <FaChevronDown className="h-4 w-4 pl-[6px]" />
            </Link>
            <ul className="hidden group-hover:block absolute bg-white rounded-lg z-10 border shadow-lg">
              <li>
                <Link
                  to="tuyen-dung"
                  className="flex px-4 py-2 w-auto rounded-lg hover:bg-yellow-100 "
                >
                  Cơ hội nghề nghiệp
                </Link>
              </li>
              <li>
                <Link
                  to="cuoc-song"
                  className="flex px-4 py-2 w-auto rounded-lg hover:bg-yellow-100"
                >
                  Cuộc sống J&T Epress
                </Link>
              </li>
            </ul>
          </div>
          <div className="group hover:bg-yellow-200 rounded-md">
            <Link
              to="tu-van/lien-he"
              className="inline-flex items-center px-4 py-2"
            >
              Tư vấn
              <FaChevronDown className="h-4 w-4 pl-[6px]" />
            </Link>
            <ul className="hidden group-hover:block absolute bg-white rounded-lg z-10 border shadow-lg">
              <li>
                <Link
                  to="tu-van/lien-he"
                  className="flex px-4 py-2 w-auto rounded-lg hover:bg-yellow-100 "
                >
                  Liên hệ
                </Link>
              </li>
              <li>
                <Link
                  to="tu-van/dang-ki-tu-van"
                  className="flex px-4 py-2 w-auto rounded-lg hover:bg-yellow-100"
                >
                  Đăng kí tư vấn
                </Link>
              </li>
            </ul>
          </div>
        </ul>

        <div className="px-4 py-2 bg-primary border-2 border-button_color hover:bg-opacity-70 rounded-md text-sm cursor-pointer">
          <Link to="/Login" className="font-semibold text-white">
            Đăng nhập
          </Link>
        </div>
        <div className="px-6 py-2 bg-primary border-2 border-button_color hover:bg-opacity-70 rounded-md text-sm cursor-pointer">
          <Link to="/Register" className="font-semibold text-white">
            Đăng ký
          </Link>
        </div>
      </div>

      {/* Phần mobile menu */}
      <div
        className={
          isOpen
            ? "lg:hidden fixed left-0 top-[65px] right-0 bottom-0 bg-slate-400/40"
            : "hidden lg:hidden fixed left-0 top-[65px] right-0 bottom-0 bg-slate-400/40"
        }
        onClick={removeMobileMenu}
      >
        <Menu
          className="h-full"
          style={{ width: "75%" }}
          mode="inline"
          openKeys={openKeys}
          onOpenChange={onOpenChange}
          items={items}
        />
      </div>
    </div>
  );
};
export default Header;
