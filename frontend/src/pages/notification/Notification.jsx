import React, { useState } from "react";

import { IoArrowForwardCircleOutline } from "react-icons/io5";
import SideBar from "../../components/SideBar";

function Notification() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
    console.log(open);
  };

  return (
    <div className="pt-[68px]">
      <div className="bg-gray-100 overflow-y-hidden relative ">
        <SideBar className="" handleOpen={handleOpen} open={open} />
        <span className="w-6 h-6 fixed top-[10%] left-[0%] z-3 transition  lg:top-[15%]">
          <IoArrowForwardCircleOutline
            className="w-6 h-6 z-50   "
            onClick={() => handleOpen()}
          />
        </span>

        <div className=" sm:mx-6 lg:mx-32 pb-4 pt-2 mx-1">
          <div className=" bg-gray-white  bg-white  rounded-sm ">
            <div className="flex justify-end align-center m-w-[100%] rounded-sm sm:border-gray-400 sm:border-b-[1px] bg-white sm:pb-1 flex-nowrap ">
              <div className=" m-w-[70px] mx-2 p-1 flex-shrink-0 cursor-pointer ">
                <span className=" font-light text-sm md:text-sm text text-black hover:text-yellow-500 ">
                  Đánh dấu đã đọc tất cả
                </span>
              </div>
            </div>
            <div className="flex flex-column mt-2  ">
              <div className="bg-white  mb-3">
                <div className="flex items-center mt-1 sm:mt-2  justify-evenly sm:justify-between  sm:mx-3 md:mx-4 pb-4 md:pb-6 ">
                  <div className=" sm:ml-2 flex ">
                    <img
                      className="w-14 h-14 mr-3  sm:w-24 sm:h-24 sm:mr-8"
                      alt="#"
                      src="data:image/jpeg;base64,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"
                    ></img>
                    <div>
                      <div className="font-medium text-base sm:text-lg">
                        Đơn hàng đã hoàn tất
                      </div>
                      <div className="font-light text-sm sm:text-base sm:mb-2">
                        Đơn hàng 2322323212 đã hoàn thành
                      </div>
                      <div className="md:text-base">21.06.2021</div>
                    </div>
                  </div>
                  <div className="flex">
                    <button className="mr-5 px-[6px] py-[4px] text-[#00003B]  hover:translate-y-[-1px] transition-all sm:p  -2 shrink-0 font-semibold bg-yellow-500 rounded-sm ">
                      Xem chi tiết
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notification;
