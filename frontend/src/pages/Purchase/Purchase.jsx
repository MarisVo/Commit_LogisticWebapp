import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import SideBar from "../../components/SideBar";
import { FaTruckMoving } from "react-icons/fa";
import {
  AiOutlineGift,
  AiOutlineUser,
  AiTwotoneCalendar,
} from "react-icons/ai";
import { BiTargetLock } from "react-icons/bi";

import { MdOutlineEditCalendar } from "react-icons/md";
import { TiDeleteOutline } from "react-icons/ti";
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
        <div className=" sm:mx-16 lg:mx-48 py-4 bg-gray-white mx-2  ">
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

          <div className="flex flex-column mt-2 bg-white rounded-sm shadow-xl">
            <div className="  overflow-auto mb-3">
              <div className="flex justify-between items-center border-gray-300 border-b-[1px] py-2 ">
                <div className="flex flex-nowrap items-center mx-2">
                  <div className=" text-lg sm:text-lg font-bold ml-2 text-[#00003B]">
                    09523723827
                  </div>
                </div>
                <div className=" flex flex-nowrap items-center mx-2 flex-row">
                  <FaTruckMoving className=" sm:mr-2 mr-[3px]" />
                  <Link
                    className=" text-[10px] font-medium  sm:mr-4 sm:text-sm  hover:translate-y-[-1px] transition-all hover:text-yellow-500  cursor-pointer "
                    to="/user/purchase/order/2323"
                  >
                    Đang giao hàng
                  </Link>
                </div>
              </div>
              <div className="flex items-center py-2 border-gray-300 border-b-[1px]">
                <div className="ml-3 flex flex-col ">
                  <div className="ml-2 flex items-center py-1">
                    <AiOutlineGift className="mr-1 w-5 h-5" />
                    <div className="text-base">Máy bơm nước</div>
                  </div>
                  <div className="ml-2 flex items-center py-1">
                    <AiOutlineUser className="mr-1 w-5 h-5" />
                    <div className="text-base">Nguyễn Văn Trí</div>
                  </div>
                  <div className="ml-2 flex items-center py-1">
                    <div>
                      <AiTwotoneCalendar className="mr-1 w-5 h-5" />
                    </div>
                    <div className="text-base">1/7/2020</div>
                  </div>
                </div>
              </div>
              {/*  <div className="flex justify-end items-center mb-2 mt-2 mr-4">
                <div className="md:text-base text-center">Tổng số tiền:</div>
                <div className="text-yellow-500 text-lg">199.000 đ</div>
              </div> */}
              <div className="flex justify-end  sm:mr-4 mb-3 mt-5">
                {/*                 <div className="flex justify-end mb-2 mr-2">
                  <button className="p-2 max-w-[100px] ml-3 flex items-center placeholder:font-semibold bg-yellow-500  border-button_color border-2  hover:translate-y-[-1px] transition-all  rounded-sm">
                    <TiDeleteOutline />
                    <div className="text-[#00003B] text-sm">Hủy đơn</div>
                  </button>
                </div> */}
                <div className="flex justify-end mb-2 mr-2">
                  <Link className=" " to="/user/purchase/order/2323">
                    <button className="p-2 ml-3 items-center max-w-[140px] flex font-semibold bg-yellow-500  border-button_color border-2  hover:translate-y-[-1px] transition-all text-[#00003B] rounded-sm">
                      <BiTargetLock />
                      <div>Tra hành trình</div>
                    </button>
                  </Link>
                </div>
                <div className="flex justify-end mb-2 mr-2">
                  <button className="p-2 ml-3 max-w-[140px] items-center flex font-semibold bg-yellow-500  border-button_color border-2  hover:translate-y-[-1px] transition-all text-[#00003B] rounded-sm">
                    <MdOutlineEditCalendar className="mr-1" />
                    <div> Sửa vận đơn</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
