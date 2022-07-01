import logoJT from '../assets/icons/logo-J&T.svg'
import { FaChevronDown, FaBars } from 'react-icons/fa'
import { Link } from "react-router-dom"
import { useState } from 'react'
import { Menu } from 'antd'
import 'antd/dist/antd.css'

function getItem(label, key, children) {
    return {
        key,
        children,
        label,
    };
}
const items = [
    getItem(<Link to="/">Trang chủ</Link>, '1'),
    getItem(<Link to="about">Giới thiệu</Link>, 'sub2', [
        getItem(<Link to="about">Về chúng tôi</Link>, '2'),
        getItem(<Link to="commit">Cam kết</Link>, '3'),
    ]),
    getItem(<Link to="track">Tra cứu</Link>, 'sub3', [
        getItem(<Link to="">Cước vận chuyển</Link>, '4'),
        getItem(<Link to="">Bưu cục gần đây</Link>, '5'),
        getItem(<Link to="">Vận đơn</Link>, '6'),
        getItem(<Link to="">Bảng giá</Link>, '7'),
        getItem(<Link to="">Hàng cấm gửi</Link>, '8'),
    ]),
    getItem(<Link to="service">Dịch vụ</Link>, 'sub4', [
        getItem(<Link to="" className="flex flex-col leading-5">
            <span >Dịch vụ chuyển phát tiêu chuẩn</span>
            <i className=" text-[#F00] font-bold">J&T Epress</i>
        </Link>, '9'),
        getItem(<Link to="" className="flex flex-col leading-5">
            <span >Dịch vụ chuyển phát nhanh</span>
            <i className=" text-[#F00] font-bold">J&T Fast</i>
        </Link>, '10'),
        getItem(<Link to="" className="flex flex-col leading-5">
            <span >Dịch vụ Siêu giao hàng</span>
            <i className=" text-[#F00] font-bold">J&T Super</i>
        </Link>, '11'),
        getItem(<Link to="" className="flex flex-col leading-5">
            <span >Dịch vụ Tươi sống</span>
            <i className=" text-[#F00] font-bold">J&T Fresh</i>
        </Link>, '12'),
    ]),
    getItem(<Link to="">Tuển dụng </Link>, 'sub5', [
        getItem(<Link to="about">Cơ hội nghề nghiệp</Link>, '13'),
        getItem(<Link to="commit">Cuộc sống J%T Epress</Link>, '14'),
    ]),
    getItem(<Link to="dang-ki-tu-van">Tư vấn</Link>, 'sub6', [
        getItem(<Link to="contact">Liên hệ</Link>, '15'),
        getItem(<Link to="dang-ki-tu-van">Đăng kí tư vấn</Link>, '16'),
    ]),
];
const rootSubmenuKeys = ['sub1', 'sub2', 'sub3', 'sub4', 'sub5', 'sub6'];

const Header = () => {
    const [openKeys, setOpenKeys] = useState([]);
    //Logic mobile-navigation --- Còn lỗi
    const onOpenChange = (keys) => {
        const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
        if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            setOpenKeys(keys);
        } else {
            setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        }
    };
    const [isOpen, setIsOpen] = useState(false)
    const removeMobileMenu = (e) => {
        if (!e.target.closest('.ant-menu') || e.target.closest('a')) {
            setIsOpen(!isOpen)
        }
    }
    // alert('render header')
    return (
        <div className="fixed bg-white inset-x-0 h-[65px]  z-20 shadow-xl">
            <div className=" flex justify-between items-center h-full px-4 lg:px-0 container mx-auto text-sm ">
                <div className="bt lg:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <FaBars className="w-7 h-7" />
                </div>
                <Link to="/">
                    <img src={logoJT} className="" />
                </Link>
                <ul className="hidden lg:flex h-full justify-center items-center m-0">
                    <li >
                        <Link to="/" className=" flex items-center px-4 py-2 rounded-md hover:bg-yellow-200">Trang chủ</Link>
                    </li>
                    <div className='group hover:bg-yellow-200 rounded-md'>
                        <Link to="about" className="inline-flex items-center px-4 py-2">Giới thiệu
                            <FaChevronDown className="h-4 w-4 pl-[6px]" />
                        </Link>
                        <ul className="hidden group-hover:block absolute bg-white rounded-lg z-10 border shadow-lg animate-up">
                            <li>
                                <Link to="about" className="flex px-4 py-2 w-auto rounded-lg hover:bg-yellow-100">Về Chúng tôi</Link>
                            </li>
                            <li>
                                <Link to="commit" className="flex px-4 py-2 w-auto rounded-lg hover:bg-yellow-100">Cam kết</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='group hover:bg-yellow-200 rounded-md'>
                        <Link to="track" className="inline-flex items-center  px-4 py-2">Tra cứu
                            <FaChevronDown className="h-4 w-4 pl-[6px]" />
                        </Link>
                        <ul className="hidden group-hover:block absolute bg-white rounded-lg z-10 border shadow-lg animate-up">
                            <li><Link to="track/cuoc-van-chuyen" className="flex px-4 py-2 w-auto rounded-lg hover:bg-yellow-100">Cước vận chuyển</Link></li>
                            <li><Link to="track/buu-cuc" className="flex px-4 py-2 w-auto rounded-lg hover:bg-yellow-100">Bưu cục gần đây</Link></li>
                            <li><Link to="track/van-don" className="flex px-4 py-2 w-auto rounded-lg hover:bg-yellow-100">Vận đơn</Link></li>
                            <li><Link to="track/bang-gia" className="flex px-4 py-2 w-auto rounded-lg hover:bg-yellow-100">Bảng giá</Link></li>
                            <li><Link to="track/hang-cam-gui" className="flex px-4 py-2 w-auto rounded-lg hover:bg-yellow-100">Hàng cấm gửi</Link></li>
                        </ul>
                    </div >
                    <div className='group hover:bg-yellow-200 rounded-md'>
                        <Link to="service" className="inline-flex items-center px-4 py-2">Dịch vụ
                            <FaChevronDown className="h-4 w-4 pl-[6px]" />
                        </Link>
                        <ul className="hidden group-hover:block absolute bg-white rounded-lg z-10 border shadow-lg animate-up">
                            <li>
                                <Link to="standard-service" className="flex flex-col px-4 py-2 w-auto rounded-lg hover:bg-yellow-100">
                                    <span>Dịch vụ chuyển phát tiêu chuẩn</span>
                                    <i className="text-[#F00] font-bold">J&T Epress</i>
                                </Link>
                            </li>
                            <li>
                                <Link to="fast-service" className="flex flex-col px-4 py-2 w-auto rounded-lg hover:bg-yellow-100">
                                    <span>Dịch vụ nhanh</span>
                                    <i className="text-[#F00] font-bold">J&T Fast</i>
                                </Link>
                            </li>
                            <li>
                                <Link to="super-service" className="flex flex-col px-4 py-2 w-auto rounded-lg hover:bg-yellow-100">
                                    <span>Dịch vụ siêu giao hàng</span>
                                    <i className="text-[#F00] font-bold">J&T Fast</i>
                                </Link>
                            </li>
                            <li>
                                <Link to="fresh-service" className="flex flex-col px-4 py-2 w-auto rounded-lg hover:bg-yellow-100">
                                    <span>Dịch vụ Tươi sống</span>
                                    <i className="text-[#F00] font-bold">J&T Fresh</i>
                                </Link>
                            </li>

                        </ul>
                    </div>
                    <div className='group hover:bg-yellow-200 rounded-md'>
                        <Link to="career" className="inline-flex items-center px-4 py-2">Tuyển dụng
                            <FaChevronDown className="h-4 w-4 pl-[6px]" />
                        </Link>
                        <ul className="hidden group-hover:block absolute bg-white rounded-lg z-10 border shadow-lg animate-up">
                            <li><Link to="career" className="flex px-4 py-2 w-auto rounded-lg hover:bg-yellow-100 ">Cơ hội nghề nghiệp</Link></li>
                            <li><Link to="cuoc-song-jnt" className="flex px-4 py-2 w-auto rounded-lg hover:bg-yellow-100">Cuộc sống J&T Epress</Link></li>
                        </ul>
                    </div>
                    <div className='group hover:bg-yellow-200 rounded-md'>
                        <Link to="dang-ki-tu-van" className="inline-flex items-center px-4 py-2">Tư vấn
                            <FaChevronDown className="h-4 w-4 pl-[6px]" />
                        </Link>
                        <ul className="hidden group-hover:block absolute bg-white rounded-lg z-10 border shadow-lg animate-up">
                            <li><Link to="contact" className="flex px-4 py-2 w-auto rounded-lg hover:bg-yellow-100 ">Liên hệ</Link></li>
                            <li><Link to="dang-ki-tu-van" className="flex px-4 py-2 w-auto rounded-lg hover:bg-yellow-100">Đăng kí tư vấn</Link></li>
                        </ul>
                    </div>
                </ul>
                <div className="px-4 py-2 bg-[#F0B90B] border-2 border-button_color hover:bg-opacity-70 rounded-md text-sm ">
                    <a href="#" className="font-semibold">Đăng nhập</a>
                </div>
            </div >

            {/* Phần mobile menu */}
            <div className={isOpen ? 'lg:hidden fixed left-0 top-[65px] right-0 bottom-0 bg-slate-400/40 ' : 'hidden lg:hidden fixed left-0 top-[65px] right-0 bottom-0 bg-slate-400/40'}
                onClick={(removeMobileMenu)}
            >
                <Menu
                    className="h-full animate-menu_in "
                    style={{'width':'75%',}}
                    mode="inline"
                    openKeys={openKeys}
                    onOpenChange={onOpenChange}
                    items={items}
                />
            </div >
        </div >
    )
}
export default Header