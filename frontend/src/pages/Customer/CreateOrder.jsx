import React, { useEffect, useRef, useState } from "react";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import SideBar from "../../components/SideBarCustomer";
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineEdit
} from "react-icons/ai";
import { useContext } from "react";
import { MainContext } from "../../context/MainContext";
import axios from "axios";
import { END_POINT } from "../../utils/constant";

export default function CreateOrder() {
  const oldPwRef = useRef(null);
  const newPwRef = useRef(null);
  const verify_passwordRef = useRef(null);
  const [cPassword, setCPassword] = useState({
    oldPw: "",
    newPw: "",
    verify_password: "",
  });
  const { setMetadata,accessToken,user } = useContext(MainContext);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
    const [services,setServices]= useState([])
  const [information, setInformation] = useState({
    nameR: "",
    phoneR: "",
    identity:"",
    phone:"",
    email:""
  });
    useEffect(() => {
       const getService = async()=>{
          const res = await axios.get(`${END_POINT}/service`)
          console.log(res)
          const {data} =res.data
          console.log(data.service)
          setServices(data.service)
        }
      getService()
    
  }, []);
 
   useEffect(() => {
    setMetadata((prev) => {
      return {
        ...prev,
        title: "Tạo đơn h | TKTL",
      };
    });
     }, []);
 
  const handleForm = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setInformation({ ...information, [name]: value });
    console.log(information);
  };

  return (
    <div>
      <div className=" relative">
        <div className=" relative ">
              <div className="flex justify-start flex-col  border-b-2  pl-4 pb-3 pt-3">
                <div className="text-xl font-bold mb-1 lg:text-2xl mt-2">
                  Tạo đơn hàng
                </div>
                <div className="text-base">Vui lòng điền đầy đủ thông tin đơn hàng</div>
              </div>
              <form className=" lg:mx-5 sm:mx-4 md:mx-5 mx-[8px] my-4 ">
                <div className=" grid grid-cols-2 justify-items-center  ">
                  <div className="col-span-1">
                    <div className="flex mb-6 sm:py-1 flex-col  ">
                      <div className="flex items-center   justify-start ">
                        <label className=" mr-3 text-yellow-600 lg:text-lg text-base">
                          Tên người nhận:
                        </label>
                      </div>
                      <div className="flex  ">
                        <input
                          className="outline-none border-[1px] sm:px-2 rounded-md py-[6px] px-1 border-gray-200 text-base  max-w-[160px] md:min-w-[260px] sm:min-w-[210px] line-clamp-1"
                          type="text"
                          name="nameR"
                          onChange={handleForm}
                          defaultValue={information.nameR}
                        />
                      </div>
                    </div>
                
                     <div className="flex mb-6 sm:py-1 flex-col  ">
                      <div className="flex items-center   justify-start ">
                        <label className=" mr-3 text-yellow-600 lg:text-lg text-base">
                          Email người đặt hàng:
                        </label>
                      </div>
                      <div className="flex  ">
                        <input
                          className="outline-none border-[1px] sm:px-2 rounded-md py-[6px] px-1 border-gray-200 text-base  max-w-[160px] md:min-w-[260px] sm:min-w-[210px] line-clamp-1"
                          type="text"
                          name="email"
                          onChange={handleForm}
                          defaultValue={information.email}
                        />
                      </div>
                    </div>
                    <div className="flex mb-6 sm:py-1 flex-col  ">
                      <div className="flex items-center   justify-start ">
                        <label className=" mr-3 text-yellow-600 lg:text-xl text-base">
                          Số điện thoại người nhận:
                        </label>
                      </div>
                      <div className="flex  ">
                        <input
                          className="outline-none border-[1px] sm:px-2 rounded-md py-[6px] px-1 border-gray-200 text-base  max-w-[160px] md:min-w-[260px] sm:min-w-[210px] line-clamp-1"
                          type="text"
                          name="phoneR"
                          onChange={handleForm.phoneR}
                          defaultValue={information.phoneR}
                        />
                      </div>
                    </div>    
                  </div>
                  <div className="col-span-1 ">
                    <div className="flex mb-6 sm:py-1 flex-col  ">
                      <div className="flex items-center   justify-start ">
                        <label className=" mr-3 text-yellow-600 lg:text-lg text-base">
                          Số điện thoại:
                        </label>
                      </div>
                      <div className="flex  ">
                        <input
                          className="outline-none border-[1px] sm:px-2 rounded-md py-[6px] px-1 border-gray-200 text-base  max-w-[160px] md:min-w-[260px] sm:min-w-[210px] line-clamp-1"
                          type="text"
                          name="phone"
                          onChange={handleForm}
                          defaultValue={information.phone?information.phone:"Chưa có thông tin"}
                        />
                      </div>
                    </div>
                    <div className="flex mb-6 sm:py-1 flex-col  ">
                      <div className="flex items-center   justify-start ">
                        <label className=" mr-3 text-yellow-600 lg:text-lg text-base">
                        Loại dịch vụ:
                        </label>
                      </div>
                      <div className="flex  ">
                        <select
                          className="outline-none border-[1px] sm:px-2 rounded-md py-[6px] px-1 border-gray-200 text-base  max-w-[160px] md:min-w-[260px] sm:min-w-[210px] line-clamp-1"

                        >
                        <option value=""></option>
                        {
                            services.map(service=>(
                               <option key={service._id} value={service._id}>{service.name}</option>
                            ))
                        }
                        </select>
                      </div>
                    </div>
                    <div className="flex mb-6 sm:py-1 flex-col  ">
                      <div className="flex items-center   justify-start ">
                        <label className=" mr-3 text-yellow-600 lg:text-lg text-base">
                          Chứng minh nhân dân người nhận:
                        </label>
                      </div>
                      <div className="flex  ">
                        <input
                          className="outline-none border-[1px] sm:px-2 rounded-md py-[6px] px-1 border-gray-200 text-base  max-w-[160px] md:min-w-[260px] sm:min-w-[210px] line-clamp-1"
                          type="text"
                          name="companycode_business"
                          onChange={handleForm.identity}
                          defaultValue={information.identity}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                  <div className="flex mb-3 ">
                    <div className="flex items-center w-2/5  justify-end ">
                      <label className="text-gray-500 mr-3  "></label>
                    </div>
                    <div className="flex ">
                      <button className="py-2 px-4 mt-2 mb-4 round-md font-extrabold bg-[#ffd124]  hover:translate-y-[-1px] transition-all text-[#00003B] rounded-sm">
                        Cập nhật
                      </button>
                    </div>
                  </div>
              </form>
            </div>
          </div>
        </div>
    /*   </div> */
   /*  </div> */
  );
}
