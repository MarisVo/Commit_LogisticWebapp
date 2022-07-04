import React from "react";
import { Link } from "react-router-dom";

export default function FreshService() {
  return (
    <section id="layout-content">
      <div className="h-full lg:h-[610px] w-full relative">
        <img
          className="lg:absolute lg:right-[0px] lg:top-10 w-full h-full lg:w-auto object-cover right-negative-margin"
          src="https://jtexpress.vn/themes/jtexpress/assets/images/fresh_service.png"
        />
        <div className="container mx-auto h-full flex items-center">
          <div className="w-full h-auto lg:w-[540px] relative">
            <img
              src="https://jtexpress.vn/themes/jtexpress/assets/images/Map-world.png"
              className="w-full h-full object-cover hidden lg:block "
              alt
            />
            <div className="lg:absolute left-[50%] lg:top-[50%] lg:translate-x-[-50%] lg:translate-y-[-50%] lg:w-full lg:h-full lg:py-6 px-4 lg:px-0">
              <h5
                className="mt-6 lg:mt-0 text-[#f5c736] font-bold text-[24px] lg:text-[32px] aos-init"
                data-aos="fade-right"
              >
                Giao hàng tươi sống
              </h5>
              <span className="block my-6 lg:my-4 text-justify lg:text-left">
                Với thời gian vận chuyển nhanh chóng, cách thức bảo quản, đóng
                gói chuyên nghiệp dành riêng cho mặt hàng tươi sống, J&T Fresh
                cam kết mang đến chất lượng dịch vụ tốt nhất, giao đến tay người
                nhận những gói hàng bảo đảm tính nguyên trạng và độ tươi ngon.
              </span>
              <Link to="/tu-van/dang-ki-tu-van">
                <button className="flex lg:inline-flex justify-center items-center bg-[#e5a663] rounded-[2px] text-white w-full lg:w-[215px]  h-[56px] mt-8 lg:mt-4">
                  <img
                    src="https://jtexpress.vn/themes/jtexpress/assets/images/icon-detail-sevice.png"
                    alt
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
                alt
              />
              <div className="flex flex-col ml-4">
                <h5 className="mb-2 text-[#f5c736] text-[20px] font-bold">
                  Thời hiệu nhanh chóng
                </h5>
                <span className="text-justify aos-init">
                  Thấu hiểu nỗi lo và sự quan tâm của khách hàng khi gửi đi mặt
                  hàng tươi sống (rau củ, trái cây,...), J&T Fresh cam kết tối
                  ưu thời gian vận chuyển, giúp hàng hóa giao tới tay người nhận
                  trong thời gian ngắn nhất.
                </span>
              </div>
            </div>
            <div className="flex item-start">
              <img
                className="w-[48px] h-[48px] object-cover"
                src="https://jtexpress.vn/themes/jtexpress/assets/images/box.png"
                alt
              />
              <div className="flex flex-col ml-4">
                <h5 className="mb-2 text-[#f5c736] text-[20px]  font-bold">
                  Đóng gói chuyên nghiệp
                </h5>
                <span className="text-justify aos-init">
                  Đối với mặt hàng tươi sống, J&T Fresh đặc biệt quan tâm và
                  dành sự chú trọng vào chất liệu và cách thức đóng gói. Mục
                  tiêu duy nhất là mang đến người nhận hàng hóa chuẩn nguyên
                  trạng, đảm bảo độ tươi ngon.
                </span>
              </div>
            </div>
            <div className="flex item-start">
              <img
                className="w-[48px] h-[48px] object-cover"
                src="https://jtexpress.vn/themes/jtexpress/assets/images/pepper.png"
                alt
              />
              <div className="flex flex-col ml-4">
                <h5 className="mb-2  text-[20px] text-[#f5c736]   font-bold ">
                  Ngoại quan cẩn thận
                </h5>
                <span
                  className="text-justify aos-init aos-animate"
                  data-aos="fade-right"
                  data-aos-delay={150}
                  data-aos-duration={800}
                >
                  Đối với hàng tươi sống, J&T Fresh luôn hỗ trợ khách hàng,
                  người vận chuyển nhận biết bằng cách dán “tem tươi sống". Bằng
                  cách này, ngoại quan hàng hóa được trang bị kỹ lưỡng, cẩn
                  trọng khi vận chuyển.
                </span>
              </div>
            </div>
            <div className="flex item-start">
              <img
                className="w-[48px] h-[48px] object-cover"
                src="https://jtexpress.vn/themes/jtexpress/assets/images/chili.png"
                alt
              />
              <div className="flex flex-col ml-4">
                <h5 className="mb-2 text-[#f5c736] text-[20px]  font-bold">
                  Bảo quản tuyệt vời
                </h5>
                <span className="text-justify aos-init">
                  Đối với mặt hàng tươi sống theo mùa có yêu cầu kiểm soát nhiệt
                  độ, hàng hóa được bảo quản trong nguồn lạnh thích hợp, có lỗ
                  thông khí, lớp xốp chèn giữa,... để mang đến chất lượng tốt
                  nhất cho người nhận.
                </span>
              </div>
            </div>
          </div>
          <img
            src="https://jtexpress.vn/themes/jtexpress/assets/images/car-service-detail.png"
            className="w-full h-full object-cover rounded-[10px]"
            alt
          />
        </div>
      </div>
      <div className="lg:bg-[#F4F4F4] lg:pt-[63px] lg:pb-[58px]">
        <div className="container mx-auto mt-10 lg:mt-0 px-4 lg:px-0 mb-10 lg:mb-0 ">
          <h5
            className="text-[#161D25] font-bold text-[24px] lg:text-[36px] text-center aos-init"
            data-aos="fade-right"
          >
            Đối tượng phù hợp
          </h5>
          <span
            className="block text-center mt-5 mb-4 w-full lg:w-[578px] mx-auto aos-init"
            data-aos="zoom-in"
          >
            Bất kỳ ai có nhu cầu vận chuyển các mặt hàng tươi sống (thịt, cá,
            nông sản, rau củ, trái cây,...), liên hệ ngay với J&T Express để
            được hưởng chất lượng vận chuyển tốt nhất và đảm bảo nhất.
          </span>
          <div className="w-[27px] h-[3px] bg-[#f5c736] mx-auto mb-8"></div>
          <div className="wrapper_objects_service grid grid-cols-2 gap-[20px]">
            <div class="h-[315px] lg:h-[244px]  relative rounded-[10px] overflow-hidden">
              <img
                src="https://jtexpress.vn/themes/jtexpress/assets/images/man3_sq.png"
                class="w-full h-full object-cover"
                alt=""
              />
              <div class="object-service-detail absolute top-[60%] translate-y-[-60%] left-[10%] text-white w-[170px] lg:w-[320px]">
                <span class="block Montserrat-Bold mb-3 text-[20px]">
                  Doanh nghiệp, Hợp tác xã
                </span>
                <span
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  class="aos-init"
                >
                  Các doanh nghiệp, hợp tác xã,... đang kinh doanh và có nhu cầu
                  vận chuyển hàng tươi sống (thịt, hải sản, nông sản, rau củ
                  quả,...) đến tay người tiêu dùng, doanh nghiệp khác.
                </span>
              </div>
            </div>
            <div class="h-[315px] lg:h-[244px] relative rounded-[10px] overflow-hidden">
              <img
                src="https://jtexpress.vn/themes/jtexpress/assets/images/woman_sq.png"
                class="w-full h-full object-cover"
                alt=""
              />
              <div class="object-service-detail absolute top-[60%] translate-y-[-60%] left-[10%] text-white w-[170px] lg:w-[320px]">
                <span class="block Montserrat-Bold mb-3 text-[20px]">
                  Chủ shop
                </span>
                <span
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  class="aos-init"
                >
                  Các chủ shop tham gia sàn thương mại điện tử, bán hàng online
                  là các mặt hàng tươi sống, nông sản mong muốn vận chuyển tới
                  tay khách hàng nhanh nhất và tốt nhất.
                </span>
              </div>
            </div>
            <div class="h-[315px] lg:h-[244px] relative rounded-[10px] overflow-hidden">
              <img
                src="https://jtexpress.vn/themes/jtexpress/assets/images/family_sq.png"
                class="w-full h-full object-cover"
                alt=""
              />
              <div class="object-service-detail absolute top-[60%] translate-y-[-60%] left-[10%] text-white w-[170px] lg:w-[320px]">
                <span class="block Montserrat-Bold mb-3 text-[20px]">
                  Hộ gia đình
                </span>
                <span
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  class="aos-init"
                >
                  Các hộ gia đình đang trực tiếp nuôi trồng các mặt hàng tươi
                  sống, cần tìm đơn vị chuyển phát nhanh để được hỗ trợ đóng gói
                  và vận chuyển đi xa, tăng nguồn thu nhập.
                </span>
              </div>
            </div>
            <div class="h-[315px] lg:h-[244px] relative rounded-[10px] overflow-hidden">
              <img
                src="https://jtexpress.vn/themes/jtexpress/assets/images/man1_sq.png"
                class="w-full h-full object-cover"
                alt=""
              />
              <div class="object-service-detail absolute top-[60%] translate-y-[-60%] left-[10%] text-white w-[170px] lg:w-[320px]">
                <span class="block Montserrat-Bold mb-3 text-[20px]">
                  Cá nhân
                </span>
                <span
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  class="aos-init"
                >
                  Cá nhân có nhu cầu vận chuyển các mặt hàng tươi sống đến người
                  thân, bạn bè,... đến khắp 63 tỉnh thành của cả nước đều có thể
                  liên hệ vận chuyển hàng tươi sống.
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-center mt-7 gap-x-[24px] gap-y-[12px]">
            <Link to="/tra-cuu/bang-gia">
              <span className="block w-full lg:w-[215px] h-[56px] border border-[#fbd535]">
                <button className="flex items-center text-[#f5c736] font-bold justify-center h-full w-full">
                  <ion-icon
                    name="search-outline"
                    role="img"
                    className="md hydrated"
                    aria-label="search outline"
                  />
                  <span className="ml-2">Bảng giá</span>
                </button>
              </span>
            </Link>
            <Link to="/tu-van/dang-ki-tu-van">
              <span className="block w-full lg:w-[215px] md:w-[735px] sm:w-[610px] h-[56px] border border-[#fbd535]">
                <button className="flex items-center text-[#f5c736] font-bold justify-center h-full w-full">
                  <ion-icon
                    name="search-outline"
                    role="img"
                    className="md hydrated"
                    aria-label="search outline"
                  />
                  <span className="ml-2">Đăng ký tư vấn</span>
                </button>
              </span>
            </Link>
            <Link to="/tra-cuu/buu-cuc">
              <span className="block w-full lg:w-[215px] h-[56px] border border-[#f5c736]">
                <button className="flex items-center text-[#f5c736] font-bold justify-center h-full w-full">
                  <ion-icon
                    name="search-outline"
                    role="img"
                    className="md hydrated"
                    aria-label="search outline"
                  />
                  <span className="ml-2">Bưu cục gần nhất</span>
                </button>
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className="h-[490px] lg:h-[765px] relative">
        <img
          className="w-full h-full object-cover"
          src="https://jtexpress.vn/themes/jtexpress/assets/images/service-detail-bg.png"
          alt
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
