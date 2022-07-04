import React from 'react'
import { Link } from 'react-router-dom'

export default function Service() {
    return (
        <section id="layout-content">
            <div id="fullpage" className="fullpage-wrapper h-full relative" >
                {/* 1 */}
                <section className="vertical-scrolling fp-section active fp-completely" data-fp-styles="null" style={{ height: 1000, paddingTop: 60 }}>
                    <div className="h-full w-full service-first relative">
                        <img src="https://jtexpress.vn/themes/jtexpress/assets/images/overplan.png" className="object-cover h-full w-full" alt />
                        <div className="text-center absolute size-in-sec-1 top-0 my1920:mt-[175px] left-1/2 translate-x-[-50%] translate-y-1/2 w-[800px] text-[#ffffff] ">
                            <h1 className="text-[36px] mb-[21px] font-bold text-[#f0b90c]">
                                Tổng quan dịch vụ
                            </h1>
                            <span className="inline-block leading-[50px] text-[20px] text-justify">
                                Sở hữu những ưu điểm vượt trội so với các dịch vụ chuyển phát nhanh hiện có trên thị trường, J&amp;T Express thấu hiểu mọi nhu cầu và mang đến cho khách hàng 5 dịch vụ với những tiện ích đặc biệt nhất.
                            </span>
                        </div>
                    </div>
                </section>
                {/* 2 */}
                <section className="vertical-scrolling grid grid-cols-2 overflow-hidden fp-section md:h-[400px]" data-fp-styles="null" style={{ height: 600, paddingTop: 0 }}>
                    <div className="block relative w-full h-full">
                        <div className="overflow-hidden w-full h-full relative service_standalone">
                            <img src="https://jtexpress.vn/themes/jtexpress/assets/images/service1_nam.png" class="object-contain absolute left-[0%] top-[-50%]  w-full" alt="" />
                        </div>
                    </div>
                    <div className="flex items-center container">
                        <div className="w-full relative h-full flex items-center wrapper-img-map">
                            <img className="absolute left-[37px] top-0 w-full h-full object-cover" src="https://jtexpress.vn/themes/jtexpress/assets/images/fake-map-star.png" alt />
                            <div className="service-size " style={{ width: 570 }}>
                                <h1 className="text-[36px] text-[#D60009] font-bold">
                                    Chuyển phát tiêu chuẩn
                                </h1>
                                <span className="inline-block mt-4 mb-10 up">
                                    <p>Dịch vụ chuyển phát tiêu chuẩn - J&amp;T Express là dịch vụ được thiết kế cho tất cả đối tượng khách hàng, đặc biệt là những ai đang tham gia kinh doanh thương mại điện tử, các chủ shop bán lẻ, khách hàng hay sử dụng các kênh mạng xã hội để bán hàng và mua sắm,...
                                        <br />Dựa trên những tiêu chuẩn về tốc độ giao hàng và các yếu tố khác (giá cả, tiện lợi,...), J&amp;T Express tự hào nâng cao hơn, mang lại tiêu chuẩn giao hàng vượt trội hơn khi so sánh với các dịch vụ khác cùng phân cấp trên thị trường với đặc tính <b className="font-boldItalic text-[#D60009]">3 tiết kiệm: tiết kiệm giá thành, tiết kiệm thời gian và tiết kiệm công sức.</b></p>
                                </span>
                                <div className="flex items-center">
                                    <Link to="/tra-cuu">
                                        <button className="bg-[#FF0000] rounded-[2px] font-bold text-white w-[180px] h-[56px] mr-2 flex items-center justify-center cursor-pointer">
                                            <img src="https://jtexpress.vn/themes/jtexpress/assets/images/list_book_icon.png" alt="list_book_icon" />
                                            <span className="ml-2">Bảng giá</span>
                                        </button>
                                    </Link>
                                    <Link to="/chuyen-phat-tieu-chuan">
                                        <button className="rounded-2 border border-[#FF0000] font-bold w-[180px] h-[56px] text-[#FF0000] ml-2 z-[10000]">
                                            Xem chi tiết
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* 3 */}
                <section className="vertical-scrolling grid grid-cols-2 overflow-hidden fp-section" data-fp-styles="null" style={{ height: 600, paddingTop: 60 }}>
                    <div className="flex items-center">
                        <div className="relative w-full h-full flex items-center wrapper-img-map-in-sec-3">
                            <img className="absolute left-[37px] top-0 w-full h-full object-cover" src="https://jtexpress.vn/themes/jtexpress/assets/images/fake-map-star.png" alt />
                            <div className="service-size ml-auto " style={{ width: 570 }}>
                                <h1 className="text-[36px] text-[#D60009] font-bold my-efff">
                                    Dịch vụ Nhanh
                                </h1>
                                <p><span className="inline-block mt-4 mb-6">Đáp ứng mọi nhu cầu vận chuyển hàng hoá (thương mại điện tử, đồ dùng cá nhân,...), J&amp;T Fast là dịch vụ Chuyển phát nhanh cam kết nâng cao tối đa trải nghiệm giao nhận hàng của bạn. Với độ phủ sóng rộng khắp 63 tỉnh thành, J&amp;T Fast mang đến bạn giải pháp vận chuyển 6 đảm bảo:&nbsp;</span></p>
                                <div>
                                    <div className="flex items-start mb-2"><span className="font-boldItalic text-[#D60009] italic ml-3">&nbsp;Đảm bảo <span className="text-black font-boldic">&nbsp;giao nhanh, đúng hẹn&nbsp;</span>&nbsp;</span></div>
                                    <div className="flex items-start mb-2"><span className="font-boldItalic text-[#D60009] italic ml-3">&nbsp;Đảm bảo <span className="text-black font-boldic">&nbsp;nhận giao cả hàng hóa trọng lượng lớn, cồng kềnh&nbsp;</span>&nbsp;</span></div>
                                    <div className="flex items-start mb-2"><span className="font-boldItalic text-[#D60009] italic ml-3">&nbsp;Đảm bảo <span className="text-black font-boldic">&nbsp;đặt giao hàng dễ dàng trên nhiều nền tảng (hotline, app, website,...)&nbsp;</span>&nbsp;</span></div>
                                    <div className="flex items-start mb-2"><span className="font-boldItalic text-[#D60009] italic ml-3">&nbsp;Đảm bảo <span className="text-black font-boldic">&nbsp;tra cứu tình trạng đơn hàng chuẩn xác&nbsp;</span>&nbsp;</span></div>
                                    <div className="flex items-start mb-2"><span className="font-boldItalic text-[#D60009] italic ml-3">&nbsp;Đảm bảo <span className="text-black font-boldic">&nbsp;đối soát tài chính thông minh&nbsp;</span>&nbsp;</span></div></div>
                                <div className="flex items-center mt-12">
                                    <Link to="/tra-cuu">
                                        <button className="bg-[#FF0000] rounded-[2px] font-bold text-white w-[180px] h-[56px] mr-2 flex items-center justify-center cursor-pointer">
                                            <img src="https://jtexpress.vn/themes/jtexpress/assets/images/list_book_icon.png" alt="list_book_icon" />
                                            <span className="ml-2">Bảng giá</span>
                                        </button>
                                    </Link>
                                    <Link to="/chuyen-phat-tieu-chuan">
                                        <button className="rounded-2 border border-[#FF0000] font-bold w-[180px] h-[56px] text-[#FF0000] ml-2 z-[10000]">
                                            Xem chi tiết
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="h-full w-full overflow-hidden img-in-sec-3">
                        <img src="https://jtexpress.vn/themes/jtexpress/assets/images/service3.png" class="h-full w-full object-fill" alt="" />
                    </div>
                    <div className="block relative w-full h-full">
                        <div className="overflow-hidden w-full h-full relative service_fastalone">
                            <img src="https://jtexpress.vn/themes/jtexpress/assets/images/service1_nam.png" class="object-contain absolute left-[-50%] top-[-50%]" alt="" />
                        </div>
                    </div>
                </section>
                {/* 4 */}
                <section className="vertical-scrolling grid grid-cols-2 overflow-hidden fp-section md:mt-[100px]" data-fp-styles="null" style={{ height: 600, paddingTop: 0 }}>
                    {/* <div class="h-full w-full overflow-hidden size-img-in-sec-4">
                        <img src="https://jtexpress.vn/themes/jtexpress/assets/images/service-super.png" class="object-fill w-full h-full " alt="sec2inservice" />
                    </div> */}
                    <div className="block relative w-full h-full">
                        <div className="overflow-hidden w-full h-full relative service_superalone">
                            <img src="https://jtexpress.vn/themes/jtexpress/assets/images/service-super.png" class="object-contain absolute left-[0%] top-[0%]" alt="" />
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div className="relative w-full">
                            <img className="absolute right-[25px] bottom-[-13px] fake-dot-in-sec-4 w-[166px] h-[173px] object-cover" src="https://jtexpress.vn/themes/jtexpress/assets/images/fake-dot.png" alt />
                            <div className="service-size relative  !w-[650px]" style={{ width: 570 }}>
                                <img src="https://jtexpress.vn/themes/jtexpress/assets/images/fake-dot-bot.png" className="hidden fake-dot-bot-in-sec-4 absolute  object-fill w-[139px] h-[144px] " alt="sec2inservice" />
                                <h1 className="text-[36px] text-[#D60009] font-bold">
                                    Siêu dịch vụ giao hàng
                                </h1>
                                <p><span className="inline-block mt-4 mb-4">J&amp;T Super dịch vụ chuyển phát cao cấp, biến việc chuyển phát thông thường của bạn trở nên đẳng cấp và đầy tính trải nghiệm. Nếu bạn đang tìm một dịch vụ vận chuyển đảm bảo các yếu tố hoả tốc, ổn định, bảo mật và hưởng nhiều đặc quyền, đây chắc chắn là siêu dịch vụ bạn không thể bỏ qua:</span></p>
                                <div>
                                    <div className="flex items-start mb-2"><span className="font-boldItalic text-[#D60009] italic ml-3">&nbsp;Hỏa tốc: <span className="text-black font-boldic">&nbsp;Trải nghiệm giao hàng hỏa tốc trong ngày từ Bắc ra Nam trở nên dễ dàng hơn bao giờ hết&nbsp;</span>&nbsp;</span></div>
                                    <div className="flex items-start mb-2"><span className="font-boldItalic text-[#D60009] italic ml-3">&nbsp;Bảo mật: <span className="text-black font-boldic">&nbsp;Bao bì chuyên dụng, đóng gói cẩn trọng, tuyệt đối an toàn&nbsp;</span>&nbsp;</span></div>
                                    <div className="flex items-start mb-2"><span className="font-boldItalic text-[#D60009] italic ml-3">&nbsp;Ưu tiên: <span className="text-black font-boldic">&nbsp;Ưu tiên giải quyết mọi khiếu nại trong 24 giờ&nbsp;</span>&nbsp;</span></div>
                                    <div className="flex items-start mb-2"><span className="font-boldItalic text-[#D60009] italic ml-3">&nbsp;Đặc quyền: <span className="text-black font-boldic">&nbsp;Đội ngũ shipper đào tạo chuyên nghiệp, đường dây nóng phục vụ riêng biệt và nhiều đặc quyền khác&nbsp;</span>&nbsp;</span></div></div>
                                <div className="flex items-center mt-10">
                                    <Link to="/tra-cuu">
                                        <button className="bg-[#FF0000] rounded-[2px] font-bold text-white w-[180px] h-[56px] mr-2 flex items-center justify-center cursor-pointer">
                                            <img src="https://jtexpress.vn/themes/jtexpress/assets/images/list_book_icon.png" alt="list_book_icon" />
                                            <span className="ml-2">Bảng giá</span>
                                        </button>
                                    </Link>
                                    <Link to="/chuyen-phat-tieu-chuan">
                                        <button className="rounded-2 border border-[#FF0000] font-bold w-[180px] h-[56px] text-[#FF0000] ml-2 z-[10000]">
                                            Xem chi tiết
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* 5 */}
                <section className="vertical-scrolling grid grid-cols-2 overflow-hidden fp-section md:p-0" data-fp-styles="null" style={{ height: 600, paddingTop: 97 }}>
                    <div className="flex items-center">
                        <div className="relative w-full h-full flex items-center">
                            <img className="absolute left-0 bottom-0 w-[555px] h-auto object-cover" src="https://jtexpress.vn/themes/jtexpress/assets/images/fake-food.png" alt />
                            <div className="service-size ml-auto relative  !w-[650px]" style={{ width: 570 }}>
                                <img src="https://jtexpress.vn/themes/jtexpress/assets/images/fake-dot-top.png" className="fake-dot-top-in-sec-6 hidden absolute left-[-28%] top-[-15%] object-fill w-[139px] h-[144px] " alt="sec2inservice" />
                                <h1 className="text-[36px] text-[#D60009] font-bold">
                                    Giao hàng tươi sống
                                </h1>
                                <p><span className="inline-block mt-4 mb-4">Nếu bạn đang cần tìm một dịch vụ chuyển phát các mặt hàng tươi sống (thịt, cá, thuỷ hải sản, rau củ quả tươi,...) với thời hiệu nhanh chóng, bảo quản cẩn thận, đảm bảo tính nguyên trạng của hàng hóa thì J&amp;T Fresh dành cho bạn.&nbsp;</span></p>
                                <div>
                                    <div className="flex items-start mb-2"><span className="font-boldItalic text-[#D60009] italic ml-3">&nbsp;Quy trình chuyên nghiệp: <span className="text-black font-boldic">&nbsp;Hàng hóa tươi sống cần được vận chuyển với quy trình đặc thù và chuyên nghiệp. J&amp;T Fresh “nâng niu" đóng gói, bảo quản cẩn trọng và cam kết về tính nguyên trạng&nbsp;</span>&nbsp;</span></div>
                                    <div className="flex items-start mb-2"><span className="font-boldItalic text-[#D60009] italic ml-3">&nbsp;Thời hiệu nhanh chóng: <span className="text-black font-boldic">&nbsp;Giao hàng tới người nhận trong thời gian sớm nhất, để hàng hóa luôn tươi và an toàn&nbsp;</span>&nbsp;</span></div>
                                    <div className="flex items-start mb-2"><span className="font-boldItalic text-[#D60009] italic ml-3">&nbsp;Chuyên môn hóa đóng gói: <span className="text-black font-boldic">&nbsp;Mỗi mặt hàng tươi sống có cách đóng gói và bảo quản khác nhau với da dạng dụng cụ thùng xốp, túi đá, giấy chống thấm, lưới xốp,... để luôn giữ trạng thái tươi ngon và vệ sinh.&nbsp;</span>&nbsp;</span></div></div>
                                <div className="flex items-center mt-10">
                                    <Link to="/tra-cuu">
                                        <button className="bg-[#FF0000] rounded-[2px] font-bold text-white w-[180px] h-[56px] mr-2 flex items-center justify-center cursor-pointer">
                                            <img src="https://jtexpress.vn/themes/jtexpress/assets/images/list_book_icon.png" alt="list_book_icon" />
                                            <span className="ml-2">Bảng giá</span>
                                        </button>
                                    </Link>
                                    <Link to="/chuyen-phat-tieu-chuan">
                                        <button className="rounded-2 border border-[#FF0000] font-bold w-[180px] h-[56px] text-[#FF0000] ml-2 z-[10000]">
                                            Xem chi tiết
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="h-full w-full overflow-hidden wrapper-img-in-sec6">
                        <img src="https://jtexpress.vn/themes/jtexpress/assets/images/service5.png" class="object-fill h-full w-full" alt="sec2inservice" />
                    </div>

                </section>
                {/* 6 */}
                <section className="vertical-scrolling fp-section" data-fp-styles="null" style={{ height: 639, paddingTop: 97 }}>
                    <div className="h-full w-full wrapper-section-7-in-service bg-[#E0E3E7] ">
                        <div className="set-height-sec-7 overflow-hidden">
                            <div className="relative h-full w-full">
                                <img className="w-full h-full object-fill" src="https://jtexpress.vn/themes/jtexpress/assets/images/bg-download-appnew.png" alt="overlay-dowload-app.png" />
                                <div className="absolute left-0 top-0 w-full h-full">
                                    <div className="flex items-center h-full">
                                        <div className="  container h-full  mx-auto flex items-center justify-between gap-x-[22px]">
                                            <div className="text-[#FFFFFF] flex flex-col items-center text-center flex-1">
                                                <div className="text-[16px] mb-[50px] lg:mb-4  flex flex-row items-end gap-x-[71px]">
                                                    <div>
                                                        <div className="flex flex-col justify-start text-left">
                                                            <div className="text-[30px] w-full my1920:text-[42px] font-bold my1920:w-[376px]">
                                                                Tải ứng dụng J&amp;T Express
                                                            </div>
                                                            <div className="flex flex-col">
                                                                <span className="block ">
                                                                    Tải ngay App J&amp;T Express - Giao Hàng Nhanh.
                                                                </span>
                                                                <span className="block">
                                                                    Hưởng trọn bộ tính năng giao hàng chỉ với 1 chạm
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center gap-x-[23px]">
                                                        <div className="flex flex-col items-center gap-y-[11px]">
                                                            <a className="w-[134px] h-[40px] my1920:w-[198px] my1920:h-[57px]" href="https://apps.apple.com/us/app/j-t-vnm-vip/id1474072185" target="_blank"> <img className="w-full h-full object-cover" src="https://jtexpress.vn/storage/app/uploads/public/627/5ca/259/6275ca259876b348340439.png" alt="store-apple" /></a>
                                                            <a className="w-[134px] h-[40px] my1920:w-[198px] my1920:h-[57px]" href="https://play.google.com/store/apps/details?id=com.msd.VIPyueNanClient&hl=vi&gl=US" target="_blank"><img className="w-full h-full object-cover" src="https://jtexpress.vn/storage/app/uploads/public/627/5ca/bd7/6275cabd7222d202962202.png" alt="ch-play" /></a>
                                                        </div>
                                                        <img src="https://chart.googleapis.com/chart?chs=500x500&cht=qr&chl=https://jtexpress.vn/vi/download&choe=UTF-8" title="Link to Download" className="h-[86px] rounded-[5px]-[86px] my1920:h-[129px] my1920:w-[129px]" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="overflow-hidden flex items-end h-full">
                                                <img className="h-[172px] my1920:h-[262px]" src="https://jtexpress.vn/themes/jtexpress/assets/images/img-in-sec-footer.png" alt="phone" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            </div>
        </section >

    )
}
