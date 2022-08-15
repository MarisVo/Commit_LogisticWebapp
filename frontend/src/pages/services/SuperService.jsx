import React from "react";
import { Link } from "react-router-dom";
import { Carousel } from "antd";
import styled from "styled-components";
const CarouselWrapper = styled(Carousel)`
  > ul {
    margin-bottom: 30px;
  }
  > .slick-dots li button {
    width: 11px;
    height: 11px;
    border-radius: 100%;
  }
  > .slick-dots li.slick-active button {
    width: 11px;
    height: 11px;
    border-radius: 100%;
    background: #fc8080;
  }
`;
export default function SuperService() {
  return (
    <section id="layout-content">
      <div className="h-full lg:h-[610px] w-full relative pt-12">
        <img
          className="lg:absolute lg:right-[-150px] lg:top-10 w-full h-full lg:w-auto object-cover right-negative-margin"
          src="	https://jtexpress.vn/themes/jtexpress/assets/images/super-service.jpg"
          alt=""
        />
        <div className="container mx-auto h-full flex items-center">
          <div className="w-full h-auto lg:w-[540px] relative">
            <img
              src="https://jtexpress.vn/themes/jtexpress/assets/images/Map-world.png"
              className="w-full h-full object-cover hidden lg:block "
              alt=""
            />
            <div className="lg:absolute left-[50%] lg:top-[50%] lg:translate-x-[-50%] lg:translate-y-[-50%] lg:w-full lg:h-full lg:py-6 px-4 lg:px-0">
              <h5
                className="mt-6 lg:mt-0 text-[#f5c736] font-bold text-[24px] lg:text-[32px] aos-init"
                data-aos="fade-right"
              >
                Siêu dịch vụ giao hàng
              </h5>
              <span className="block my-6 lg:my-4 text-justify lg:text-left">
                Với những ưu điểm vượt trội và đẳng cấp trong thị trường vận
                chuyển, J&T Super hứa hẹn mang đến cho bạn và các doanh nghiệp
                sử dụng một siêu trải nghiệm giao hàng chưa từng có, đáp ứng
                cùng lúc 4 tiêu chí: Hỏa tốc, ưu tiên, bảo mật và đặc quyền.
              </span>
              <Link to="/tu-van/dang-ki-tu-van">
                <button className="flex lg:inline-flex justify-center items-center bg-[#e5a663] rounded-[2px] text-white w-full lg:w-[215px]  h-[56px] mt-8 lg:mt-4">
                  <img
                    src="https://jtexpress.vn/themes/jtexpress/assets/images/icon-detail-sevice.png"
                    alt=""
                  />
                  <span className="ml-2 font-bold">Đăng ký tư vấn</span>
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
              <img
                className="w-[48px] h-[48px] object-cover"
                src="	https://jtexpress.vn/themes/jtexpress/assets/images/lightning.png"
                alt=""
              />
              <div className="flex flex-col ml-4">
                <h5 className="mb-2 text-[#f5c736] text-[20px] font-bold">
                  Hỏa tốc
                </h5>
                <span className="text-justify aos-init">
                  Tốc độ vận chuyển khi sử dụng Siêu dịch vụ giao hàng - J&T
                  Super là hỏa tốc. Cụ thể,{" "}
                  <b>
                    {" "}
                    thời gian giao nhận hàng từ Bắc vào Nam được rút ngắn trong
                    ngày
                  </b>{" "}
                  . Ngoài ra, thời hiệu vận chuyển cũng được đảm bảo ổn định.
                </span>
              </div>
            </div>
            <div className="flex item-start">
              <img
                className="w-[48px] h-[48px] object-cover"
                src="https://jtexpress.vn/themes/jtexpress/assets/images/a-star.png"
                alt=""
              />
              <div className="flex flex-col ml-4">
                <h5 className="mb-2 text-[#f5c736] text-[20px]  font-bold">
                  Ưu tiên
                </h5>
                <span className="text-justify aos-init">
                  Mọi khiếu nại, thắc mắc của khách hàng xoay quanh việc sử dụng
                  Siêu dịch vụ giao hàng - J&T Super được{" "}
                  <b className="font-bold">
                    cam kết “giải quyết trong vòng 24 giờ
                  </b>{" "}
                  ” , đảm bảo nhanh chóng, hài lòng và phù hợp với mọi tiến độ
                  công việc.
                </span>
              </div>
            </div>
            <div className="flex item-start">
              <img
                className="w-[48px] h-[48px] object-cover"
                src="https://jtexpress.vn/themes/jtexpress/assets/images/shield.png"
                alt=""
              />
              <div className="flex flex-col ml-4">
                <h5 className="mb-2 text-[#f5c736] text-[20px]  font-bold">
                  Bảo mật
                </h5>
                <span className="text-justify aos-init">
                  Hàng hóa được đóng gói với bao bì chuyên dụng,
                  <b className="font-bold">
                    {" "}
                    cam kết an toàn và bảo mật tuyệt đối
                  </b>
                  , đặc biệt phù hợp khi gửi đi các giấy tờ cá nhân, tài liệu
                  mật, hàng hóa cao cấp, giá trị.
                </span>
              </div>
            </div>
            <div className="flex item-start">
              <img
                className="w-[48px] h-[48px] object-cover"
                src="https://jtexpress.vn/themes/jtexpress/assets/images/certificate.png"
                alt=""
              />
              <div className="flex flex-col ml-4">
                <h5 className="mb-2  text-[20px] text-[#f5c736]   font-bold ">
                  Đặc quyền
                </h5>
                <span
                  className="text-justify aos-init aos-animate"
                  data-aos="fade-right"
                  data-aos-delay={150}
                  data-aos-duration={800}
                >
                  Đội ngũ shipper được đào tạo đặc biệt với trang phục và bộ
                  nhận diện riêng. Ngoài ra,{" "}
                  <b className="font-bold">
                    đường dây nóng (hotline) mới cũng được thành lập
                  </b>
                  , phục vụ mục đích giải quyết khiếu nại và đặt hàng nhanh
                  chóng.
                </span>
              </div>
            </div>
          </div>
          <img
            src="https://jtexpress.vn/themes/jtexpress/assets/images/car-service-detail.png"
            className="w-full h-full object-cover rounded-[10px]"
            alt=""
          />
        </div>
      </div>
      <div className="lg:bg-[#F4F4F4] lg:pt-[63px] lg:pb-[58px]">
        <div className="container mx-auto mt-10 lg:mt-0 px-4 lg:px-0 mb-10 lg:mb-0 ">
          <h5
            className="font-extrabold text-3xl md:text-4xl text-[#161D25]  text-center aos-init"
            data-aos="fade-right"
          >
            Đối tượng phù hợp
          </h5>
          <span
            className="block text-center mt-5 mb-4 w-full lg:w-[578px] mx-auto aos-init text-base"
            data-aos="zoom-in"
          >
            Siêu dịch vụ giao hàng - J&T Super xoay quanh vận chuyển các mặt
            hàng có trọng lượng từ 0 - 10 kg với cụ thể đối tượng như sau:
          </span>
          <div className="w-[27px] h-[3px] bg-[#f5c736] mx-auto mb-8"></div>
          <div className="wrapper_objects_service grid grid-cols-3 gap-[20px]">
            <div class="h-[315px] lg:h-[323px] relative rounded-[10px] overflow-hidden col-span-3 md:col-span-1">
              <img
                src="https://jtexpress.vn/themes/jtexpress/assets/images/woman1_sq.png"
                class="w-full h-full object-cover"
                alt=""
              />
              <div class="object-service-detail absolute top-[60%] translate-y-[-60%] left-[10%] text-white w-[220px] lg:w-[320px]">
                <span class="block Montserrat-Bold mb-3 text-[20px]">
                  Chủ shop cao cấp
                </span>
                <span
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  class="aos-init"
                >
                  Cá nhân hoặc doanh nghiệp đang tham gia kinh doanh thương mại
                  điện tử những mặt hàng cao cấp, cần nâng cao trải nghiệm khách
                  hàng và muốn giữ chân tập khách hàng trung thành, tiềm năng
                </span>
              </div>
            </div>
            <div class="h-[315px] lg:h-[323px]  relative rounded-[10px] overflow-hidden col-span-3 md:col-span-1">
              <img
                src="https://jtexpress.vn/themes/jtexpress/assets/images/man_sq.png"
                class="w-full h-full object-cover"
                alt=""
              />
              <div class="object-service-detail absolute top-[60%] translate-y-[-60%] left-[10%] text-white w-[220px] lg:w-[320px]">
                <span class="block Montserrat-Bold mb-3 text-[20px]">
                  Cơ quan, doanh nghiệp
                </span>
                <span
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  class="aos-init"
                >
                  Các cơ quan, doanh nghiệp có nhu cầu vận chuyển các loại hồ
                  sơ, thư từ, chứng từ, hợp đồng, giấy tờ quan trọng, đặc biệt
                  quan tâm,... đến cá nhân hoặc doanh nghiệp khác
                </span>
              </div>
            </div>
            <div class="h-[315px] lg:h-[323px] relative rounded-[10px] overflow-hidden col-span-3 md:col-span-1">
              <img
                src="https://jtexpress.vn/themes/jtexpress/assets/images/woman_sq.png"
                class="w-full h-full object-cover"
                alt=""
              />
              <div class="object-service-detail absolute top-[60%] translate-y-[-60%] left-[10%] text-white w-[220px] lg:w-[320px]">
                <span class="block Montserrat-Bold mb-3 text-[20px]">
                  Cá nhân
                </span>
                <span
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  class="aos-init"
                >
                  Cá nhân có nhu cầu vận chuyển các mặt hàng quan trọng, đặc thù
                  và cấp bách (giấy tờ cá nhân, hàng hóa thiết yếu,...)
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-center mt-7 gap-x-[24px] gap-y-[12px]">
            <span className="block w-full lg:w-[215px] h-[56px] border border-[#fbd535]">
              <Link to="/tra-cuu/bang-gia">
                <button className="flex items-center text-[#f5c736] font-bold justify-center h-full w-full">
                  <ion-icon
                    name="search-outline"
                    role="img"
                    className="md hydrated"
                    aria-label="search outline"
                  />
                  <span className="ml-2  font-bold text-lg">Bảng giá</span>
                </button>
              </Link>
            </span>
            <span className="block w-full lg:w-[215px] md:w-[735px] sm:w-[610px] h-[56px] border border-[#fbd535]">
              <Link to="/tu-van/dang-ki-tu-van">
                <button className="flex items-center text-[#f5c736] font-bold justify-center h-full w-full">
                  <ion-icon
                    name="search-outline"
                    role="img"
                    className="md hydrated"
                    aria-label="search outline"
                  />
                  <span className="ml-2  font-bold text-lg">
                    Đăng ký tư vấn
                  </span>
                </button>
              </Link>
            </span>
            <span className="block w-full lg:w-[215px] h-[56px] border border-[#f5c736]">
              <Link to="/tra-cuu/buu-cuc">
                <button className="flex items-center text-[#f5c736] font-bold justify-center h-full w-full">
                  <ion-icon
                    name="search-outline"
                    role="img"
                    className="md hydrated"
                    aria-label="search outline"
                  />
                  <span className="ml-2  font-bold text-lg">
                    Bưu cục gần nhất
                  </span>
                </button>
              </Link>
            </span>
          </div>
        </div>
      </div>
      <div className="">
        <CarouselWrapper
          effect="fade"
          dots="true"
          autoplay
          autoplaySpeed={3500}
        >
          <div className="relative">
            <img
              src="https://jtexpress.vn/themes/jtexpress/assets/images/slider-tuyen-dung.png"
              className="w-full h-[380px] md:h-[500px] object-cover"
              alt="pic"
            />
            <div className="absolute top-0 bottom-0 left-0 right-0">
              <div className="flex items-center justify-center flex-col  mt-[60px] md:mt-[100px] ">
                <img
                  src="data:image/jpeg;base64,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"
                  alt=""
                  className="rounded-[50%]  w-[68px] h-[68px] preventselect"
                ></img>
                <div className="mx-8 sm:mx-[70px] md:mx-[130px] lg:mx-[320px] mt-[12px]">
                  <div className="text-white font-semibold text-lg text-center sm:text-xl md:text-2xl preventselect">
                    J&T luôn là sự lựa chọn an toàn đối với nhưng cửa hàng như
                    tôi. Tôi thật sự rất biết ơn J&T đã đồng hành và hỗ trợ tôi
                    suốt thời gian vừa qua
                  </div>
                </div>
                <h1 className="text-white font-bold text-lg mt-[14px] preventselect">
                  Lâm Ngọc Anh
                </h1>
                <div className="text-white text-base sm:text-lg preventselect">
                  Chủ tiệm cây cảnh Đồng Tháp
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://jtexpress.vn/themes/jtexpress/assets/images/slider-tuyen-dung.png"
              className="w-full h-[380px] md:h-[500px] object-cover"
              alt="pic"
            />
            <div className="absolute top-0 bottom-0 left-0 right-0">
              <div className="flex items-center justify-center flex-col  mt-[60px] md:mt-[100px] ">
                <img
                  src="https://vnn-imgs-f.vgcloud.vn/2019/01/11/10/mot-nha-khoa-hoc-nguoi-viet-nam-duoc-tap-chi-mit-vinh-danh.jpg"
                  alt=""
                  className="rounded-[50%]  w-[68px] h-[68px] preventselect"
                ></img>
                <div className="mx-8 sm:mx-[70px] md:mx-[130px] lg:mx-[320px] mt-[12px]">
                  <div className="text-white font-semibold text-lg text-center sm:text-xl md:text-2xl preventselect">
                    Nhờ có J&T giúp đỡ mà hàng hóa chúng tôi được vận chuyển tối
                    ưu nhất.Sự chậm trễ trong việc giao hàng gần như là không
                    có, khách hàng của tôi rất hài lòng với dịch vụ vận chuyển
                    của J&T
                  </div>
                </div>
                <h1 className="text-white font-bold text-lg mt-[14px] preventselect">
                  Thái Văn Lâm
                </h1>
                <div className="text-white text-base sm:text-lg preventselect">
                  Chủ tiệm công ty sản suất giấy in
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://jtexpress.vn/themes/jtexpress/assets/images/slider-tuyen-dung.png"
              className="w-full h-[380px] md:h-[500px] object-cover"
              alt="pic"
            />
            <div className="absolute top-0 bottom-0 left-0 right-0">
              <div className="flex items-center justify-center flex-col  mt-[60px] md:mt-[100px] ">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBsu37OT1leBeWKtf_lAEMaogPSFL2e_IOyw&usqp=CAU"
                  alt=""
                  className="rounded-[50%]  w-[68px] h-[68px] preventselect"
                ></img>
                <div className="mx-8 sm:mx-[70px] md:mx-[130px] lg:mx-[320px] mt-[12px]">
                  <div className="text-white font-semibold text-lg text-center sm:text-xl md:text-2xl preventselect">
                    Cửa hàng của chúng tôi luôn ưu tiên lựa chọn J&T để đảm bảo
                    nhận hàng nhanh chóng nhất có thể.Tôi luôn tin tưởng cách mà
                    J&T làm việc
                  </div>
                </div>
                <h1 className="text-white font-bold text-lg mt-[14px] preventselect">
                  Trần Văn Nghĩa
                </h1>
                <div className="text-white text-base sm:text-lg preventselect">
                  Chủ công ty sản xuất hàng tiêu dùng
                </div>
              </div>
            </div>
          </div>
        </CarouselWrapper>
      </div>
      <div className="h-[490px] lg:h-[765px] relative">
        <img
          className="w-full h-full object-cover"
          src="https://jtexpress.vn/themes/jtexpress/assets/images/service-detail-bg.png"
          alt=""
        />
        <div className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] w-full lg:w-[825px]">
          <h5 className="text-center text-[#161D25] text-[24px] lg:text-[36px] font-bold mb-4 lg:mb-6 mt-8 lg:mt-0">
            Video giới thiệu dịch vụ
          </h5>
          <span
            className="block text-center mb-8 lg:mb-10 w-full lg:w-[600px] mx-auto px-4 lg:px-0 aos-init"
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
          >
            J&amp;T Express là thương hiệu chuyển phát nhanh dựa trên sự phát
            triển của công nghệ và Internet. Chúng tôi sở hữu một mạng lưới rộng
            khắp nhằm hỗ trợ các hoạt động giao nhận hàng hóa nhanh chóng và
            tiện lợi.
          </span>
          <iframe
            className="w-full px-4 lg:px-0 lg:h-[425px] border-0 mb-8 md:h-[250px] sm:h-[250px]"
            src="https://www.youtube.com/embed/0zeoAeXgTHk?rel=0"
            title="YouTube video player"
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
