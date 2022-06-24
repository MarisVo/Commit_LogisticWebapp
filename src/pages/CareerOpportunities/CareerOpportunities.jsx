import Banner from "../../assets/images/banner.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import InputDesktop from "../../components/InputDesktop";
import InputMobile from "../../components/InputMobile";
import HotJob from "../../components/HotJob";
import NewJob from "../../components/NewJob";
import EmploymentInformation from "../../components/EmploymentInformation";
import RecruitmentBanner from "../../components/RecruitmentBanner";
import LifeInJT from "../../components/LifeInJT";

const CareerOpportunities = () => {
  return (
    <>
      {/* Banner */}
      <div className="relative">
        <img src={Banner} alt="banner" />
        <InputDesktop />
        <InputMobile />
      </div>

      {/* CONTAINER */}
      <div className="m-auto max-w-[1140px]  px-[16px] lg:px-[0px]">
        {/* JOB LIST */}
        <div className="mt-4 text-2xl lg:mt-44">
          <div className="block lg:flex justify-between gap-[100px]">
            <HotJob />
            <NewJob />
          </div>

          <a
            href="#"
            className="text-[16px] text-[#e5a663] font-bold p-[6px] sm:p-[16px] mb-[40px] sm:mb-[48px] bg-[#f2f2f2] inline-block  rounded-lg"
          >
            <FontAwesomeIcon icon={faEye} className="pr-[8px]" />
            XEM TẤT CẢ VỊ TRÍ ỨNG TUYỂN
          </a>
        </div>
        <EmploymentInformation />
      </div>

      <RecruitmentBanner />
      <LifeInJT />
    </>
  );
};

export default CareerOpportunities;
