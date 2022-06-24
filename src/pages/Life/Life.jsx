import React from "react";
import Banner from "../../assets/images/banner.png";
import LifeInJTDetail from "../../components/LifeInJTDetail";
import RecruitmentBannerForLife from "../../components/RecruitmentBannerForLife";
import Welfare from "../../components/Welfare";

const Life = () => {
  return (
    <>
      <div>
        <img src={Banner} alt="" />
      </div>
      <LifeInJTDetail />
      <Welfare />
      <RecruitmentBannerForLife />
    </>
  );
};

export default Life;
