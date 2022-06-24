import {
  faCity,
  faChartLine,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const EmploymentInformation = () => {
  const professions = [
    {
      id: 1,
      profession: "Ngành nghề",
    },
    {
      id: 2,
      profession: "Bưu cục",
      numberOfRecruitment: 0,
      type: "văn phòng",
    },
    {
      id: 3,
      profession: "Chăm sóc khách hàng",
      numberOfRecruitment: 0,
      type: "văn phòng",
    },
    {
      id: 4,
      profession: "Công nghệ thông tin",
      numberOfRecruitment: 7,
      type: "văn phòng",
    },
    {
      id: 5,
      profession: "Đào tạo",
      numberOfRecruitment: 0,
      type: "văn phòng",
    },
    {
      id: 6,
      profession: "Kế toán - Tài chính",
      numberOfRecruitment: 4,
      type: "văn phòng",
    },
    {
      id: 7,
      profession: "Kiểm toán & Kiểm soát nội bộ",
      numberOfRecruitment: 1,
      type: "văn phòng",
    },
    {
      id: 8,
      profession: "Kinh doanh",
      numberOfRecruitment: 1,
      type: "kinh doanh",
    },
    {
      id: 9,
      profession: "Nhân sự & Hành chính",
      numberOfRecruitment: 1,
      type: "văn phòng",
    },
    {
      id: 10,
      profession: "Quản lí chất lượng",
      numberOfRecruitment: 3,
      type: "văn phòng",
    },
    {
      id: 11,
      profession: "Thu mua",
      numberOfRecruitment: 0,
      type: "kinh doanh",
    },
    {
      id: 12,
      profession: "Trợ lí",
      numberOfRecruitment: 1,
      type: "văn phòng",
    },
    {
      id: 13,
      profession: "Trung tâm khai thác",
      numberOfRecruitment: 0,
      type: "văn phòng",
    },
    {
      id: 14,
      profession: "Vận hành",
      numberOfRecruitment: 0,
      type: "văn phòng",
    },
  ];
  return (
    <div className="lg:grid  lg:grid-cols-3 border-[1px] border-[#e5a663] rounded-xl  bg-[#f2f2f2] mb-[60px]">
      <div className="p-[20px] sm:p-[32px] ">
        <div className="flex gap-4 font-bold">
          <FontAwesomeIcon icon={faCity} />
          VĂN PHÒNG
        </div>
        <div className="py-[16px]">
          {professions
            .filter(
              (item) =>
                item.type === "văn phòng" && item.numberOfRecruitment !== 0
            )
            .map((item, index) => {
              return (
                <div key={index}>
                  <div
                    key={index}
                    className="cursor-pointer py-[8px] sm:py-[16px]"
                  >
                    <h3 className="text-[16px] font-bold truncate">
                      {item.profession}
                    </h3>
                    <p className="flex items-center gap-3 text-[16px] truncate">
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="text-base text-[#e5a663]"
                      />
                      {item.numberOfRecruitment} vị trí tuyển dụng
                    </p>
                  </div>
                  <hr />
                </div>
              );
            })}
        </div>
      </div>

      <div className="p-[32px]">
        <div className="flex gap-4 font-bold">
          <FontAwesomeIcon icon={faChartLine} />
          KINH DOANH
        </div>
        <div className="py-[16px]">
          {professions
            .filter(
              (item) =>
                item.type === "kinh doanh" && item.numberOfRecruitment !== 0
            )
            .map((item, index) => {
              return (
                <div key={index}>
                  <div className="cursor-pointer py-[8px] sm:py-[16px]">
                    <h3 className="text-[16px] font-bold truncate ">
                      {item.profession}
                    </h3>
                    <p className="flex items-center gap-3 text-[16px] truncate">
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="text-base text-[#e5a663]"
                      />
                      {item.numberOfRecruitment} vị trí tuyển dụng
                    </p>
                  </div>
                  <hr />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default EmploymentInformation;
