import React, { useEffect, useState } from 'react';
import { IoArrowForwardCircleOutline  } from "react-icons/io5";
import SideBar from '../../components/SideBar';
import {  Modal } from 'antd';
export default function Profile() {
    const [open,setOpen]=useState(false)
    const [isModalVisible, setIsModalVisible] = useState(false);
  const [date,setDate] = useState(0)
  const [month,setMonth] = useState(0)
  const [year,setYear] = useState(0)
  const [gender,setGender] = useState(null)
  const generateDateOptions = () => {
    const arr = [];
    const startDate = 1;
    const endDate = 31;
    for (let i = endDate; i >= startDate; i--) {
      arr.push(<option key={i} value={i}>{i}</option>);
    }
    return arr;
  };

  const generateMonthOptions = () => {
    const arr = [];
    const startMonth = 1;
    const endMonth = 12;
    for (let i = endMonth; i >= startMonth; i--) {
      arr.push(<option key={i} value={i}>{i}</option>);
    }
    return arr;
  };
 
  const generateYearOptions = () => {
    const arr = [];
    const startYear = 1900;
    const endYear = new Date().getFullYear();
    for (let i = endYear; i >= startYear; i--) {
      arr.push(<option key={i} value={i}>{i}</option>);
    }
    return arr;
  };
  const hideemail=(valuee)=> {
    let email = valuee //anas.behhari@gmail.com
    let hiddenEmail = "";
    for (let i = 0; i < email.length; i++) {
      if (i > 2 && i< email.indexOf("@") ) {
        hiddenEmail += "*";
      } else {
        hiddenEmail += email[i];
      }
    }
  
    return hiddenEmail
  }
  const hidepassword=(valuep)=> {
    let password = valuep //anas.behhari@gmail.com
    let hiddenPassword = "";
    for (let i = 0; i < password.length; i++) {  
      hiddenPassword += "*";
    }
 
    return hiddenPassword
  }
  const handleOpen=()=>{
    setOpen(!open)
 
  }
  const handleDate= (e)=>{
    
    setDate(e.target.value)
  }
  const handleMonth = (e)=>{
    setMonth(e.target.value)
  }
  const handleYear = (e)=>{
    setYear(e.target.value)
  }
 
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const handleRadio = (e)=>{
    console.log(e.target.value)
    setGender(e.target.value)
  }
  

  return (
    <div className="bg-gray-100 relative ">
 
 <SideBar className="" handleOpen={handleOpen} open={open}/>
         
         <span  className="w-6 h-6 absolute top-[10%] left-[0%] z-50 transition "><IoArrowForwardCircleOutline  className="w-6 h-6 z-50   " onClick={()=>handleOpen()} /></span>
   
    <div className="grid grid-cols-5  sm:mx-6 lg:mx-32 py-5 bg-gray-100  ">
        
      <div className=" col-span-5 bg-white rounded-lg ml-2 ">

        <div className="flex justify-start flex-col ml-4 border-b-2  pl-4 pb-3 pt-3">
          <div className="text-xl font-bold mb-1">Hồ Sơ Của Tôi</div>
          <div>Quản lý thông tin hồ sơ để bảo mật tài khoản</div>
        </div>
        <form className=" lg:mx-7 mx-1 my-4 ">
        
          <div className=" flex flex-col  " >
            <div className="flex mb-3 ">
              <div className="flex  w-2/5   justify-end ">
                <label className="mr-3 text-yellow-600 " >Tên Đăng Nhập</label>
              </div>
              <div className="flex ">
                <div className="text-black-700  " >KhoaBobo</div>
              </div>
            </div>
            <div className="flex mb-3 ">
              <div className="flex items-center w-2/5   justify-end ">
                <label className=" mr-3 text-yellow-600"  >Tên</label>
              </div>
              <div className="flex ">
                <div className="text-black-700  " >Bùi Đăng Khoa</div>
              </div>
            </div>
            <div className="flex mb-3 ">
              <div className="flex items-center w-2/5   justify-end ">
                <label className=" mr-3 text-yellow-600" >Email</label>
              </div>
              <div className="flex ">
                <div className="text-black-700" >{hideemail("nguyenvanquy123@gmail.com")}</div>
              </div>
            </div>
            <div className="flex mb-3 r ">
              <div className="flex items-center w-2/5   justify-end ">
                <label className=" mr-3 text-yellow-600" >Mật khẩu</label>
              </div>
              <div className="flex  ">
                <div className="text-black-700 mr-3" type="password" >{hidepassword("khoa12")}</div>
                <div className="text-xs text-center text-yellow-500 cursor-pointer" onClick={showModal}>Thay đổi</div>
              </div>
            </div>
            <div className="flex mb-3 ">
              <div className="flex items-center w-2/5   justify-end ">
                <label className=" mr-3 text-yellow-600 " >Số điện thoại</label>
              </div>
              <div className="flex ">
                <div className="text-black-700  " >093222128</div>
              </div>
            </div>
            <div className="flex mb-3 ">
              <div className="flex items-center w-2/5  justify-end ">
                <label className=" mr-3  text-yellow-600" >Giới tính</label>
              </div>
              <div className="flex ">
                <div className="text-black-700  " >
                <div className="flex items-center justify-center">
                  <input
                    value="male"
                    name="male"
                    type="radio"
                    checked={gender==="male"}
                    onChange={(e)=>handleRadio(e)}
                  />
                      <div className="mx-2">Nam</div>       
                  <input
                    value="female"
                    name="female"
                    type="radio"
                    checked={gender==="female"}
                    onChange={(e)=>handleRadio(e)}
                  />
                    <div className="mx-2">Nữ</div>  
                
                </div>
                </div>
              </div>
            </div>
            <div className="flex mb-3 ">
              <div className="flex items-center w-2/5   justify-end ">
                <label className=" mr-3 text-yellow-600 " >Ngày Sinh</label>
              </div>
              <div className="flex ">
                <div className="text-black-700  flex flex-nowrap" >
                <select
                    className=' px-1  outline-none  border-2 sm:mr-2 hover:bottom-3 '
                    name='date'
                    onChange={(e)=>handleDate(e)}
                    value={date}
                  >
                    <option value='0'>Date</option>
                    {generateDateOptions()}
                </select>
                <select
                     className=' px-1  outline-none border-2  sm:mr-2  hover:bottom-3 '
                    name='year'
                    onChange={(e)=>handleMonth(e)}
                    value={month}
                  >
                    <option value='0'>Month</option>
                    {generateMonthOptions()}
                </select>
                <select
                     className=' px-1 outline-none  border-2 sm:mr-2 hover:bottom-3 '
                    name='year'
                    onChange={(e)=>handleYear(e)}
                    value={year}
                  >
                    <option value='0'>Year</option>
                    {generateYearOptions()}
                </select>
                </div>
              </div>
            </div>
            <div className="flex mb-3 ">
              <div className="flex items-center w-2/5  justify-end ">
                <label className="text-gray-500 mr-3  " ></label>
              </div>
              <div className="flex ">
              <button className="py-2 px-4 text-[#00003B] font-medium bg-yellow-500 rounded-sm">Save</button>
              </div>
            </div>

          </div>
        </form>
      </div>
    </div>
    <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
      <div className="flex flex-column">
      <label>Mật khẩu cũ</label>  <input className="border-2 border-yellow-500 outline-none" type="password" />
      <label>Mật khẩu mới</label> <input className="border-2 border-yellow-500 outline-none" type="password"/>
      <label>Xác nhận mật khẩu mới</label> <input className="border-2 border-yellow-500 outline-none" type="password"/>       
      </div>
      </Modal>
    </div>
  );
}

