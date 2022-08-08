import React, { useEffect, useRef, useState } from "react";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import SideBar from "../../components/SideBarCustomer";
import { Link } from "react-router-dom";
import { io } from "socket.io-client";

function NotificationCustomer() {
  const [open, setOpen] = useState(false);
  const socket = useRef();
  const handleOpen = () => {
    setOpen(!open);
    console.log(open);
  };
  // socket.emit for send event to sever
  // socket.on to take event from sever
  useEffect(() => {
    socket.current = io(`ws://localhost:5000`);
    console.log(socket.current);
    /* socket.current.emit("send",)
  socket.current.on("receive",)    */
  }, [socket]);

  return (
    <div className="">
      <div className="bg-gray-100 overflow-y-hidden relative ">
            <div className="flex justify-end align-center m-w-[100%] rounded-sm sm:border-gray-400 sm:border-b-[1px] bg-white sm:pb-1 flex-nowrap ">
              <div className=" m-w-[70px] mx-2 p-1 flex-shrink-0 cursor-pointer mt-2 ">
                <span className=" font-light text-sm md:text-sm text text-black hover:text-yellow-500 ">
                  Đánh dấu đã đọc tất cả
                </span>
              </div>
            </div>
            <div className="flex flex-col mt-2  ">
              <div className="bg-white  mb-3 ">
                <div className="flex items-center mt-1 sm:mt-2  justify-evenly sm:justify-between  sm:mx-3 md:mx-4 pb-4 md:pb-6 ">
                  <div className=" sm:ml-2 flex ">
                    <img
                      className="w-14 h-14 mr-3  sm:w-24 sm:h-24 sm:mr-8"
                      alt="#"
                      src="https://images.squarespace-cdn.com/content/v1/56001a27e4b08aa6c7fa74e1/1560511769633-THRKK2P2TKYE2ZNOLSY9/Notify_Red.png"
                    ></img>
                    <div >
                      <div className="font-medium text-base sm:text-lg mt-1">
                        Đơn hàng đã hoàn tất
                      </div>
                      <div className="font-light text-sm sm:text-base sm:mb-2">
                        Đơn hàng 2322312 đã hoàn thành
                      </div>
                      <div className="md:text-base">21.06.2021</div>
                    </div>
                  </div>
                  <div className="flex flex-shrink-0">
                    <Link to="khach-hang/dat-hang/don-hang/2323">
                       <button className="py-2 px-4 mt-2 mb-4 round-md font-extrabold bg-[#ffd124]  hover:translate-y-[-1px] transition-all text-[#00003B] rounded-sm">
                       Chi tiết
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="bg-white  mb-3 ">
                <div className="flex items-center mt-1 sm:mt-2  justify-evenly sm:justify-between  sm:mx-3 md:mx-4 pb-4 md:pb-6 ">
                  <div className=" sm:ml-2 flex ">
                    <img
                      className="w-14 h-14 mr-3  sm:w-24 sm:h-24 sm:mr-8"
                      alt="#"
                      src="https://images.squarespace-cdn.com/content/v1/56001a27e4b08aa6c7fa74e1/1560511769633-THRKK2P2TKYE2ZNOLSY9/Notify_Red.png"
                    ></img>
                    <div>
                      <div className="font-medium text-base sm:text-lg">
                        Đơn hàng đã hoàn tất
                      </div>
                      <div className="font-light text-sm sm:text-base sm:mb-2">
                        Đơn hàng 2322312 đã hoàn thành
                      </div>
                      <div className="md:text-base">21.06.2021</div>
                    </div>
                  </div>
                  <div className="flex flex-shrink-0">
                    <Link to="/khach-hang/dat-hang/don-hang/2323">
                       <button className="py-2 px-4 mt-2 mb-4 round-md font-extrabold bg-[#ffd124]  hover:translate-y-[-1px] transition-all text-[#00003B] rounded-sm">
                       Chi tiết
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  );
}

export default NotificationCustomer;
