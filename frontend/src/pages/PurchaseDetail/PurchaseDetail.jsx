import React, { useState } from "react";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import SideBar from "../../components/SideBar";
import { IoLocationOutline } from "react-icons/io5";

import { AiOutlineGift, AiOutlineUser, AiOutlineInbox } from "react-icons/ai";

import { TbSteeringWheel } from "react-icons/tb";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { GiWeight } from "react-icons/gi";
import { BsCoin } from "react-icons/bs";
import { AiOutlinePhone } from "react-icons/ai";
const PurchaseDetail = () => {
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
        <div className=" sm:mx-20 lg:mx-52 py-4 bg-gray-white mx-2 mb-2 ">
          <div className="flex flex-col mt-2 bg-white rounded-sm shadow-lg mb-3 ">
            <div className="  overflow-auto mb-3">
              <div className="flex justify-between items-center border-gray-300 border-b-[1px] py-2  bg-yellow-400 ">
                <div className="flex flex-nowrap items-center mx-2">
                  <div className=" text-lg sm:text-lg font-bold ml-2 text-[#00003B]">
                    Người gửi
                  </div>
                </div>
                <div className=" flex flex-nowrap items-center mx-2 flex-row"></div>
              </div>
              <div className="flex items-center py-2 border-gray-300 border-b-[1px]">
                <div className="ml-3 flex flex-col ">
                  <div className="ml-2 flex items-center py-1">
                    <AiOutlinePhone className="mr-1 w-5 h-5  md:w-7 md:h-7 " />
                    <div className="text-base md:text-lg mr-1">Điện thoại:</div>
                    <div className="text-base md:text-lg">08279372</div>
                  </div>
                  <div className="ml-2 flex items-center py-1">
                    <AiOutlineUser className="mr-1 w-5 h-5  md:w-7 md:h-7 " />
                    <div className="text-base md:text-lg mr-1">
                      Tên người gửi:
                    </div>
                    <div className="text-base md:text-lg">Nguyễn Văn Thật</div>
                  </div>
                  <div className="ml-2 flex items-center py-1">
                    <div>
                      <IoLocationOutline className="mr-1 w-5 h-5 md:w-7 md:h-7" />
                    </div>
                    <div className="text-base md:text-lg mr-1">Địa điểm :</div>
                    <div className="text-base md:text-lg">
                      B7/2 Nguyễn Thị Định Q2
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-2 bg-white rounded-sm shadow-lg mb-3 ">
            <div className="  overflow-auto mb-3">
              <div className="flex justify-between items-center border-gray-300 border-b-[1px] py-2  bg-yellow-400 ">
                <div className="flex flex-nowrap items-center mx-2">
                  <div className=" text-lg sm:text-lg font-bold ml-2 text-[#00003B]">
                    Người nhận
                  </div>
                </div>
                <div className=" flex flex-nowrap items-center mx-2 flex-row"></div>
              </div>
              <div className="flex items-center py-2 border-gray-300 border-b-[1px]">
                <div className="ml-3 flex flex-col ">
                  <div className="ml-2 flex items-center py-1">
                    <AiOutlinePhone className="mr-1 w-5 h-5  md:w-7 md:h-7 " />
                    <div className="text-base md:text-lg mr-1">Điện thoại:</div>
                    <div className="text-base md:text-lg">09372239</div>
                  </div>
                  <div className="ml-2 flex items-center py-1">
                    <AiOutlineUser className="mr-1 w-5 h-5  md:w-7 md:h-7 " />
                    <div className="text-base md:text-lg mr-1">
                      Tên người nhận:
                    </div>
                    <div className="text-base md:text-lg">Nguyễn Văn Trí</div>
                  </div>
                  <div className="ml-2 flex items-center py-1">
                    <div>
                      <IoLocationOutline className="mr-1 w-5 h-5 md:w-7 md:h-7" />
                    </div>
                    <div className="text-base md:text-lg mr-1">Địa điểm:</div>
                    <div className="text-base md:text-lg">
                      12/B phường An Khánh
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-2 bg-white rounded-sm shadow-lg mb-3">
            <div className="  overflow-auto mb-3">
              <div className="flex justify-between items-center border-gray-300 border-b-[1px] py-2 bg-yellow-400">
                <div className="flex flex-nowrap items-center mx-2">
                  <div className="  text-lg sm:text-lg font-bold ml-2 text-[#00003B] display:">
                    Thông tin hàng hóa
                  </div>
                </div>
                <div className=" flex flex-nowrap items-center mx-2 flex-row"></div>
              </div>
              <div className="flex items-center py-2 border-gray-300 border-b-[1px]">
                <div className="ml-3 flex flex-col ">
                  <div className="ml-2 flex items-center py-1">
                    <AiOutlineGift className="mr-1 w-5 h-5  md:w-7 md:h-7 " />
                    <div className="text-base md:text-lg mr-1">
                      Nội dung hàng hóa:
                    </div>
                    <div className="text-base md:text-lg ">Điện thoại oppo</div>
                  </div>
                  <div className="ml-2 flex items-center py-1">
                    <AiOutlineInbox className="mr-1 w-5 h-5  md:w-7 md:h-7 " />
                    <div className="text-base md:text-lg mr-1">
                      Loại hàng hóa:
                    </div>
                    <div className="text-base md:text-lg">Hàng hóa</div>
                  </div>
                  <div className="ml-2 flex items-center py-1">
                    <div>
                      <GiWeight className="mr-1 w-5 h-5 md:w-7 md:h-7" />
                    </div>
                    <div className="text-base md:text-lg mr-1">Khối lượng:</div>
                    <div className="text-base md:text-lg">1kg</div>
                  </div>
                  <div className="ml-2 flex items-center py-1">
                    <div>
                      <BsCoin className="mr-1 w-5 h-5 md:w-7 md:h-7" />
                    </div>
                    <div className="text-base md:text-lg mr-1">
                      Giá trị hàng hóa:
                    </div>
                    <div className="text-base md:text-lg">1.000.000 đ</div>
                  </div>
                  <div className="ml-2 flex items-center py-1">
                    <FaRegMoneyBillAlt className="mr-1 w-5 h-5  md:w-7 md:h-7 " />
                    <div className="text-base md:text-lg mr-1">Phí COD:</div>
                    <div className="text-base md:text-lg ">1.000 đ</div>
                  </div>

                  <div className="ml-2 flex items-center py-1">
                    <div>
                      <TbSteeringWheel className="mr-1 w-5 h-5 md:w-7 md:h-7" />
                    </div>
                    <div className="text-base md:text-lg mr-1">Vận phí:</div>
                    <div className="text-base md:text-lg">25.000 đ</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchaseDetail;
