import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { END_POINT } from "../../utils/constant"
import { MainContext } from "../../context/MainContext";

function Commit() {
    const {setMetadata} = useContext(MainContext)
    const [data, setData] = useState([
        {
            id: "1",
            logo: "https://jtexpress.vn/themes/jtexpress/assets/images/camket1.png",
            heading: "PHỤC VỤ VĂN MINH",
            detail: "Lịch sự khi tiếp đón khách hàng, phục vụ văn minh, tuân thủ nghiêm ngặt đạo đức nghề nghiệp, phục vụ chu đáo, kinh doanh trung thực, không lừa dối khách hàng."
        },
        {
            id: "2",
            logo: "	https://jtexpress.vn/themes/jtexpress/assets/images/camket2.png",
            heading: "PHẠM VI GIAO NHẬN",
            detail: "Phạm vi phục vụ thực tế phù hợp với phạm vi phục vụ mà Tổng Công ty quy định. Công ty khuyến khích phạm vi chuyển phát thực tế rộng hơn phạm vi quy định, nhưng tuyệt đối không cho phép nhỏ hơn phạm quy Tổng Công ty quy định."
        },
        {
            id: "3",
            logo: "https://jtexpress.vn/themes/jtexpress/assets/images/camket3.png",
            heading: "TRA CỨU HÀNH TRÌNH ONLINE",
            detail: "Sau khi gửi hàng, nhân viên bưu cục lập tức quét mã vận đơn để khách hàng có thể theo dõi hàng hóa trên hệ thống của J&T. Đảm bảo tính xác thực về thông tin, trạng thái của hàng hóa được phản ánh bởi trang theo dõi thông tin tra cứu.Trang web theo dõi thông tin tra cứu hàng hóa: www.jtexpress.vn."
        },
        {
            id: "4",
            logo: "	https://jtexpress.vn/themes/jtexpress/assets/images/camket4.png",
            heading: "CUSTOMER SERVICE",
            detail: "Hotline: 1900 1088 (24/7) 1900 1088 (Tiếp nhận cuộc gọi 24/7)."
        },
        {
            id: "5",
            logo: "	https://jtexpress.vn/themes/jtexpress/assets/images/camket5.png",
            heading: "BỒI THƯỜNG",
            detail: "Xử lý khiếu nại, bồi thường theo Luật Bưu chính Việt Nam hiện hành. J&T có quyền điều chỉnh và thông báo cho khách hàng những cam kết và quy định trên theo Luật Bưu chính và những thông tư của Bộ TT&TT."
        },
        {
            id: "6",
            logo: "	https://jtexpress.vn/themes/jtexpress/assets/images/camket6.png",
            heading: "THỜI GIAN LÀM VIỆC",
            detail: "Thời gian của dịch vụ giao nhận hàng tại bưu cục: 8:00-20:00 từ thứ 2 đến chủ nhật."
        },

    ])
    useEffect(() => {
        setMetadata((prev) => {
            return {
              ...prev,
              title: "Cam kết | TKTL",
            };
          });
        const fetchApi = async () => {
            try {
                const res = await axios.get(`${END_POINT}/commitment?limit=6`)
                res.status===200 && setData(res.data.data.commits)
                console.log(res)
            }
            catch (error) {
                console.log(error.message)
            }
        }
        fetchApi()
    }, [])

    return (
        <div className="pt-[80px] mb-10 container mx-auto">
            <a href="">
                <img src="https://tomochain.com/wp-content/uploads/2020/02/Consensus-1200x628-1.png" alt="banner" className='w-full h-auto object-cover' />
            </a>
            <div className="flex flex-col lg:flex-row mx-4 lg:mx-0 gap-x-4 my-10">
                <div className='flex-1'>
                    <div>
                        <img src="https://jtexpress.vn/themes/jtexpress/assets/images/dd-about-us.png" className='w-[76px] h-[63px] hidden lg:block' />
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-10 gap-x-4 mt-8 mb-4 rounded-2xl">
                        {data.map((commit) => (
                            <div key={commit._id} className="p-3 bg-[#F0B90B] even:bg-opacity-40 lg:min-h-[350px] rounded-xl">
                                <img src={commit.logo} className="mb-7" />
                                <div className="uppercase text-lg font-black my-3 text-teal-600 ">{commit.heading}</div>
                                <div className="whitespace-pre-line">{commit.detail}</div>
                            </div>)
                        )}

                    </div>
                    <div className='flex justify-end'>

                        <img src="https://jtexpress.vn/themes/jtexpress/assets/images/dd-about-us.png" className='w-[76px] h-[63px] hidden lg:block rotate-180' />
                    </div>
                </div>
                <a href="#" className=" flex  items-center lg:w-[240px]">
                    <img src="https://jtexpress.vn/storage/app/uploads/public/626/a18/377/626a183772daf645215340.png" className='w-full h-auto object-cover ' />
                </a>
            </div>
        </div>

    );
}

export default Commit;