import { RightOutlined } from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
const HotJob = () => {
  const hotJob = [
    {
      name: "[HCM _ Q2] _ INTERNAL CONTROL SPECIALIST",
      location: "Quận 2 - Hồ Chí Minh",
    },
    {
      name: "[HCM _ Q2] _ NHÂN VIÊN QUẢN LÝ TÀI SẢN",
      location: "Quận Bình Thạnh - Hồ Chí Minh",
    },
    {
      name: "Nhân viên Kinh doanh phần mềm (Công ty đối tác)",
      location: "Quận 2 - Hồ Chí Minh",
    },
    {
      name: "[HCM_Q2] _ NHÂN VIÊN ĐÀO TẠO",
      location: "Quận 2 - Hồ Chí Minh",
    },
    {
      name: "[HCM_Q2] _ INTERNAL AUDITOR, SENIOR (FINANCE)",
      location: "Quận 2 - Hồ Chí Minh",
    },
  ];
  return (
    <div className="w-[100%]">
      <h2 className="text-[24px] sm:text-[32px] font-bold mb-[16px] sm:mb-[28px] truncate">
        Việc làm nổi bật
      </h2>

      {hotJob.map((job, index) => {
        return (
          <div
            key={index}
            className="border-[1px] rounded-r-xl before:content-['']  p-[16px] mb-[16px] overflow-hidden bg-[#f2f2f2] hover:scale-105 duration-300"
          >
            <h4 className="text-[16px] sm:text-[18px] font-bold tracking-wider whitespace-nowrap text-ellipsis overflow-hidden cursor-pointer">
              {job.name}
            </h4>
            <p className="text-[16px] opacity-70 cursor-pointer truncate">
              <FontAwesomeIcon icon={faLocationDot} className=" pr-[16px]" />
              {job.location}
            </p>
            <a
              className="text-[14px] text-[#e5a663] tracking-wider flex items-center gap-2 font-bold"
              href="#"
            >
              <RightOutlined />
              XEM CHI TIẾT
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default HotJob;
