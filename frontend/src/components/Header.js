import logoJT from '../assets/icons/logo-J&T.svg'
import { FaChevronDown, FaBars } from 'react-icons/fa'
import styled from 'styled-components'
import { Link } from "react-router-dom"

const Header = () => {
    const SubMenu = styled.li`
    &:hover ul {
        display:block
    }
    `
    const displayMenuMobile = () => {
        const menuMobile = document.querySelector('.mobile-menu')
        menuMobile.classList.remove('hidden')
    }
    const removeMobileMenu = (e) => {
        if (!e.target.closest('.cont')) {
            const myDropdown = document.querySelector(".mobile-menu");
            if (!myDropdown.classList.contains('hidden')) {
                myDropdown.classList.add('hidden');
            }
        }
    }
    return (
        <div className="fixed bg-white inset-x-0 h-[65px] z-10 ">
            <div className=" flex justify-between items-center h-full px-4 lg:px-0 container mx-auto text-sm ">
                <div className="bt lg:hidden"
                    onClick={displayMenuMobile}
                >
                    <FaBars className="w-7 h-7" />
                </div>
                <a className="">
                    <img src={logoJT} className="" />
                </a>
                <div className="inline-block invisible lg:hidden">Vi</div>

                <ul className="hidden lg:flex h-full items-center ">
                    <li >
                        <Link to="/" className=" flex items-center px-4 py-2 rounded-lg hover:bg-gray-200">Trang chủ</Link>
                    </li>
                    <SubMenu>
                        <Link to="about" className="inline-flex items-center px-4 py-2">Giới thiệu
                            <FaChevronDown className="h-4 w-4 pl-[6px]" />
                        </Link>
                        <ul className="hidden absolute bg-white rounded-lg z-10 border shadow-lg">
                            <li>
                                <Link to="about" className="flex px-4 py-2 w-auto rounded-lg hover:bg-[#F5F5F5]">Về Chúng tôi</Link>
                            </li>
                            <li>
                                <Link to="commit" className="flex px-4 py-2 w-auto rounded-lg hover:bg-[#F5F5F5]">Cam kết</Link>
                            </li>
                        </ul>
                    </SubMenu>
                    <SubMenu>
                        <Link to="tracking" className="inline-flex items-center px-4 py-2">Tra cứu
                            <FaChevronDown className="h-4 w-4 pl-[6px]" />
                        </Link>
                        <ul className="hidden absolute bg-white rounded-lg z-10 border shadow-lg">
                            <li><Link to="/" className="flex px-4 py-2 w-auto rounded-lg hover:bg-[#F5F5F5]">Cước vận chuyển</Link></li>
                            <li><Link to="/" className="flex px-4 py-2 w-auto rounded-lg hover:bg-[#F5F5F5]">Bưu cục gần đây</Link></li>
                            <li><Link to="/" className="flex px-4 py-2 w-auto rounded-lg hover:bg-[#F5F5F5]">Vận đơn</Link></li>
                            <li><Link to="/" className="flex px-4 py-2 w-auto rounded-lg hover:bg-[#F5F5F5]">Bảng giá</Link></li>
                            <li><Link to="/" className="flex px-4 py-2 w-auto rounded-lg hover:bg-[#F5F5F5]">Hàng cấm gửi</Link></li>
                        </ul>
                    </SubMenu>
                    <SubMenu>
                        <Link to="service" className="inline-flex items-center px-4 py-2">Dịch vụ
                            <FaChevronDown className="h-4 w-4 pl-[6px]" />
                        </Link>
                        <ul className="hidden absolute bg-white rounded-lg z-10 border shadow-lg">
                            <li>
                                <Link to="standard-service" className="flex flex-col px-4 py-2 w-auto rounded-lg hover:bg-[#F5F5F5]">
                                    <span>Dịch vụ chuyển phát tiêu chuẩn</span>
                                    <i className="text-[#F00] font-bold">J&T Epress</i>
                                </Link>
                            </li>
                            <li>
                                <Link to="fast-service" className="flex flex-col px-4 py-2 w-auto rounded-lg hover:bg-[#F5F5F5]">
                                    <span>Dịch vụ nhanh</span>
                                    <i className="text-[#F00] font-bold">J&T Fast</i>
                                </Link>
                            </li>
                            <li>
                                <Link to="super-service" className="flex flex-col px-4 py-2 w-auto rounded-lg hover:bg-[#F5F5F5]">
                                    <span>Dịch vụ siêu giao hàng</span>
                                    <i className="text-[#F00] font-bold">J&T Fast</i>
                                </Link>
                            </li>
                            <li>
                                <Link to="fresh-service" className="flex flex-col px-4 py-2 w-auto rounded-lg hover:bg-[#F5F5F5]">
                                    <span>Dịch vụ Tươi sống</span>
                                    <i className="text-[#F00] font-bold">J&T Fresh</i>
                                </Link>
                            </li>

                        </ul>
                    </SubMenu>
                    <SubMenu>
                        <Link to="career" className="inline-flex items-center px-4 py-2">Tuyển dụng
                            <FaChevronDown className="h-4 w-4 pl-[6px]" />
                        </Link>
                        <ul className="hidden absolute bg-white rounded-lg z-10 border shadow-lg">
                            <li><Link to="career" className="flex px-4 py-2 w-auto rounded-lg hover:bg-[#F5F5F5] ">Cơ hội nghề nghiệp</Link></li>
                            <li><Link to="cuoc-song-jnt" className="flex px-4 py-2 w-auto rounded-lg hover:bg-[#F5F5F5]">Cuộc sống J&T Epress</Link></li>
                        </ul>
                    </SubMenu>
                    <SubMenu>
                        <Link to="consultant" className="inline-flex items-center pl-4 py-2">Tư vấn
                            <FaChevronDown className="h-4 w-4 pl-[6px]" />
                        </Link>
                        <ul className="hidden absolute bg-white rounded-lg z-10 border shadow-lg">
                            <li><Link to="contact" className="flex px-4 py-2 w-auto rounded-lg hover:bg-[#F5F5F5] ">Liên hệ</Link></li>
                            <li><Link to="consultant" className="flex px-4 py-2 w-auto rounded-lg hover:bg-[#F5F5F5]">Đăng kí tư vấn</Link></li>
                        </ul>
                    </SubMenu>
                </ul>
            </div >
            {/* Phần mobile menu */}
            <div div className="mobile-menu hidden lg:hidden fixed left-0 top-0 right-0 bottom-0 bg-slate-400/40 "
                onClick={removeMobileMenu}
            >
                <div className="cont absolute flex flex-col left-0 top-0 bottom-0 w-3/5 bg-white border text-sm overflow-auto" >
                    <ul>
                        <li className="border-b">
                            <Link to="/" className="inline-flex  items-center px-4 py-2  ">Trang chủ</Link>
                        </li>
                        <li>
                            <div className="flex justify-between items-center border-b">
                                <Link to="about" className="inline-flex px-4 py-2 ">Giới thiệu</Link>
                                <FaChevronDown className=" h-3 w-3 mr-2 " />
                            </div>
                            <ul className="">
                                <li><Link to="about" className="flex pl-8 py-2 w-auto border-b">Về chúng tôi</Link></li>
                                <li><Link to="commit" className="flex pl-8 py-2 w-auto border-b">Cam kết</Link></li>
                            </ul>
                        </li>
                        <li>
                            <div className="flex justify-between items-center border-b">
                                <Link to="tracking" className="inline-flex px-4 py-2 ">Tra cứu</Link>
                                <FaChevronDown className=" h-3 w-3 mr-2 " />
                            </div>
                            <ul className=" ">
                                <li><Link to="/" className="flex pl-8 py-2 w-auto border-b">Cước vận chuyển</Link></li>
                                <li><Link to="/" className="flex pl-8 py-2 w-auto border-b">Bưu cục gần đây</Link></li>
                                <li><Link to="/" className="flex pl-8 py-2 w-auto border-b">Vận đơn</Link></li>
                                <li><Link to="/" className="flex pl-8 py-2 w-auto border-b">Bảng giá</Link></li>
                                <li><Link to="/" className="flex pl-8 py-2 w-auto border-b">Hàng cấm gửi</Link></li>
                            </ul>
                        </li>
                        <li>
                            <div className="flex justify-between items-center border-b">
                                <Link to="service" className="inline-flex px-4 py-2 ">Dịch vụ</Link>
                                <FaChevronDown className=" h-3 w-3 mr-2 " />
                            </div>
                            <ul className="">
                                <li>
                                    <Link to="standard" className="flex flex-col pl-8 py-2 w-auto border-b ">
                                        <span>Dịch vụ chuyển phát tiêu chuẩn</span>
                                        <i className="text-[#F00] font-bold">J&T Epress</i>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="fast-service" className="flex flex-col  pl-8 py-2 w-auto border-b ">
                                        <span>Dịch vụ nhanh</span>
                                        <i className="text-[#F00] font-bold">J&T Fast</i>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="super-service" className="flex flex-col pl-8 py-2 w-auto border-b ">
                                        <span>Dịch vụ siêu giao hàng</span>
                                        <i className="text-[#F00] font-bold">J&T Fast</i>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="fresh-service" className="flex flex-col pl-8 py-2 w-auto border-b ">
                                        <span>Dịch vụ Tươi sống</span>
                                        <i className="text-[#F00] font-bold">J&T Fresh</i>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <div className="flex justify-between items-center border-b">
                                <Link to="career" className="inline-flex px-4 py-2 ">Tuyển dụng</Link>
                                <FaChevronDown className=" h-3 w-3 mr-2 " />
                            </div>
                            <ul className=" ">
                                <li><Link to="career" className="flex pl-8 py-2 w-auto border-b">Cơ hội nghề nghiệp</Link></li>
                                <li><Link to="cuoc-song-jnt" className="flex pl-8 py-2 w-auto border-b">Cuộc sống J&T Express</Link></li>
                            </ul>
                        </li>
                        <li> <div className="flex justify-between items-center border-b">
                            <Link to="consultant" className="inline-flex px-4 py-2 ">Tư vấn</Link>
                            <FaChevronDown className=" h-3 w-3 mr-2 " />
                        </div>
                            <ul className=" ">
                                <li><Link to="contact" className="flex pl-8 py-2 w-auto border-b">Liên hệ</Link></li>
                                <li><Link to="consultant" className="flex pl-8 py-2 w-auto border-b">Đăng kí tư vấn</Link></li>
                            </ul></li>
                    </ul>
                </div>
            </div >
        </div >
    )
}
export default Header