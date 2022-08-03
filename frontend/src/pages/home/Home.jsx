import React, { useState, useEffect } from "react";
import "antd/dist/antd.css";
import { Carousel, Tabs, Select } from "antd";
import { Link, useNavigate } from "react-router-dom";
import appStore from "../../assets/images/appStore.png";
import ggPlay from "../../assets/images/ggPlay.png";
import { getDistrictsByProvinceCode, getProvinces } from "sub-vn";
import { IoLocationOutline } from "react-icons/io5";
import { FiMap } from "react-icons/fi";
import axios from "axios";
import { END_POINT } from "../../utils/constant";
import { Fade, Zoom, Reveal } from "react-reveal";

const { TabPane } = Tabs;
const { Option } = Select;

const flags = [
  {
    id: 1,
    name: "Indonesia",
    url: "https://jtexpress.vn/themes/jtexpress/assets/images/nation1.png",
  },
  {
    id: 2,
    name: "Malaysia",
    url: "https://jtexpress.vn/themes/jtexpress/assets/images/nation2.jpg",
  },
  {
    id: 3,
    name: "Philippines",
    url: "https://jtexpress.vn/themes/jtexpress/assets/images/nation3.jpg",
  },
  {
    id: 4,
    name: "Thái Lan",
    url: "https://jtexpress.vn/themes/jtexpress/assets/images/nation4.jpg",
  },
  {
    id: 5,
    name: "Singapore",
    url: "https://jtexpress.vn/themes/jtexpress/assets/images/nation5.jpg",
  },
  {
    id: 6,
    name: "Campuchia",
    url: "https://jtexpress.vn/themes/jtexpress/assets/images/nation6.jpg",
  },
  {
    id: 7,
    name: "Mexico",
    url: "https://jtexpress.vn/themes/jtexpress/assets/images/mexico.png",
  },
  {
    id: 8,
    name: "Saudi Arabia",
    url: "https://jtexpress.vn/themes/jtexpress/assets/images/saudi.png",
  },
  {
    id: 9,
    name: "UAE",
    url: "https://jtexpress.vn/themes/jtexpress/assets/images/uae.png",
  },
];
const services = [
  {
    type: "j&T Epress",
    content: "Chuyển phát tiêu chuẩn",
    path: "chuyen-phat-tieu-chuan",
    images: {
      front:
        "https://jtexpress.vn/storage/app/uploads/public/627/5d6/892/6275d68928ffd381036854.png",
      back: "https://jtexpress.vn/storage/app/uploads/public/627/5d6/866/6275d6866e7c4229470575.png",
    },
  },
  {
    type: "j&T Fast",
    content: "Chuyển phát nhanh",
    path: "chuyen-phat-nhanh",
    images: {
      front:
        "https://jtexpress.vn/storage/app/uploads/public/618/4e6/37b/6184e637b45ca442099845.png",
      back: "https://jtexpress.vn/storage/app/uploads/public/627/5d6/866/6275d6866e7c4229470575.png",
    },
  },
  {
    type: "j&T Super",
    content: "Siêu dịch vụ giao hàng",
    path: "sieu-sich-vu-chuyen-phat",
    images: {
      front:
        "https://jtexpress.vn/storage/app/uploads/public/618/4e6/872/6184e6872c887801133904.png",
      back: "https://jtexpress.vn/storage/app/uploads/public/627/5d6/866/6275d6866e7c4229470575.png",
    },
  },
  {
    type: "j&T Fresh",
    content: "Giao hàng tươi sống",
    path: "chuyen-phat-hang-tuoi-song",
    images: {
      front:
        "https://jtexpress.vn/storage/app/uploads/public/618/4e8/077/6184e8077e894431352453.png",
      back: "https://jtexpress.vn/storage/app/uploads/public/627/5d6/866/6275d6866e7c4229470575.png",
    },
  },
];
const coops = [
  {
    id: 1,
    name: "Đỗ Thị Vân",
    job: "Chủ cửa hàng đồ gốm tại TP. Hà Nội",
    image:
      "https://jtexpress.vn/storage/app/uploads/public/628/374/58a/62837458a31d2598134718.jpg",
    comment:
      "Nhờ dịch vụ J&T International gửi đi hàng mẫu thành công, nhanh chóng mà vừa rồi tôi đã có được hợp đồng cung cấp sản phẩm cho một công ty ở Mỹ.",
  },
  {
    id: 2,
    name: "Dương Hoàng Minh",
    job: "Giám đốc công ty dệt may tại Bắc Ninh",
    image:
      "https://jtexpress.vn/storage/app/uploads/public/628/599/24b/62859924bde0b670971722.jpg",
    comment:
      "J&T International là một trợ thủ đắc lực trong quá trình xuất khẩu thành phẩm sang các nước Đông Nam Á của công ty tôi, đặc biệt là gửi hàng trễ chuyến",
  },
  {
    id: 3,
    name: "Trần Minh Trí",
    job: "Giám đốc công ty cà phê tại Buôn Ma Thuột",
    image:
      "https://jtexpress.vn/storage/app/uploads/public/628/374/c8b/628374c8ba994977079446.jpg",
    comment:
      "Gửi hàng mẫu cà phê đi nước ngoài không phải là chuyện dễ để cân đối thu chi, tối ưu chi phí cho công ty. May là công ty chúng tôi tìm được J&T International. Dịch vụ vượt mong đợi với giá cả phải chăng, lại còn hay có ưu đãi.",
  },
  {
    id: 4,
    name: "Vũ An Phương",
    job: "Chủ cửa hàng thiết bị gia dụng tại Hà Nội",
    image:
      "https://jtexpress.vn/storage/app/uploads/public/628/5b6/c28/6285b6c28930f965243715.jpg",
    comment:
      "Nhờ J&T Express mà shop của tôi được nhiều khách hàng đánh giá tốt về thời gian ship hàng. Giá thành tiết kiệm, đội ngũ shipper chuyên nghiệp hỗ trợ rất nhiều cho công việc kinh doanh của tôi.",
  },
  {
    id: 5,
    name: "Võ Ngọc Trâm",
    job: "Chủ shop quần áo tại Tp.HCM",
    image:
      "https://jtexpress.vn/storage/app/uploads/public/628/5ba/16a/6285ba16a1c9c707213911.jpg",
    comment:
      "Tôi đã từng hợp tác với nhiều đơn vị chuyển phát nhưng cuối cùng quyết định đồng hành cùng J&T Express. Phải nói rằng, hệ thống bưu cục đồng nhất về chất lượng khắp 63 tỉnh thành là điểm làm tôi hài lòng nhất.",
  },
];

const Home = () => {
  const navigate = useNavigate();
  const [defaultService, setDefaultService] = useState("vận đơn");
  function callback(dichVu) {
    setDefaultService(dichVu);
    navigate(`/track?type=${dichVu}`);
  }
  const [listProvinces, setListProvince] = useState([]);
  const [listDistricts, setListDistricts] = useState([]);
  const [currentProvince, setCurrentProvince] = useState(null);
  const [currentDistrict, setCurrentDistrict] = useState(null);
  const [person, setPerson] = useState(1);
  const [warehouses, setWarehouse] = useState([]);

  const searchWarehouse = (e) => {
    e.preventDefault()
    if (currentDistrict && currentProvince) {
      const find = async () => {
        try {
          const { data: response } = await axios.get(
            `${END_POINT}/warehouse`,
            {
              params: {
                province: currentProvince,
                district: currentDistrict,
              },
            }
          );
          setWarehouse(response.data);
        } catch (error) {}
      };
      find();
    } else {
      alert("Mời chọn đủ thông tin tra cứu");
    }
  };


    useEffect(() => {
        const dataProv = getProvinces()
        setListProvince(dataProv)
    }, [])
    const handleSelectProvince = (provinceSelected) => {
        const provinceCode = listProvinces.find(province => province.name === provinceSelected).code
        const dataDistricts = getDistrictsByProvinceCode(provinceCode)
        setCurrentProvince(provinceSelected)
        setCurrentDistrict(null)
        setListDistricts(dataDistricts)
    }
    const handleSelectDistrict = (districtSelected) => {
        setCurrentDistrict(districtSelected)
    }
    const showPerson = (id) => {
        const numberId = coops.find(coop => coop.id === id).id
        setPerson(numberId)
    }
    return (
        <div className="">
            <Carousel autoplay autoplaySpeed={2000} effect="fade">
                <div>
                    <a href="">
                        <img src="https://jtexpress.vn/storage/app/uploads/public/629/6bd/ca2/6296bdca297c7512128382.jpg"
                            className="w-full h-[200px] md:h-[300px] lg:h-[550px] object-cover"
                            alt="pic" />
                    </a>
                </div>
                <div>
                    <a href="">
                        <img src="https://jtexpress.vn/storage/app/uploads/public/629/6ce/a24/6296cea2443e2392069160.jpg"
                            className="w-full h-[200px] md:h-[300px] lg:h-[550px] object-cover"
                            alt="pic" />
                    </a>
                </div>
                <div>
                    <a href="">
                        <img src="https://jtexpress.vn/storage/app/uploads/public/629/5ed/e5b/6295ede5b2956262118810.jpg"
                            className="w-full h-[200px] md:h-[300px] lg:h-[550px] object-cover"
                            alt="pic" />
                    </a>
                </div>
            </Carousel>

            <div className="container flex items-center justify-center mx-auto w-full py-4 ">
                <Tabs defaultActiveKey="vận đơn" type="card" className="w-full shadow-xl p-3 rounded-xl ">
                    <TabPane tab={<div className="text-lg h-[30px] text-[#fcd535]">Tra cứu đơn hàng</div>} key="vận đơn" >
                        <div >
                            <form className="flex flex-col lg:flex-row ">
                                <input
                                    className="border border-gray-300 text-[#F0B90B] text-sm rounded focus:ring-yellow-500 focus:border-yellow-500 block w-full p-3 mb-2 lg:mb-0   "
                                    placeholder='Nhập mã vận đơn của bạn (cách nhau bới dấu phẩy), tối đa 10 vận đơn'
                                >
                                </input>
                                <button
                                    type='submit'
                                    className="text-white bg-yellow-500 hover:bg-yellow-400 focus:ring-4  focus:ring-red-500 font-medium rounded-lg text-lg w-full lg:w-44 lg:ml-2 px-5 py-2.5 text-center "
                                >Tìm kiếm
                                </button>
                            </form>
                        </div>
                    </TabPane>
                    <TabPane tab={<div className="text-lg h-[30px] text-[#fcd535]">Tra cứu bưu cục</div>} key="2">
                        <form className="flex flex-col items-center lg:flex-row gap-y-3">
                            <Select
                                showSearch
                                allowClear
                                className="w-full lg:w-2/5"
                                placeholder="Tỉnh/Thành Phố"
                                onClear={() => { setCurrentDistrict(null); setListDistricts([]) }}
                                onChange={value => handleSelectProvince(value)}
                            >
                                {listProvinces.map((city) => <Option key={city.code} value={city.name} >{city.name} </Option>)}

                            </Select>
                            <Select
                                showSearch
                                allowClear
                                className="w-full lg:w-2/5"
                                placeholder="Quận/Huyện"
                                onChange={value => handleSelectDistrict(value)}
                                value={currentDistrict}
                            >
                                {/* <Option value={null} >Quận/Huyện</Option> */}
                                {listDistricts.map((distr) => <Option key={distr.code} value={distr.name}>{distr.name}</Option>)}
                            </Select>
                            <button
                                onClick={searchWarehouse}
                                className="text-white bg-yellow-500 hover:bg-yellow-400 focus:ring-2  focus:ring-red-500 font-medium rounded-lg text-lg w-full lg:w-44 lg:ml-2 px-5 py-2.5 text-center "
                            >Tìm kiếm
                            </button>
                        </form>
                    </TabPane>
                    <TabPane tab={<Link to='tra-cuu/cuoc-van-chuyen' className="text-lg h-[30px] text-[#fcd535]" >Bảng giá</Link>} key="bảng giá">
                    </TabPane>
                </Tabs>
            </div>

            {/* Test searching */}

            <div className=' container mt-4 grid grid-cols-1 lg:grid-cols-2 mx-auto gap-y-3 gap-x-6'>
                {warehouses.map((warehouse, key) => (
                    <div key={key} className='flex flex-col bg-[#FFFF00] bg-opacity-70 p-4 rounded-xl gap-y-2'>
                        <div className='flex flex-row justify-between'>
                            <span className='text-xl font-extrabold text-red-700'>{warehouse.name}</span>
                            <a href={'https://www.google.com/maps?q=' + warehouse?.lon + warehouse?.lat} target="_blank" className='flex items-center text-red-600'>
                                <FiMap className="w-4 h-4 inline-block mr-2" />
                                <span className=' text-lg text-inherit font-semibold'>Tìm đường đi</span>
                            </a>
                        </div>
                        <div className='flex items-stretch'>
                            <IoLocationOutline className="w-4 h-4 inline-block mr-2" />
                            <span className='font-semibold'>{warehouse.street}</span>
                        </div>
                    </div>
                ))}



            </div>
            {/* Test searching */}

            <div className='flex flex-col justify-center items-center py-4 mt-6'>
                <span className='uppercase text-xl font-black'>mạng lưới phủ sóng các nước</span>
                <span className='text-sm'>J&T Express tự hào đã & đang mở rộng mạng lưới quốc tế để mang đến trải nghiệm tốt nhất</span>
            </div>
            <Fade bottom duration={1500}>
                <div className="grid grid-cols-3 text-white text-center gap-y-12 mb-9">
                    {flags.map((flag, key) => (
                        <div className='relative flex flex-col justify-start items-center' key={key}>
                            <img src={flag.url} alt={flag.name} className='peer w-12 h-12 shadow-md rounded-full  ' />
                            <span className="hidden lg:peer-hover:block  absolute top-14 px-5 py-1 rounded-md bg-slate-800">{flag.name}</span>
                        </div>
                    ))}
                </div>
            </Fade>

            <div className="flex flex-col lg:flex-row ">
                <div className="flex flex-col items-center justify-center text-justify gap-y-7 w-full lg:max-w-[500px] py-6 px-3 bg-[#F0B90B] rounded-r-xl">
                    <Fade left duration={1500}>
                        <span className="text-4xl font-black container text-white">VỀ CHÚNG TÔI</span>
                        <span className=" text-base container tracking-wide px-4 lg:px-6 w-full">
                            J&T Express là thương hiệu chuyển phát nhanh dựa trên sự phát triển của công nghệ và Internet.
                            Chúng tôi sở hữu mạng lưới rộng khắp nhằm hỗ trợ các hoạt động giao nhận hàng hóa nhanh chóng không chỉ ở nội thành
                            mà còn ở ngoại thành và các vùng xa của các tỉnh thành trong cả nước Việt Nam.
                        </span>
                    </Fade>

                </div>
                <div className="grid grid-cols-2 mx-auto gap-y-2 px-6 bg-yellow-100 rounded-l-2xl w-full">
                    <Fade right duration={2000}>
                        <div className="flex flex-col items-center text-center py-4">
                            <img src='https://jtexpress.vn/themes/jtexpress/assets/images/63tinh-thanh.png' alt="63-tinh-thanh-pic" />
                            <span className="text-xl font-extrabold">63 TỈNH THÀNH</span>
                            <span>Dịch vụ phủ sóng khắp 63 tỉnh thành</span>
                        </div>
                        <div className="flex flex-col items-center text-center py-4">
                            <img src='https://jtexpress.vn/themes/jtexpress/assets/images/1000xe.png' alt="vehicle-pic" />
                            <span className="text-xl font-extrabold">850 PHƯƠNG TIỆN</span>
                            <span>Sở hữu 850 xe tải vận chuyển hàng hóa</span>
                        </div>
                        <div className="flex flex-col items-center text-center py-4">
                            <img src='https://jtexpress.vn/themes/jtexpress/assets/images/25000nhan-vien.png' alt="staff-pic" />
                            <span className="text-xl font-extrabold">19.000+ NHÂN VIÊN</span>
                            <span>Hơn 19.000 nhân viên đang làm việc khắp các tỉnh thành</span>
                        </div>
                        <div className="flex flex-col items-center text-center py-4">
                            <img src='https://jtexpress.vn/themes/jtexpress/assets/images/1900bu-cuc.png' alt="office-pic" />
                            <span className="text-xl font-extrabold">1.900 BƯU CỤC</span>
                            <span>Hơn 1.900 bưu cục hoạt động trên toàn quốc</span>
                        </div>
                    </Fade>
                </div>
            </div>
            <div className="hidden lg:flex flex-row justify-around items-center container mx-auto my-12 ">
                {services.map((service, key) => (
                    <Link to={service.path} key={key}>
                        <div className='group shadow-2xl'>
                            <img src={service.images.front} alt={service.type} className="group-hover:hidden w-[174px]" />
                            <img src={service.images.back} alt={service.type} className='hidden group-hover:block w-[174px]' />
                        </div>
                        <div className='pt-4 flex flex-col'>
                            <span className="text-xl font-bold uppercase">{service.type} </span>
                            <span className='text-base'>{service.content}</span>
                        </div>
                    </Link>
                ))}



            </div>

            <div className="flex items-center justify-center my-6 container mx-auto">
                <Zoom duration={1000}>
                    <iframe
                        width="731" height="411"
                        src="https://www.youtube.com/embed/99RCEdAP_yk"
                        title="J&T Express tự hào ra mắt Trung tâm trung chuyển lớn nhất Việt Nam"
                        frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    >
                    </iframe>
                </Zoom>
            </div>
            <div className='relative h-[670px] lg:h-[462px]'>
                <img src="https://jtexpress.vn/themes/jtexpress/assets/images/bg-download-appnew.png" alt="" className=' h-full w-full object-cover' />
                <div className="absolute bottom-0 flex flex-col lg:flex-row justify-around items-center gap-y-3 w-full ">
                    <div className="flex flex-col text-center gap-y-5">
                        <span className='text-white text-4xl font-black'>TẢI ỨNG DỤNG</span>
                        <span className='text-white  text-base font-bold mt-[-12px]'>
                            Tải ngay App J&T Express - Giao Hàng Nhanh
                            <br />
                            Hưởng trọn bộ tính năng giao hàng chỉ với 1 chạm
                        </span>
                        <div className="flex flex-row justify-around">
                            <img src={appStore} alt="appstore" />
                            <img src={ggPlay} alt="ggplay" />
                        </div>
                    </div>
                    <div>
                        <img src="https://jtexpress.vn/themes/jtexpress/assets/images/phone-at-home.png" alt="" className='' />
                    </div>
                </div>
            </div>
            <div className='container mx-auto px-2 lg:px-0  my-10'>
                <span className="block text-2xl sm:text-4xl lg:text-4xl font-black my-6 lg:my-0">ĐỐI TÁC NÓI VỀ CHÚNG TÔI</span>
                <div className='grid grid-cols-1 lg:grid-cols-[60%_35%] gap-x-10 '>
                    <div className="flex flex-col justify-center items-center  ">
                        <span >
                            Từ khi đặt chân vào Việt Nam năm 2018, J&T Express luôn nỗ lực hết mình,
                            hoàn thành nghĩa vụ của một đối tác vận chuyển lớn trong khu vực,
                            mang lại dịch vụ tốt nhất cho tất cả khách hàng, nhận về nhiều lời khen và nhận xét tích cực.
                            Đây là sự tự hào và động lực để J&T Express tiếp tục giữ vững thành tích,
                            phát huy dịch vụ, nâng cao hơn nữa trải nghiệm khách hàng.
                        </span>
                        <div className='w-full py-4'>
                            <Carousel
                                autoplay
                                autoplaySpeed={2000}
                                focusOnSelect
                                draggable
                                slidesToShow={3}
                                arrows
                                responsive={[]}
                                className=' overflow-hidden'
                            >
                                {
                                    coops.map((coop) => (
                                        <div className='flex flex-col items-center text-center' key={coop.id} onClick={() => showPerson(coop.id)}>
                                            <div className='w-[100px] h-[100px] sm:w-[134px] sm:h-[134px]'>
                                                <img src={coop.image} className='h-full w-full rounded-full object-cover' alt='' />
                                            </div>
                                            <span className='font-bold'>{coop.name}</span>
                                            <span className='px-2 '>{coop.job}</span>
                                        </div>
                                    ))
                                }
                            </Carousel>
                        </div>
                    </div>
                    <div className='bg-[#F0B90B] rounded-xl shadow-2xl lg:min-h-[450px] overflow-hidden  '>
                        <div className="flex flex-col items-center px-4 py-8">
                            <div className='w-[134px] h-[134px]'>
                                <img src={coops[person - 1].image} className=' h-full w-full rounded-full object-cover' alt='' />
                            </div>
                            <span className='text-xl font-bold pt-4'>{coops[person - 1].name}</span>
                            <span>{coops[person - 1].job}</span>
                            <div className='mx-3 sm:mx-10 lg:mx-0'>
                                <span className='py-6 line-clamp-6 text-justify'>{coops[person - 1].comment}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container m-auto'>
                <Carousel
                    autoplay
                    autoplaySpeed={2000}
                    draggable
                    slidesToShow={5}
                    className='w-full'
                >
                    <img src='https://jtexpress.vn/storage/app/uploads/public/629/9c2/482/6299c2482b64c523421235.png' alt='' className='w-[186px] h-[100px] object-scale-down' />
                    <img src='https://jtexpress.vn/storage/app/uploads/public/629/9c6/0a6/6299c60a6662d497515747.png' alt='' className='w-[186px] h-[100px] object-scale-down' />
                    <img src='https://jtexpress.vn/storage/app/uploads/public/629/9e4/4a9/6299e44a9aae4450398133.png' alt='' className='w-[186px] h-[100px] object-scale-down' />
                    <img src='https://jtexpress.vn/storage/app/uploads/public/627/1fb/b53/6271fbb5318e6298080325.png' alt='' className='w-[186px] h-[100px] object-scale-down' />
                    <img src='https://jtexpress.vn/storage/app/uploads/public/629/9c1/536/6299c1536126c561166062.png' alt='' className='w-[186px] h-[100px] object-scale-down' />
                    <img src='https://jtexpress.vn/storage/app/uploads/public/627/1fb/d18/6271fbd18abfc963904367.png' alt='' className='w-[186px] h-[100px] object-scale-down' />
                </Carousel>
            </div>
        </div>
  );
};
export default Home;
