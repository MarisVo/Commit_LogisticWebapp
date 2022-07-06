import React, { useEffect, useRef, useState } from "react";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import SideBar from "../../components/SideBar";
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineEdit,
} from "react-icons/ai";
import { axios } from "axios";

export default function Profile() {
  const oldPwRef = useRef(null);
  const newPwRef = useRef(null);
  const verify_passwordRef = useRef(null);
  const [eyeOp, setEyeOp] = useState(false);
  const [eyeNp, setEyeNp] = useState(false);
  const [eyeCf, setEyeCf] = useState(false);
  const [cPassword, setCPassword] = useState({
    oldPw: "",
    newPw: "",
    verify_password: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [open, setOpen] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  /*   const [date, setDate] = useState(0);
  const [month, setMonth] = useState(0);
  const [year, setYear] = useState(0); */

  /*   const generateDateOptions = () => {
    const arr = [];
    const startDate = 1;
    const endDate = 31;
    for (let i = endDate; i >= startDate; i--) {
      arr.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }
    return arr;
  };
  const generateMonthOptions = () => {
    const arr = [];
    const startMonth = 1;
    const endMonth = 12;
    for (let i = endMonth; i >= startMonth; i--) {
      arr.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }
    return arr;
  };
  const generateYearOptions = () => {
    const arr = [];
    const startYear = 1900;
    const endYear = new Date().getFullYear();
    for (let i = endYear; i >= startYear; i--) {
      arr.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }
    return arr;
  }; */
  /*   const handleDate = (e) => {
    setDate(e.target.value);
  };
  const handleMonth = (e) => {
    setMonth(e.target.value);
  };
  const handleYear = (e) => {
    setYear(e.target.value);
  }; */
  const handleOpen = () => {
    setOpen(!open);
  };
  const hideemail = (valuee) => {
    let email = valuee; //anas.behhari@gmail.com
    let hiddenEmail = "";
    for (let i = 0; i < email.length; i++) {
      if (i > 2 && i < email.indexOf("@")) {
        hiddenEmail += "*";
      } else {
        hiddenEmail += email[i];
      }
    }

    return hiddenEmail;
  };
  const hidepassword = (valuep) => {
    let password = valuep; //anas.behhari@gmail.com
    let hiddenPassword = "";
    for (let i = 0; i < password.length; i++) {
      hiddenPassword += "*";
    }

    return hiddenPassword;
  };
  const hidephone = (valuephone) => {
    let phone = valuephone; //989238382
    let hiddenPhone = "";
    for (let i = 0; i < phone.length; i++) {
      if (i < phone.length - 3) {
        hiddenPhone += "*";
      } else {
        hiddenPhone += phone[i];
      }
    }

    return hiddenPhone;
  };
  const handleEyeOp = () => {
    setEyeOp(!eyeOp);
  };
  const handleEyeNp = () => {
    setEyeNp(!eyeNp);
  };
  const handleEyeCf = () => {
    setEyeCf(!eyeCf);
  };

  const handleShowModal = () => {
    setIsModalVisible(true);
  };
  const handleChangePassword = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setCPassword({ ...cPassword, [name]: value });
    console.log(cPassword);
  };
  const handleCloseModal = (e) => {
    oldPwRef.current.value = "";
    newPwRef.current.value = "";
    verify_passwordRef.current.value = "";
    setIsModalVisible(false);
  };
  useEffect(() => {
    if (handleCloseModal) {
      setIsSubmit(false);
      setCPassword({
        oldPw: "",
        newPw: "",
        verify_password: "",
      });
      setEyeOp(false);
      setEyeNp(false);
      setEyeCf(false);
      setFormErrors({});
    }
  }, [isModalVisible]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate);
    setIsSubmit(true);
  };
  const validate = () => {
    const { oldPw, verify_password, newPw } = cPassword;
    const errors = {};
    /*  if (oldPw !== password) {
       errors.oldPw = "Wrong password";
     } */
    if (!oldPw) {
      errors.oldPw = "This field is required";
    }
    if (!newPw) {
      errors.newPw = "This field is required";
    }
    if (newPw && newPw.length <= 5) {
      errors.newPw = "Password length at least than 6";
    }
    if (!verify_password) {
      errors.verify_password = "This field is required";
    }
    if (verify_password && verify_password.length <= 5) {
      errors.verify_password = "Password length greater than 6";
    }
    if (verify_password && newPw && verify_password !== newPw) {
      errors.verify_password = "Not same with the new password";
    }
    return errors;
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      /*  const handleChangePassword = async () => {
        const res = await axios.put(
          `${REACT_APP_API_BASE_URL}/auth/change-pw`,
          cPassword,
          {
            header: { accessToken: `Bearer ${TOKEN}` },
          }
        );

      }; */
      /*  handleChangePassword() */
      alert("Update password success");
      setIsModalVisible(false);
      setIsSubmit(false);
      oldPwRef.current.value = "";
      newPwRef.current.value = "";
      verify_passwordRef.current.value = "";
    }
  }, [formErrors, cPassword, isSubmit]);
  return (
    <div>
      <>
        <div
          className={`${
            isModalVisible ? `block` : `hidden`
          } overflow-y-auto overflow-x-hidden fixed  z-50 w-full top-0 left-0   h-full bg-[#1114]`}
        >
          <div className="relative min-w-[350px] top-[15%] sm:min-w-[550px]  md:mx-auto flex justify-center items-center">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 min-w-[350px] sm:min-w-[400px] mx-1 ">
              <div className="flex item-center justify-end ">
                <span
                  className="cursor-pointer mr-1 text-base"
                  onClick={handleCloseModal}
                >
                  X
                </span>
              </div>

              <div className="pb-6 pt-[6px] px-6 ">
                <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white ">
                  Thay đổi
                </h3>
                <form className="space-y-4" action="#" onSubmit={handleSubmit}>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                      Mật khẩu cũ
                    </label>
                    <div className="relative">
                      <input
                        ref={oldPwRef}
                        type={eyeOp ? "text" : "password"}
                        name="oldPw"
                        defaultValue={cPassword.oldPw}
                        onChange={handleChangePassword}
                        placeholder="Add your password"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white relative"
                      />
                      {eyeOp ? (
                        <AiOutlineEye
                          onClick={handleEyeOp}
                          className="absolute right-2 top-[10px] w-5 h-5 cursor-pointer "
                        />
                      ) : (
                        <AiOutlineEyeInvisible
                          onClick={handleEyeOp}
                          className="absolute right-2 top-[10px] w-5 h-5 cursor-pointer"
                        />
                      )}
                    </div>
                    <p className="text-red-400">{formErrors.oldPw}</p>
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                      Mật khẩu mới
                    </label>
                    <div className="relative">
                      <input
                        ref={newPwRef}
                        type={eyeNp ? "text" : "password"}
                        name="newPw"
                        defaultValue={cPassword.newPw}
                        onChange={handleChangePassword}
                        placeholder="Add your new password"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      />
                      {eyeNp ? (
                        <AiOutlineEye
                          onClick={handleEyeNp}
                          className="absolute right-2 top-[10px] w-5 h-5 cursor-pointer "
                        />
                      ) : (
                        <AiOutlineEyeInvisible
                          onClick={handleEyeNp}
                          className="absolute right-2 top-[10px] w-5 h-5 cursor-pointer"
                        />
                      )}
                    </div>
                    <p className="text-red-400">{formErrors.newPw}</p>
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                      Xác nhận mật khẩu mới
                    </label>
                    <div className="relative">
                      <input
                        ref={verify_passwordRef}
                        type={eyeCf ? "text" : "password"}
                        name="verify_password"
                        defaultValue={cPassword.verify_password}
                        placeholder="Confirm new password"
                        onChange={handleChangePassword}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      />
                      {eyeCf ? (
                        <AiOutlineEye
                          onClick={handleEyeCf}
                          className="absolute right-2 top-[10px] w-5 h-5 cursor-pointer "
                        />
                      ) : (
                        <AiOutlineEyeInvisible
                          onClick={handleEyeCf}
                          className="absolute right-2 top-[10px] w-5 h-5 cursor-pointer"
                        />
                      )}
                    </div>
                    <p className="text-red-400">{formErrors.verify_password}</p>
                  </div>

                  <button
                    type="submit"
                    className="w-full text-[#00003B] bg-yellow-500 hover:bg-yellow-600 focus:outline-none  font-semibold rounded-lg text-sm px-5 py-2.5 text-center  "
                  >
                    Thay đổi
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
      <div className="pt-[68px] relative">
        <div className="bg-gray-100 relative ">
          <SideBar className="" handleOpen={handleOpen} open={open} />

          <span className="w-6 h-6 absolute top-[10%] left-[0%] z-3 transition  lg:top-[15%]">
            <IoArrowForwardCircleOutline
              className="w-6 h-6 z-50   "
              onClick={() => handleOpen()}
            />
          </span>

          <div className="grid grid-cols-5 mx-1 sm:mx-20 lg:mx-60 md:mx-28 py-5 bg-gray-100  ">
            <div className=" col-span-5 bg-white rounded-lg   shadow-xl">
              <div className="flex justify-start flex-col ml-4 border-b-2  pl-4 pb-3 pt-3">
                <div className="text-xl font-bold mb-1 lg:text-2xl">
                  Hồ Sơ Của Tôi
                </div>
                <div>Quản lý thông tin hồ sơ để bảo mật tài khoản</div>
              </div>
              <form className=" lg:mx-7 mx-1 my-4 ">
                <div className=" flex flex-col  ">
                  <div className="flex mb-3 sm:py-1">
                    <div className="flex items-center w-2/5   justify-end ">
                      <label className=" mr-3 text-yellow-600 lg:text-base">
                        Tên
                      </label>
                    </div>

                    <div className="flex  ">
                      <div className="text-black-700 mr-3 lg:text-base">
                        Nguyễn Văn Thật
                      </div>
                    </div>
                  </div>
                  <div className="flex mb-3 sm:py-1">
                    <div className="flex items-center w-2/5   justify-end flex-shrink-0">
                      <label className=" mr-3 text-yellow-600 lg:text-base">
                        Địa chỉ
                      </label>
                    </div>

                    <div className="flex  ">
                      <div className="text-black-700 mr-3 lg:text-base line-clamp-1">
                        B5/3 Phường An Phú Tp Thủ Đức
                      </div>
                    </div>
                  </div>
                  <div className="flex mb-3 sm:py-1">
                    <div className="flex items-center w-2/5   justify-end ">
                      <label className=" mr-3 text-yellow-600 lg:text-base">
                        Email
                      </label>
                    </div>
                    <div className="flex ">
                      <div className="text-black-700 lg:text-base">
                        {hideemail("nguyenvanthat123@gmail.com")}
                      </div>
                    </div>
                  </div>
                  <div className="flex mb-3  sm:py-1 ">
                    <div className="flex items-center w-2/5   justify-end ">
                      <label className=" mr-3 text-yellow-600 lg:text-base">
                        Mật khẩu
                      </label>
                    </div>
                    <div className="flex  ">
                      <div
                        className="text-black-700 mr-3 lg:text-base"
                        type="password"
                      >
                        {hidepassword("khoa12")}
                      </div>
                      <div
                        className="text-xs text-center text-yellow-500 cursor-pointer lg:text-base"
                        onClick={handleShowModal}
                      >
                        Thay đổi
                      </div>
                    </div>
                  </div>
                  <div className="flex mb-3 sm:py-1">
                    <div className="flex items-center w-2/5   justify-end lg:text-base ">
                      <label className=" mr-3 text-yellow-600 ">
                        Số điện thoại
                      </label>
                    </div>
                    <div className="flex ">
                      <div className="text-black-700 lg:text-base ">
                        {hidephone("093222128")}
                      </div>
                    </div>
                  </div>
                  <div className="flex mb-3 sm:py-1">
                    <div className="flex items-center w-2/5   justify-end lg:text-base ">
                      <label className=" mr-3 text-yellow-600 ">
                        Mã số thuế
                      </label>
                    </div>
                    <div className="flex ">
                      <div className="text-black-700 lg:text-base ">
                        51312312
                      </div>
                    </div>
                  </div>
                  {/*  <div className="flex mb-3 sm:py-1  items-center">
                    <div className="flex items-center w-2/5   justify-end  lg:text-base">
                      <label className=" mr-3 text-yellow-600 text">
                        Ngày Sinh
                      </label>
                    </div>
                    <div className="flex  ">
                      <div className="text-black-700  flex flex-nowrap items-start ">
                        <select
                          className="  outline-none  border-[1px] sm:px-1 sm:mr-2 hover:bottom-3 scrollbar"
                          name="date"
                          onChange={(e) => handleDate(e)}
                          value={date}
                        >
                          <option value="0">Date</option>
                          {generateDateOptions()}
                        </select>
                        <select
                          className="  outline-none border-[1px] sm:px-1 sm:mr-2  hover:bottom-3 scrollbar"
                          name="month"
                          onChange={(e) => handleMonth(e)}
                          value={month}
                        >
                          <option value="0">Month</option>
                          {generateMonthOptions()}
                        </select>
                        <select
                          className="  outline-none  border-[1px] sm:px-1 sm:mr-2 hover:bottom-3 scrollbar"
                          name="year"
                          onChange={(e) => handleYear(e)}
                          value={year}
                        >
                          <option value="0">Year</option>
                          {generateYearOptions()}
                        </select>
                      </div>
                    </div>
                  </div> */}
                  {/*  <div className="flex mb-3 ">
                    <div className="flex items-center w-2/5  justify-end ">
                      <label className="text-gray-500 mr-3  "></label>
                    </div>
                    <div className="flex ">
                      <button className="py-2 px-4 mt-2 font-semibold bg-yellow-500  hover:translate-y-[-1px] transition-all text-[#00003B] rounded-sm">
                        Save
                      </button>
                    </div>
                  </div> */}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
