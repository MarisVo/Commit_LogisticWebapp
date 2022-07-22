import Images from '../../utils/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import InputDesktop from '../../components/InputDesktop/InputDesktop';
import InputMobile from '../../components/InputMobile/InputMobile';
import HotJob from '../../components/HotJob/HotJob';
import NewJob from '../../components/NewJob/NewJob';
import EmploymentInformation from '../../components/EmploymentInformation/EmploymentInformation';
import RecruitmentBanner from '../../components/RecruitmentBanner/RecruitmentBanner';
import LifeInJT from '../../components/LifeInJT/LifeInJT';
import { Outlet, useLocation } from 'react-router-dom';

const CareerOpportunities = () => {
    const { pathname } = useLocation()

    return (
        
        <>
            {pathname === '/tuyen-dung' ? 
            <>
                {/* Banner */}
                <div className="relative">
                    <img src={Images.TOP_BANNER} alt="banner" />
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

                        <a className="text-[16px] text-[#e5a663] font-bold p-[6px] sm:p-[16px] mb-[40px] sm:mb-[48px] bg-[#f2f2f2] inline-block  rounded-lg">
                            <FontAwesomeIcon icon={faEye} className="pr-[8px]" />
                            XEM TẤT CẢ VỊ TRÍ ỨNG TUYỂN
                        </a>
                    </div>
                    <EmploymentInformation />
                </div>
                <RecruitmentBanner />
                <LifeInJT />
            </> : <Outlet />
             }
        </>
    );
};

export default CareerOpportunities;

// ok chua ong oke rooif as