function About() {
    console.log('about')
    return (
        <div className='pt-[65px]'>
            <a href="">
                <img src='https://jtexpress.vn/storage/app/uploads/public/628/598/69c/62859869c9723182554168.jpg' alt="banner" className='w-full h-[143px] lg:h-[550px] object-cover' />
            </a>
            <div className="flex flex-col xl:flex-row justify-between  container mx-auto my-4 lg:mt-[-210px]">
                <div >
                    <span className='block text-2xl text-center font-black my-6 py-4 lg:text-6xl lg:text-left lg:text-primary '>J&T EXPRESS</span>
                    <div className='text-justify w-full xl:w-[525px] border-4 border-border_color p-8 text-base rounded-2xl lg:bg-yellow-100 opacity-95'>
                        <span className="text-align">
                            J&T Express là thương hiệu chuyển phát nhanh dựa trên sự phát triển của công nghệ và Internet.
                            Chúng tôi sở hữu một mạng lưới rộng khắp nhằm hỗ trợ các hoạt động giao nhận hàng hóa nhanh chóng
                            không chỉ ở nội thành mà còn ở ngoại thành và các vùng xa của các tỉnh thành trong cả nước Việt Nam.
                            <br />
                            Đồng thời, hiện tại, J&T Express định hướng mở rộng phạm vi cung cấp các dịch vụ chuyển phát nhanh ra quốc tế.
                        </span>
                        <div className='w-20 h-[2px] bg-[#f0b90c] mt-8'></div>
                    </div>
                </div>
                <div className='flex flex-col lg:flex-row items-center justify-around mt-16 gap-8 font-extrabold '>
                    <div className="flex flex-col items-center text-center px-3 gap-y-3 ">
                        <img src='https://jtexpress.vn/themes/jtexpress/assets/images/1000xe.png' alt="vehicle-pic" className='shadow-xl rounded-full' />
                        <span className="text-3xl text-primary">850+</span>
                        <span x-data="{ show: false }" x-show="show" x-init="setTimeout(() => show = true, 3000)"></span>
                        <span className="text-xl uppercase">phương tiện</span>
                    </div>
                    <div className="flex flex-col items-center text-center px-3 gap-y-3">
                        <img src='https://jtexpress.vn/themes/jtexpress/assets/images/25000nhan-vien.png' alt="staff-pic" className='shadow-xl rounded-full' />
                        <span className="text-3xl text-primary">19.000+</span>
                        <span className="text-xl uppercase">nhân viên</span>
                    </div>
                    <div className="flex flex-col items-center text-center px-3 gap-y-3">
                        <img src='https://jtexpress.vn/themes/jtexpress/assets/images/1900bu-cuc.png' alt="office-pic" className='shadow-xl rounded-full' />
                        <span className="text-3xl text-primary">1.900</span>
                        <span className="text-xl uppercase">bưu cục</span>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-y-6 container px-3 lg:px-0 mx-auto">
                <div className='flex flex-col gap-y-6 xl:order-2'>
                    <img src="https://jtexpress.vn/themes/jtexpress/assets/images/dd-about-us.png" className='w-[76px] h-[63px]' />
                    <span className='text-2xl font-black uppercase'>Tấm nhìn</span>
                    <span className='text-base'>J&T Express là thương hiệu chuyển phát nhanh uy tín và bền vững tại Việt Nam.</span>
                    <div className='w-20 h-[2px] bg-primary'></div>
                    <span className='text-2xl font-black uppercase'>Gía trị cốt lõi</span>
                    <span className='text-base'>
                        <span className='font-bold'>Bổn phận, Chia sẻ, Phục vụ, Trách nhiệm, Hướng đến kết quả </span>
                        là năm giá trị cơ bản của J&T Express nhằm mang đến chất lượng dịch vụ giao hàng tốt nhất cho khách hàng.
                        <br />
                        Chúng tôi cam kết phục vụ một cách trung thực và có trách nhiệm đối với từng đơn hàng của khách hàng.
                    </span>
                </div>
                <div className="lg:w-[525px] mx-auto xl:order-1">
                    <img src="https://jtexpress.vn/storage/app/uploads/public/626/a0a/d78/626a0ad786e44084325377.png" className=' w-full h-full  object-cover' />
                </div >
            </div>
            <div className=' container mx-auto my-10 bg-history'>
                <div className="w-auto flex flex-col xl:flex-row items-center ">
                    <div className='xl:max-w-[400px]'>
                        <div className='text-3xl xl:text-5xl text-center xl:text-left font-black my-4 text-primary '>LỊCH SỬ</div>
                        <div className='p-8 mb-2 border-[3px] border-border_color rounded-2xl bg-yellow-100 shadow-2xl opacity-95 text-align'>
                            <span className='text-base font-bold text-align'>
                                Được thành lập vào năm 2015 tại Indonesia, J&T Express là công ty chuyển phát nhanh
                                dựa trên công nghệ thông tin và theo xu hướng của ngành thương mại điện tử.
                                <br />
                                Với sự phát triển không ngừng, hiện nay J&T Express đã có mặt tại 10 quốc gia bao gồm Indonesia,
                                Việt Nam, Malaysia, Thái Lan, Philippines, Singapore, Cambodia, UAE, Ả Rập Xê-út và Mexico.
                            </span>
                        </div>
                    </div>
                   
                    <div className=' scale-[0.55] sm:scale-100 flex flex-row xl:gap-x-3 justify-center xl:h-full mt-6 xl:mt-0'>
                        <div className='inline-flex flex-col items-center gap-y-1 '>
                            <span class=" relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff0000] opacity-75"></span>
                                <span className="inline-flex rounded-full h-3 w-3 bg-[#ff0000]"></span>
                            </span>
                            <div className='flex flex-col px-5 py-1 items-center bg-white text-center rounded-xl'>
                                <span className='uppercase font-bold tracking-widest'>mexico</span>
                                <span>02/2022</span>
                            </div>
                        </div>
                        <div className='inline-flex flex-col items-center gap-y-1 justify-center '>
                            <span class=" relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff0000] opacity-75"></span>
                                <span className="inline-flex rounded-full h-3 w-3 bg-[#ff0000]"></span>
                            </span>
                            <div className='flex flex-col px-5 py-1 items-center bg-white text-center rounded-xl'>
                                <span className='uppercase font-bold tracking-widest'>uae</span>
                                <span>01/2022</span>
                            </div>
                        </div>
                        <div className='flex flex-col items-center justify-around'>
                            <div className='inline-flex flex-col items-center gap-y-1  '>
                                <span class=" relative flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff0000] opacity-75"></span>
                                    <span className="inline-flex rounded-full h-3 w-3 bg-[#ff0000]"></span>
                                </span>
                                <div className='flex flex-col px-5 py-1 items-center bg-white text-center rounded-xl'>
                                    <span className='uppercase font-bold tracking-widest'>Saudi Arabia</span>
                                    <span>01/2022</span>
                                </div>
                            </div>
                            <div className='inline-flex flex-col items-center gap-y-1 '>
                                <span class=" relative flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff0000] opacity-75"></span>
                                    <span className="inline-flex rounded-full h-3 w-3 bg-[#ff0000]"></span>
                                </span>
                                <div className='flex flex-col px-5 py-1 items-center bg-white text-center rounded-xl'>
                                    <span className='uppercase font-bold tracking-widest'>Thailand</span>
                                    <span>03/2019</span>
                                </div>
                            </div>
                            <div className='inline-flex flex-col items-center gap-y-1 '>
                                <span class=" relative flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff0000] opacity-75"></span>
                                    <span className="inline-flex rounded-full h-3 w-3 bg-[#ff0000]"></span>
                                </span>
                                <div className='flex flex-col px-5 py-1 items-center bg-white text-center rounded-xl'>
                                    <span className='uppercase font-bold tracking-widest'>Cambodia</span>
                                    <span>10/2019</span>
                                </div>
                            </div>
                            <div className='inline-flex flex-col items-center gap-y-1 '>
                                <span class=" relative flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff0000] opacity-75"></span>
                                    <span className="inline-flex rounded-full h-3 w-3 bg-[#ff0000]"></span>
                                </span>
                                <div className='flex flex-col px-5 py-1 items-center bg-white text-center rounded-xl'>
                                    <span className='uppercase font-bold tracking-widest'>Malaysia</span>
                                    <span>08/2018</span>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col justify-center gap-y-12 '>
                        <div className='inline-flex flex-col items-center gap-y-1 '>
                                <span class=" relative flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff0000] opacity-75"></span>
                                    <span className="inline-flex rounded-full h-3 w-3 bg-[#ff0000]"></span>
                                </span>
                                <div className='flex flex-col px-5 py-1 items-center bg-white text-center rounded-xl'>
                                    <span className='uppercase font-bold tracking-widest'>VietNam</span>
                                    <span>23/07/2018</span>
                                </div>
                            </div>
                            <div className='inline-flex flex-col items-center gap-y-1 '>
                                <span class=" relative flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff0000] opacity-75"></span>
                                    <span className="inline-flex rounded-full h-3 w-3 bg-[#ff0000]"></span>
                                </span>
                                <div className='flex flex-col px-5 py-1 items-center bg-white text-center rounded-xl'>
                                    <span className='uppercase font-bold tracking-widest'>Singapore</span>
                                    <span>01/2022</span>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col justify-around'>
                            <div className='flex flex-col gap-y-2 text-center'>
                                <div className='text-xl p-3 bg-white rounded-3xl border-2 border-border_color hover:bg-slate-200'>Asia</div>
                                <span>International Route</span>
                            </div>
                            <div className='inline-flex flex-col items-center gap-y-1 '>
                                <span class=" relative flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff0000] opacity-75"></span>
                                    <span className="inline-flex rounded-full h-3 w-3 bg-[#ff0000]"></span>
                                </span>
                                <div className='flex flex-col px-5 py-1 items-center bg-white text-center rounded-xl'>
                                    <span className='uppercase font-bold tracking-widest'>Philippines</span>
                                    <span>03/2019</span>
                                </div>
                            </div>
                            <div className='inline-flex flex-col items-center gap-y-1 '>
                                <span class=" relative flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff0000] opacity-75"></span>
                                    <span className="inline-flex rounded-full h-3 w-3 bg-[#ff0000]"></span>
                                </span>
                                <div className='flex flex-col px-5 py-1 items-center bg-white text-center rounded-xl'>
                                    <span className='uppercase font-bold tracking-widest'>Indonesia</span>
                                    <span>08/2015</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className='w-full'>
                    <img src="https://jtexpress.vn/themes/jtexpress/assets/images/map-world-in-mobile.png" className='w-full h-[550px]' />
                </div> */}
            </div>
            <div className='relative w-full lg:px-0  mt-16'>
                <div className='lg:absolute flex flex-col mx-auto justify-center items-center gap-y-0 lg:gap-y-8 px-4 container lg:left-1/2 lg:-translate-x-1/2 w-full'>
                    <span className='text-2xl lg:text-4xl font-black text-center uppercase text-primary'>Mạng lưới phủ sóng</span>
                    <span className=' lg:text-base text-justify lg:w-4/5 p-3 shadow-2xl rounded-xl border-[3px] bg-yellow-200 border-border_color tracking-wide'>Có mặt tại thị trường Việt Nam vào tháng 7/2018, J&T Express sở hữu một mạng lưới rộng khắp 63 tỉnh thành nhằm hỗ trợ các hoạt động giao nhận hàng hóa nhanh chóng,
                        phủ sóng các thành phố lớn, khu vực vùng sâu vùng xa hay hải đảo trên toàn lãnh thổ Việt Nam.
                        Mạng lưới chúng tôi dựa trên nguyên tắc "Không loại trừ bất kỳ vị trí địa lý nào".
                    </span>
                </div>
                <img src='https://jtexpress.vn/themes/jtexpress/assets/images/mang-luoi-phu-song.jpg' className='w-full h-auto object-cover' />


            </div>
        </div>

    );
}

export default About;