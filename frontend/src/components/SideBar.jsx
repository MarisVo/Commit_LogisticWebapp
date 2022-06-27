import React from 'react';
import { FaPen} from 'react-icons/fa';
import {   IoArrowBackCircleOutline} from "react-icons/io5";
import { IoPersonOutline,IoArrowForwardCircleOutline,IoClipboardOutline,IoNotificationsOutline} from "react-icons/io5";
function SideBar({open,handleOpen}) {
  

    return (
      <div>
        {
          open ?
          <div>
          </div>
          : <div>  <span  className="w-6 h-6 fixed top-[10%] left-[0%] z-50 "><IoArrowForwardCircleOutline  className="w-6 h-6 z-50   " onClick={()=>handleOpen()} /></span></div>
        }
          <div className= {` w-35vh  md:min-h-[100%]  duration-700 flex flex-col transition-all ease-out  delay-100  z-100  border-t-4 rounded-lg fixed top-0 left-0 bg-white   min-h-full ${open ? ` peer:transition ease-out delay-150 duration-400` : `translate-x-[-300px] duration-1000 ease-in duration-400  `}` }  >
                <div className="flex items-center justify-center ml-2 pb-2  border-b-2 border-black-400 "> 
                 
                  <div className="flex flex-col px-2 pb-1 flex-1 ">
                    <div className="flex justify-end " onClick={()=>handleOpen(!open)}>
                        <IoArrowBackCircleOutline className="w-6 h-6 z-10"/>
                    </div>
                        <div className="text-xl font-semibold text-[#00003B] ">Nguyễn Văn Thật</div>
                        <div className="flex items-center  ">
                        <FaPen className="" />
                        <div className=" m-w-[70px] mx-2 mt-1 flex-shrink-0 cursor-pointer text-[#00003B] "><span className=" font-normal text-sm md:text-base text text-black hover:text-yellow-500 " >Sửa hồ sơ</span></div>
                        </div>
                    </div>
                  </div>
                <div className="flex items-center justify-start mx-3 mt-2 ">
                  <div >
                    <div className="flex items-center py-1 ">
                        <IoPersonOutline className="mr-2 w-[18px] h-[18px] shrink-0"  />
                        <a className="text-lg  text-[#00003B] hover:text-yellow-500">Tài khoản của tôi</a>
                    </div>
                  
                    <div className="flex items-center py-1">
                        <IoClipboardOutline className="mr-2 w-[18px] h-[18px] shrink-0"   />
                        <a className="text-lg  text-[#00003B] hover:text-yellow-500">Đơn mua hàng</a>
                    </div>
                    <div className="flex items-center py-1">
                        <IoNotificationsOutline className="mr-2 w-[18px] h-[18px] shrink-0"  />
                        <a className="text-lg  text-[#00003B] hover:text-yellow-500">Thông báo</a>
                    </div>
                  </div>
                </div>
            </div>
            <div className=" w-75vh   md:min-h-[100%]"> </div>
      </div>
    );
}

export default SideBar;