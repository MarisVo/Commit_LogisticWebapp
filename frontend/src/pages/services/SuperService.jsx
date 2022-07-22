import React from 'react'
import { Link } from 'react-router-dom'

export default function SuperService() {
    return (
        <section id="layout-content">
            <div className="h-full lg:h-[610px] w-full relative">
                <img className="lg:absolute lg:right-[-150px] lg:top-10 w-full h-full lg:w-auto object-cover right-negative-margin" src="	https://jtexpress.vn/themes/jtexpress/assets/images/super-service.jpg" />
                <div className="container mx-auto h-full flex items-center">
                    <div className="w-full h-auto lg:w-[540px] relative">
                        <img src="https://jtexpress.vn/themes/jtexpress/assets/images/Map-world.png" className="w-full h-full object-cover hidden lg:block " alt />
                        <div className="lg:absolute left-[50%] lg:top-[50%] lg:translate-x-[-50%] lg:translate-y-[-50%] lg:w-full lg:h-full lg:py-6 px-4 lg:px-0">
                            <h5 className="mt-6 lg:mt-0 text-[#f5c736] font-bold text-[24px] lg:text-[32px] aos-init" data-aos="fade-right">
                                Siêu dịch vụ giao hàng</h5>
                            <span className="block my-6 lg:my-4 text-justify lg:text-left">
                                Với những ưu điểm vượt trội và đẳng cấp trong thị trường vận chuyển, J&T Super hứa hẹn mang đến cho bạn và các doanh nghiệp sử dụng một siêu trải nghiệm giao hàng chưa từng có, đáp ứng cùng lúc 4 tiêu chí: Hỏa tốc, ưu tiên, bảo mật và đặc quyền.
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
                                    Hỏa tốc
                                </h5>
                                <span className="text-justify aos-init">
                                    Tốc độ vận chuyển khi sử dụng Siêu dịch vụ giao hàng - J&T Super là hỏa tốc. Cụ thể, <b> thời gian giao nhận hàng từ Bắc vào Nam được rút ngắn trong ngày</b> . Ngoài ra, thời hiệu vận chuyển cũng được đảm bảo ổn định.
                                </span>
                            </div>
                        </div>
                        <div className="flex item-start">
                            <img className="w-[48px] h-[48px] object-cover" src="https://jtexpress.vn/themes/jtexpress/assets/images/a-star.png" alt />
                            <div className="flex flex-col ml-4">
                                <h5 className="mb-2 text-[#f5c736] text-[20px]  font-bold">
                                    Ưu tiên
                                </h5>
                                <span className="text-justify aos-init" >
                                    Mọi khiếu nại, thắc mắc của khách hàng xoay quanh việc sử dụng Siêu dịch vụ giao hàng - J&T Super được <b className='font-bold'>cam kết “giải quyết trong vòng 24 giờ</b> ” , đảm bảo nhanh chóng, hài lòng và phù hợp với mọi tiến độ công việc.
                                </span>
                            </div>
                        </div>
                        <div className="flex item-start">
                            <img className="w-[48px] h-[48px] object-cover" src="https://jtexpress.vn/themes/jtexpress/assets/images/shield.png" alt />
                            <div className="flex flex-col ml-4">
                                <h5 className="mb-2 text-[#f5c736] text-[20px]  font-bold">
                                    Bảo mật
                                </h5>
                                <span className="text-justify aos-init" >
                                    Hàng hóa được đóng gói với bao bì chuyên dụng,<b className='font-bold'> cam kết an toàn và bảo mật tuyệt đối</b>, đặc biệt phù hợp khi gửi đi các giấy tờ cá nhân, tài liệu mật, hàng hóa cao cấp, giá trị.
                                </span>
                            </div>
                        </div>
                        <div className="flex item-start">
                            <img className="w-[48px] h-[48px] object-cover" src="https://jtexpress.vn/themes/jtexpress/assets/images/certificate.png" alt />
                            <div className="flex flex-col ml-4">
                                <h5 className="mb-2  text-[20px] text-[#f5c736]   font-bold ">
                                    Đặc quyền
                                </h5>
                                <span className="text-justify aos-init aos-animate" data-aos="fade-right" data-aos-delay={150} data-aos-duration={800}>
                                    Đội ngũ shipper được đào tạo đặc biệt với trang phục và bộ nhận diện riêng. Ngoài ra, <b className="font-bold">đường dây nóng (hotline) mới cũng được thành lập</b>, phục vụ mục đích giải quyết khiếu nại và đặt hàng nhanh chóng.
                                </span>
                            </div>
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
                        Siêu dịch vụ giao hàng - J&T Super xoay quanh vận chuyển các mặt hàng có trọng lượng từ 0 - 10 kg với cụ thể đối tượng như sau:
                    </span>
                    <div className="w-[27px] h-[3px] bg-[#f5c736] mx-auto mb-8">
                    </div>
                    <div className="wrapper_objects_service grid grid-cols-3 gap-[20px]">
                        <div class="h-[315px] lg:h-[323px] relative rounded-[10px] overflow-hidden">
                            <img src="https://jtexpress.vn/themes/jtexpress/assets/images/woman1_sq.png" class="w-full h-full object-cover" alt="" />
                            <div class="object-service-detail absolute top-[60%] translate-y-[-60%] left-[10%] text-white w-[220px] lg:w-[320px]">
                                <span class="block Montserrat-Bold mb-3 text-[20px]">
                                    Chủ shop cao cấp
                                </span>
                                <span data-aos="fade-up" data-aos-duration="1000" class="aos-init">
                                    Cá nhân hoặc doanh nghiệp đang tham gia kinh doanh thương mại điện tử những mặt hàng cao cấp, cần nâng cao trải nghiệm khách hàng và muốn giữ chân tập khách hàng trung thành, tiềm năng
                                </span>
                            </div>
                        </div>
                        <div class="h-[315px] lg:h-[323px]  relative rounded-[10px] overflow-hidden">
                            <img src="https://jtexpress.vn/themes/jtexpress/assets/images/man_sq.png" class="w-full h-full object-cover" alt="" />
                            <div class="object-service-detail absolute top-[60%] translate-y-[-60%] left-[10%] text-white w-[220px] lg:w-[320px]">
                                <span class="block Montserrat-Bold mb-3 text-[20px]">
                                    Cơ quan, doanh nghiệp
                                </span>
                                <span data-aos="fade-up" data-aos-duration="1000" class="aos-init">
                                    Các cơ quan, doanh nghiệp có nhu cầu vận chuyển các loại hồ sơ, thư từ, chứng từ, hợp đồng, giấy tờ quan trọng, đặc biệt quan tâm,... đến cá nhân hoặc doanh nghiệp khác
                                </span>
                            </div>
                        </div>
                        <div class="h-[315px] lg:h-[323px] relative rounded-[10px] overflow-hidden">
                            <img src="https://jtexpress.vn/themes/jtexpress/assets/images/woman_sq.png" class="w-full h-full object-cover" alt="" />
                                <div class="object-service-detail absolute top-[60%] translate-y-[-60%] left-[10%] text-white w-[220px] lg:w-[320px]">
                                    <span class="block Montserrat-Bold mb-3 text-[20px]">
                                        Cá nhân
                                    </span>
                                    <span data-aos="fade-up" data-aos-duration="1000" class="aos-init">
                                        Cá nhân có nhu cầu vận chuyển các mặt hàng quan trọng, đặc thù và cấp bách (giấy tờ cá nhân, hàng hóa thiết yếu,...)
                                    </span>
                                </div>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row items-center justify-center mt-7 gap-x-[24px] gap-y-[12px]">
                        <Link to="/tra-cuu/bang-gia">
                            <span className="block w-full lg:w-[215px] h-[56px] border border-[#fbd535]">
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
                            <span className="block w-full lg:w-[215px] h-[56px] border border-[#f5c736]">
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
