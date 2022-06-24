import InputDesktop from "../../components/InputDesktop";
import Banner from "../../assets/images/banner.png";
import backGroundImg from "../../assets/images/slider-tuyen-dung.png";

import {
  faCalendar,
  faCoins,
  faClock,
  faLocationDot,
  faPlane,
  faHeartPulse,
  faMugHot,
  faMoneyBillTrendUp,
  faPersonBreastfeeding,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const RecruitmentDetails = () => {
  return (
    <>
      {/* Banner */}
      <div className="relative">
        <img src={Banner} alt="banner" />
        <InputDesktop />
      </div>

      <div className="m-auto max-w-[1140px]  px-[16px] lg:px-[0px]  mt-[32px] lg:mt-[180px]">
        <h2 className="text-[24px] lg:text-[32px] font-bold mb-6">
          [HCM _ Q2] _ INTERNAL CONTROL SPECIALIST
        </h2>
        <div className="gap-4 lg:grid lg:grid-cols-2 bg-[#f2f2f2]">
          <div className="p-4">
            <h4 className="text-[#e5a663] font-bold">
              <FontAwesomeIcon className="mr-2" icon={faCalendar} />
              Hạn nộp
            </h4>
            <p className="py-2 ml-5">30/06/2022</p>
            <hr />
          </div>
          <div className="p-4">
            <h4 className="text-[#e5a663] font-bold">
              <FontAwesomeIcon className="mr-2" icon={faCoins} />
              Mức lương
            </h4>
            <p className="py-2 ml-5">Competitive</p>
            <hr />
          </div>
          <div className="p-4">
            <h4 className="text-[#e5a663] font-bold">
              <FontAwesomeIcon className="mr-2" icon={faClock} />
              Thời gian làm việc
            </h4>
            <p className="py-2 ml-5">
              08:00 - 17:30, từ thứ 2 - thứ 6 | 08:00 - 12:00, thứ 7 <br /> Nghỉ
              trưa 12:00 - 13:30
            </p>
            <hr />
          </div>
          <div className="p-4">
            <h4 className="text-[#e5a663] font-bold">
              <FontAwesomeIcon className="mr-2" icon={faLocationDot} />
              Địa điểm làm việc
            </h4>
            <p className="py-2 ml-5">
              9F, Sofic Tower, 10 Mai Chi Tho, Thu Thiem Ward, District 2, HCMC.
            </p>
            <hr />
          </div>
        </div>

        <article className="tracking-wide">
          <h4 className="mt-8 mb-2 text-2xl font-bold">Phúc lợi của bạn</h4>
          <p>
            <FontAwesomeIcon className="mr-2 text-[#e5a663]" icon={faPlane} />
            Travel Trip & Teambuilding trip each year
          </p>
          <p>
            <FontAwesomeIcon
              className="mr-2 text-[#e5a663]"
              icon={faHeartPulse}
            />
            Annual Health check-up
          </p>
          <p>
            <FontAwesomeIcon className="mr-2 text-[#e5a663]" icon={faMugHot} />
            Tea break 3 times/week
          </p>
          <p>
            <FontAwesomeIcon
              className="mr-2 text-[#e5a663]"
              icon={faMoneyBillTrendUp}
            />
            Year bonus
          </p>
          <p>
            <FontAwesomeIcon
              className="mr-2 text-[#e5a663]"
              icon={faPersonBreastfeeding}
            />
            Rearing child allowance for female employees
          </p>
        </article>
      </div>
      <div className="relative">
        <img src={backGroundImg} alt="IMG" className="w-full h-[580px] " />

        <form
          action=""
          className="bg-[#fff] p-7 lg:p-14 w-[90%] lg:w-auto rounded-lg absolute top-[50%] left-[50%]  translate-y-[-50%]  translate-x-[-50%]"
        >
          <h3 className="mb-2 text-3xl font-bold lg:mb-5">Đăng ký ứng tuyển</h3>
          <div className="gap-4 lg:grid lg:grid-cols-2">
            <fieldset className="flex flex-col">
              <label htmlFor="name">Họ và tên *</label>
              <input
                required
                className="py-2 border placeholder:pl-2 xl:w-[260px] lg:w-[200px]"
                type="text"
                name=""
                id="name"
                placeholder="Họ và tên"
              />
            </fieldset>
            <fieldset className="flex flex-col">
              <label htmlFor="email">Họ và tên *</label>
              <input
                required
                className="py-2 border placeholder:pl-2 xl:w-[260px] lg:w-[200px]"
                type="email *"
                name="email"
                id="email"
                placeholder="Email"
              />
            </fieldset>
            <fieldset className="flex flex-col">
              <label htmlFor="phone">Số điện thoại *</label>
              <input
                required
                className="py-2 border placeholder:pl-2 xl:w-[260px] lg:w-[200px]"
                type="number"
                name="phone"
                id="phone"
                placeholder="Số điện thoại"
              />
            </fieldset>
            <fieldset className="flex flex-col">
              <label htmlFor="birthday">Năm sinh *</label>
              <input
                required
                className="py-2 border placeholder:pl-2 xl:w-[260px] lg:w-[200px]"
                type="date"
                name="birthday"
                id="birthday"
                placeholder="Năm sinh"
              />
            </fieldset>
          </div>

          <button
            type="submit"
            className="w-[100%] bg-[#e5a663] py-2 mt-5 rounded-lg"
          >
            Gửi đăng ký ứng tuyển
          </button>
        </form>
      </div>
    </>
  );
};

export default RecruitmentDetails;
