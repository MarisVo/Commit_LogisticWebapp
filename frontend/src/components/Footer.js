import logoJT from '../assets/icons/logo-J&T.svg'
import appStore from '../assets/images/appStore.png'
import ggPlay from '../assets/images/ggPlay.png'
import zaloIcon from '../assets/icons/icons-zalo.svg'
import { FaFacebook, FaInstagram, FaTiktok, FaYoutubeSquare } from 'react-icons/fa'
import { IoMailOutline, IoCallOutline, IoLocationOutline } from 'react-icons/io5'

const Footer = () => {

    return (
        <footer className="bg-[#e0e3e7]">
            <div className=" grid grid-cols-1 gap-x-[70px] lg:grid-cols-3 pt-[35px] mx-auto px-4 lg:px-0 container ">
                <div className="leading-6 ">

                    <img src={logoJT} className="mb-4" />
                    <h5 className="mb-4 font-extrabold">
                        CÔNG TY TNHH MỘT THÀNH VIÊN CHUYỂN PHÁT NHANH THUẬN PHONG
                    </h5>
                    <div className="text-[12px] mb-1 ">
                        <p>Giấy CNĐKKD: 0313617136 - Ngày cấp: 13/01/2016, đăng ký thay đổi lần 06 ngày 25/09/2018</p>
                        <p>Cơ Quan Cấp: Phòng Đăng ký kinh doanh - Sở kế hoạch và đầu tư TP Hồ Chí Minh</p>
                    </div>
                    <img src="https://jtexpress.vn/themes/jtexpress/assets/images/icon-bct.png" />
                </div>
                <div>
                    <h5 className="font-extrabold mb-1">
                        TRUY CẬP NHANH
                    </h5>
                    <div className="w-full h-[2px] bg-slate-400 mb-4 relative">
                        <div className="w-2/5 h-full bg-red-500 absolute"></div>
                    </div>
                    <div className="flex  text-[12px]">
                        <div className="flex-1">
                            <p className="mb-[10px] font-bold">
                                Trung tâm chăm sóc khách hàng
                            </p>
                            <a href="/" className="block mb-4">
                                Liên hệ với chung tôi
                            </a>

                            <p className="mb-[10px] font-bold">
                                Thông tin công ty
                            </p>
                            <a href="/" className="block mb-[10px]">
                                Câu chuyện thương hiệu
                            </a>
                            <a href="/" className="block mb-[10px]">
                                Tầm nhìn và giá trị cốt lõi
                            </a>
                            <a href="/" className="block mb-[10px]">
                                Lịch sử phát triển
                            </a>
                            <a href="/" className="block">
                                Mạng lưới và quy mô
                            </a>
                        </div>
                        <div className="flex-1">
                            <p className="mb-[10px] font-bold">
                                Chính sách
                            </p>
                            <a href="/" className="block mb-[10px]">
                                Chính sách khiếu nại
                            </a>

                            <a href="/" className="block mb-[10px]">
                                Điều khoản chung
                            </a>

                            <p className="mb-[10px] font-bold">
                                Blog
                            </p>
                            <a href="/" className="block mb-[10px]">
                                Tin tức nối bật
                            </a>
                            <a href="/" className="block mb-[10px]">
                                Báo chí nói về chúng tôi
                            </a>
                            <a href="/" className="">
                                3-Magazine
                            </a>
                        </div>
                    </div>
                </div>
                <div>
                    <h5 className="font-extrabold mb-1 ">
                        THÔNG TIN LIÊN HỆ
                    </h5>
                    <div className="w-full h-[2px] bg-slate-400 mb-4 relative">
                        <div className="w-1/2 h-full bg-red-500 absolute"></div>
                    </div>
                    <div className="flex mb-3">
                        <IoMailOutline />
                        <span className="ml-2 text-[12px]">cskh@jtexpress.vn</span>
                    </div>
                    <div className="flex mb-3">
                        <IoCallOutline />
                        <span className="ml-2 text-[12px]">1900 1088</span>
                    </div>
                    <div className="flex mb-5">
                        <IoLocationOutline className="w-5 h-5" />
                        <span className="ml-2 text-[12px]">10 Mai Chí Thọ, P. Thủ Thiêm, Thành phố Thủ Đức, TP. HCM</span>
                    </div>
                    <h5 className="font-extrabold mb-1 ">
                        TẢI ỨNG DỤNG
                    </h5>
                    <div className="w-full h-[2px] bg-slate-400 mb-4 relative">
                        <div className="w-1/2 h-full bg-red-500 absolute "></div>
                    </div>
                    <div class="flex">
                        <img
                            className="w-20 "
                            src="https://chart.googleapis.com/chart?chs=500x500&cht=qr&chl=https://jtexpress.vn/download&choe=UTF-8"
                        />
                        <div className="ml-6">
                            <a href="https://apps.apple.com/us/app/j-t-vnm-vip/id1474072185">
                                <img src={appStore} alt="appStore-logo" />
                            </a>
                            <a href="https://play.google.com/store/apps/details?id=com.msd.VIPyueNanClient&hl=vi&gl=US">
                                <img src={ggPlay} alt="ggPlay-logo" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-[2px] bg-slate-400 w-3/5 mt-7 mb-7 mx-auto"></div>
            <div className="flex justify-center pb-4">
                <a href="https://www.facebook.com/JTExpressVietnam/">
                    <FaFacebook className="mx-2 w-6 h-6" />
                </a>
                <a href="https://www.instagram.com/jntexpressvn/">
                    <FaInstagram className="mx-2 w-6 h-6" />
                </a>
                <a href="https://www.tiktok.com/@jntexpressvn/">
                    <FaTiktok className="mx-2 w-6 h-6" />
                </a>
                <a href="https://www.youtube.com/channel/UCY_EaSLbaf9Mn4BZGEQg0CA">
                    <FaYoutubeSquare className="mx-2 w-6 h-6" />
                </a>
                <a href="https://oa.zalo.me/1837464433417511317">
                    <img src={zaloIcon} className="mx-2 w-6" alt="zalo-icon"></img>
                </a>
            </div>
            <div className="flex justify-center items-center text-center flex-col lg:flex-row text-xs lg:text-sm pb-6">
                <a href="/"><span>Chính sách bảo mật</span></a>
                <span className="hidden mx-1 lg:block ">|</span>
                <span className="">Copyright © 2022 J&T Express. All rights reserved</span>
            </div>



        </footer>
    )
}
export default Footer