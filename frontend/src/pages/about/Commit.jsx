
const apiDemo = [
    {
        url: 'https://jtexpress.vn/themes/jtexpress/assets/images/camket1.png',
        head: 'phục vụ văn minh',
        title: 'Lịch sự khi tiếp đón khách hàng, phục vụ văn minh, tuân thủ nghiêm ngặt đạo đức nghề nghiệp, phục vụ chu đáo, kinh doanh trung thực, không lừa dối khách hàng.'
    },
    {
        url: 'https://jtexpress.vn/themes/jtexpress/assets/images/camket2.png',
        head: 'phạm vi giao nhận',
        title: 'Phạm vi phục vụ thực tế phù hợp với phạm vi phục vụ mà Tổng Công ty quy định. Công ty khuyến khích phạm vi chuyển phát thực tế rộng hơn phạm vi quy định, nhưng tuyệt đối không cho phép nhỏ hơn phạm quy Tổng Công ty quy định.'
    },
    {
        url: 'https://jtexpress.vn/themes/jtexpress/assets/images/camket3.png',
        head: 'tra cứu hành trình online',
        title: 'Sau khi gửi hàng, nhân viên bưu cục lập tức quét mã vận đơn để khách hàng có thể theo dõi hàng hóa trên hệ thống của J&T.Đảm bảo tính xác thực về thông tin, trạng thái của hàng hóa được phản ánh bởi trang theo dõi thông tin tra cứu.\n Trang web theo dõi thông tin tra cứu hàng hóa: www.jtexpress.vn.'
    },
    {
        url: 'https://jtexpress.vn/themes/jtexpress/assets/images/camket4.png',
        head: 'customer service',
        title: 'Hotline: 1900 1088 (24/7) 1900 1088 (Tiếp nhận cuộc gọi 24/7).'
    },
    {
        url: 'https://jtexpress.vn/themes/jtexpress/assets/images/camket5.png',
        head: 'bồi thường',
        title: 'Xử lý khiếu nại, bồi thường theo Luật Bưu chính Việt Nam hiện hành. J&T có quyền điều chỉnh và thông báo cho khách hàng những cam kết và quy định trên theo Luật Bưu chính và những thông tư của Bộ TT&TT.'
    },
    {
        url: 'https://jtexpress.vn/themes/jtexpress/assets/images/camket6.png',
        head: 'thời gian làm việc',
        title: 'Thời gian của dịch vụ giao nhận hàng tại bưu cục: 8:00-20:00 từ thứ 2 đến chủ nhật.'
    },

]
function Commit() {
    return (
        <div className="pt-[80px] mb-10 container mx-auto">
            <a href="">
                <img src="https://jtexpress.vn/storage/app/uploads/public/626/a18/09b/626a1809b458c559757775.png" alt="banner" className='w-full h-auto object-cover' />
            </a>
            <div className="flex flex-col lg:flex-row mx-4 lg:mx-0 gap-x-4 my-10">
                <div className='flex-1'>
                    <img src="https://jtexpress.vn/themes/jtexpress/assets/images/dd-about-us.png" className='w-[76px] h-[63px] hidden lg:block' />
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-10 gap-x-4 mt-8 mb-4 rounded-2xl">
                        {apiDemo.map((api, key) => (
                            <div key={key} className="p-3 bg-primary even:bg-opacity-40 lg:min-h-[350px] rounded-xl">
                                <img src={api.url} className="mb-7" />
                                <div className="uppercase text-lg font-black my-3 text-blue-800 ">{api.head}</div>
                                <div>{api.title}</div>
                            </div>)
                        )}
                        
                    </div>
                    <div className='flex justify-end'>

                        <img src="https://jtexpress.vn/themes/jtexpress/assets/images/dd-about-us.png" className='w-[76px] h-[63px] hidden lg:block rotate-180' />
                    </div>
                </div>
                <a href="#" className=" flex  items-center lg:w-[240px]">
                    <img src="https://jtexpress.vn/storage/app/uploads/public/626/a18/377/626a183772daf645215340.png" className='w-full h-auto object-cover ' />
                </a>
            </div>
        </div>

    );
}

export default Commit;