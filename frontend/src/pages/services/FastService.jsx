import React from 'react'
import { Link } from 'react-router-dom'

export default function FastService() {
    return (
        <section id="layout-content">
            <div className="h-full lg:h-[610px] w-full relative">
                <img className="lg:absolute lg:right-0 lg:top-10 w-full h-full lg:w-auto object-cover right-negative-margin" src="https://jtexpress.vn/themes/jtexpress/assets/images/PIC-IN-SEC-3.png" alt="https://jtexpress.vn/themes/jtexpress/assets/images/dich-vu-detail.png" />
                <div className="container mx-auto h-full flex items-center">
                    <div className="w-full h-auto lg:w-[540px] relative">
                        <img src="https://jtexpress.vn/themes/jtexpress/assets/images/Map-world.png" className="w-full h-full object-cover hidden lg:block " alt />
                        <div className="lg:absolute left-[50%] lg:top-[50%] lg:translate-x-[-50%] lg:translate-y-[-50%] lg:w-full lg:h-full lg:py-6 px-4 lg:px-0">
                            <h5 className="mt-6 lg:mt-0 text-[#f5c736] font-bold text-[24px] lg:text-[32px] aos-init" data-aos="fade-right">
                                Dịch vụ Nhanh</h5>
                            <span className="block my-6 lg:my-4 text-justify lg:text-left">
                                Nâng cấp tốc độ vận chuyển, mang đến trải nghiệm giao nhận hàng hóa nhanh và đảm bảo đúng thời gian cam kết, J&T Fast là Dịch vụ Nhanh, hướng đến việc giải quyết những mối lo cho người dùng (cá nhân, chủ shop) khi vận chuyển nhất là hàng hóa giá trị, đồ điện tử,... cần được đẩy nhanh tiến độ gửi hàng.
                            </span>
                            <Link to="/tu-van/dang-ki-tu-van">
                                <button className="flex lg:inline-flex justify-center items-center bg-[#e5a663] rounded-[2px] text-white w-full lg:w-[215px]  h-[56px] mt-8 lg:mt-4">
                                    <img src="https://jtexpress.vn/themes/jtexpress/assets/images/icon-detail-sevice.png" alt />
                                    <span className="ml-2 font-bold">
                                        Đăng ký tư vấn
                                    </span>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto lg:pt-[80px] lg:pb-[58px]">
                <div className="wrapper_description_service px-4 grid lg:px-0 md:grid-cols-1 sm:grid-cols-1  lg:grid-cols-[700px_minmax(400px,_1fr)_200px] gap-[100px]  ">
                    <div className="wrapper_description_service_detail mt-16 lg:mt-0 grid lg:grid-cols-2 gap-[30px] md:grid-cols-1 sm:grid-cols-1">
                        <div className="flex item-start">
                            <img className="w-[48px] h-[48px] object-cover" src="	https://jtexpress.vn/themes/jtexpress/assets/images/lightning.png" alt />
                            <div className="flex flex-col ml-4">
                                <h5 className="mb-2 text-[#f5c736] text-[20px] font-bold">
                                    Nhanh cấp tốc
                                </h5>
                                <span className="text-justify aos-init">
                                    Hàng hóa khi thực hiện vận chuyển với dịch vụ Nhanh - J&T Fast được xử lý nhanh chóng. Do đó, tốc độ giao hàng cũng tối ưu hơn, rút ngắn thời gian nhận hàng.
                                </span>
                            </div>
                        </div>
                        <div className="flex item-start">
                            <img className="w-[48px] h-[48px] object-cover" src="	https://jtexpress.vn/themes/jtexpress/assets/images/pins.png" alt />
                            <div className="flex flex-col ml-4">
                                <h5 className="mb-2 text-[#f5c736] text-[20px]  font-bold">
                                    Phủ sóng rộng khắp
                                </h5>
                                <span className="text-justify aos-init" >
                                    J&T Fast được ưu tiên và áp dụng đa dạng loại hình vận chuyển, kể cả đường hàng không. Do đó, 100% khách hàng nhận được hàng hóa nhanh chóng dù ở địa danh nào trên khắp 63 tỉnh thành.
                                </span>
                            </div>
                        </div>
                        <div className="flex item-start">
                            <img className="w-[48px] h-[48px] object-cover" src="https://jtexpress.vn/themes/jtexpress/assets/images/security.png" alt />
                            <div className="flex flex-col ml-4">
                                <h5 className="mb-2 text-[#f5c736] text-[20px]  font-bold">
                                    An toàn & Nguyên trạng
                                </h5>
                                <span className="text-justify aos-init" >
                                    Do đặc thù hàng hóa được khuyến khích sử dụng dịch vụ Nhanh - J&T Fast là hàng quan trọng, giá trị,... Do đó, bảo đảm được tính nguyên trạng và an toàn của hàng hóa là một trong những ưu tiên hàng đầu của J&T Fast.
                                </span>
                            </div>
                        </div>
                        <div>
                            <img className="w-auto h-auto object-cover hidden lg:block" src="https://jtexpress.vn/themes/jtexpress/assets/images/FAST-LOGO.png" alt />
                        </div>
                    </div>
                    <img src="https://jtexpress.vn/themes/jtexpress/assets/images/car-service-detail.png" className="w-full h-full object-cover rounded-[10px]" alt />
                </div>
            </div>
            <div className="lg:bg-[#F4F4F4] lg:pt-[63px] lg:pb-[58px]">
                <div className="container mx-auto mt-10 lg:mt-0 px-4 lg:px-0 mb-10 lg:mb-0 ">
                    <h5 className="text-[#161D25] font-bold text-[24px] lg:text-[36px] text-center aos-init" data-aos="fade-right">
                        Đối tượng phù hợp
                    </h5>
                    <span className="block text-center mt-5 mb-4 w-full lg:w-[578px] mx-auto aos-init" data-aos="zoom-in">
                        Dịch vụ Nhanh - J&T Fast dành cho tất cả mọi người có nhu cầu vận chuyển hàng hóa, nhất là những ai mong muốn trải nghiệm dịch vụ với tốc độ giao nhanh được nâng cấp kịp thời.
                    </span>
                    <div className="w-[27px] h-[3px] bg-[#f5c736] mx-auto mb-8">
                    </div>
                    <div className="wrapper_objects_service grid grid-cols-3 gap-[20px]">
                        <div class="h-[350px] lg:h-[375px] relative rounded-[10px] overflow-hidden">
                            <img src="https://jtexpress.vn/themes/jtexpress/assets/images/woman_sq.png" class="w-full h-full object-cover" alt="" />
                            <div class="object-service-detail absolute top-[60%] translate-y-[-60%] left-[10%] text-white w-[222px] lg:w-[320px]">
                                <span class="block Montserrat-Bold mb-3 text-[20px]">
                                    Cá nhân
                                </span>
                                <span data-aos="fade-up" data-aos-duration="1000" class="aos-init">
                                    Bất kỳ ai có nhu cầu vận chuyển hàng hóa, gửi hàng đến người thân, bạn bè, đồng nghiệp,... của mình đều có thể lựa chọn Dịch vụ Nhanh - J&amp;T Fast
                                </span>
                            </div>
                        </div>
                        <div class="h-[350px] lg:h-[375px] relative rounded-[10px] overflow-hidden">
                            <img src="https://jtexpress.vn/themes/jtexpress/assets/images/man1_sq.png" class="w-full h-full object-cover" alt="" />
                            <div class="object-service-detail absolute top-[60%] translate-y-[-60%] left-[10%] text-white w-[222px] lg:w-[320px]">
                                <span class="block Montserrat-Bold mb-3 text-[20px]">
                                    Chủ shop
                                </span>
                                <span data-aos="fade-up" data-aos-duration="1000" class="aos-init">
                                    Nếu bạn là chủ shop online, đang tham gia bán hàng là hàng thời trang cao cấp, đồ điện tử, mặt hàng giá trị,... và muốn nâng cao trải nghiệm khách hàng tại các nền tảng thương mại điện tử và mạng xã hội thì Dịch vụ Nhanh - J&amp;T Fast này lại càng không thể bỏ qua
                                </span>
                            </div>
                        </div>
                        <div class="h-[350px] lg:h-[375px] relative rounded-[10px] overflow-hidden">
                            <img src="https://jtexpress.vn/themes/jtexpress/assets/images/man_sq.png" class="w-full h-full object-cover" alt="" />
                            <div class="object-service-detail absolute top-[60%] translate-y-[-60%] left-[10%] text-white w-[222px] lg:w-[320px]">
                                <span class="block Montserrat-Bold mb-3 text-[20px]">
                                    Doanh nghiệp
                                </span>
                                <span data-aos="fade-up" data-aos-duration="1000" class="aos-init aos-animate">
                                    Khi có nhu cầu vận chuyển thư từ, chứng từ, giấy tờ,... quan trọng tại các địa phương khác, quý doanh nghiệp có thể sử dụng Dịch vụ Nhanh - J&amp;T Fast
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row items-center justify-center mt-7 gap-x-[24px] gap-y-[12px]">
                        <Link to="/tra-cuu/bang-gia">
                            <span className="block w-full lg:w-[215px] md:w-[735px] h-[56px] border border-[#fbd535]">
                                <button className="flex items-center text-[#f5c736] font-bold justify-center h-full w-full">
                                    <ion-icon name="search-outline" role="img" className="md hydrated" aria-label="search outline" />
                                    <span className="ml-2">
                                        Bảng giá
                                    </span>
                                </button>
                            </span>
                        </Link>
                        <Link to="/tu-van/dang-ki-tu-van">
                            <span className="block w-full lg:w-[215px] md:w-[735px] sm:w-[610px] h-[56px] border border-[#fbd535]">
                                <button className="flex items-center text-[#f5c736] font-bold justify-center h-full w-full">
                                    <ion-icon name="search-outline" role="img" className="md hydrated" aria-label="search outline" />
                                    <span className="ml-2">
                                        Đăng ký tư vấn
                                    </span>
                                </button>
                            </span>
                        </Link>
                        <Link to="/tra-cuu/buu-cuc">
                            <span className="block w-full lg:w-[215px] md:w-[735px] h-[56px] border border-[#f5c736]">
                                <button className="flex items-center text-[#f5c736] font-bold justify-center h-full w-full">
                                    <ion-icon name="search-outline" role="img" className="md hydrated" aria-label="search outline" />
                                    <span className="ml-2">
                                        Bưu cục gần nhất
                                    </span>
                                </button>
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="h-[490px] lg:h-[765px] relative">
                <img className="w-full h-full object-cover" src="https://jtexpress.vn/themes/jtexpress/assets/images/service-detail-bg.png" alt />
                <div className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] w-full lg:w-[825px]">
                    <h5 className="text-center text-[#161D25] text-[24px] lg:text-[36px] font-bold mb-4 lg:mb-6 mt-8 lg:mt-0">
                        Video giới thiệu dịch vụ
                    </h5>
                    <span className="block text-center mb-8 lg:mb-10 w-full lg:w-[600px] mx-auto px-4 lg:px-0 aos-init" data-aos="fade-up" data-aos-easing="ease-in-out">
                        J&amp;T Express là thương hiệu chuyển phát nhanh dựa trên sự phát triển của công nghệ và Internet. Chúng tôi sở hữu một mạng lưới rộng khắp nhằm hỗ trợ các hoạt động giao nhận hàng hóa nhanh chóng và tiện lợi.
                    </span>
                    <iframe className="w-full px-4 lg:px-0 lg:h-[425px] border-0 mb-8 md:h-[250px] sm:h-[250px]" src="https://www.youtube.com/embed/0zeoAeXgTHk?rel=0" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                </div>
            </div>
        </section>
    )
}
