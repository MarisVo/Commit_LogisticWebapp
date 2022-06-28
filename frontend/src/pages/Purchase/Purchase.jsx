import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import SideBar from "../../components/SideBar";
import { FaTruckMoving } from "react-icons/fa";

import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
const Purchase = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
    console.log(open);
  };

  return (
    <div className="pt-[68px]">
      <div className="bg-gray-100 relative ">
        <SideBar className="" handleOpen={handleOpen} open={open} />
        <div>
          <span className="w-6 h-6 absolute top-[4%] left-[0%] z-3  md:top-[15%]  ">
            <IoArrowForwardCircleOutline
              className="w-6 h-6 z-25   "
              onClick={() => handleOpen()}
            />
          </span>
        </div>
        <div className=" sm:mx-6 lg:mx-32 pb-4 pt-2 mx-2"></div>
        <div className=" sm:mx-7 lg:mx-32 py-4 bg-gray-white mx-2  ">
          <div className="flex  justify-between sm:justify-evenly align-center m-w-[100%] scrollbar rounded-sm sm:border-gray-400 sm:border-b-[1px] bg-white sm:pb-1 flex-nowrap overflow-x-auto scroll-smooth scrollbar">
            <a className="preventselect m-w-[70px] mx-2 p-1 flex-shrink-0 ">
              <span className=" font-semibold text-base md:text-base text text-black hover:text-yellow-500 ">
                Tất cả
              </span>
            </a>
            <a className="m-w-[70px] mx-2 p-1 flex-shrink-0 preventselect">
              <span className=" font-semibold text-base md:text-base text-black hover:text-yellow-500">
                Chờ xác nhận
              </span>
            </a>
            <a className="m-w-[70px] mx-2 p-1 flex-shrink-0 preventselect">
              <span className=" font-semibold text-base md:text-base text-black hover:text-yellow-500">
                Chờ lấy hàng
              </span>
            </a>
            <a className="m-w-[70px] mx-2 p-1 flex-shrink-0 preventselect ">
              <span className="font-semibold text-base md:text-base text-black hover:text-yellow-500">
                Đang giao
              </span>
            </a>
            <a className="m-w-[70px] mx-2 p-1 flex-shrink-0 preventselect">
              <span className="font-semibold text-base md:text-base text-black hover:text-yellow-500">
                Đã giao
              </span>
            </a>
            <a className="m-w-[70px] mx-2 p-1 flex-shrink-0 preventselect">
              <span className=" font-semibold text-base md:text-base text-black hover:text-yellow-500">
                Đã hủy
              </span>
            </a>
          </div>

          <div class="  flex items-center text-gray-400 focus-within:text-gray-600 my-1">
            <IoSearchOutline class="w-5 h-5 absolute ml-4 pointer-events-none " />
            <input
              type="text"
              name="search"
              placeholder="Tìm kiếm sản phẩm,id đơn hàng"
              autoComplete="off"
              className="w-full pr-3 pl-10 py-2 font-semibold placeholder-gray-500 text-black rounded-2xl border-none ring-2 ring-gray-300 focus:ring-yellow-500 focus:ring-2"
            />
          </div>

          <div className="flex flex-column mt-2 bg-white rounded-sm">
            <div className="  overflow-auto mb-3">
              <div className="flex justify-between items-center border-gray-300 border-b-[1px] py-2 ">
                <div className="flex flex-nowrap items-center mx-2">
                  <div className=" text-sm font-medium mr-3 ">Rarusote </div>
                  <button className=" text-sm shrink-0 font-medium px-[4px] py-[2px] text-[#00003B] bg-yellow-500  ">
                    Xem shop
                  </button>
                </div>
                <div className=" flex flex-nowrap items-center mx-2 flex-row">
                  <FaTruckMoving className=" sm:mr-2 mr-[3px]" />
                  <Link
                    className=" text-[10px] font-medium  sm:mr-4 sm:text-sm  hover:translate-y-[-1px] transition-all hover:text-yellow-500  cursor-pointer "
                    to="/user/purchase/order/2323"
                  >
                    Giao hàng thành công{" "}
                  </Link>
                </div>
              </div>
              <div className="flex items-center py-2 border-gray-300 border-b-[1px]">
                <div className="ml-2 flex ">
                  <img
                    className="w-16 h-16 mr-6 sm:w-24 sm:h-24 sm:mr-8"
                    src="data:image/jpeg;base64,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"
                  ></img>
                  <div>
                    <div className="font-medium text-base sm:text-lg">
                      Áo khoác nam Bitis
                    </div>
                    <div className="font-light sm:text-base sm:mb-2">
                      Áo khoác từ Hàn Quốc
                    </div>
                    <div className="md:text-base">X1</div>
                  </div>
                </div>
              </div>
              <div className="flex justify-end items-center mb-2 mt-2 mr-4">
                <div className="md:text-base text-center">Tổng số tiền:</div>
                <div className="text-yellow-500 text-lg">199.000 đ</div>
              </div>
              <div className="flex justify-end mr-4 mb-3">
                <button className="p-2 font-semibold bg-yellow-500  border-button_color border-2  hover:translate-y-[-1px] transition-all text-[#00003B] rounded-sm">
                  Mua lại
                </button>
                <button className="p-2 ml-3  font-semibold bg-yellow-500  border-button_color border-2  hover:translate-y-[-1px] transition-all text-[#00003B] rounded-sm">
                  Liên hệ shop
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
